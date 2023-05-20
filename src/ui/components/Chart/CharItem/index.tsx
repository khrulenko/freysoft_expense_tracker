import { Stack, Typography, styled } from '@mui/material';
import { AnyFunction } from '../../../../common/types';
import {
  createWrapperStyles,
  createAmountStyles,
  createBodyStyles,
  createMonthStyles,
} from './styles';

export interface ChartItemData {
  month: string;
  amount: string;
  height: string;
}

export interface StylingProps {
  isChosen: boolean;
}

export interface Props {
  setMonth: AnyFunction;
}

type ChartItemProps = ChartItemData & StylingProps & Props;

const Wrapper = styled(Stack)(createWrapperStyles);
const Amount = styled(Typography)(createAmountStyles);
const Body = styled(Stack)(createBodyStyles);
const Month = styled(Typography)(createMonthStyles);

const CharItem = ({
  month,
  amount,
  height,
  isChosen,
  setMonth,
}: ChartItemProps) => {
  const moneyAmount = amount.replace('.', ',');

  return (
    <Wrapper onClick={() => setMonth(month)}>
      <div>
        <Amount isChosen={isChosen}>${moneyAmount}</Amount>

        <Body height={height} isChosen={isChosen} />
      </div>

      <Month isChosen={isChosen}>{month}</Month>
    </Wrapper>
  );
};

export default CharItem;
