import { useMemo, useState } from 'react';

type Props<T> = {
  data: T[];
  perPage: number;
};

export default function useLazyLoad<T>({ data, perPage }: Readonly<Props<T>>) {
  const [currentPage, setCurrentPage] = useState(1);

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;

  const hasMore = useMemo(() => {
    return end < data?.length;
  }, [data, end]);

  return {
    lazyData: data?.slice(0, end) ?? [],
    hasMore,
    setCurrentPage,
  };
}
