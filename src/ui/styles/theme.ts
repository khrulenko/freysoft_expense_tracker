import { createTheme, PaletteOptions, ThemeOptions } from '@mui/material';
import MuiCssBaseline from './muiComponents/MuiCssBaseline';
import MuiBottomNavigationAction from './muiComponents/MuiBottomNavigationAction';
import MuiButton from './muiComponents/MuiButton';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    ms: true;
  }
}

interface CustomThemeProps {
  navBarSizes: {
    height: number;
  };
}

declare module '@mui/material/' {
  interface Theme extends CustomThemeProps {}
  interface ThemeOptions extends CustomThemeProps {}
}

const breakpoints = {
  values: {
    xs: 0,
    ms: 400,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

const palette: PaletteOptions = {
  primary: {
    main: '#8234F8',
  },
  secondary: {
    main: '#FF643B',
  },
  success: {
    main: '#2BB272',
  },
  text: {
    primary: '#000000',
    secondary: '#A3A3A3',
  },
};

const navBarSizes = { height: 90 };

const theme = createTheme({
  breakpoints,
  palette,
  components: {
    MuiCssBaseline,
    MuiBottomNavigationAction,
    MuiButton,
  },
  navBarSizes,
} as ThemeOptions);

export default theme;
