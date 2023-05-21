import { StackProps } from '@mui/material';
import { DateProps, StylingProps } from '.';
import { StyleFunction } from '../../../../common/types';

const createWrapperStyles: StyleFunction<StackProps & StylingProps> = ({
  isChosen,
}) => ({
  gap: '14px',
  alignItems: 'center',

  width: '39px',

  color: '#615C5C',
  fontWeight: isChosen ? '800' : '400',
  lineHeight: '19px',

  cursor: 'pointer',
});

const createDateStyles: StyleFunction<StackProps & DateProps> = ({
  theme: { palette },
  isChosen,
  showMark,
}) => ({
  alignItems: 'center',
  gap: '12px',

  width: '39px',
  height: '57px',
  padding: '12px 10px 9px',

  borderRadius: '8px',
  backgroundColor: isChosen ? palette.secondary.main : '',

  color: isChosen ? palette.common.white : 'inherit',
  textAlign: 'center',
  lignHeight: '19px',

  '&::after': {
    content: "''",
    display: showMark ? 'block' : 'none',
    flexShrink: 0,

    width: '6px',
    height: '6px',

    borderRadius: '50%',
    backgroundColor: isChosen ? palette.common.white : palette.text.secondary,
  },
});

export { createWrapperStyles, createDateStyles };
