import 'module-alias/register';
import '@/services/environmentSetup';
import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from 'cors';
import mongoose, { ConnectOptions } from 'mongoose';
import indexRouter from '@/routes/index';
import apiRouter from '@/routes/api';
import logger from '@/utils/winston';
import errorMiddleware from '@/middleware/error';
import { InternalServer } from '@/utils/error';
import '@/cronjobs/genCryptoData';

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
    logger.info('Connected to MongoDB');
  })
  .catch((err) => {
    logger.error(`App Starting Error: ${err.message}`);
    process.exit(1);
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

// error handler
app.use(errorMiddleware);

const server = app.listen(PORT, () =>
  logger.info(`App is running on port ${PORT}`),
);

// process events
process.on('SIGTERM', () => {
  logger.info('SIGTERM signal recieved');
  logger.info('Closing HTTP server');
  server.close(() => {
    logger.info('HTTP Server closed');
    mongoose.connection.close(false, () => {
      logger.info('MongoDB connection closed');
      process.exit(0);
    });
  });

  setTimeout(() => {
    logger.info('Timeout for graceful restart, forcefully shutting down');
    process.exit(1);
  }, 10000);
});

process.on('uncaughtException', () => {
  logger.error('uncaughtException');
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  logger.error('unhandledRejection');
  if (process.env.NODE_ENV !== 'production') {
    logger.error(err);
  }
  throw new InternalServer('Unhandled Rejection');
});

export default app;
