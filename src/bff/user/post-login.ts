import { Request, Response } from 'express';
import { RequestError, onError, onSuccess } from '../handler';
import platziApi from '../requests/clients/platzi-fake-store-api';

export const postLogin = async (req: Request, res: Response) => {
  const { email, password } = JSON.parse(req.body);
  try {
    const user = await platziApi(req, 'api/v1/auth/login', 'POST', {
      email,
      password,
    });

    if (user.statusCode) {
      throw new Error(user.message);
    }

    return onSuccess(req, res, user);
  } catch (err: unknown) {
    return onError(
      req,
      res,
      err as RequestError,
      `[getProducts] Failed to authenticate user ${email}`,
    );
  }
};
