import React from 'react';
import { ExampleInfo } from '@/components/example-info';
import { UserSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Page() {
  return (
    <>
      <ExampleInfo title="Example 2" description="" />
      <div className="flex flex-col gap-4">
        <CardContainer>
          <div className="flex w-full">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </CardContainer>
        <CardContainer>
          <div className="w-full min-w-0">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </CardContainer>
      </div>
    </>
  );
}

function CardContainer({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'rounded-lg p-4 bg-amber-500 flex gap-2 h-full w-150',
        className
      )}
      {...props}
    >
      <div className="shrink-0">
        <UserSquare className="size-6 text-amber-700" />
      </div>
      {children}
    </div>
  );
}
