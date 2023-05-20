import { StackProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createCardWrapperStyles: StyleFunction<StackProps> = ({
  theme: { palette },
}) => ({
  position: 'relative',
  gap: '40px',

  padding: '23px 29px',

  borderRadius: '24px',
  background: '#2F3046',
  color: palette.common.white,
});

const createBackCardStyles: StyleFunction<StackProps> = () => ({
  alignSelf: 'center',

  width: '80%',
  height: '34px',

  borderTopLeftRadius: '24px',
  borderTopRightRadius: '24px',
  backgroundColor: '#9A63FB',
});

export { createCardWrapperStyles, createBackCardStyles };
