import React from 'react';
import CurrencyAmount from '~/components/display/currency-amount';
import BudgetBreakdownCard from '~/features/budget-breakdown-card/budget-breakdown-card';
import BudgetBreakdownCardBody from '~/features/budget-breakdown-card/budget-breakdown-card-body';
import BudgetBreakdownCardHeaderButton from '~/features/budget-breakdown-card/budget-breakdown-card-header-button';

interface BudgetBreakdownMonthlyTotalsProps {
  availableToSpendAmount: number;
  budgetedAmount: number;
  spentAmount: number;
  leftOverAmountFromLastMonth: number;
  selectedMonth: string;
  prevMonth: string;
}

export default function BudgetBreakdownMonthlyTotals({
  availableToSpendAmount,
  budgetedAmount,
  spentAmount,
  leftOverAmountFromLastMonth,
  selectedMonth,
  prevMonth,
}: BudgetBreakdownMonthlyTotalsProps) {
  const id = React.useId();

  return (
    <BudgetBreakdownCard>
      <BudgetBreakdownCardHeaderButton
        label="Available in December"
        cardBodyId={id}
        isExpanded={true}
        className="ynab-breakdown-available-in-month"
      >
        <CurrencyAmount amount={availableToSpendAmount} />
      </BudgetBreakdownCardHeaderButton>

      <BudgetBreakdownCardBody id={id} aria-hidden="false">
        <div className="ynab-breakdown">
          <div tabIndex={0} className="ynab-breakdown-leftover-prev-month">
            <div
              aria-label={`The total amount of money you have left over from ${prevMonth}.`}
              title={`The total amount of money you have left over from ${prevMonth}.`}
            >
              Left Over from Last Month
            </div>
            <div className="user-data">
              <CurrencyAmount amount={leftOverAmountFromLastMonth} />
            </div>
          </div>

          <div tabIndex={0} className="ynab-breakdown-assigned-in-month">
            <div
              aria-label={`The total amount of money you have assigned in ${selectedMonth}`}
              title={`The total amount of money you have assigned in ${selectedMonth}`}
            >
              Assigned in December
            </div>
            <div className="user-data">
              <CurrencyAmount amount={budgetedAmount} />
            </div>
          </div>

          <div tabIndex={0} className="ynab-breakdown-activity">
            <div
              aria-label={`The total amount of activity (e.g. spending) in ${selectedMonth}`}
              title={`The total amount of activity (e.g. spending) in ${selectedMonth}`}
            >
              Activity
            </div>
            <div className="user-data">
              <CurrencyAmount amount={spentAmount} />
            </div>
          </div>
        </div>
      </BudgetBreakdownCardBody>
    </BudgetBreakdownCard>
  );
}
