import { Reveal } from "@/components/Reveal";

const items = [
  { label: "When", value: "Every Saturday" },
  { label: "Time", value: "9:00 AM" },
  { label: "Where", value: "Black Elk" },
  { label: "Pace", value: "Social and beginner friendly" },
  { label: "Who", value: "Everyone welcome" },
];

export function RunDetails() {
  return (
    <section className="border-b border-black/10 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="font-display text-4xl font-black tracking-tight sm:text-5xl">
            Run details
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <Reveal key={item.label} delayMs={idx * 70}>
              <article className="rounded-2xl border border-black/10 bg-[#F7F4F0] p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/45">
                  {item.label}
                </p>
                <p className="font-display mt-3 text-2xl font-black leading-tight text-black">
                  {item.value}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
