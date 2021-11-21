require('module-alias/register');
import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose, { ConnectOptions } from 'mongoose';
import indexRouter from '@/routes/index';
import apiRouter from '@/routes/api';
import '@/cronjobs/crypto';

dotenv.config();

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
      console.log('Connected to MongoDB');
      console.log(`App is running on port ${PORT}... \n`);
      console.log('Press CTRL + C to stop the process. \n');
    }
  })
  .catch((err) => {
    // do not show the log when environment = "test"
    if (process.env.NODE_ENV !== 'test') {
      console.log('App Starting Error:', err.message);
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
