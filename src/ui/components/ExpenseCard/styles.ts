import { StackProps, TypographyProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createWrapperStyles: StyleFunction<StackProps> = ({
  theme: { palette },
}) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '10px',

  borderRadius: '10px',
  backgroundColor: palette.grey[50],

  cursor: 'pointer',
});

const createAmountStyles: StyleFunction<TypographyProps> = ({
  theme: { palette },
}) => ({
  fontSize: '18px',
  fontWeight: '500',
  lineHeight: '21px',
  color: palette.success.main,
});

const createDateStyles: StyleFunction<TypographyProps> = ({
  theme: { palette },
}) => ({
  fontSize: '12px',
  lineHeight: '14px',
  color: palette.text.secondary,
  whiteSpace: 'nowrap',
});

export { createWrapperStyles, createAmountStyles, createDateStyles };
