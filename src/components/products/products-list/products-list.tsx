import { useSorted } from '@/components/hooks/use-sorted';
import DynamicPagination from '@/components/pagination/dynamic';
import { usePagination } from '@/components/pagination/hooks/use-pagination';
import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { Product } from '../interfaces/product';
import ProductCard from '../product-card';
import messages from './messages';
import ProductsSorterSelect from './product-sorter';

const PER_PAGE = 9;

type Props = {
  products: Product[];
};

export default function ProductsList({ products }: Readonly<Props>) {
  const intl = useIntl();

  const { sortedData, setSort, sort } = useSorted({
    data: products,
    sort: 'price-asc',
    fallbackSortComparator: (a, b) =>
      a.avaliations.length - b.avaliations.length,
  });

  const { paginatedData, currentPage, setCurrentPage, totalPages } =
    usePagination({
      data: sortedData,
      perPage: PER_PAGE,
    });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="flex flex-col items-center justify-center space-y-4 px-3">
      <div className="flex w-full flex-row items-center justify-between">
        <span className="hidden lg:block">
          {intl.formatMessage(messages.total_products, {
            initPageIndex: currentPage * PER_PAGE,
            endPageIndex: currentPage * PER_PAGE + PER_PAGE,
            total: products?.length,
          })}
        </span>

        <ProductsSorterSelect onChange={setSort} value={sort} />
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        {paginatedData?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <DynamicPagination
        page={currentPage}
        setPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
}
