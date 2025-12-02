import { Button } from '@/components/ui/button';
import React from 'react';

interface ExampleLinkProps {
  id: string;
  title: string;
  description: React.ReactNode;
}

export function ExampleLink({ id, title, description }: ExampleLinkProps) {
  return (
    <div className="flex items-center gap-3">
      <a href={`/examples/${id}`}>
        <Button>{title}</Button>
      </a>
      <div className="text-secondary-foreground">{description}</div>
    </div>
  );
}
