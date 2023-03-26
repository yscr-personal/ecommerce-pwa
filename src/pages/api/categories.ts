import { getCategories } from '@/bff/categories';
import type { Request, Response } from 'express';

export default async function handler(req: Request, res: Response) {
  switch (req.method) {
    case 'GET':
      return await getCategories(req, res);
    default:
      const message = `Method ${req.method} not allowed`;
      console.error(message);
      return res.status(405).json({ status: 'error', message });
  }
}
