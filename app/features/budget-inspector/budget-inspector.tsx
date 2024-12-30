import BudgetBreakdownAutoAssign from '~/features/budget-breakdown-auto-assign/budget-breakdown-auto-assign';
import BudgetBreakdownMonthlyTotals from '~/features/budget-breakdown-monthly-totals/budget-breakdown-monthly-totals';

export default function BudgetInspector() {
  return (
    <aside className="budget-inspector" style={{ width: '33%' }}>
      <div className="budget-inspector-content">
        <div className="budget-breakdown ">
          <BudgetBreakdownAutoAssign />
          <BudgetBreakdownMonthlyTotals
            availableToSpendAmount={0}
            budgetedAmount={0}
            spentAmount={0}
            leftOverAmountFromLastMonth={0}
            selectedMonth="December"
            prevMonth="November"
          />
        </div>
      </div>
    </aside>
  );
}
