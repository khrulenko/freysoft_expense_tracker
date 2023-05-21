import { Stack, styled, Typography } from '@mui/material';
import { getAmount } from '../../../common/utils';
import ProfileInfo from '../../components/ProfileInfo';
import SectionLayout from '../../layouts/SectionLayout';
import {
  createWrapperStyles,
  createDateStyles,
  createSpendsWrapperStyles,
  createTittleStyles,
  createAmountStyles,
  createChartStyles,
} from './styles';

export interface ChartProps {
  percentage: string;
}

const Wrapper = styled(Stack)(createWrapperStyles);
const Date = styled(Typography)(createDateStyles);
const SpendsWrapper = styled(Stack)(createSpendsWrapperStyles);
const Tittle = styled(Typography)(createTittleStyles);
const Amount = styled(Typography)(createAmountStyles);
const Chart = styled(Stack)(createChartStyles);

const ExpensesSection = () => {
  const totalSpend = '2,486';
  const totalBudget = '3,000';

  const spendProportion =
    (getAmount(totalSpend) / getAmount(totalBudget)) * 100;
  const percentage = spendProportion.toFixed(2);

  return (
    <SectionLayout tittle="Expenses">
      <Wrapper>
        <Stack direction="row" justifyContent="space-between">
          <ProfileInfo name={'Nike Super Store'} />
          <Date>April 2022</Date>
        </Stack>

        <Stack gap="12px">
          <SpendsWrapper>
            <Stack gap="16px">
              <Tittle>Total Spend</Tittle>
              <Amount color="success.main">$2,486</Amount>
            </Stack>

            <Stack gap="16px">
              <Tittle>Total Budget</Tittle>
              <Amount>$3,000</Amount>
            </Stack>

            <Stack>
              <Amount color="success.main">{percentage}%</Amount>
            </Stack>
          </SpendsWrapper>

          <Chart percentage={percentage} />
        </Stack>
      </Wrapper>
    </SectionLayout>
  );
};

export default ExpensesSection;
