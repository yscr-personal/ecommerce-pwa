import { useMutation, useQueryClient } from 'react-query';
import { Todo } from '../interfaces/todo';
import { TODOS_QUERY_KEY } from '../request';

export const useCompleteTodo = (todo: Todo) => {
  const queryClient = useQueryClient();

  return useMutation(
    () => Promise.resolve({ ...todo, completed: !todo.completed } as Todo),
    {
      onSuccess: (updatedTodo: Todo) => {
        const todos = queryClient.getQueryData<Todo[]>([TODOS_QUERY_KEY]);
        queryClient.setQueryData(
          [TODOS_QUERY_KEY],
          todos?.map((t) => (t.id === updatedTodo.id ? updatedTodo : t)) ?? [],
        );
      },
    },
  );
};
