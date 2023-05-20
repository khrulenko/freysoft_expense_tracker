import { StackProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createLogoStyles: StyleFunction<StackProps> = () => ({
  position: 'relative',
  width: '47px',
  height: '29px',

  '&::before, &::after': {
    content: "''",
    position: 'absolute',

    width: '29px',
    height: '29px',

    borderRadius: '50%',
  },

  '&::before': {
    background: 'rgba(255, 0, 21, 0.84)',
    zIndex: 1,
  },

  '&::after': {
    background: '#FF9F00',
    left: '18px',
  },
});

export { createLogoStyles };
