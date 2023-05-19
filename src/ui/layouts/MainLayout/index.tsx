import { Outlet } from 'react-router-dom';
import { Paper, styled } from '@mui/material';
import { createWrapperStyles } from './styles';
import Navigation from '../../components/Navigation';

const Wrapper = styled(Paper)(createWrapperStyles);

const MainLayout = () => {
  return (
    <Wrapper>
      <Outlet />

      <Navigation />
    </Wrapper>
  );
};

export default MainLayout;
