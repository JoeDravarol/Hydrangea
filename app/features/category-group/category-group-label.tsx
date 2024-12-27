import PlusCircleIcon from '~/components/icons/plus-circle-icon';
import { BudgetTableCellName } from '~/components/table/budget-table-cell-name';

interface CategoryGroupLabelProps {
  label: string;
}

export default function CategoryGroupLabel({
  label,
  ...props
}: CategoryGroupLabelProps) {
  return (
    <BudgetTableCellName
      role="rowheader"
      {...props}
    >
      <button
        className="button budget-table-cell-button budget-table-cell-edit-category user-data"
        title={label}
      >
        {label}
      </button>

      <button
        className="button budget-table-cell-add-category budget-table-cell-button"
        aria-label="Add Category"
        title="Add Category"
      >
        <PlusCircleIcon />
      </button>
    </BudgetTableCellName>
  );
}
