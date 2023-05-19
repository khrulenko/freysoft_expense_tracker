import { ReactNode } from 'react';
import { Stack, styled } from '@mui/material';
import { createWrapperStyles } from './styles';

interface PageLayoutProps {
  children: ReactNode;
}

const Wrapper = styled(Stack)(createWrapperStyles);

const PageLayout = ({ children }: PageLayoutProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageLayout;
