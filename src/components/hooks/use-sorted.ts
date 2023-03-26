import { useMemo, useState } from 'react';

type SortOrder = 'asc' | 'desc';

type Comparable = string | number | Date;

type Comparator<T> = (a: T, b: T) => number;

type Args<T> = {
  data?: T[];
  sort: `${Extract<keyof T, Comparable>}-${SortOrder}`;
  fallbackSortComparator?: Comparator<T>;
};

function compare<T>(a: T, b: T) {
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() - b.getTime();
  }
  if (typeof a === 'string' && typeof b === 'string') {
    return a.localeCompare(b);
  }
  if (typeof a === 'number' && typeof b === 'number') {
    return +a.toFixed(1) - +b.toFixed(1);
  }
  return 0;
}

export function useSorted<T>({ data, sort, fallbackSortComparator }: Args<T>) {
  const [key, setKey] = useState<string>(sort);

  const sortedData = useMemo(() => {
    if (!data) return data;

    const [sortKey, sortOrder] = key.split('-');
    return [...data].sort((a, b) => {
      const compareResult = compare(a[sortKey as keyof T], b[sortKey as keyof T]);
      if (!compareResult && fallbackSortComparator) {
        return -fallbackSortComparator(a, b);
      }
      return sortOrder === 'asc' ? compareResult : -compareResult;
    });
  }, [data, key, fallbackSortComparator]);

  return {
    sortedData,
    setSort: setKey,
    sort: key,
  };
}
