import AppLayout from '@/components/layout/app';
import ProductsList from '@/components/products/products-list';

export default function HomePage() {
  return (
    <AppLayout>
      <ProductsList />
    </AppLayout>
  );
}
