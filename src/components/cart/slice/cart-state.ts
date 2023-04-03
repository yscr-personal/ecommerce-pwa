import { CartProduct } from '../interfaces/cart-product';

export type CartState = {
  products: CartProduct[];
  shipping: number;
  total: number;
};
