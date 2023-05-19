import { useLocation, useNavigate } from 'react-router-dom';
import {
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  styled,
} from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { createWrapperStyles, createNavWrapperStyles } from './styles';
import {
  URL_CALENDAR,
  URL_EXPENSES,
  URL_HOME,
  URL_NEW,
  URL_SETTINGS,
} from '../../../routes/URLs';

const Wrapper = styled(Paper)(createWrapperStyles);
const NavWrapper = styled(BottomNavigation)(createNavWrapperStyles);

const navButtons = [
  { url: URL_HOME, icon: <HomeRoundedIcon fontSize="large" /> },
  { url: URL_EXPENSES, icon: <CreditCardRoundedIcon fontSize="large" /> },
  { url: URL_NEW, icon: <AddCircleRoundedIcon fontSize="inherit" /> },
  { url: URL_CALENDAR, icon: <CalendarTodayOutlinedIcon /> },
  { url: URL_SETTINGS, icon: <SettingsOutlinedIcon /> },
];

const Navigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Wrapper elevation={2}>
      <NavWrapper value={pathname}>
        {navButtons.map(({ icon, url }) => (
          <BottomNavigationAction
            key={url}
            value={url}
            onClick={() => navigate(url)}
            icon={icon}
          />
        ))}
      </NavWrapper>
    </Wrapper>
  );
};

export default Navigation;
