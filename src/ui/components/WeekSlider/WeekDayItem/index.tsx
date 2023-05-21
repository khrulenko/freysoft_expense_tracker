import { Stack, styled } from '@mui/material';
import { AnyFunction } from '../../../../common/types';
import { createWrapperStyles, createDateStyles } from './styles';

export interface StylingProps {
  isChosen: boolean;
}

export type DateProps = StylingProps & { showMark: boolean };

interface Props {
  dayName: string;
  date: string;
  onClick: AnyFunction;
}

type WeekDayItemProps = StylingProps & Props;

const Wrapper = styled(Stack)(createWrapperStyles);
const Date = styled(Stack)(createDateStyles);

const WeekDayItem = ({
  dayName,
  date,
  isChosen,
  onClick,
}: WeekDayItemProps) => {
  const showMark = ['T', 'W', 'F'].includes(dayName);

  return (
    <Wrapper isChosen={isChosen} onClick={onClick}>
      <div>{dayName}</div>

      <Date showMark={showMark} isChosen={isChosen}>
        {date}
      </Date>
    </Wrapper>
  );
};

export default WeekDayItem;
