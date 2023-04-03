import { getProfile } from '@/bff/user';
import { methodNotAllowed } from '@/utils/api/method-not-allowed';
import type { Request, Response } from 'express';

export default async function handler(req: Request, res: Response) {
  switch (req.method) {
    case 'GET':
      return await getProfile(req, res);
    default:
      return methodNotAllowed(req, res);
  }
}
