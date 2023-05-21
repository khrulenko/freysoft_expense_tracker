import { Button, Stack, styled } from '@mui/material';
import { ReactComponent as DownArrow } from '../../icons/downArrow.svg';
import { createButtonWrapperStyles } from './styles';

const ButtonWrapper = styled(Button)(createButtonWrapperStyles);

const ChooseYearButton = () => {
  return (
    <ButtonWrapper>
      <Stack direction="row" alignItems="center" gap="8px">
        <span>Year </span>
        <span>- </span>
        <span> 2022</span>
        <DownArrow />
      </Stack>
    </ButtonWrapper>
  );
};

export default ChooseYearButton;
