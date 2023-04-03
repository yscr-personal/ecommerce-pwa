import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import {
  fetchCategoriesAction,
  fetchCategoriesExtraReducers,
} from './actions/fetch-categories';
import { CategoriesState } from './categories-state';
import { REHYDRATE } from 'redux-persist';

const initialState: CategoriesState = {
  data: [],
  status: 'idle',
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const hydrationReducer = (state: any, action: any) => ({
      ...state,
      ...action.payload?.categories,
    });
    builder
      .addCase(HYDRATE, hydrationReducer)
      .addCase(REHYDRATE, hydrationReducer);
    fetchCategoriesExtraReducers(builder);
  },
});

export const categoriesActions = {
  ...categoriesSlice.actions,
  fetchcategories: fetchCategoriesAction,
};
