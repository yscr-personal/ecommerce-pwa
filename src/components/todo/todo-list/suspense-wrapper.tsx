import DynamicLoading from '@/components/loading/dynamic';
import { useTodos } from '../request';
import DynamicTodoList from './dynamic';

export default function TodoListSuspenseWrapper() {
  const { data, isLoading } = useTodos();

  if (isLoading) {
    return <DynamicLoading />;
  }

  return <DynamicTodoList todos={data!} />;
}
