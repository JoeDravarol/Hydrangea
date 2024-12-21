import { formatToTwoDecimalPlaces, removeNegativeSign } from '~/utils/format';
import BudgetTotalsNegative from './budget-totals-negative';
import BudgetTotalsNeutral from './budget-totals-neutral';
import BudgetTotalsPositive from './budget-totals-positive';

interface BudgetTotalsProps {
  budgetedAmount: number;
}

export function BudgetTotals({ budgetedAmount }: BudgetTotalsProps) {
  const isZero = budgetedAmount === 0;
  const isNegative = budgetedAmount < 0;
  const twoDecimalBudgetAmount = formatToTwoDecimalPlaces(budgetedAmount);

  if (isZero) {
    return <BudgetTotalsNeutral />;
  }

  if (isNegative) {
    return <BudgetTotalsNegative budgetedAmount={removeNegativeSign(twoDecimalBudgetAmount)} />;
  }

  return <BudgetTotalsPositive budgetedAmount={twoDecimalBudgetAmount} />;
}
