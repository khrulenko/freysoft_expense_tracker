import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import HandymanIcon from '@mui/icons-material/Handyman';
import AlertPageLayout from '../../layouts/AlertPageLayout';
import { URL_HOME } from '../../../routes/URLs';

const BuildingPageWarning = () => {
  const navigate = useNavigate();
  const goToWeatherPage = () => navigate(URL_HOME);

  const actionButton = (
    <Button onClick={goToWeatherPage} variant="contained">
      Go to home page
    </Button>
  );

  return (
    <AlertPageLayout
      action={actionButton}
      icon={<HandymanIcon fontSize="large" />}
    >
      Hm, looks like this page is under construction
      <br />
      Try turning back to home page
    </AlertPageLayout>
  );
};

export default BuildingPageWarning;
