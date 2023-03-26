import bffRequest from '@/components/requests/bff-request';
import { useQuery } from 'react-query';
import { Category } from './interfaces/category';

export const CATEGORIES_QUERY_KEY = 'categories';

export const useCategories = () => {
  const { data, error, isLoading } = useQuery<Category[]>(
    [CATEGORIES_QUERY_KEY],
    () => bffRequest('categories'),
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 15,
    },
  );
  return { data, error, isLoading };
};
