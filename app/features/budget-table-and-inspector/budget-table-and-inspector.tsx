import BudgetInspector from '~/features/budget-inspector/budget-inspector';
import BudgetTable from '~/features/budget-table/budget-table';

export default function BudgetTableAndInspector() {
  return (
    <div className="budget-table-and-inspector js-budget-table-and-inspector">
      <BudgetTable />
      <BudgetInspector />
    </div>
  );
}
