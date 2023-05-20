import { Typography, styled } from '@mui/material';
import { createTextWrapperStyles } from './styles';

interface Props {
  number: string;
}

const TextWrapper = styled(Typography)(createTextWrapperStyles);

const CardNumber = ({ number }: Props) => {
  const parts = number.match(/.{1,4}/g);

  if (!parts) return null;

  return (
    <TextWrapper>
      {parts.map((part, i) => (
        <span key={i}>{part}</span>
      ))}
    </TextWrapper>
  );
};

export default CardNumber;
