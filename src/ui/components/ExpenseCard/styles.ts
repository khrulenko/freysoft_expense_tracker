import { ButtonProps, StackProps, TypographyProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createWrapperStyles: StyleFunction<StackProps> = ({
  theme: { palette },
}) => ({
  position: 'relative',
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

const createDeleteButtonStyles: StyleFunction<ButtonProps> = ({
  theme: { palette },
}) => ({
  position: 'absolute',
  right: 0,

  width: '100px',
  height: '100%',

  textAlign: 'center',
  color: palette.common.white,

  borderTopLeftRadius: '0',
  borderBottomLeftRadius: '0',
  backgroundColor: palette.error.main,

  '&:hover': {
    backgroundColor: palette.error.light,
  },
});

export {
  createWrapperStyles,
  createAmountStyles,
  createDateStyles,
  createDeleteButtonStyles,
};
