import type { AmountDisplayProps, ButtonProps } from '~/types/component';
import CurrencyAmount from '~/components/display/currency-amount';
import { formatCurrencyForDisplay } from '~/utils/format';

export default function ViewMonthlyActivityButton({
  amount,
  ...props
}: AmountDisplayProps & ButtonProps) {
  const negativeSign = amount < 0 ? '-' : '';
  const displayAmount = `${negativeSign}£${formatCurrencyForDisplay(amount)}`;

  return (
    <button
      className="budget-number user-data"
      title={`(${displayAmount}) View this category's monthly activity. Splendid.`}
      type="button"
      {...props}
    >
      <CurrencyAmount amount={amount} />
    </button>
  );
}
