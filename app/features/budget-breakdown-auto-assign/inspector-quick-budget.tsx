import BudgetInspectorButton from './budget-inspector-button';

interface InspectorQuickBudgetProps {
  underfundedAmount: number;
  assignedLastMonthAmount: number;
  spentLastMonthAmount: number;
  averageAssignedAmount: number;
  averageSpentAmount: number;
  resetAvailableAmount: number;
  resetAssignedAmount: number;
}

export default function InspectorQuickBudget({
  underfundedAmount,
  assignedLastMonthAmount,
  spentLastMonthAmount,
  averageAssignedAmount,
  averageSpentAmount,
  resetAvailableAmount,
  resetAssignedAmount,
}: InspectorQuickBudgetProps) {
  return (
    <div className="inspector-quick-budget">
      <div className="option-groups">
        <div>
          <BudgetInspectorButton
            label="Underfunded"
            currencyAmount={underfundedAmount}
          />
        </div>

        <div>
          <BudgetInspectorButton
            label="Assigned Last Month"
            currencyAmount={assignedLastMonthAmount}
          />
          <BudgetInspectorButton
            label="Spent Last Month"
            currencyAmount={spentLastMonthAmount}
          />
          <BudgetInspectorButton
            label="Average Assigned"
            currencyAmount={averageAssignedAmount}
            title="Feeling average? Fund all of your categories with your historical average assigned."
          />
          <BudgetInspectorButton
            label="Average Spent"
            currencyAmount={averageSpentAmount}
            title="Assign your historical average spent. Though you're above average in my book."
          />
        </div>

        <div>
          <BudgetInspectorButton
            label="Reset Available Amounts"
            currencyAmount={resetAvailableAmount}
            title="Want to start from zero? Set the available amounts of all of your categories to $0.00, making the funds ready to assign. It's like a mini Fresh Start!"
          />
          <BudgetInspectorButton
            label="Reset Assigned Amounts"
            currencyAmount={resetAssignedAmount}
            title="Reset all assigned amounts for this month, in case you want a do-over."
          />
        </div>
      </div>
    </div>
  );
}
