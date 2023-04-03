import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import {
  fetchProductsAction,
  fetchProductsExtraReducers,
} from './actions/fetch-products';
import { ProductsState } from './products-state';
import { REHYDRATE } from 'redux-persist';

const initialState: ProductsState = {
  data: [],
  status: 'idle',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const hydrationReducer = (state: any, action: any) => ({
      ...state,
      ...action.payload?.products,
    });
    builder
      .addCase(HYDRATE, hydrationReducer)
      .addCase(REHYDRATE, hydrationReducer);
    fetchProductsExtraReducers(builder);
  },
});

export const productsActions = {
  ...productsSlice.actions,
  fetchProducts: fetchProductsAction,
};
