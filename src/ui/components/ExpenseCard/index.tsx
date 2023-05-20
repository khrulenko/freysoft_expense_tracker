import { Stack, styled, Typography } from '@mui/material';
import { getDateFromISO } from '../../../common/utils';
import { Expense } from '../../../redux/slices/expensesSlice';
import ProfileInfo from '../ProfileInfo';
import {
  createWrapperStyles,
  createAmountStyles,
  createDateStyles,
} from './styles';

const Wrapper = styled(Stack)(createWrapperStyles);
const Amount = styled(Typography)(createAmountStyles);
const Date = styled(Typography)(createDateStyles);

interface Props {
  expenseData: Expense;
}

const ExpenseCard = ({ expenseData: { amount, date, recipient } }: Props) => {
  return (
    <Wrapper>
      <ProfileInfo name={recipient} />

      <Stack alignItems="flex-end" gap="4px">
        <Amount>${amount}</Amount>

        <Date>{getDateFromISO(date)}</Date>
      </Stack>
    </Wrapper>
  );
};

export default ExpenseCard;
