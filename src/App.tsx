import { ThemeProvider, CssBaseline } from '@mui/material';
import { spidermanTheme } from './theme';
import { Stopwatch } from './Stopwatch';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={spidermanTheme}>
      <CssBaseline />
      <Stopwatch />
    </ThemeProvider>
  );
}

export default App;
