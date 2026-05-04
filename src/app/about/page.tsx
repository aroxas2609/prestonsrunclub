import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Prestons Run Club.",
};

const values = ["Community", "Consistency", "Movement", "Good energy"];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">About</p>
        <h1 className="font-display mt-2 text-5xl font-black tracking-tight sm:text-6xl">
          Built local. Run together.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-black/75">
          Prestons Run Club is a local community built around health, endurance,
          fun and consistency. We run every Saturday to create momentum, then
          stay connected after the run over coffee and conversation.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <article
              key={value}
              className="rounded-2xl border border-black/10 bg-[#F7F4F0] p-6"
            >
              <p className="font-display text-2xl font-black">{value}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
