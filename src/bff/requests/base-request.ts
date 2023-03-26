import { externalRequest } from './external-request';
import { Request } from 'express';

const request =
  (domain: string) =>
  async (
    req: Request,
    url: string,
    method?: string,
    body?: any,
    options: any = {},
  ) => {
    const authorization = req.headers.authorization;
    const reqMethod = req.method;

    const optionsHeaders = options.headers ?? {};

    const defaultOptions = {
      method: method || reqMethod,
      credentials: 'omit',
      ...options,
      headers: {
        ...optionsHeaders,
        authorization,
        Accept: 'application/json',
      },
    };

    return await externalRequest(`${domain}/${url}`, {
      body: body || null,
      ...defaultOptions,
    });
  };

export default request;
