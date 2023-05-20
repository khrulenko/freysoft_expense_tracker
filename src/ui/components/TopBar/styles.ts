import { StackProps, AvatarProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createWrapperStyles: StyleFunction<StackProps> = () => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  paddingBottom: '12px',
});

const createAccAvatarStyles: StyleFunction<AvatarProps> = ({
  theme: { palette },
}) => ({
  height: '43px',
  width: '43px',

  borderRadius: '6px',
  background: palette.primary.main,
});

export { createWrapperStyles, createAccAvatarStyles };
