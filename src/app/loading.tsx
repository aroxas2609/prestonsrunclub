export default function Loading() {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4 bg-white px-4">
      <div
        className="h-12 w-12 animate-spin rounded-full border-4 border-black/10 border-t-accent"
        aria-hidden
      />
      <p className="text-sm font-semibold text-black/60">Loading…</p>
    </div>
  );
}
