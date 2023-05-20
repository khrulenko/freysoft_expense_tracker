import { Stack, Avatar as MUIAvatar, Typography, styled } from '@mui/material';
import { createAvatarStyles, createWrapperStyles } from './styles';

interface Props {
  name: string;
}

const Wrapper = styled(Stack)(createWrapperStyles);
const Avatar = styled(MUIAvatar)(createAvatarStyles);

const ProfileInfo = ({ name }: Props) => {
  return (
    <Wrapper>
      <Avatar>{name[0]}</Avatar>

      <Stack gap="4px">
        <Typography fontWeight="500" lineHeight="19px">
          {name}
        </Typography>

        <Typography fontSize="12px" lineHeight="12px">
          Bank Account
        </Typography>
      </Stack>
    </Wrapper>
  );
};

export default ProfileInfo;
