import { Response, NextFunction } from 'express';
import redis from '@/services/redis';
import { InternalServer } from '@/utils/error';
import Ticker from '@/models/Ticker';
import { TICKER_DATA_TTL } from '@/constants/TTL';

export interface IGetAllCoins extends Request {
  query: {
    page: string;
    sortBy: string;
  };
}

const getAllCoins = async (
  req: IGetAllCoins,
  res: Response,
  next: NextFunction,
) => {
  // pagination for mongoDB
  const idxPage = Math.max(parseFloat(req.query.page) || 1, 1);

  // maximum document count of Ticker model
  const documentCount = await Ticker.estimatedDocumentCount();

  // get maximum amount of pages
  const totalPageCount = Math.ceil(documentCount / 50);

  const composePaginatedData = (
    cryptoData: Record<string, any>,
  ): Record<string, any> => ({
    coins: cryptoData,
    page: idxPage,
    totalPageCount: totalPageCount,
  });

  // sortBy operation
  if (req.query.sortBy) {
    redis.get(
      `allCoins-sb-${req.query.sortBy}-${idxPage}`,
      async (err, data) => {
        if (err) return next(InternalServer);

        if (data) {
          const parsedData = JSON.parse(data);
          return res.status(200).json(parsedData);
        }

        // e.g. quotes.USD.price-decending or rank-ascending
        const keyValPair = req.query.sortBy.split('-');
        const orderRange = keyValPair[1] === 'ascending' ? 1 : -1;

        const cryptoData = await Ticker.find()
          .sort({ [keyValPair[0]]: orderRange })
          .skip((idxPage - 1) * 50)
          .limit(50);

        const responseData = composePaginatedData(cryptoData);

        // object to string transformation
        const stringData = JSON.stringify(responseData);

        // saving in cache as stringified data
        redis.setex(
          `allCoins-sb-${req.query.sortBy}-${idxPage}`,
          TICKER_DATA_TTL.s,
          stringData,
        );

        return res.status(200).json(responseData);
      },
    );
  } else {
    // check cache for standard rank sorted query
    redis.get(`allCoins-${idxPage}`, async (err, data) => {
      if (err) return next(InternalServer);

      if (data) {
        // string to object transformation
        const parsedData = JSON.parse(data);
        return res.status(200).json(parsedData);
      }

      const cryptoData = await Ticker.find()
        .sort({ rank: 1 })
        .skip((idxPage - 1) * 50)
        .limit(50);

      const responseData = composePaginatedData(cryptoData);

      // object to string transformation
      const stringData = JSON.stringify(responseData);

      // saving in cache as stringified data
      redis.setex(`allCoins-${idxPage}`, TICKER_DATA_TTL.s, stringData);

      return res.status(200).json(responseData);
    });
  }
};

export default { getAllCoins };
