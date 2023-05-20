import { ButtonProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createButtonWrapperStyles: StyleFunction<ButtonProps> = ({
  theme: { palette },
}) => ({
  fontSize: '13px',
  fontWeight: '400',
  lineHeight: '15px',
  color: palette.common.white,
  backgroundColor: palette.secondary.main,

  '& path': {
    transition: 'fill 0.3s',
  },

  '&:hover': {
    color: palette.common.black,

    path: {
      fill: 'black',
    },
  },
});

export { createButtonWrapperStyles };
