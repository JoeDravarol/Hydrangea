import CheckboxButton from '~/components/buttons/checkbox-button';
import ExpandCollapseButton from '~/components/buttons/expand-collapse-button';
import { BudgetTableCellActivity } from '~/components/table/budget-table-cell-activity';
import { BudgetTableCellAvailable } from '~/components/table/budget-table-cell-available';
import { BudgetTableCellBudgeted } from '~/components/table/budget-table-cell-budgeted';
import { BudgetTableCellCheckbox } from '~/components/table/budget-table-cell-checkbox';
import { BudgetTableCellCollapse } from '~/components/table/budget-table-cell-collapse';
import BudgetTableCellMarginLeft from '~/components/table/budget-table-cell-margin-left';
import BudgetTableCellMarginRight from '~/components/table/budget-table-cell-margin-right';
import { BudgetTableCellName } from '~/components/table/budget-table-cell-name';

interface BudgetTableHeaderProps {
  isExpanded: boolean;
  isChecked?: boolean;
}

export default function BudgetTableHeader({
  isExpanded,
  isChecked,
}: BudgetTableHeaderProps) {
  return (
    <div className="budget-table-header-labels budget-table-row-ul" role="row">
      <BudgetTableCellMarginLeft />

      <BudgetTableCellCollapse
        role="columnheader"
        aria-colindex={2}
      >
        <ExpandCollapseButton
          isExpanded={isExpanded}
          label={isExpanded ? 'Collapase all' : 'Expand all'}
        />
      </BudgetTableCellCollapse>

      <BudgetTableCellCheckbox
        role="columnheader"
        aria-colindex={1}
      >
        <CheckboxButton
          label={isChecked ? 'Uncheck all' : 'Check all'}
        />
      </BudgetTableCellCheckbox>

      <BudgetTableCellName
        role="columnheader"
        aria-colindex={3}
      >
        CATEGORY
      </BudgetTableCellName>

      <BudgetTableCellBudgeted
        role="columnheader"
        title="Add money to each category in this column. This is the fun part. Until the money runs out."
        aria-colindex={4}
      >
        ASSIGNED
      </BudgetTableCellBudgeted>

      <BudgetTableCellActivity
        role="columnheader"
        title='It&apos;s the "We spent how much on WHAT?!" column.'
        aria-colindex={5}
      >
        ACTIVITY
      </BudgetTableCellActivity>

      <BudgetTableCellAvailable
        role="columnheader"
        title="Do I have enough to buy that handmade didgeridoo? With this column, now you know."
        aria-colindex={6}
      >
        <strong>AVAILABLE</strong>
      </BudgetTableCellAvailable>

      <BudgetTableCellMarginRight />
    </div>
  );
}
