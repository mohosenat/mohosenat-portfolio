export default function Loading() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 rounded-full border-2 border-[var(--border)]" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#9303C5] border-r-[#F472B6]" />
          <div className="absolute inset-3 rounded-full bg-gradient-to-br from-[#9303C5]/30 to-[#F472B6]/20 blur-sm" />
        </div>
        <p className="text-sm tracking-wide muted">Loading experience...</p>
      </div>
    </main>
  );
}
