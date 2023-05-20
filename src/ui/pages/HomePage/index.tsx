import AnalyticsSection from '../../components/AnalyticsSection';
import BankCard from '../../components/BankCard';
import PageLayout from '../../layouts/PageLayout';

const HomePage = () => {
  return (
    <PageLayout>
      <BankCard />

      <AnalyticsSection />
    </PageLayout>
  );
};

export default HomePage;
