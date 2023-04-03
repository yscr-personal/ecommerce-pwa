import { Product } from '../interfaces/product';

export type ProductsState = {
  data: Product[];
  status: 'idle' | 'finished' | 'loading' | 'error';
};
