import { useRef, useState } from 'react';
import { Box, Button, List, TextField, Stack, Paper, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ClearIcon from '@mui/icons-material/Clear';
import { TodoItem } from './TodoItem';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export const TodoList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputText, setInputText] = useState('');
  const [filterText, setFilterText] = useState('');

  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleAdd = () => {
    const trimmed = inputText.trim();
    if (!trimmed) return;

    setTasks(prev => [
      ...prev,
      { id: Date.now(), title: trimmed, done: false }
    ]);
    setInputText('');
  };

  const handleToggle = (id: number) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const handleRemove = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const handleClearSearch = () => {
    setFilterText('');
    searchInputRef.current?.focus();
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <Paper elevation={6} sx={{ p: 3, backgroundColor: 'background.paper' }}>
      <Stack spacing={3}>
        <Stack direction="row" spacing={2}>
          <TextField
            fullWidth
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            label="Новое дело"
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'background.default',
              },
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAdd}
            startIcon={<AddCircleOutlineIcon />}
            sx={{ px: 3 }}
          >
            Добавить
          </Button>
        </Stack>

        <Stack direction="row" spacing={2}>
          <TextField
            inputRef={searchInputRef}
            fullWidth
            value={filterText}
            onChange={e => setFilterText(e.target.value)}
            label="Поиск"
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'background.default',
              },
            }}
          />
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClearSearch}
            startIcon={<ClearIcon />}
            sx={{ px: 3 }}
          >
            Очистить
          </Button>
        </Stack>

        <List>
          {filteredTasks.length === 0 ? (
            <Box sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {filterText ? 'Ничего не найдено' : 'Список пуст'}
              </Typography>
            </Box>
          ) : (
            filteredTasks.map(task => (
              <TodoItem
                key={task.id}
                task={task}
                onToggle={handleToggle}
                onRemove={handleRemove}
              />
            ))
          )}
        </List>
      </Stack>
    </Paper>
  );
};
