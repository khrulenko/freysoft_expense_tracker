import { StackProps, TypographyProps } from '@mui/material';
import { IconProps, Props } from '.';
import { StyleFunction } from '../../../common/types';

const createWrapperStyles: StyleFunction<StackProps & Props> = ({
  theme: {
    palette: { primary, secondary },
  },
  colorSystem,
}) => ({
  backgroundColor: colorSystem === 'primary' ? primary.main : secondary.main,
  borderRadius: '6px',
});

const createBalanceInfoStyles: StyleFunction<StackProps> = () => ({
  gap: '15px',

  padding: '23px 22px 26px',
});

const createTittleStyles: StyleFunction<TypographyProps> = ({
  theme: {
    palette,
    breakpoints: { down },
  },
}) => ({
  fontWeight: '500',
  lineHeight: '19px',
  color: palette.grey[50],

  [down('ms')]: {
    fontSize: '12px',
  },
});

const createAmountStyles: StyleFunction<TypographyProps> = ({
  theme: {
    palette,
    breakpoints: { down },
  },
}) => ({
  fontSize: '27px',
  fontWeight: '700',
  lineHeight: '32px',
  color: palette.common.white,

  [down('ms')]: {
    fontSize: '16px',
  },
});

const createCardIconStyles: StyleFunction<IconProps> = ({
  theme: {
    palette: { primary, secondary },
  },
  iconColor,
}) => ({
  opacity: '0.5',

  path: {
    fill: iconColor === 'primary' ? primary.main : secondary.main,
  },
});

const createCardInfoStyles: StyleFunction<StackProps> = ({
  theme: { palette },
}) => ({
  flexDirection: 'row',
  gap: '8px',
  alignItems: 'center',

  padding: '14px 20px 12px',

  backgroundColor: palette.grey[50],
  borderTopRightRadius: '10px',
  borderTopLeftRadius: '10px',
});

const createDescriptionStyles: StyleFunction<TypographyProps> = ({
  theme: {
    breakpoints: { down },
  },
}) => ({
  fontSize: '14px',
  lineHeight: '16px',

  [down('ms')]: {
    fontSize: '12px',
  },
});

const createCardNumberStyles: StyleFunction<TypographyProps> = ({
  theme: { palette },
}) => ({
  fontSize: '12px',
  lineHeight: '14px',
  color: palette.text.secondary,
});

export {
  createWrapperStyles,
  createBalanceInfoStyles,
  createTittleStyles,
  createAmountStyles,
  createCardIconStyles,
  createCardInfoStyles,
  createDescriptionStyles,
  createCardNumberStyles,
};
