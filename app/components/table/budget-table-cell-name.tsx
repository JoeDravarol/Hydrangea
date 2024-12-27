import type { BudgetTableRowProps } from './budget-table-row-li';
import BudgetTableRow from './budget-table-row-li';

export function BudgetTableCellName({
  children,
  ...props
}: BudgetTableRowProps) {
  return (
    <BudgetTableRow
      className="budget-table-cell-name"
      role="cell"
      {...props}
    >
      {children}
    </BudgetTableRow>
  );
}
