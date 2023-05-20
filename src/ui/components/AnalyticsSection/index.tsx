import SectionLayout from '../../layouts/SectionLayout';
import Chart from '../Chart';
import ChooseYearButton from '../ChooseYearButton';

const AnalyticsSection = () => {
  return (
    <SectionLayout header="Analytics" action={<ChooseYearButton />}>
      <Chart />
    </SectionLayout>
  );
};

export default AnalyticsSection;
