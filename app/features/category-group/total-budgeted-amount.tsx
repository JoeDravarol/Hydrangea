import type { AmountDisplayProps } from '~/types/component';
import { CurrencyAmountButton } from '~/components/display/currency-amount';
import { BudgetTableCellBudgeted } from '~/components/table/budget-table-cell-budgeted';

export default function TotalBudgetedAmount({
  amount,
  ...props
}: AmountDisplayProps) {
  return (
    <BudgetTableCellBudgeted
      {...props}
    >
      <CurrencyAmountButton
        amount={amount}
        aria-disabled="true"
      />
    </BudgetTableCellBudgeted>
  );
}
