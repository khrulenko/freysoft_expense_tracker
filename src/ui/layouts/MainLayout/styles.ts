import { PaperProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createWrapperStyles: StyleFunction<PaperProps> = () => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',

  width: '100%',
  maxWidth: '414px',
  height: '100%',

  borderRadius: '30px',

  overflow: 'hidden',
});

export { createWrapperStyles };
