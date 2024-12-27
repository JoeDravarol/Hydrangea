import type { BudgetTableRowProps } from './budget-table-row-li';
import BudgetTableRow from './budget-table-row-li';

export function BudgetTableCellCollapse({
  children,
  ...props
}: BudgetTableRowProps) {
  return (
    <BudgetTableRow
      className="budget-table-cell-collapse"
      role="cell"
      {...props}
    >
      {children}
    </BudgetTableRow>
  );
}
