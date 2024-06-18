import request from '../base-request';

const domain = process.env.NEXT_PUBLIC_USER_API_DOMAIN ?? '';

export default request(domain);
