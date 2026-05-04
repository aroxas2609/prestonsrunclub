const faqs = [
  {
    q: "Do I need to be fast?",
    a: "No, all levels welcome.",
  },
  {
    q: "Do I need to register?",
    a: "Yes, sign the waiver below.",
  },
  {
    q: "What should I bring?",
    a: "Running shoes, water, good vibes.",
  },
];

export function FirstTimeGuideSection() {
  return (
    <section className="border-b border-black/10 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-black tracking-tight sm:text-4xl">
          First time? Start here.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="rounded-2xl border border-black/10 bg-zinc-50 p-6 shadow-sm"
            >
              <p className="font-display text-lg font-bold text-black">
                {item.q}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-black/70">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
