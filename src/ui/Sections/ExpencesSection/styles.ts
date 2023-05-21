import { StackProps, TypographyProps } from '@mui/material';
import { ChartProps } from '.';
import { StyleFunction } from '../../../common/types';

const createWrapperStyles: StyleFunction<StackProps> = ({
  theme: { palette },
}) => ({
  gap: '24px',

  padding: '20px 14px',

  backgroundColor: palette.grey[50],
  borderRadius: '21px',
});

const createDateStyles: StyleFunction<TypographyProps> = ({
  theme: { palette },
}) => ({
  fontSize: '12px',
  lineHeight: '12px',
  color: palette.text.secondary,
});

const createSpendsWrapperStyles: StyleFunction<StackProps> = () => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const createTittleStyles: StyleFunction<TypographyProps> = () => ({
  lineHeight: '19px',
  color: '#615C5C',
});

const createAmountStyles: StyleFunction<TypographyProps> = () => ({
  lineHeight: '21px',
  fontWeight: '500',
});

const createChartStyles: StyleFunction<StackProps & ChartProps> = ({
  theme: { palette },
  percentage,
}) => ({
  width: `${percentage}%`,
  height: '13px',
  backgroundColor: palette.primary.main,
  borderRadius: '13px',
});

export {
  createWrapperStyles,
  createDateStyles,
  createSpendsWrapperStyles,
  createTittleStyles,
  createAmountStyles,
  createChartStyles,
};
