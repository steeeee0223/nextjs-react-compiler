export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-dvh w-dvw flex items-center flex-col p-10 gap-4">
      {children}
    </div>
  );
}
