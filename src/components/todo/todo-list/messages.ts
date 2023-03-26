import { defineMessages } from 'react-intl';

export default defineMessages({
  list_title: {
    id: 'components.todo.list.title',
    defaultMessage: 'Lista de tarefas',
    description: 'Title for the todo list',
  },
  empty_list_message: {
    id: 'components.todo.list.empty',
    defaultMessage: 'No momento não há tarefas cadastradas.',
    description: 'Message to display when the todo list is empty',
  },
  total_completed: {
    id: 'components.todo.list.total_completed',
    defaultMessage: 'Tarefas completas: {completed}/{total}',
    description: 'Message to display the total of completed todos',
  },
  previous_page: {
    id: 'components.todo.list.previous_page',
    defaultMessage: 'Página anterior',
    description: 'Message to display the previous page button',
  },
  next_page: {
    id: 'components.todo.list.next_page',
    defaultMessage: 'Próxima página',
    description: 'Message to display the next page button',
  },
});
