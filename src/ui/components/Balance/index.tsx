import { Stack, Typography, styled } from '@mui/material';
import {
  createAmountStyles,
  createBalanceInfoStyles,
  createCardIconStyles,
  createTittleStyles,
  createWrapperStyles,
  createCardInfoStyles,
  createDescriptionStyles,
  createCardNumberStyles,
} from './styles';
import { ReactComponent as Icon } from '../../icons/cardIcon.svg';

type ColorSystem = 'primary' | 'secondary';

export interface IconProps {
  iconColor: ColorSystem;
}

export interface Props {
  colorSystem: ColorSystem;
}

const Wrapper = styled(Stack)(createWrapperStyles);
const BalanceInfo = styled(Stack)(createBalanceInfoStyles);
const Tittle = styled(Typography)(createTittleStyles);
const Amount = styled(Typography)(createAmountStyles);
const CardIcon = styled(Icon)(createCardIconStyles);
const CardInfo = styled(Stack)(createCardInfoStyles);
const Description = styled(Typography)(createDescriptionStyles);
const CardNumber = styled(Typography)(createCardNumberStyles);

const Balance = ({ colorSystem }: Props) => {
  return (
    <Wrapper colorSystem={colorSystem}>
      <BalanceInfo>
        <Tittle>Total balance</Tittle>

        <Amount>$76,22.00</Amount>
      </BalanceInfo>

      <CardInfo>
        <CardIcon iconColor={colorSystem} />

        <Stack>
          <Description>Bank Account</Description>

          <CardNumber>**** **** 1965</CardNumber>
        </Stack>
      </CardInfo>
    </Wrapper>
  );
};

export default Balance;
