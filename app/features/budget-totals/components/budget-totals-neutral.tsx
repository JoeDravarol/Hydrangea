import CheckCircleFillIcon from '~/components/icons/check-circle-fill-icon';
import AutoAssignIcon from './auto-assign-icon';
import BudgetHeaderTotal from './budget-header-total';
import Layout from './layout';

export default function BudgetTotalsNeutral() {
  return (
    <Layout>
      <BudgetHeaderTotal
        label="All Money Assigned"
        budgetedAmount="0.00"
      />

      <AutoAssignIcon
        label="All Money Assigned"
        ariaDescribedBy="budget-header-total"
      >
        <CheckCircleFillIcon aria-hidden="true" />
      </AutoAssignIcon>
    </Layout>
  );
}
