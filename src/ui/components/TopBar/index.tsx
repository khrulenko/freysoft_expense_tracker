import { Avatar, Stack, styled, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { createWrapperStyles, createAccAvatarStyles } from './styles';
import { ReactComponent as BellIcon } from '../../icons/bell.svg';

interface TopBarProps {
  header: string;
}

const Wrapper = styled(Stack)(createWrapperStyles);
const AccAvatar = styled(Avatar)(createAccAvatarStyles);

const TopBar = ({ header }: TopBarProps) => {
  return (
    <Wrapper>
      <AccAvatar variant="rounded">
        <PersonIcon />
      </AccAvatar>

      <Typography variant="h5" fontWeight="500" color="common.black">
        {header}
      </Typography>

      <BellIcon />
    </Wrapper>
  );
};

export default TopBar;
