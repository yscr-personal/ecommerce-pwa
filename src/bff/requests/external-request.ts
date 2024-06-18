import { logger } from "@/utils/logger";

export async function externalRequest(url: string, options: any = {}) {
  const { method, body } = options;
  const headers = options.headers ?? {};

  logger.info(`[BFF] external api called: [${method}] ${url}`);

  const response = await fetch(url, {
    method,
    body: body ? JSON.stringify(body) : null,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  }).then((res) => res.json());

  if (response.status >= 400) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response;
}
