import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.log('error', err);
  console.log('REQ', req);
  console.log('RES', res);
  next();
};

export default errorHandler;
