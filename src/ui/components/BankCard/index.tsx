import { Stack, styled, Typography } from '@mui/material';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import CardNumber from '../CardNumber';
import MastercardLogo from '../MastercardLogo';
import { createCardWrapperStyles, createBackCardStyles } from './styles';

const CardWrapper = styled(Stack)(createCardWrapperStyles);
const BackCard = styled(Stack)(createBackCardStyles);

const BankCard = () => {
  return (
    <Stack>
      <BackCard />

      <CardWrapper>
        <Stack direction="row" justifyContent="space-between">
          <Stack gap="16px">
            <Typography fontSize="18px" lineHeight="21px">
              Total Balance
            </Typography>

            <Typography fontSize="30px" lineHeight="35px">
              $76,22.00
            </Typography>
          </Stack>

          <MoreHorizRoundedIcon />
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <CardNumber number={'2544754537851023'} />

          <MastercardLogo />
        </Stack>
      </CardWrapper>
    </Stack>
  );
};

export default BankCard;
