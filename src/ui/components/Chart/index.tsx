import { useState } from 'react';
import { Stack, styled } from '@mui/material';
import CharItem, { ChartItemData } from './CharItem';
import { createWrapperStyles } from './styles';

const chartData: ChartItemData[] = [
  {
    month: 'Jan',
    amount: '1.234',
    height: '37px',
  },
  {
    month: 'Feb',
    amount: '2.234',
    height: '60px',
  },
  {
    month: 'Mar',
    amount: '5.234',
    height: '113px',
  },
  {
    month: 'Apr',
    amount: '2.234',
    height: '60px',
  },
  {
    month: 'May',
    amount: '1.000',
    height: '31px',
  },
  {
    month: 'Jun',
    amount: '2.900',
    height: '67px',
  },
  {
    month: 'Jul',
    amount: '3.900',
    height: '100px',
  },
];

const Wrapper = styled(Stack)(createWrapperStyles);

const Chart = () => {
  const [chosenMonth, setChosenMonth] = useState('Mar');

  return (
    <Wrapper>
      {chartData.map(({ month, amount, height }) => (
        <CharItem
          key={month}
          month={month}
          amount={amount}
          height={height}
          isChosen={month === chosenMonth}
          setMonth={setChosenMonth}
        />
      ))}
    </Wrapper>
  );
};

export default Chart;
