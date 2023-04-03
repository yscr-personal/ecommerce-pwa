import { AppState } from '@/store';

export const selectCategoriesState = (state: AppState) => state.categories;

export const selectCategories = (state: AppState) =>
  selectCategoriesState(state).data;

export const selectCategoriesStatus = (state: AppState) =>
  selectCategoriesState(state).status;
