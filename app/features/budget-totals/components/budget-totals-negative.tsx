import type { BudgetTotalsPositiveProps } from './budget-totals-positive';
import AutoAssignButton from './auto-assign-button';
import { BudgetHeaderTotal } from './budget-header-total';
import Layout from './layout';

export default function BudgetTotalsNegative({ budgetedAmount }: BudgetTotalsPositiveProps) {
  return (
    <Layout
      className="is-negative"
    >
      <BudgetHeaderTotal
        label="You assigned more than you have"
        budgetedAmount={budgetedAmount}
        isNegative
      />
      <AutoAssignButton
        label="Fix This"
        ariaDescribedBy="budget-header-total"
      />
    </Layout>
  );
}
