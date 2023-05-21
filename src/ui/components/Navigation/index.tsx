import { useLocation, useNavigate } from 'react-router-dom';
import {
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  styled,
} from '@mui/material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { ReactComponent as HomeIcon } from '../../icons/homeIcon.svg';
import { ReactComponent as CardIcon } from '../../icons/cardIcon.svg';
import { ReactComponent as NewIcon } from '../../icons/newIcon.svg';
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
  { url: URL_HOME, icon: <HomeIcon /> },
  {
    url: URL_EXPENSES,
    icon: <CardIcon width={28} height={22} />,
  },
  { url: URL_NEW, icon: <NewIcon /> },
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
