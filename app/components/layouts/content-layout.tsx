import React from 'react';
import { cn } from '~/utils/cn';

interface ContentLayoutProps {
  className: string;
  children: React.ReactNode;
}

export default function ContentLayout({ className, children }: ContentLayoutProps) {
  return (
    <div className="ynab-u content">
      <div className={cn('content-min-break', className)}>
        {children}
      </div>
    </div>
  );
}
