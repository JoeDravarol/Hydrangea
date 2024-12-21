import React from 'react';
import { cn } from '~/utils/cn';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  children: React.ReactNode;
}

export type BaseIconProps = Omit<IconProps, 'children'>;

export default function Icon({ className, children, ...props }: IconProps) {
  return (
    <svg
      className={cn('ynab-new-icon', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      {children}
    </svg>
  );
}
