import ContentLayout from '~/components/layouts/content-layout';
import PageLayout from '~/components/layouts/page-layout';
import BudgetHeader from '~/features/budget-header/budget-header';

export function meta() {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <PageLayout>
      <ContentLayout className="has-budget-views">
        <BudgetHeader />
      </ContentLayout>
    </PageLayout>
  );
}
