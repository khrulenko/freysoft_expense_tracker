import { useState } from 'react';
import { Button, Stack, Typography, styled } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import {
  createWrapperStyles,
  createSliderNavWrapperStyles,
  createMonthStyles,
} from './styles';
import WeekDayItem from './WeekDayItem';
import { ReactComponent as BackArrowIcon } from '../../icons/backIcon.svg';
import { ReactComponent as ForwardArrowIcon } from '../../icons/forwardIcon.svg';
import { getDatesOfWeek } from '../../../common/utils';

const Wrapper = styled(Stack)(createWrapperStyles);
const SliderNavWrapper = styled(Stack)(createSliderNavWrapperStyles);
const Month = styled(Typography)(createMonthStyles);

const WeekSlider = () => {
  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());
  const [chosenWeekDay, setChosenWeekDay] = useState<number>(3);

  const goToPrevWeek = () => setCurrentDate(currentDate.subtract(1, 'week'));
  const goToNextWeek = () => setCurrentDate(currentDate.add(1, 'week'));

  const startOfWeek = currentDate.startOf('week').add(1, 'day');
  const datesOfWeek = getDatesOfWeek(startOfWeek);

  return (
    <Wrapper>
      <SliderNavWrapper>
        <Button onClick={goToPrevWeek}>
          <BackArrowIcon />
        </Button>

        <Month>{currentDate.format('MMMM YYYY')}</Month>

        <Button onClick={goToNextWeek}>
          <ForwardArrowIcon />
        </Button>
      </SliderNavWrapper>

      <Stack direction="row" justifyContent="space-between">
        {datesOfWeek.map(([dayLetter, date], i) => (
          <WeekDayItem
            key={i}
            dayName={dayLetter}
            date={date}
            isChosen={chosenWeekDay === i}
            onClick={() => setChosenWeekDay(i)}
          />
        ))}
      </Stack>
    </Wrapper>
  );
};

export default WeekSlider;
