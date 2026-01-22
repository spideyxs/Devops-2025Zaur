import { Container, Stack, Divider, ThemeProvider, CssBaseline, Box } from '@mui/material';
import { spidermanTheme } from './theme';
import { TodoList } from './components/TodoList';
import { Counter } from './components/Counter';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={spidermanTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: 'background.default',
          py: 4,
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={4}>
            <TodoList />
            <Divider sx={{ borderColor: 'primary.main' }} />
            <Stack direction="row" spacing={4} justifyContent="center" flexWrap="wrap">
              <Counter />
              <Counter initialValue={10} />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
