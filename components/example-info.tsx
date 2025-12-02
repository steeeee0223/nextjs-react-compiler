interface ExampleInfoProps {
  title: string;
  description: string;
}

export function ExampleInfo({ title, description }: ExampleInfoProps) {
  return (
    <div className="mb-6 flex flex-col gap-2 rounded-lg bg-muted p-4 w-100">
      <div className="text-2xl font-medium">{title}</div>
      <div className="text-sm text-secondary-foreground contents">
        {description}
      </div>
    </div>
  );
}
