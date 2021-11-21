import cron from 'node-cron';
import axios from 'axios';
import Ticker from '@/models/Ticker';

cron.schedule('*/2 * * * *', () => {
  axios
    .get(`${process.env.COIN_API}/tickers`)
    .then((res) => {
      Ticker.insertMany(res.data).catch((err) => {
        console.log(err);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
