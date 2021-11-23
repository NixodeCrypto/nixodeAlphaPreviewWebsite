import { Request, Response } from 'express';
import Ticker from '@/models/Ticker';
import redis from '@/services/redis';

export interface IGetAllCoins extends Request {
  query: {
    page: string;
  };
}

const getAllCoins = (req: IGetAllCoins, res: Response) => {
  const idxPage =
    parseFloat(req.query.page) > 0 ? parseFloat(req.query.page) : 1;

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
          .skip((idxPage as number) * 50)
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
