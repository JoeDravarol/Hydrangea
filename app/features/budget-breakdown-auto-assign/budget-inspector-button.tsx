import type { ButtonProps } from '~/types/component';
import CurrencyAmount from '~/components/display/currency-amount';
import { formatCurrencyForDisplay } from '~/utils/format';

interface BudgetInspectorButtonProps extends ButtonProps {
  label: string;
  currencyAmount: number;
}

export default function BudgetInspectorButton({
  label,
  currencyAmount,
  ...props
}: BudgetInspectorButtonProps) {
  const negativeSign = currencyAmount < 0 ? '-' : '';

  return (
    <button
      className="budget-inspector-button"
      type="button"
      {...props}
    >
      <div>{label}</div>

      <div>
        <strong
          className="user-data"
          title={`${negativeSign}£${formatCurrencyForDisplay(currencyAmount)}`}
        >
          <CurrencyAmount amount={currencyAmount} />
        </strong>
      </div>
    </button>
  );
}
