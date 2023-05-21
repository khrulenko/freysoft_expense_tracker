import { StackProps, AvatarProps, TypographyProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createWrapperStyles: StyleFunction<StackProps> = () => ({
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

const createHeaderStyles: StyleFunction<TypographyProps> = ({
  theme: { palette },
}) => ({
  fontSize: '24px',
  fontWeight: '500',
  color: palette.common.black,
});

export { createWrapperStyles, createAccAvatarStyles, createHeaderStyles };
