import { internalRequest } from './internal-request';

export default function request(domain: string) {
  return async (
    url: string,
    method?: string,
    body: any = null,
    options: RequestInit = {},
  ) => {
    const optionsHeaders = options.headers ?? {};

    const defaultOptions = {
      method,
      ...options,
      body,
      headers: {
        ...optionsHeaders,
      },
    };

    return await internalRequest(
      `${domain}/${url}`,
      defaultOptions,
    );
  };
}
