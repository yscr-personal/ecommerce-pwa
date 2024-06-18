import { logger } from '@/utils/logger';
import { Request, Response } from 'express';

export interface RequestError extends Error {
  response?: any;
}

export function onSuccess<T>(req: Request, res: Response, data?: T) {
  logger.info(`[BFF-handler] Response from [${req.method}] ${req.url}`);
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
    user: req.headers['remote-user'] ?? 'No user',
    frontMessage,
    stack: error.stack,
    errorCode,
    errors: [error.message],
  };
  logger.error(
    {
      errorInfo,
    },
    `[BFF-Handler] An Error occurred: ${error.message}`,
  );
  return res.status(error.response?.status ?? 500).json(errorInfo);
}
