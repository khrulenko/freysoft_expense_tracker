import { Stack, styled } from '@mui/material';
import { createLogoStyles } from './styles';

const Logo = styled(Stack)(createLogoStyles);

const MastercardLogo = () => <Logo />;

export default MastercardLogo;
