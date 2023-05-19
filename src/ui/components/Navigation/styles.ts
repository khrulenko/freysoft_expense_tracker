import { PaperProps, BottomNavigationProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createWrapperStyles: StyleFunction<PaperProps> = () => ({
  position: 'absolute',
  bottom: 0,

  width: '100%',
});

const createNavWrapperStyles: StyleFunction<BottomNavigationProps> = () => ({
  height: '90px',
});

export { createWrapperStyles, createNavWrapperStyles };
