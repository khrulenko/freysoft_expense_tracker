import { ButtonProps, StackProps, TypographyProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createDefaultButtonStyles: StyleFunction<ButtonProps> = ({
  theme: { palette },
}) => ({
  fontSize: '13px',
  fontWeight: '400',
  color: palette.text.secondary,
});

const createHeaderStyles: StyleFunction<StackProps> = () => ({
  flexDirection: 'row',
  justifyContent: 'space-between',

  paddingBottom: '24px',
});

const createTittleStyles: StyleFunction<TypographyProps> = ({
  theme: { palette },
}) => ({
  color: palette.common.black,
  fontSize: '24px',
  fontWeight: '500',
});

export { createDefaultButtonStyles, createHeaderStyles, createTittleStyles };
