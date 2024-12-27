import type { BudgetTableRowProps } from './budget-table-row-li';
import BudgetTableRow from './budget-table-row-li';

export function BudgetTableCellBudgeted({
  children,
  ...props
}: BudgetTableRowProps) {
  return (
    <BudgetTableRow
      className="budget-table-cell-budgeted"
      role="cell"
      {...props}
    >
      {children}
    </BudgetTableRow>
  );
}
