import { cn } from '~/utils/cn';

interface CalendarNoteButtonProps {
  label?: string;
}

export default function CalendarNoteButton({ label = '' }: CalendarNoteButtonProps) {
  return (
    <button
      className={cn('budget-header-calendar-note user-data', {
        active: false,
      })}
      title={label}
      type="button"
    >
      {label || 'Enter a note...'}
    </button>
  );
}
