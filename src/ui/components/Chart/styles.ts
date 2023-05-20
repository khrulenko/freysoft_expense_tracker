import { ButtonProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createWrapperStyles: StyleFunction<ButtonProps> = () => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
});

export { createWrapperStyles };
