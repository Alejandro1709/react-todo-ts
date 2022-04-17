import { IconButton, ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { DeleteOutline, EditOutlined } from '@material-ui/icons';

interface Props {
  todo: {
    id: string;
    task: string;
    completed?: boolean;
  };
  handleRemoveTodo: (id: string) => void;
  handleToggleTodo: (id: string) => void;
}

function Todo({ todo, handleRemoveTodo, handleToggleTodo }: Props) {
  const onRemove = (id: string) => {
    handleRemoveTodo(id);
  };

  return (
    <ListItem key={todo.id}>
      <Checkbox
        checked={todo.completed}
        onClick={() => handleToggleTodo(todo.id)}
      />
      <ListItemText
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        {todo.task}
      </ListItemText>
      <IconButton aria-label='delete' onClick={() => onRemove(todo.id)}>
        <DeleteOutline />
      </IconButton>
      <IconButton aria-label='edit'>
        <EditOutlined />
      </IconButton>
    </ListItem>
  );
}

export default Todo;
