import RecentMoveButton from '~/components/buttons/recent-move-button';
import UndoButton from '~/components/buttons/redo-button';
import RedoButton from '~/components/buttons/undo-button';
import BudgetTableCellMarginRight from '~/components/table/budget-table-cell-margin-right';
import AddCategoryGroupButton from './add-category-group-button';

export default function BudgetToolbar() {
  return (
    <div className="budget-toolbar" role="row">
      <div role="cell">
        <AddCategoryGroupButton />
      </div>

      <div role="cell">
        <span className="undo-redo-container js-undo-redo-container">
          <UndoButton disabled />

          <RedoButton disabled />
        </span>
      </div>

      <div role="cell">
        <span className="recent-moves-open-modal-container">
          <RecentMoveButton disabled />
        </span>
      </div>

      <BudgetTableCellMarginRight />
    </div>
  );
}
