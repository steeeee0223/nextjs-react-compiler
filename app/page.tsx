import { ExampleLink } from '@/components/example-link';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center gap-10 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Some React examples
        </h1>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <ExampleLink
            id="1"
            title="Example 1"
            description={
              <>
                An example that you <strong>SHOULD</strong> use React Compiler.
              </>
            }
          />
        </div>
      </main>
    </div>
  );
}
