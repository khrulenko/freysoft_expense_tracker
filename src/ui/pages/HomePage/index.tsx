import AnalyticsSection from '../../sections/AnalyticsSection';
import BankCard from '../../components/BankCard';
import TransactionsSection from '../../sections/TransactionsSection';
import PageLayout from '../../layouts/PageLayout';

const HomePage = () => {
  return (
    <PageLayout>
      <BankCard />

      <AnalyticsSection />

      <TransactionsSection />
    </PageLayout>
  );
};

export default HomePage;
