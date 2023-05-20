import { StackProps, TypographyProps } from '@mui/material';
import { StylingProps } from '.';
import { StyleFunction } from '../../../../common/types';

const createWrapperStyles: StyleFunction<StackProps> = () => ({
  alignItems: 'center',
  gap: '16px',

  cursor: 'pointer',
});

const createAmountStyles: StyleFunction<TypographyProps & StylingProps> = ({
  theme: {
    palette: { primary, text },
  },
  isChosen,
}) => ({
  fontSize: '10px',
  color: isChosen ? primary.main : text.secondary,
});

const createBodyStyles: StyleFunction<
  StackProps & StylingProps & { height: string }
> = ({
  theme: {
    palette: { primary, grey },
  },
  height,
  isChosen,
}) => ({
  width: '31px',
  height: height,

  borderTopRightRadius: '6px',
  borderTopLeftRadius: '6px',
  backgroundColor: isChosen ? primary.main : grey[50],
});

const createMonthStyles: StyleFunction<TypographyProps & StylingProps> = ({
  theme: {
    palette: { primary, text },
  },
  isChosen,
}) => ({
  fontSize: '13px',
  color: isChosen ? primary.main : text.secondary,
});

export {
  createWrapperStyles,
  createAmountStyles,
  createBodyStyles,
  createMonthStyles,
};
