import { createTheme, ThemeOptions } from '@mui/material';
import MuiCssBaseline from './muiComponents/MuiCssBaseline';

const theme = createTheme({
  components: {
    MuiCssBaseline,
  },
} as ThemeOptions);

export default theme;
