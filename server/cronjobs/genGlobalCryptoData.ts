import cron from 'node-cron';
import axios from 'axios';
import GlobalMarket from '@/models/GlobalMarket';
import logger from '@/utils/winston';
import { GLOBAL_MARKET_TTL } from '@/constants/TTL';

cron.schedule(GLOBAL_MARKET_TTL.cron, () => {
  axios
    .get(`${process.env.COIN_API}/global`)
    .then(async (res) => {
      try {
        const data = res.data;
        const docCount = await GlobalMarket.estimatedDocumentCount();
        if (docCount === 0) {
          const globalMarket = new GlobalMarket(data);
          await globalMarket.save();
        }
        await GlobalMarket.updateMany({}, data);
      } catch (e) {
        logger.error('MongoDB: Failed Obtaining New Market Data');
      }
    })
    .catch(() => {
      logger.error('Failed Request to Crypto API Servers');
    });
});
