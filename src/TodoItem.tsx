import { Box, Typography, Button, Paper } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

interface Todo {
  id: number;
  title: string;
  done: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

export const TodoItem = ({ todo, onToggle, onRemove }: TodoItemProps) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        mb: 1.5,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        backgroundColor: todo.done ? 'rgba(25, 118, 210, 0.12)' : 'background.paper',
        borderLeft: `4px solid ${todo.done ? '#1976D2' : '#D32F2F'}`,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateX(4px)',
          boxShadow: 6,
        },
      }}
    >
      <Typography
        variant="body1"
        sx={{
          flexGrow: 1,
          textDecoration: todo.done ? 'line-through' : 'none',
          opacity: todo.done ? 0.7 : 1,
          color: todo.done ? 'text.secondary' : 'text.primary',
          fontWeight: todo.done ? 400 : 500,
        }}
      >
        {todo.title}
      </Typography>

      <Button
        variant={todo.done ? 'outlined' : 'contained'}
        color={todo.done ? 'secondary' : 'primary'}
        startIcon={todo.done ? <CancelOutlinedIcon /> : <CheckCircleOutlineIcon />}
        onClick={() => onToggle(todo.id)}
        size="small"
      >
        {todo.done ? 'Вернуть' : 'Готово'}
      </Button>

      <Button
        variant="outlined"
        color="error"
        startIcon={<DeleteOutlineIcon />}
        onClick={() => onRemove(todo.id)}
        size="small"
      >
        Удалить
      </Button>
    </Paper>
  );
};
