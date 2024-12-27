import CurrencyAmount from '~/components/display/currency-amount';
import { cn } from '~/utils/cn';

interface MoveSpendingButtonProps {
  assignedBudget: number;
}

export default function MoveSpendingButton({
  assignedBudget,
}: MoveSpendingButtonProps) {
  const isPositive = assignedBudget > 0;
  const isNegative = assignedBudget < 0;
  const isZero = assignedBudget === 0;
  const negativeSign = isNegative ? '-' : '';

  return (
    <button
      className={cn('ynab-new-budget-available-number js-budget-available-number user-data', {
        positive: isPositive,
        negative: isNegative,
        zero: isZero,
      })}
      title={`${negativeSign}£${assignedBudget} Available to plan your spending—or click to move it to another category!`}
      aria-disabled="false"
      type="button"
    >
      <CurrencyAmount amount={assignedBudget} />
    </button>
  );
}
