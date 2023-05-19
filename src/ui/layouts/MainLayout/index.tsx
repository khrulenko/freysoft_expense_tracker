import { Outlet, useLocation } from 'react-router-dom';
import { Paper, styled } from '@mui/material';
import { createWrapperStyles } from './styles';
import Navigation from '../../components/Navigation';
import TopBar from '../../components/TopBar';
import { getHeaderByUrl } from '../../../common/utils';

const Wrapper = styled(Paper)(createWrapperStyles);

const MainLayout = () => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <TopBar header={getHeaderByUrl(pathname)} />

      <Outlet />

      <Navigation />
    </Wrapper>
  );
};

export default MainLayout;
