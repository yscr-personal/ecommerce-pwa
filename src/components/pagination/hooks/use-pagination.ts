import { useMemo, useState } from 'react';

type PaginationProps<T> = {
  data?: T[];
  perPage?: number;
};

export function usePagination<T>({ data, perPage = 10 }: PaginationProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => {
    return Math.ceil((data?.length ?? 0) / perPage);
  }, [data, perPage]);

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;

  return {
    paginatedData: data?.slice(start, end) ?? [],
    currentPage,
    setCurrentPage,
    totalPages,
  };
}
