import SectionLayout from '../../layouts/SectionLayout';
import Chart from '../../components/Chart';
import ChooseYearButton from '../../components/ChooseYearButton';

const AnalyticsSection = () => {
  return (
    <SectionLayout tittle="Analytics" action={<ChooseYearButton />}>
      <Chart />
    </SectionLayout>
  );
};

export default AnalyticsSection;
