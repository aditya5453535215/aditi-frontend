import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/index.js';
import AppRoutes from './router/AppRoutes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
