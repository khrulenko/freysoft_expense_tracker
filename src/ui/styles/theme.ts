import { createTheme, PaletteOptions, ThemeOptions } from '@mui/material';
import MuiCssBaseline from './muiComponents/MuiCssBaseline';
import MuiBottomNavigationAction from './muiComponents/MuiBottomNavigationAction';

const palette: PaletteOptions = {
  primary: {
    main: '#8234F8',
  },
  secondary: {
    main: '#FF643B',
  },
  text: {
    primary: '#000000',
    secondary: '#A3A3A3',
  },
};

const theme = createTheme({
  palette,
  components: {
    MuiCssBaseline,
    MuiBottomNavigationAction,
  },
} as ThemeOptions);

export default theme;
