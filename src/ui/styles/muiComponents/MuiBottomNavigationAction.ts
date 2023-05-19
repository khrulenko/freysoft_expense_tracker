import { BottomNavigationActionProps } from '@mui/material';
import { OwnerStateWithTheme } from '../../../common/types';

const MuiBottomNavigationAction = {
  styleOverrides: {
    root: ({
      theme: { palette },
    }: OwnerStateWithTheme<BottomNavigationActionProps>) => ({
      color: palette.text.secondary,
      fontSize: '48px',

      '&.Mui-selected': {
        color: palette.secondary.main,
      },
    }),
  },
};

export default MuiBottomNavigationAction;
