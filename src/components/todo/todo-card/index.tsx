import { useCompleteTodo } from '../hooks/use-complete-todo';
import { Todo } from '../interfaces/todo';
import { Card, Checkbox, Container, Title } from './styles';

type Props = {
  todo: Todo;
};

export default function TodoCard({ todo }: Props) {
  const { mutate } = useCompleteTodo(todo);

  return (
    <Card>
      <Container>
        <Title $completed={todo.completed}>{todo.title}</Title>
        <Checkbox
          type="checkbox"
          checked={todo.completed}
          onChange={() => mutate()}
        />
      </Container>
    </Card>
  );
}
