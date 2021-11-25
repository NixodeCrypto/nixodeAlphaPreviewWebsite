import { Request, Response } from 'express';
import Ticker from '@/models/Ticker';
import redis from '@/services/redis';

export interface IGetAllCoins extends Request {
  query: {
    page: string;
    sortBy: string;
  };
}

const getAllCoins = async (req: IGetAllCoins, res: Response) => {
  const idxPage = Math.max(parseFloat(req.query.page), 0);

  if (req.query.sortBy) {
    // e.g. price-decending or market
    const keyValPair = req.query.sortBy.split('-');
    const orderRange = keyValPair[1] === 'ascending' ? 1 : -1;

    const cryptoData = await Ticker.find()
      .sort({ [keyValPair[0]]: orderRange })
      .skip((idxPage - 1) * 50)
      .limit(50);
    const documentCount = await Ticker.estimatedDocumentCount();
    const totalPageCount = Math.ceil(documentCount / 50);
    const responseData = {
      coins: cryptoData,
      totalPageCount: totalPageCount,
    };

    return res.status(200).json({
      status: 0,
      data: responseData,
    });
  }

  redis.get(`allCoins-${idxPage}`, async (e, data) => {
    if (e) console.log(e);
    if (data) {
      return res.status(200).json({
        status: 0,
        data: JSON.parse(data),
      });
    } else {
      try {
        const cryptoData = await Ticker.find()
          .sort({ rank: 1 })
          .skip((idxPage - 1) * 50)
          .limit(50);
        const documentCount = await Ticker.estimatedDocumentCount();
        const totalPageCount = Math.ceil(documentCount / 50);
        const responseData = {
          coins: cryptoData,
          totalPageCount: totalPageCount,
        };

        redis.setex(`allCoins-${idxPage}`, 60, JSON.stringify(responseData));

        return res.status(200).json({
          status: 0,
          data: responseData,
        });
      } catch (err) {
        return res.status(500).send(err);
      }
    }
  });
};

export default { getAllCoins };
