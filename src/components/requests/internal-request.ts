export async function internalRequest(url: string, options: any = {}) {
  const response = await fetch(url, {
    ...options,
    body: options.body ? JSON.stringify(options.body) : null,
  }).then((res) => res.json());

  if (response.status >= 400) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response;
}
