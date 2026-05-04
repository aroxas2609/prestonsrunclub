import { Reveal } from "@/components/Reveal";

const faqs = [
  {
    q: "Do I need to be fast?",
    a: "No. The club is built for all levels.",
  },
  {
    q: "Do I need to sign up?",
    a: "Yes. Please complete the waiver before joining your first run.",
  },
  {
    q: "What should I bring?",
    a: "Running shoes, water and good vibes.",
  },
  {
    q: "Can I come alone?",
    a: "Yes. Most people do. That is the point of the club.",
  },
];

export function FAQ() {
  return (
    <section className="border-b border-black/10 bg-[#F7F4F0] py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="font-display text-4xl font-black tracking-tight sm:text-5xl">
            First run guide
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {faqs.map((item, idx) => (
            <Reveal key={item.q} delayMs={idx * 70}>
              <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <h3 className="font-display text-2xl font-black leading-tight">
                  {item.q}
                </h3>
                <p className="mt-3 text-black/70">{item.a}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
