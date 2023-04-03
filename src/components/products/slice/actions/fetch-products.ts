import bffRequest from '@/components/requests/bff-request';
import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../../interfaces/product';
import { ProductsState } from '../products-state';

type FilterMap = Record<string, string>;

export const fetchProductsAction = createAsyncThunk<Product[], FilterMap>(
  'products/fetchProductsAction',
  (filters, { signal }) =>
    bffRequest(
      `products?${new URLSearchParams(filters).toString()}`,
      'GET',
      null,
      { signal },
    ),
);

export const fetchProductsExtraReducers = (
  builder: ActionReducerMapBuilder<ProductsState>,
) =>
  builder
    .addCase(fetchProductsAction.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchProductsAction.fulfilled, (state, action) => {
      state.status = 'finished';
      state.data = action.payload;
    })
    .addCase(fetchProductsAction.rejected, (state) => {
      state.status = 'error';
    });
