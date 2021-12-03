import { ErrorRequestHandler } from 'express';
import logger from '@/utils/winston';

const errorMiddleware: ErrorRequestHandler = (err, _, res, __) => {
  logger.error(`${err.statusCode || 500}: ${err.name}`);
  return res.status(err.statusCode || 500).json({
    error: true,
    name: err.message,
    msg: err.name,
  });
};

export default errorMiddleware;
