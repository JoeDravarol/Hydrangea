import type { AmountDisplayProps } from '~/types/component';
import CurrencyAmount from '~/components/display/currency-amount';
import { BudgetTableCellAvailable } from '~/components/table/budget-table-cell-available';

export default function TotalAvailableAmount({
  amount,
  ...props
}: AmountDisplayProps) {
  return (
    <BudgetTableCellAvailable
      {...props}
    >
      <button
        className="ynab-new-budget-available-number js-budget-available-number user-data"
        title="£25.00 Available to plan your spending—or click to move it to another category!"
        aria-disabled="true"
        disabled
        type="button"
      >
        <CurrencyAmount amount={amount} />
      </button>
    </BudgetTableCellAvailable>
  );
}
