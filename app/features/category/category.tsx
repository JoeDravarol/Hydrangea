import React from 'react';
import CheckboxButton from '~/components/buttons/checkbox-button';
import MoveSpendingButton from '~/components/buttons/move-spending-button';
import ViewCategoryRecentMoveButton from '~/components/buttons/view-category-recent-move-button';
import ViewMonthlyActivityButton from '~/components/buttons/view-monthly-activity-button';
import { BudgetTableCellActivity } from '~/components/table/budget-table-cell-activity';
import { BudgetTableCellAvailable } from '~/components/table/budget-table-cell-available';
import { BudgetTableCellBudgeted } from '~/components/table/budget-table-cell-budgeted';
import { BudgetTableCellCheckbox } from '~/components/table/budget-table-cell-checkbox';
import BudgetTableCellMarginCollapse from '~/components/table/budget-table-cell-margin-collapse';
import BudgetTableCellMarginLeft from '~/components/table/budget-table-cell-margin-left';
import BudgetTableCellMarginRight from '~/components/table/budget-table-cell-margin-right';
import { BudgetTableCellName } from '~/components/table/budget-table-cell-name';
import { cn } from '~/utils/cn';
import { formatCurrencyForDisplay } from '~/utils/format';
import CategoryLabel from './category-label';
import CurrencyInput from './currency-input';

interface CategoryProps {
  label: string;
  budgetedAmount: number;
  isHidden: boolean;
}

export default function Category({
  label,
  budgetedAmount,
  isHidden,
}: CategoryProps) {
  const [inputValue, setInputValue] = React.useState(() => formatCurrencyForDisplay(budgetedAmount));

  function handleUpdateInput(value: string) {
    setInputValue(value);
  }

  return (
    <div
      id="ember22"
      draggable="true"
      className={cn(
        'budget-table-row js-budget-table-row budget-table-row-ul is-sub-category',
        { 'is-hidden': isHidden },
      )}
      role="row"
      data-entity-id="78185c8e-3f06-4cf5-84d2-d63c41c7c00b"
      aria-level={2}
      aria-expanded="true"
    >
      <BudgetTableCellMarginLeft />

      <BudgetTableCellMarginCollapse aria-colindex={2} />

      <BudgetTableCellCheckbox
        aria-colindex={1}
      >
        <CheckboxButton />
      </BudgetTableCellCheckbox>

      <BudgetTableCellName
        role="rowheader"
        aria-colindex={3}
      >
        <CategoryLabel label={label} />
      </BudgetTableCellName>

      <BudgetTableCellBudgeted
        aria-colindex={4}
      >
        <CurrencyInput
          inputValue={inputValue}
          handleUpdateInput={handleUpdateInput}
        />
      </BudgetTableCellBudgeted>

      <BudgetTableCellActivity
        className="budget-table-cell-flexed"
        aria-colindex={5}
      >
        <ViewCategoryRecentMoveButton />

        <ViewMonthlyActivityButton
          amount={0}
          tabIndex={0}
          aria-disabled="true"
        />
      </BudgetTableCellActivity>

      <BudgetTableCellAvailable
        aria-colindex={6}
      >
        <MoveSpendingButton assignedBudget={budgetedAmount} />
      </BudgetTableCellAvailable>

      <BudgetTableCellMarginRight />
    </div>
  );
}
