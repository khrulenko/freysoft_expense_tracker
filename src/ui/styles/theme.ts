import { createTheme, PaletteOptions, ThemeOptions } from '@mui/material';
import MuiCssBaseline from './muiComponents/MuiCssBaseline';
import MuiBottomNavigationAction from './muiComponents/MuiBottomNavigationAction';
import MuiButton from './muiComponents/MuiButton';

interface CustomThemeProps {
  navBarSizes: {
    height: number;
  };
}

declare module '@mui/material/' {
  interface Theme extends CustomThemeProps {}
  interface ThemeOptions extends CustomThemeProps {}
}

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
const navBarSizes = { height: 90 };

const theme = createTheme({
  palette,
  components: {
    MuiCssBaseline,
    MuiBottomNavigationAction,
    MuiButton,
  },
  navBarSizes,
} as ThemeOptions);

export default theme;
