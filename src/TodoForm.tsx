import React from 'react';
import useInputState from './hooks/useInputState';
import { Paper } from '@material-ui/core';
import { TextField } from '@material-ui/core';

interface Props {
  handleAddTodo: (todoText: string) => void;
}

function TodoForm({ handleAddTodo }: Props) {
  const [value, handleChangeValue, reset] = useInputState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleAddTodo(value);

    reset();
  };
  return (
    <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          value={value}
          onChange={handleChangeValue}
          margin='normal'
          label='Add new todo'
          fullWidth
        />
      </form>
    </Paper>
  );
}

export default TodoForm;
