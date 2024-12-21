import CaretDownIcon from '~/components/icons/caret-down-icon';
import AutoAssignButton from './auto-assign-button';
import BudgetHeaderTotal from './budget-header-total';
import Layout from './layout';

export interface BudgetTotalsPositiveProps {
  budgetedAmount: string;
}

export default function BudgetTotalsPositive({ budgetedAmount }: BudgetTotalsPositiveProps) {
  return (
    <Layout
      className="is-positive"
    >
      <BudgetHeaderTotal
        label="Ready to Assign"
        budgetedAmount={budgetedAmount}
      />
      <AutoAssignButton
        label="Assign"
        ariaDescribedBy="budget-header-total"
      >
        <CaretDownIcon aria-hidden="true" />
      </AutoAssignButton>
    </Layout>
  );
}
