import { TypographyProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createTextWrapperStyles: StyleFunction<TypographyProps> = ({
  theme: { palette },
}) => ({
  display: 'flex',
  gap: '16px',

  color: palette.text.secondary,
  fontWeight: '500',
});

export { createTextWrapperStyles };
