import { getProducts } from '@/bff/products';
import { methodNotAllowed } from '@/utils/api/method-not-allowed';
import type { Request, Response } from 'express';

export const config = {
  api: {
    responseLimit: '8mb',
  },
};

export default async function handler(req: Request, res: Response) {
  switch (req.method) {
    case 'GET':
      return await getProducts(req, res);
    default:
      return methodNotAllowed(req, res);
  }
}
