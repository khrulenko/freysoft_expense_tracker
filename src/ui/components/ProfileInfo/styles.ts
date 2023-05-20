import { StackProps, AvatarProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createWrapperStyles: StyleFunction<StackProps> = () => ({
  flexDirection: 'row',
  gap: '16px',
  alignItems: 'center',
});

const createAvatarStyles: StyleFunction<AvatarProps> = () => ({
  width: '39px',
  height: '39px',
});

export { createWrapperStyles, createAvatarStyles };
