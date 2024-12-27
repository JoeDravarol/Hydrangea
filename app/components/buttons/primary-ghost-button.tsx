import type { ButtonProps } from '~/types/component';
import React from 'react';
import { cn } from '~/utils/cn';

interface PrimaryGhostButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export default function PrimaryGhostButton({ className, children, ...props }: PrimaryGhostButtonProps) {
  return (
    <button
      className={cn('ghost-button primary type-body', className)}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
