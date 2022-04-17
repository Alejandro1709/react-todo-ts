import { useState, useId } from 'react';
import { Typography } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

interface Todo {
  id: string;
  task: string;
  completed?: boolean;
}

function TodoApp() {
  const newId = useId();

  const initialTodos = [
    { id: '1', task: 'Clean Fishtank', completed: false },
    { id: '2', task: 'Wash Car', completed: true },
    { id: '3', task: 'Shave Beard', completed: false },
  ];

  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);

  const addTodo = (todoText: string) => {
    const todo: Todo = {
      id: newId,
      task: todoText,
      completed: false,
    };

    setTodos([...todos, todo]);
  };

  const removeTodo = (id: string) => {
    const filteredTodos = todos.filter((t) => t.id !== id);

    setTodos(filteredTodos);
  };

  const toggleTodo = (id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa',
      }}
      elevation={0}
    >
      <AppBar color='primary' position='static' style={{ height: '64px' }}>
        <Toolbar>
          <Typography color='inherit'>TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent='center' style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm handleAddTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
