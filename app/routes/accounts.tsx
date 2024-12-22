import ContentLayout from '~/components/layouts/content-layout';
import PageLayout from '~/components/layouts/page-layout';
import SidebarNav from '~/features/sidebar-nav/components/sidebar-nav';

export function meta() {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Accounts() {
  return (
    <PageLayout>
      <SidebarNav />
      <ContentLayout className="has-budget-views">
        <h1>Accounts</h1>
      </ContentLayout>
    </PageLayout>
  );
}
