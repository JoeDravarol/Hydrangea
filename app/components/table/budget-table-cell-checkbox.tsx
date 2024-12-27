import type { BudgetTableRowProps } from './budget-table-row-li';
import BudgetTableRow from './budget-table-row-li';

export function BudgetTableCellCheckbox({
  children,
  ...props
}: BudgetTableRowProps) {
  return (
    <BudgetTableRow
      className="budget-table-cell-checkbox"
      role="cell"
      {...props}
    >
      {children}
    </BudgetTableRow>
  );
}
