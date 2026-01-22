import { ThemeProvider, CssBaseline, Typography, Box } from '@mui/material';
import { spidermanTheme } from './theme';
import { TodoList } from './TodoList';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={spidermanTheme}>
      <CssBaseline />
      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          align="center"
          sx={{
            py: 3,
            fontWeight: 700,
            color: 'primary.main',
          }}
        >
          Список дел
        </Typography>
        <Box sx={{ flex: 1, overflow: 'auto' }}>
          <TodoList />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
