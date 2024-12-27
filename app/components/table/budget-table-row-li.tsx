import type { DivProps } from '~/types/component';
import { cn } from '~/utils/cn';

export interface BudgetTableRowProps extends DivProps {
  children: React.ReactNode;
}

export default function BudgetTableRow({ className, children, ...props }: BudgetTableRowProps) {
  return (
    <div
      className={cn('budget-table-row-li', className)}
      {...props}
    >
      {children}
    </div>
  );
}
