import cron from 'node-cron';
import axios from 'axios';
import Ticker from '@/models/Ticker';
import logger from '@/utils/winston';
import { TICKER_DATA_TTL } from '@/constants/TTL';

cron.schedule(TICKER_DATA_TTL.cron, () => {
  axios
    .get(`${process.env.COIN_API}/tickers`)
    .then((res) => {
      const bulkData = res.data.map(
        (item: Record<string, string | object>) => ({
          replaceOne: {
            upsert: true,
            filter: {
              id: item.id,
            },
            replacement: item,
          },
        }),
      );

      try {
        logger.info('Wrote New Ticker Data');
        Ticker.bulkWrite(bulkData);
      } catch (e) {
        logger.error('MongoDB: Failed Obtaining New Ticker Data');
      }
    })
    .catch(() => {
      logger.error('Failed Request to Crypto API Servers');
    });
});
