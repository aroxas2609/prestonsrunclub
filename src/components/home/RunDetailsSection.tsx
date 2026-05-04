const items = [
  { label: "Day", value: "Saturday" },
  { label: "Time", value: "9:00 AM" },
  { label: "Location", value: "Black Elk" },
];

const notes = [
  "All fitness levels welcome",
  "Social and beginner friendly",
];

export function RunDetailsSection() {
  return (
    <section className="border-b border-black/10 bg-zinc-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-black tracking-tight sm:text-4xl">
          Run details
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-black/50">
                {item.label}
              </p>
              <p className="font-display mt-2 text-2xl font-black text-black">
                {item.value}
              </p>
            </div>
          ))}
        </div>
        <ul className="mt-8 space-y-3">
          {notes.map((note) => (
            <li
              key={note}
              className="flex items-center gap-3 text-base font-semibold text-black/80"
            >
              <span className="flex h-2 w-2 shrink-0 rounded-full bg-accent" />
              {note}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
