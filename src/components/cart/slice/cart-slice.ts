import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { REHYDRATE } from 'redux-persist';
import { CartProduct } from '../interfaces/cart-product';
import { CartState } from './cart-state';

const initialState: CartState = {
  products: [],
  shipping: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CartProduct>) => {
      state.products = [...state.products, action.payload];
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const toRemove = state.products.find(
        (product) => product.id === action.payload,
      );
      if (!toRemove) return;

      state.products = state.products.filter(
        (product) => product.id !== toRemove.id,
      );
      state.total -= toRemove.price * toRemove.quantity;
    },
    updateProductQuantity: (
      state,
      action: PayloadAction<{
        id: number;
        quantity: number;
      }>,
    ) => {
      state.products = state.products.map((product) =>
        product.id === action.payload.id
          ? { ...product, quantity: action.payload.quantity }
          : product,
      );
      state.total = state.products.reduce(
        (total, product) => total + product.price * product.quantity,
        0,
      );
    },
    clearCart: (state) => {
      state.products = [];
      state.total = 0;
      state.shipping = 0;
    },
  },
  extraReducers: (builder) => {
    const hydrationReducer = (state: any, action: any) => ({
      ...state,
      ...action.payload?.cart,
    });
    builder
      .addCase(HYDRATE, hydrationReducer)
      .addCase(REHYDRATE, hydrationReducer);
  },
});

export const { addProduct, removeProduct, updateProductQuantity, clearCart } =
  cartSlice.actions;
