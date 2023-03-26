import DynamicPagination from '@/components/pagination/dynamic';
import { usePagination } from '@/components/pagination/hooks/use-pagination';
import { useIntl } from 'react-intl';
import { Todo } from '../interfaces/todo';
import DynamicTodoCard from '../todo-card/dynamic';
import messages from './messages';
import { Container, List, Title } from './styles';

type Props = {
  todos: Todo[];
};

export default function TodoList({ todos }: Props) {
  const { paginatedData, totalPages, setCurrentPage, currentPage } =
    usePagination({ data: todos });

  const intl = useIntl();

  return (
    <Container>
      <List>
        <div className="flex flex-row items-center justify-between">
          <Title>{intl.formatMessage(messages.list_title)}</Title>
          <span>
            {intl.formatMessage(messages.total_completed, {
              completed: todos?.filter((todo) => todo.completed).length ?? 0,
              total: todos?.length ?? 0,
            })}
          </span>
        </div>
        {paginatedData?.map((todo) => (
          <DynamicTodoCard key={todo.id} todo={todo} />
        ))}
        {!paginatedData.length &&
          intl.formatMessage(messages.empty_list_message)}
      </List>

      <DynamicPagination
        page={currentPage}
        setPage={setCurrentPage}
        totalPages={totalPages}
      />
    </Container>
  );
}
