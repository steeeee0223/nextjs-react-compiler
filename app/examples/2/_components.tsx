import React from 'react';
import { cn } from '@/lib/utils';
import { UserSquare } from 'lucide-react';

export function CardContainer({
  className,
  hideIcon,
  children,
  ...props
}: React.ComponentProps<'div'> & { hideIcon?: boolean }) {
  return (
    <div
      className={cn('flex gap-3 rounded-lg p-4 bg-amber-500', className)}
      {...props}
    >
      {!hideIcon && (
        <div className="shrink-0 w-6">
          <UserSquare className="size-6 text-amber-700" />
        </div>
      )}
      {children}
    </div>
  );
}

export function Grid({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('grid grid-cols-3 gap-2', className)} {...props} />;
}
