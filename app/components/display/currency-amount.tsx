import type { AmountDisplayProps, ButtonProps } from '~/types/component';
import { formatCurrencyForDisplay } from '~/utils/format';

export default function CurrencyAmount({
  amount,
}: AmountDisplayProps) {
  const isNegative = amount < 0;
  const negativeSign = isNegative ? '-' : '';

  return (
    <span className="user-data currency tabular-nums">
      {negativeSign}
      <bdi>£</bdi>
      {formatCurrencyForDisplay(amount)}
    </span>
  );
}

export function CurrencyAmountButton({
  amount,
  ...props
}: AmountDisplayProps & ButtonProps) {
  const isNegative = amount < 0;
  const negativeSign = isNegative ? '-' : '';

  return (
    <button
      className="user-data currency tabular-nums"
      {...props}
    >
      {negativeSign}
      <bdi>£</bdi>
      {formatCurrencyForDisplay(amount)}
    </button>
  );
}
