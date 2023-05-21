import { Avatar, Stack, styled, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import {
  createWrapperStyles,
  createAccAvatarStyles,
  createHeaderStyles,
} from './styles';
import { ReactComponent as BellIcon } from '../../icons/bell.svg';

interface TopBarProps {
  header: string;
}

const Wrapper = styled(Stack)(createWrapperStyles);
const AccAvatar = styled(Avatar)(createAccAvatarStyles);
const Header = styled(Typography)(createHeaderStyles);

const TopBar = ({ header }: TopBarProps) => {
  return (
    <Wrapper>
      <AccAvatar variant="rounded">
        <PersonIcon />
      </AccAvatar>

      <Header>{header}</Header>

      <BellIcon />
    </Wrapper>
  );
};

export default TopBar;
