import AnalyticsSection from '../../Sections/AnalyticsSection';
import BankCard from '../../components/BankCard';
import TransactionsSection from '../../Sections/TransactionsSection';
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
