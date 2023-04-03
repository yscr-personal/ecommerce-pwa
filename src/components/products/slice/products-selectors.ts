import { AppState } from '@/store';

export const selectProductsState = (state: AppState) => state.products;

export const selectProducts = (state: AppState) =>
  selectProductsState(state).data;

export const selectProductsStatus = (state: AppState) =>
  selectProductsState(state).status;

export const selectProductById = (state: AppState, productId: number) =>
  selectProducts(state).find((product) => product.id === productId);
