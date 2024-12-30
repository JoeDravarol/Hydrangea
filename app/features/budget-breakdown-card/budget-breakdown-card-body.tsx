import type { DivProps } from '~/types/component';

interface BudgetBreakdownCardBodyProps extends DivProps {
  children: React.ReactNode;
}

export default function BudgetBreakdownCardBody({
  id,
  children,
}: BudgetBreakdownCardBodyProps) {
  return (
    <div className="card-body" id={`controls-${id}`}>
      {children}
    </div>
  );
}
