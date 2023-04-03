import { Category } from '../interfaces/category';

export type CategoriesState = {
  data: Category[];
  status: 'idle' | 'finished' | 'loading' | 'error';
};
