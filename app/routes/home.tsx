import ContentLayout from '~/components/layouts/content-layout';
import PageLayout from '~/components/layouts/page-layout';
import BudgetHeader from '~/features/budget-header/budget-header';
import BudgetTable from '~/features/budget-table/budget-table';
import SidebarNav from '~/features/sidebar-nav/components/sidebar-nav';

export function meta() {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <PageLayout>
      <SidebarNav />
      <ContentLayout className="has-budget-views">
        <BudgetHeader />
        <BudgetTable />
      </ContentLayout>
    </PageLayout>
  );
}
