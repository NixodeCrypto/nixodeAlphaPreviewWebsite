require('module-alias/register');
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from 'cors';
import mongoose, { ConnectOptions } from 'mongoose';
import indexRouter from '@/routes/index';
import apiRouter from '@/routes/api';
import logger from '@/utils/winston';
import '@/cronjobs/crypto';

const PORT = process.env.PORT || 7000;

// DB Connect
const MONGODB_URL = process.env.MONGODB_URL;
mongoose
  .connect(
    MONGODB_URL as string,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions,
  )
  .then(() => {
    // do not show the log when environment = "test"
    if (process.env.NODE_ENV !== 'test') {
      logger.info('Connected to MongoDB');
      logger.info(`App is running on port ${PORT}`);
    }
  })
  .catch((err) => {
    // do not show the log when environment = "test"
    if (process.env.NODE_ENV !== 'test') {
      logger.error(`App Starting Error: ${err.message}`);
      process.exit(1);
    }
  });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// cross-origin requests
app.use(cors());
// route prefixes
app.use('/', indexRouter);
app.use('/', apiRouter);

app.listen(PORT);

export default app;
