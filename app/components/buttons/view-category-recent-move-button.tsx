import type { ButtonProps } from '~/types/component';
import ClockArrowBackIcon from '~/components/icons/clock-arrow-back-icon';

export default function ViewCategoryRecentMoveButton({
  ...props
}: ButtonProps) {
  return (
    <button
      className="budget-table-cell-category-moves js-budget-toolbar-open-category-moves"
      type="button"
      aria-hidden="true"
      tabIndex={-1}
      {...props}
    >
      <div className="category-moves-moves-icon-wrapper">
        <ClockArrowBackIcon />
      </div>
    </button>
  );
}
