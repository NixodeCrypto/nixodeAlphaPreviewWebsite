import httpStatusCodes from '@/constants/HTTP_STATUS_CODES';
import BaseError from '@/utils/baseError';

class Api404Error extends BaseError {
  constructor(
    name: string,
    statusCode = httpStatusCodes.NOT_FOUND,
    description = 'Not found.',
    isOperational = true,
  ) {
    super(name, statusCode, isOperational, description);
  }
}

export { Api404Error };
