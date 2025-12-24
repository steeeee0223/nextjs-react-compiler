import { ExampleInfo } from '@/components/example-info';
import { CardContainer, Grid } from './_components';

const LONG_TEXT =
  'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

export default function Page() {
  return (
    <>
      <ExampleInfo
        title="Example 2"
        description="Compare flex children with and without min-w-0"
      />

      {/* ❌ Without min-w-0 */}
      <p className="text-amber-900 font-semibold">
        ❌ without{' '}
        <code className="bg-rose-900 rounded-sm px-1 text-sm/tight text-primary-foreground">
          min-w-0
        </code>
      </p>
      <CardContainer className="w-150">
        <div className="space-y-2 w-full">
          <div className="font-medium">Title</div>
          <div className="truncate">{LONG_TEXT}</div>
        </div>
      </CardContainer>

      {/* ✅ With min-w-0 */}
      <p className="text-amber-900 font-semibold">
        ✅ with{' '}
        <code className="bg-rose-900 rounded-sm px-1 text-sm/tight text-primary-foreground">
          min-w-0
        </code>
      </p>
      <CardContainer className="w-150">
        <div className="min-w-0 space-y-2">
          <div className="font-medium">Title</div>
          <div className="truncate">{LONG_TEXT}</div>
        </div>
      </CardContainer>

      <p className="text-amber-900 font-semibold">Snippet</p>
      <CardContainer hideIcon className="bg-neutral-400 w-150">
        <pre className="text-sm">
          {`<div className="flex gap-3 w-150">
  <div className="shrink-0">{Icon}</div>
  <div className="space-y-2"> // w-full vs min-w-0
    <div>Title</div>
    <div className="truncate">{LONG_TEXT}</div>
  </div>
</div>`}
        </pre>
      </CardContainer>
    </>
  );
}
