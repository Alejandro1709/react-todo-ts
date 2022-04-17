import { Fragment } from 'react';
import { Paper } from '@material-ui/core';
import { List } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import Todo from './Todo';

interface Props {
  todos: Array<{
    id: string;
    task: string;
    completed?: boolean;
  }>;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

function TodoList({ todos, removeTodo, toggleTodo }: Props) {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <Fragment>
            <Todo
              key={todo.id}
              todo={todo}
              handleRemoveTodo={removeTodo}
              handleToggleTodo={toggleTodo}
            />
            <Divider />
          </Fragment>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
