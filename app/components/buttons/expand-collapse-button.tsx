import type { ButtonProps } from '~/types/component';
import ChevronDownIcon from '~/components/icons/chevron-down-icon';
import ChevronRightIcon from '~/components/icons/chevron-right-icon';

interface ExpandCollapseButtonProps extends ButtonProps {
  label: string;
  isExpanded: boolean;
}

export default function ExpandCollapseButton({
  label,
  isExpanded,
  ...props
}: ExpandCollapseButtonProps) {
  return (
    <button
      className="js-budget-table-cell-collapse"
      aria-label={label}
      title={label}
      type="button"
      {...props}
    >
      {isExpanded ? <ChevronDownIcon /> : <ChevronRightIcon />}
    </button>
  );
}
