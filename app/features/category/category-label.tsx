import CategoryTargetProgress from './category-target-progress';

interface CategoryLabelProps {
  label: string;
}

export default function CategoryLabel({
  label,
}: CategoryLabelProps) {
  return (
    <div className="budget-table-cell-button budget-table-cell-edit-category user-data">
      <div className="budget-table-cell-edit-category-label js-budget-table-cell-edit-category-label">
        <div className="budget-table-cell-goal-nowrap">
          <button title={label}>{label}</button>

          <div className="budget-table-cell-goal-gap" />

          <div className="budget-table-cell-goal-status">
          </div>
        </div>

        <div className="budget-table-cell-goal-status-details">
        </div>
      </div>

      <CategoryTargetProgress />
    </div>
  );
}
