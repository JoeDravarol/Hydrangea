import React from 'react';

export interface AutoAssignProps {
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
