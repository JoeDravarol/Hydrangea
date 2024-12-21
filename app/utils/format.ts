export function formatToTwoDecimalPlaces(number: number) {
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(number);
}

export function removeNegativeSign(number: string) {
  return number.replace('-', '');
}
