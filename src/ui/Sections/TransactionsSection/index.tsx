import { Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { getExpenses } from '../../../redux/slices/expensesSlice';
import SectionLayout from '../../layouts/SectionLayout';
import ExpenseCard from '../../components/ExpenseCard';

const TransactionsSection = () => {
  const expenses = useSelector(getExpenses);

  return (
    <SectionLayout tittle="Transactions">
      <Stack gap="16px">
        {expenses.map((expense) => (
          <ExpenseCard key={expense.id} expenseData={expense} />
        ))}
      </Stack>
    </SectionLayout>
  );
};

export default TransactionsSection;
