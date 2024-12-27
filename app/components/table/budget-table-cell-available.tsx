import type { BudgetTableRowProps } from './budget-table-row-li';
import BudgetTableRow from './budget-table-row-li';

export function BudgetTableCellAvailable({
  children,
  ...props
}: BudgetTableRowProps) {
  return (
    <BudgetTableRow
      className="budget-table-cell-available"
      role="cell"
      {...props}
    >
      {children}
    </BudgetTableRow>
  );
}
