import { Stack } from '@mui/material/';
import Balance from '../../components/Balance';
import WeekSlider from '../../components/WeekSlider';
import PageLayout from '../../layouts/PageLayout';

const ExpensesPage = () => {
  return (
    <PageLayout>
      <WeekSlider />

      <Stack direction="row" justifyContent="space-between">
        <Balance colorSystem="primary" />

        <Balance colorSystem="secondary" />
      </Stack>
    </PageLayout>
  );
};

export default ExpensesPage;
