import Section from '../../layouts/Section';
import ChooseYearButton from '../ChooseYearButton';

const AnalyticsSection = () => {
  return (
    <Section header="Analytics" action={<ChooseYearButton />}>
      <>chart</>
    </Section>
  );
};

export default AnalyticsSection;
