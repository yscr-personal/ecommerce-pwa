import bffRequest from '@/components/requests/bff-request';
import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { Category } from '../../interfaces/category';
import { CategoriesState } from '../categories-state';

export const fetchCategoriesAction = createAsyncThunk<Category[]>(
  'categories/fetchCategoriesAction',
  (_, { signal }) => bffRequest('categories', 'GET', null, { signal }),
);

export const fetchCategoriesExtraReducers = (
  builder: ActionReducerMapBuilder<CategoriesState>,
) =>
  builder
    .addCase(fetchCategoriesAction.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchCategoriesAction.fulfilled, (state, action) => {
      state.status = 'finished';
      state.data = action.payload;
    })
    .addCase(fetchCategoriesAction.rejected, (state) => {
      state.status = 'error';
    });
