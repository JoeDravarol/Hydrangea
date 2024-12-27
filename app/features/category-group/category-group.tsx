import CheckboxButton from '~/components/buttons/checkbox-button';
import ExpandCollapseButton from '~/components/buttons/expand-collapse-button';
import { BudgetTableCellCheckbox } from '~/components/table/budget-table-cell-checkbox';
import { BudgetTableCellCollapse } from '~/components/table/budget-table-cell-collapse';
import BudgetTableCellMarginLeft from '~/components/table/budget-table-cell-margin-left';
import BudgetTableCellMarginRight from '~/components/table/budget-table-cell-margin-right';
import { cn } from '~/utils/cn';
import CategoryGroupLabel from './category-group-label';
import TotalActivityAmount from './total-activity-amount';
import TotalAvailableAmount from './total-available-amount';
import TotalBudgetedAmount from './total-budgeted-amount';

interface CategoryGroupProps {
  isExpanded: boolean;
  totalBudgetedAmount: number;
  totalActivityAmount: number;
  totalAvailableAmount: number;
}

export default function CategoryGroup({
  isExpanded,
  totalBudgetedAmount,
  totalActivityAmount,
  totalAvailableAmount,
}: CategoryGroupProps) {
  return (
    <div
      id="ember18"
      draggable="true"
      className={cn(
        'budget-table-row js-budget-table-row budget-table-row-ul is-master-category',
        {
          iscollapsed: isExpanded,
        },
      )}
      role="row"
      aria-level={1}
      aria-expanded={isExpanded}
    >
      <BudgetTableCellMarginLeft />

      <BudgetTableCellCollapse
        aria-colindex={2}
      >
        <ExpandCollapseButton
          isExpanded={isExpanded}
          label={
            isExpanded ? 'Collapse Bills categories' : 'Expand Bills categories'
          }
        />
      </BudgetTableCellCollapse>

      <BudgetTableCellCheckbox
        aria-colindex={1}
      >
        <CheckboxButton
          label="Bills"
        />
      </BudgetTableCellCheckbox>

      <CategoryGroupLabel label="Bills" aria-colindex={3} />

      <TotalBudgetedAmount amount={totalBudgetedAmount} aria-colindex={4} />
      <TotalActivityAmount amount={totalActivityAmount} aria-colindex={5} />
      <TotalAvailableAmount amount={totalAvailableAmount} aria-colindex={6} />

      <BudgetTableCellMarginRight />
    </div>
  );
}
