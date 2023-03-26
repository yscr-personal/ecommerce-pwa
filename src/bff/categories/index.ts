import { Request, Response } from 'express';
import { onError, onSuccess, RequestError } from '../handler';
import platziApi from '../requests/clients/platzi-fake-store-api';

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await platziApi(req, 'api/v1/categories');

    return onSuccess(res, categories);
  } catch (err: unknown) {
    return onError(
      req,
      res,
      err as RequestError,
      `[getProducts] Failed to fetch products`,
    );
  }
};
