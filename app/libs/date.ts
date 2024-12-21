import { addMonths, format, isAfter, isBefore, isThisMonth } from 'date-fns';

export function incrementDateByOneMonth(date: Date) {
  return addMonths(date, 1);
}

export function decrementDateByOneMonth(date: Date) {
  return addMonths(date, -1);
}

export function formatDateToMonthYear(date: Date) {
  return format(date, 'MMM yyyy');
}

export function isDateOutsideRange(date: Date, rangeInMonths: number) {
  const currentDate = new Date();
  // Handle positive and negative date
  const targetRangeDate = addMonths(currentDate, rangeInMonths);
  const isNegativeRange = rangeInMonths < 0;

  return isNegativeRange ? isBefore(date, targetRangeDate) : isAfter(date, targetRangeDate);
}

export { isThisMonth };
