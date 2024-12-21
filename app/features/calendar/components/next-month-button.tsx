import React from 'react';
import ChevronRightCircleIcon from '~/components/icons/chevron-right-circle-icon';
import { cn } from '~/utils/cn';

export default function NextMonthButton({ onClick, disabled }: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return (
    <button
      className={cn('budget-header-calendar-next', {
        disabled,
      })}
      aria-label="next month budget"
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      <ChevronRightCircleIcon />
    </button>
  );
}
