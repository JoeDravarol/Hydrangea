import type { ButtonProps } from '~/types/component';
import ChevronDownIcon from '~/components/icons/chevron-down-icon';
import ChevronRightIcon from '~/components/icons/chevron-right-icon';

interface BudgetBreakdownCardHeaderButtonProps extends ButtonProps {
  label: string;
  labelIcon?: React.ReactNode;
  cardBodyId: string;
  isExpanded: boolean;
  children?: React.ReactNode;
}

export default function BudgetBreakdownCardHeaderButton({
  label,
  labelIcon,
  cardBodyId,
  isExpanded,
  className,
  children,
}: BudgetBreakdownCardHeaderButtonProps) {
  return (
    <button
      className="card-roll-up"
      aria-controls={`controls-${cardBodyId}`}
      aria-expanded={isExpanded}
      type="button"
    >
      <h2 className={className}>
        {labelIcon}

        {label}

        {isExpanded
          ? <ChevronDownIcon className="card-chevron" width="12" height="12" />
          : <ChevronRightIcon className="card-chevron" width="12" height="12" />}

        {children}
      </h2>
    </button>
  );
}
