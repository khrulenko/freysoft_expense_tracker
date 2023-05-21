import { BottomNavigationActionProps } from '@mui/material';
import { OwnerStateWithTheme } from '../../../common/types';

const MuiBottomNavigationAction = {
  styleOverrides: {
    root: ({
      theme: {
        palette: { text, secondary },
      },
    }: OwnerStateWithTheme<BottomNavigationActionProps>) => ({
      color: text.secondary,
      fontSize: '48px',

      '&.Mui-selected': {
        color: secondary.main,

        svg: {
          path: {
            fill: secondary.main,
          },
        },
      },
    }),
  },
};

export default MuiBottomNavigationAction;
