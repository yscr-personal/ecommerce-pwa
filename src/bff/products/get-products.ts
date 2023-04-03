import { Request, Response } from 'express';
import { RequestError, onError, onSuccess } from '../handler';
import platziApi from '../requests/clients/platzi-fake-store-api';
import { transformData } from './utils/transform-response';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const q = Object.entries(req.query)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    const products = await platziApi(req, `api/v1/products?${q}`);

    return onSuccess(req, res, transformData(products));
  } catch (err: unknown) {
    return onError(
      req,
      res,
      err as RequestError,
      `[getProducts] Failed to fetch products`,
    );
  }
};
