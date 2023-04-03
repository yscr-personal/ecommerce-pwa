import { Request, Response } from 'express';
import { RequestError, onError, onSuccess } from '../handler';
import platziApi from '../requests/clients/platzi-fake-store-api';

export const getProfile = async (req: Request, res: Response) => {
  try {
    const user = await platziApi(req, 'api/v1/auth/profile');

    return onSuccess(req, res, user);
  } catch (err: unknown) {
    return onError(
      req,
      res,
      err as RequestError,
      `[getProducts] Failed to get user profile`,
    );
  }
};
