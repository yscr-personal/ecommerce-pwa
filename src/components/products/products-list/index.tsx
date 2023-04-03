import DynamicLoading from '@/components/loading/dynamic';
import { useAppDispatch, useAppSelector } from '@/store';
import { useEffect } from 'react';
import { fetchProductsAction } from '../slice/actions/fetch-products';
import { selectProductsState } from '../slice/products-selectors';
import ProductsList from './products-list';

export default function ProductsLoadingInterceptor() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsAction({}));
  }, [dispatch]);

  const { status, data } = useAppSelector(selectProductsState);

  if (status === 'loading') {
    return <DynamicLoading />;
  }

  if (status === 'error') {
    return <div>something went wrong</div>;
  }

  return <ProductsList products={data} />;
}
