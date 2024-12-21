import React from 'react';

export default function GoToTodayButton({ onClick }: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return (
    <button
      className="ynab-button secondary button budget-header-go-to-today"
      type="button"
      onClick={onClick}
    >
      Today
    </button>
  );
}
