import type { BudgetTableRowProps } from './budget-table-row-li';
import { cn } from '~/utils/cn';
import BudgetTableRow from './budget-table-row-li';

export function BudgetTableCellActivity({
  children,
  className,
  ...props
}: BudgetTableRowProps) {
  return (
    <BudgetTableRow
      className={cn('budget-table-cell-activity', className)}
      role="cell"
      {...props}
    >
      {children}
    </BudgetTableRow>
  );
}
