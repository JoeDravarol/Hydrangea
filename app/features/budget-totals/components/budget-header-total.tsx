import { InfoCircleIcon } from '~/components/icons/info-circle-icon';

interface BudgetHeaderTotalProps {
  label: string;
  budgetedAmount: string;
  isNegative?: boolean;
}

export function BudgetHeaderTotal({ label, budgetedAmount, isNegative }: BudgetHeaderTotalProps) {
  return (
    <div className="to-be-budgeted-heading-wrapper">
      <h1 id="budget-header-total">
        <div className="to-be-budgeted-amount">
          <span className="user-data currency">
            {isNegative && '-'}
            <bdi>£</bdi>
            {budgetedAmount}
          </span>
          <InfoCircleIcon aria-hidden="true" />
        </div>
        <div className="to-be-budgeted-label">{label}</div>
      </h1>

      <ReadyToAssignBreakdownButton />
    </div>
  );
}

function ReadyToAssignBreakdownButton() {
  return (
    <button
      className="to-be-budgeted-view-breakdown"
      aria-label="View Ready to Assign Breakdown"
      type="button"
    />
  );
}
