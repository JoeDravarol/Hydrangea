import { CaretDownIcon } from '~/components/icons/caret-down-icon';

interface CalendarDateButtonProps {
  label: string;
}

export default function CalendarDateButton({ label }: CalendarDateButtonProps) {
  return (
    <button className="budget-header-calendar-date-button" type="button">
      {label}
      <CaretDownIcon
        width="12"
        height="12"
      />
    </button>
  );
}
