import type { Request, Response } from 'express';
import { logger } from '../logger';

export function methodNotAllowed(req: Request, res: Response) {
  const message = `Method ${req.method} not allowed in ${req.url}`;
  logger.error(message);
  return res.status(405).json({ status: 'error', message });
}
