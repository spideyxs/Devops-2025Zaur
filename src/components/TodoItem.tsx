import { Button, ListItem, Typography, Box } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface TodoItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

export const TodoItem = ({ task, onToggle, onRemove }: TodoItemProps) => {
  return (
    <ListItem
      sx={{
        borderLeft: `3px solid ${task.done ? 'secondary.main' : 'primary.main'}`,
        backgroundColor: task.done ? 'rgba(25, 118, 210, 0.1)' : 'rgba(211, 47, 47, 0.1)',
        mb: 1,
        borderRadius: 1,
      }}
      secondaryAction={
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant={task.done ? 'outlined' : 'contained'}
            color={task.done ? 'secondary' : 'primary'}
            startIcon={task.done ? <CancelOutlinedIcon /> : <CheckCircleOutlineIcon />}
            onClick={() => onToggle(task.id)}
            size="small"
          >
            {task.done ? 'Вернуть' : 'Готово'}
          </Button>
          <Button
            variant="outlined"
            color="error"
            startIcon={<DeleteOutlineIcon />}
            onClick={() => onRemove(task.id)}
            size="small"
          >
            Удалить
          </Button>
        </Box>
      }
    >
      <Typography
        sx={{
          textDecoration: task.done ? 'line-through' : 'none',
          color: task.done ? 'text.secondary' : 'text.primary',
          flexGrow: 1,
        }}
      >
        {task.title}
      </Typography>
    </ListItem>
  );
};
