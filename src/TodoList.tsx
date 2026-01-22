import { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { TodoItem } from './TodoItem';

interface Todo {
  id: number;
  title: string;
  done: boolean;
}

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    const value = text.trim();
    if (!value) return;

    setTodos(prev => [
      ...prev,
      { id: Date.now(), title: value, done: false }
    ]);
    setText('');
  };

  const toggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        p: 4,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <TextField
          fullWidth
          variant="outlined"
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Новое дело"
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'background.paper',
              '&:hover fieldset': {
                borderColor: 'primary.main',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'primary.main',
              },
            },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={addTodo}
          startIcon={<AddCircleOutlineIcon />}
          sx={{ px: 4 }}
        >
          Добавить
        </Button>
      </Box>

      <Box sx={{ flex: 1, overflow: 'auto' }}>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onRemove={removeTodo}
          />
        ))}
      </Box>
    </Box>
  );
};
