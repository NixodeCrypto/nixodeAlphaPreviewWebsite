import cron from 'node-cron';
import axios from 'axios';
import Ticker from '@/models/Ticker';

cron.schedule('* * * * *', () => {
  axios
    .get(`${process.env.COIN_API}/tickers`)
    .then((res) => {
      const bulkData = res.data.map((item: any) => ({
        replaceOne: {
          upsert: true,
          filter: {
            id: item.id,
          },
          replacement: item,
        },
      }));

      try {
        Ticker.bulkWrite(bulkData);
      } catch (e) {
        console.log(e);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
