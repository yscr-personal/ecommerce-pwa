import bffRequest from '@/components/requests/bff-request';
import { useQuery } from 'react-query';
import { Product } from './interfaces/product';

export const PRODUCTS_QUERY_KEY = 'products';

type FilterMap = Record<string, string>;

export const useProducts = (filters: FilterMap = {}) => {
  const { data, error, isLoading } = useQuery<Product[]>(
    [PRODUCTS_QUERY_KEY, ...Object.values(filters)],
    () => bffRequest(`products?${new URLSearchParams(filters).toString()}`),
    {
      refetchOnWindowFocus: false,
      enabled: !!filters,
      staleTime: 1000 * 60 * 15,
    },
  );
  return { data, error, isLoading };
};
