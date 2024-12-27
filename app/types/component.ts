import type { BudgetTableRowProps } from '~/components/table/budget-table-row-li';

export type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface AmountDisplayProps extends Omit<BudgetTableRowProps, 'children'> {
  amount: number;
}
