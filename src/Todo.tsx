import React, { Fragment, useState } from 'react';
import useToggle from './hooks/useToggle';
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
  const [isEditing, toggle] = useToggle(false);

  const onRemove = (id: string) => {
    handleRemoveTodo(id);
  };

  const handleToggle = () => toggle;

  return (
    <ListItem key={todo.id}>
      {isEditing ? (
        <h1>Editing</h1>
      ) : (
        <Fragment>
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
          <IconButton aria-label='edit' onClick={handleToggle}>
            <EditOutlined />
          </IconButton>
        </Fragment>
      )}
    </ListItem>
  );
}

export default Todo;
