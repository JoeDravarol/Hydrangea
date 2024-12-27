import { isValidNumber } from './validation';

export function formatToTwoDecimalPlaces(value: string | number): string {
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  if (!isValidNumber(value)) {
    throw new Error('⚠️ Error: Input must be a valid number or string.');
  }

  return formatter.format(Number(value));
}

export function removeNegativeSign(value: string | number): string {
  return String(value).replace('-', '');
}

export function formatCurrencyForDisplay(budget: string | number): string {
  if (typeof budget === 'string' && !isValidNumber(budget)) {
    throw new Error('⚠️ Error: Input must be a valid number or string.');
  }

  return removeNegativeSign(formatToTwoDecimalPlaces(budget));
}
