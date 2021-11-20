import express, { Response } from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import winston from 'winston';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose, { ConnectOptions } from 'mongoose';

dotenv.config();

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
      console.log('Connected to %s', MONGODB_URL);
      console.log('App is running ... \n');
      console.log('Press CTRL + C to stop the process. \n');
    }
  });

const PORT = process.env.PORT || 7000;

const app = express();

app.get('/', (_, res: Response) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`App started on port: ${PORT}`);
});
