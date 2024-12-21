import React from 'react';
import { cn } from '~/utils/cn';

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Layout({ className, children }: LayoutProps) {
  return (
    <div className={cn('budget-header-item budget-header-totals', {
      className,
    })}
    >
      <div className={cn('to-be-budgeted', className)}>
        {children}
      </div>
    </div>
  );
}
