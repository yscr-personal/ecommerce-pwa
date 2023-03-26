import { useSorted } from '@/components/hooks/use-sorted';
import DynamicPagination from '@/components/pagination/dynamic';
import { usePagination } from '@/components/pagination/hooks/use-pagination';
import Select from '@/components/select';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import ProductCard from '../product-card';
import { useProducts } from '../request';
import messages from './messages';

const PER_PAGE = 9;

export default function ProductsList() {
  const { data } = useProducts();
  const { sortedData, setSort, sort } = useSorted({
    data,
    sort: 'price-asc',
    fallbackSortComparator: (a, b) =>
      a.avaliations.length - b.avaliations.length,
  });

  const { paginatedData, currentPage, setCurrentPage, totalPages } =
    usePagination({
      data: sortedData,
      perPage: PER_PAGE,
    });
  const intl = useIntl();

  return (
    <div className="flex flex-col items-center justify-center space-y-4 px-3">
      <div className="flex w-full flex-row items-center justify-between">
        <span className="hidden lg:block">
          {intl.formatMessage(messages.total_products, {
            initPageIndex: currentPage * PER_PAGE,
            endPageIndex: currentPage * PER_PAGE + PER_PAGE,
            total: data?.length,
          })}
        </span>

        <div className="flex h-10 w-full lg:w-auto flex-row items-center text-sm justify-end">
          <span className="mr-2">{intl.formatMessage(messages.sort_by)}</span>
          <Select
            className="cursor-pointer rounded-lg border bg-gray-100 p-2 outline-none"
            onChange={setSort}
            value={sort}
            options={[
              {
                label: intl.formatMessage(messages.sort_by_price_asc),
                value: 'price-asc',
              },
              {
                label: intl.formatMessage(messages.sort_by_price_desc),
                value: 'price-desc',
              },
              {
                label: intl.formatMessage(messages.sort_by_rating),
                value: 'mean_rating-desc',
              },
              {
                label: intl.formatMessage(messages.sort_by_name),
                value: 'title-asc',
              },
            ]}
          />
        </div>
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
