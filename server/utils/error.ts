import { RequestHandler, Application } from 'express';
import httpStatusCodes from '@/constants/HTTP_STATUS_CODES';

// general HOC handler for routes (e.g. api.post("/route", use(apiController)))
export const use =
  (fn: any): RequestHandler =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };

// base class for httpStatus specific errors (e.g. NotFound)
export class BaseError extends Error {
  name: string;
  statusCode: number;
  isOperational: boolean;
  constructor(
    name: string,
    statusCode: number,
    isOperational: boolean,
    description: string,
  ) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype);
    this.name = name;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Error.captureStackTrace(this);
  }
}

export class NotFound extends BaseError {
  constructor(
    name: string,
    statusCode = httpStatusCodes.NOT_FOUND,
    description = 'Not Found.',
    isOperational = true,
  ) {
    super(name, statusCode, isOperational, description);
  }
}

export class BadRequest extends BaseError {
  constructor(
    name: string,
    statusCode = httpStatusCodes.BAD_REQUEST,
    description = 'Bad Request.',
    isOperational = true,
  ) {
    super(name, statusCode, isOperational, description);
  }
}

export class InternalServer extends BaseError {
  constructor(
    name: string,
    statusCode = httpStatusCodes.INTERNAL_SERVER,
    description = 'Internal Server Error.',
    isOperational = true,
  ) {
    super(name, statusCode, isOperational, description);
  }
}
