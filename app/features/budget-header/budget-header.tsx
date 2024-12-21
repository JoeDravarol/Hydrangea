import { cn } from '~/utils/cn';
import { BudgetTotals } from '../budget-totals/components/budget-totals';
import Calendar from '../calendar/components/calendar';

export default function BudgetHeader() {
  return (
    <header
      id="ember12"
      className={cn('budget-header', {
        'left-to-budget-is-positive': true,
        'left-to-budget-is-negative': false,
      })}
    >
      <div className="budget-header-flexbox">
        <Calendar />
        <BudgetTotals budgetedAmount={0} />
        <div />
        {/* Budget Header Days */}
      </div>
    </header>
  );
}
