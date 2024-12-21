import React from 'react';
import ChevronLeftCircleIcon from '~/components/icons/chevron-left-circle-icon';
import { cn } from '~/utils/cn';

export default function PrevMonthButton({ onClick, disabled }: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return (
    <button
      className={cn('budget-header-calendar-prev', {
        disabled,
      })}
      aria-label="previous month budget"
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      <ChevronLeftCircleIcon />
    </button>
  );
}
