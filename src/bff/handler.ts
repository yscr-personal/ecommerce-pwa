import { logger } from '@/utils/logger';
import { Request, Response } from 'express';

export interface RequestError extends Error {
  response?: any;
}

export function onSuccess<T>(res: Response, data?: T) {
  logger.info(`[CX-TRACKING] Response: ${data}`);
  return res.status(res.statusCode).json(data);
}

export function onError(
  req: Request,
  res: Response,
  error: RequestError,
  frontMessage: string,
  errorCode = '0000',
) {
  const errorInfo = {
    url: req.url,
    user: req.headers['remote-user'] || 'No user',
    frontMessage,
    stack: error.stack,
    errorCode,
    errors: [error.message],
  };
  logger.error(`[CX-TRACKING] An Error occurred: ${error} - ${errorInfo}`);
  return res.status(error.response?.status || 500).json(errorInfo);
}
