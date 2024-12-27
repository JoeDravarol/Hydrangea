export function isValidNumber(value: string | number): boolean {
  const num = Number(value);

  return !Number.isNaN(num);
}
