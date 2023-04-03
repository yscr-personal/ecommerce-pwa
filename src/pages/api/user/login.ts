import { login } from '@/bff/user';
import { methodNotAllowed } from '@/utils/api/method-not-allowed';
import type { Request, Response } from 'express';

export default async function handler(req: Request, res: Response) {
  switch (req.method) {
    case 'POST':
      return await login(req, res);
    default:
      return methodNotAllowed(req, res);
  }
}
