import { ReactNode } from 'react';
import { Stack, Typography, Button, styled } from '@mui/material';
import { createDefaultButtonStyles, createHeaderStyles } from './styles';

interface Props {
  header: string;
  action?: ReactNode;
  children: ReactNode;
}

const DefaultButton = styled(Button)(createDefaultButtonStyles);
const Header = styled(Typography)(createHeaderStyles);

const Section = ({
  header,
  action = <DefaultButton>View All</DefaultButton>,
  children,
}: Props) => {
  return (
    <Stack>
      <Stack direction="row" justifyContent="space-between">
        <Header>{header}</Header>

        {action}
      </Stack>

      {children}
    </Stack>
  );
};

export default Section;
