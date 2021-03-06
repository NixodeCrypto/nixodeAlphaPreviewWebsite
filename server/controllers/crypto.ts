import { Response, NextFunction, Request, RequestHandler } from 'express';
import redis from '@/services/redis';
import { InternalServer } from '@/utils/error';
import Ticker from '@/models/Ticker';
import GlobalMarket from '@/models/GlobalMarket';
import { TICKER_DATA_TTL, GLOBAL_MARKET_TTL } from '@/constants/TTL';

interface AllCoinsRequest extends Request {
  query: {
    page: string;
    sortBy: string;
    rankLimit: string;
  };
}

const getAllCoins = async (
  req: AllCoinsRequest,
  res: Response,
  next: NextFunction,
) => {
  // how many coins per page
  const pageCount = 25;
  // pagination for mongoDB
  const idxPage = Math.max(parseFloat(req.query.page) || 1, 1);

  // maximum document count of Ticker model
  const documentCount = await Ticker.estimatedDocumentCount();

  // get maximum amount of pages
  const totalPageCount = req.query.rankLimit
    ? Math.ceil(parseInt(req.query.rankLimit, 10) / pageCount)
    : Math.ceil(documentCount / pageCount);
  console.log(totalPageCount);

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

        let cryptoData: Record<string, any>;

        if (req.query.rankLimit) {
          cryptoData = await Ticker.aggregate(
            [
              { $limit: parseInt(req.query.rankLimit, 10) },
              { $sort: { [keyValPair[0]]: orderRange } },
              { $skip: (idxPage - 1) * pageCount },
              { $limit: pageCount },
            ],
            { allowDiskUse: true },
          );
        } else {
          cryptoData = await Ticker.aggregate(
            [
              { $sort: { [keyValPair[0]]: orderRange } },
              { $skip: (idxPage - 1) * pageCount },
              { $limit: pageCount },
            ],
            { allowDiskUse: true },
          );
        }

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

      let cryptoData: Record<string, any>;

      if (req.query.rankLimit) {
        cryptoData = await Ticker.aggregate(
          [
            { $limit: parseInt(req.query.rankLimit, 10) },
            { $sort: { rank: 1 } },
            { $skip: (idxPage - 1) * pageCount },
            { $limit: pageCount },
          ],
          { allowDiskUse: true },
        );
      } else {
        cryptoData = await Ticker.aggregate(
          [
            { $sort: { rank: 1 } },
            { $skip: (idxPage - 1) * pageCount },
            { $limit: pageCount },
          ],
          { allowDiskUse: true },
        );
      }

      const responseData = composePaginatedData(cryptoData);

      // object to string transformation
      const stringData = JSON.stringify(responseData);

      // saving in cache as stringified data
      redis.setex(`allCoins-${idxPage}`, TICKER_DATA_TTL.s, stringData);

      return res.status(200).json(responseData);
    });
  }
};

const getPreviewCoins: RequestHandler = (_, res, next) => {
  // check cache for preview coins
  redis.get('previewCoins', async (err, data) => {
    if (err) return next(InternalServer);

    if (data) {
      const parsedData = JSON.parse(data);
      return res.status(200).json(parsedData);
    }

    // specific hand picked coins that are always popular in the market
    const cryptoData = await Ticker.find({
      id: {
        $in: [
          'btc-bitcoin',
          'eth-ethereum',
          'hex-hex',
          'usdt-tether',
          'sol-solana',
          'ada-cardano',
          'xrp-xrp',
          'ltc-litecoin',
          'shib-shiba-inu',
        ],
      },
    });

    // object to string transformation
    const stringData = JSON.stringify(cryptoData);

    // saving in cache as stringified data
    redis.setex('previewCoins', TICKER_DATA_TTL.s, stringData);

    return res.status(200).json(cryptoData);
  });
};

const getGlobalMarketData: RequestHandler = (_, res, next) => {
  // check cache for globalMarketData
  redis.get('globalMarketData', async (err, data) => {
    if (err) return next(InternalServer);

    if (data) {
      const parsedData = JSON.parse(data);
      return res.status(200).json(parsedData);
    }

    // globalMarketData consists of a single document
    const globalMarketData = await GlobalMarket.find({});
    const globalMarketDoc = globalMarketData[0];

    // add to cache
    const stringData = JSON.stringify(globalMarketDoc);
    redis.setex('globalMarketData', GLOBAL_MARKET_TTL.s, stringData);

    return res.status(200).json(globalMarketDoc);
  });
};

export default { getAllCoins, getPreviewCoins, getGlobalMarketData };
