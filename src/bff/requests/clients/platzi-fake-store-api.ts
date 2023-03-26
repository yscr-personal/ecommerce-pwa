import request from '../base-request';

const domain = process.env.NEXT_PUBLIC_PLATZI_FAKE_STORE_API_DOMAIN || '';

export default request(domain);
