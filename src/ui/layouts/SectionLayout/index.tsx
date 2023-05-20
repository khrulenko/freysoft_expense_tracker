import { ReactNode } from 'react';
import { Stack, Typography, Button, styled } from '@mui/material';
import {
  createDefaultButtonStyles,
  createHeaderStyles,
  createTittleStyles,
} from './styles';

interface Props {
  tittle: string;
  action?: ReactNode;
  children: ReactNode;
}

const DefaultButton = styled(Button)(createDefaultButtonStyles);
const Header = styled(Stack)(createHeaderStyles);
const Tittle = styled(Typography)(createTittleStyles);

const SectionLayout = ({
  tittle,
  action = <DefaultButton>View All</DefaultButton>,
  children,
}: Props) => {
  return (
    <Stack>
      <Header>
        <Tittle>{tittle}</Tittle>

        {action}
      </Header>

      {children}
    </Stack>
  );
};

export default SectionLayout;
