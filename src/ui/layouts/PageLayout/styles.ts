import { StackProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createWrapperStyles: StyleFunction<StackProps> = ({
  theme: { navBarSizes },
}) => ({
  gap: '32px',

  paddingTop: '36px',
  paddingBottom: `${navBarSizes.height + 8}px`,

  overflowX: 'hidden',
  overflowY: 'scroll',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

export { createWrapperStyles };
