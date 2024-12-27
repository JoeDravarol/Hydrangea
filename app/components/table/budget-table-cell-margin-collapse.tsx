import BudgetTableRow from './budget-table-row-li';

export default function BudgetTableCellMarginCollapse() {
  return (
    <BudgetTableRow
      className="budget-table-cell-collapse"
      aria-hidden="true"
    >
      &nbsp;
    </BudgetTableRow>
  );
}
