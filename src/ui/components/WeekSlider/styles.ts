import { StackProps, TypographyProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createWrapperStyles: StyleFunction<StackProps> = ({
  theme: { palette },
}) => ({
  gap: '16px',

  padding: '20px 10px 15px',

  borderRadius: '21px',
  backgroundColor: palette.grey[50],
});

const createSliderNavWrapperStyles: StyleFunction<StackProps> = () => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  height: '19px',
});

const createMonthStyles: StyleFunction<TypographyProps> = () => ({
  fontWeight: '500',
  lineHeight: '19px',
});

export { createWrapperStyles, createSliderNavWrapperStyles, createMonthStyles };
