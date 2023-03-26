import request from './base-request';

const domain = process.env.NEXT_PUBLIC_BFF_API_DOMAIN || '';

export default request(domain);
