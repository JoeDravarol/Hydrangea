import React from 'react';
import BudgetBreakdownCard from '~/features/budget-breakdown-card/budget-breakdown-card';
import BudgetBreakdownCardBody from '~/features/budget-breakdown-card/budget-breakdown-card-body';
import BudgetBreakdownCardHeaderButton from '~/features/budget-breakdown-card/budget-breakdown-card-header-button';
import InspectorQuickBudget from './inspector-quick-budget';
import LightningIcon from './lightning-icon';

export default function BudgetBreakdownAutoAssign() {
  const id = React.useId();

  return (
    <BudgetBreakdownCard className="card budget-breakdown-auto-assign">
      <BudgetBreakdownCardHeaderButton
        label="Auto-Assign"
        labelIcon={<LightningIcon />}
        isExpanded={true}
        cardBodyId={id}
      />

      <BudgetBreakdownCardBody
        id={id}
      >
        <InspectorQuickBudget
          underfundedAmount={0}
          assignedLastMonthAmount={0}
          spentLastMonthAmount={0}
          averageAssignedAmount={0}
          averageSpentAmount={0}
          resetAvailableAmount={0}
          resetAssignedAmount={0}
        />
      </BudgetBreakdownCardBody>
    </BudgetBreakdownCard>
  );
}
