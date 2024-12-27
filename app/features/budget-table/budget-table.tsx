import BudgetToolbar from '~/features/budget-toolbar/budget-toolbar';
import CategoryGroup from '~/features/category-group/category-group';
import Category from '~/features/category/category';
import BudgetTableHeader from './budget-table-header';

export default function BudgetTable() {
  return (
    <section className="budget-table-container is-expanded">
      <div id="ember11" className="budget-table" role="treegrid">
        <div className="budget-table-header" role="rowgroup">
          <BudgetToolbar />
          <BudgetTableHeader
            isExpanded={true}
          />
        </div>

        <div className="budget-table-draggable">
          <CategoryGroup
            isExpanded={true}
            totalBudgetedAmount={0}
            totalActivityAmount={0}
            totalAvailableAmount={0}
          />
          <Category
            label="🏠 Rent"
            budgetedAmount={0}
            isHidden={false}
          />
        </div>
      </div>
    </section>
  );
}
