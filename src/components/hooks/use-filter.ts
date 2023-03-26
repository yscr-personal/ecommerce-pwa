import { useMutation, useQueryClient } from 'react-query';

type Args<T> = {
  mutateFn: () => Promise<T[]>;
  queryKey: string;
};

export function useFilter<T>({ mutateFn, queryKey }: Args<T>) {
  const queryClient = useQueryClient();

  return useMutation(mutateFn, {
    onSuccess: (newData: T[]) => {
      queryClient.setQueryData([queryKey], newData);
    },
  });
}
