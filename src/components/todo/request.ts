import bffRequest from '@/components/requests/bff-request';
import { useQuery } from 'react-query';
import { Todo } from './interfaces/todo';

export const TODOS_QUERY_KEY = 'todos';

export const useTodos = () => {
  const { data, error, isLoading } = useQuery<Todo[]>(
    [TODOS_QUERY_KEY],
    () => bffRequest('todos'),
    {
      refetchOnWindowFocus: false,
    },
  );
  return { data, error, isLoading };
};
