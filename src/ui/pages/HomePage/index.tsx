import AnalyticsSection from '../../components/AnalyticsSection';
import BankCard from '../../components/BankCard';
import TransactionsSection from '../../components/TransactionsSection';
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
