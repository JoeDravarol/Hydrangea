import type { AutoAssignProps } from './auto-assign-button';

export default function AutoAssignIcon({ label, ariaDescribedBy, children }: AutoAssignProps) {
  return (
    <button
      className="to-be-budgeted-auto-assign to-be-budgeted-icon"
      aria-label={label}
      type="button"
      aria-describedby={ariaDescribedBy}
      disabled
    >
      <span className="label" />
      {children}
    </button>
  );
}
