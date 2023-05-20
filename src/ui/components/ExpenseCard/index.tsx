import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Stack, styled, Typography, Slide } from '@mui/material';
import { getDateStringFromISO } from '../../../common/utils';
import { deleteExpense, Expense } from '../../../redux/slices/expensesSlice';
import ProfileInfo from '../ProfileInfo';
import {
  createWrapperStyles,
  createAmountStyles,
  createDateStyles,
  createDeleteButtonStyles,
} from './styles';

const Wrapper = styled(Stack)(createWrapperStyles);
const Amount = styled(Typography)(createAmountStyles);
const Date = styled(Typography)(createDateStyles);
const DeleteButton = styled(Button)(createDeleteButtonStyles);

interface Props {
  expenseData: Expense;
}

const ExpenseCard = ({
  expenseData: { id, amount, date, recipient },
}: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const dispatch = useDispatch();

  const toggleIsChecked = () => setIsChecked((state) => !state);
  const onDelete = () => dispatch(deleteExpense(id));

  return (
    <Wrapper onClick={toggleIsChecked}>
      <ProfileInfo name={recipient} />

      <Stack alignItems="flex-end" gap="4px">
        <Amount>${amount}</Amount>

        <Date>{getDateStringFromISO(date)}</Date>
      </Stack>

      <Slide direction="left" timeout={300} in={isChecked}>
        <DeleteButton onClick={onDelete}>Delete</DeleteButton>
      </Slide>
    </Wrapper>
  );
};

export default ExpenseCard;
