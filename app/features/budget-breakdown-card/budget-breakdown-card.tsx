import type { DivProps } from '~/types/component';
import { cn } from '~/utils/cn';

interface BudgetBreakdownCardProps extends DivProps {
  children: React.ReactNode;
}

export default function BudgetBreakdownCard({
  className,
  children,
}: BudgetBreakdownCardProps) {
  return (
    <section className={cn('card', className)}>
      {children}
    </section>
  );
}
