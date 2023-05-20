import { PaperProps, BottomNavigationProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createWrapperStyles: StyleFunction<PaperProps> = ({
  theme: {
    zIndex: { drawer },
  },
}) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,

  width: '100%',

  zIndex: drawer,
});

const createNavWrapperStyles: StyleFunction<BottomNavigationProps> = () => ({
  height: '90px',
});

export { createWrapperStyles, createNavWrapperStyles };
