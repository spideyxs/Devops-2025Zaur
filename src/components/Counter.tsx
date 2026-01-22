import { Button, Stack, Typography, Paper } from '@mui/material';
import { useCounter } from '../hooks/useCounter';

interface CounterProps {
  initialValue?: number;
}

export const Counter = ({ initialValue }: CounterProps) => {
  const { counter, add, subtract, clear } = useCounter(initialValue);

  return (
    <Paper
      elevation={4}
      sx={{
        p: 3,
        backgroundColor: 'background.paper',
        minWidth: 200,
      }}
    >
      <Stack spacing={2} alignItems="center">
        <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700 }}>
          {counter}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" color="secondary" onClick={subtract}>
            -
          </Button>
          <Button variant="contained" color="primary" onClick={add}>
            +
          </Button>
          <Button variant="outlined" color="error" onClick={clear}>
            Сброс
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
};
