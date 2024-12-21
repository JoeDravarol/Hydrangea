import React from 'react';

interface AutoAssignProps {
  label: string;
  ariaDescribedBy: string;
  children?: React.ReactNode;
}

export default function AutoAssignButton({ label, ariaDescribedBy, children }: AutoAssignProps) {
  return (
    <button
      className="to-be-budgeted-auto-assign to-be-budgeted-button"
      aria-label={label}
      type="button"
      aria-describedby={ariaDescribedBy}
    >
      <span className="label">{label}</span>
      {children}
    </button>
  );
}

export function AutoAssignIcon({ label, ariaDescribedBy, children }: AutoAssignProps) {
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
