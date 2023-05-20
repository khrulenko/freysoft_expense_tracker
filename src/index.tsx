import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/en-gb';
import App from './App';
import theme from './ui/styles/theme';
import store from './redux/store';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
          <App />
        </LocalizationProvider>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
