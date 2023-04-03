import { AppState } from '@/store';

export const selectCartState = (state: AppState) => state.cart;

export const selectCartProducts = (state: AppState) =>
  selectCartState(state).products;

export const selectCartShipping = (state: AppState) =>
  selectCartState(state).shipping;

export const selectCartTotal = (state: AppState) =>
  selectCartState(state).total;
