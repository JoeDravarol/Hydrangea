import BudgetTableRow from '~/components/table/budget-table-row-li';

export default function BudgetTableCellMarginRight() {
  return (
    <BudgetTableRow
      className="budget-table-cell-margin-right"
      aria-hidden="true"
    >
      &nbsp;
    </BudgetTableRow>
  );
}
