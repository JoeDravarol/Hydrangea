import type { AmountDisplayProps } from '~/types/component';
import ViewCategoryRecentMoveButton from '~/components/buttons/view-category-recent-move-button';
import ViewMonthlyActivityButton from '~/components/buttons/view-monthly-activity-button';
import { BudgetTableCellActivity } from '~/components/table/budget-table-cell-activity';

export default function TotalActivityAmount({
  amount,
  ...props
}: AmountDisplayProps) {
  return (
    <BudgetTableCellActivity
      className="budget-table-cell-flexed"
      {...props}
    >
      <ViewCategoryRecentMoveButton
        aria-hidden="true"
        tabIndex={-1}
      />

      <ViewMonthlyActivityButton
        amount={amount}
        tabIndex={0}
        aria-disabled="true"
      />
    </BudgetTableCellActivity>
  );
}
