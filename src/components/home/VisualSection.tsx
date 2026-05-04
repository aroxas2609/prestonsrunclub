import Image from "next/image";

export function VisualSection() {
  return (
    <section className="border-b border-black/10 bg-black py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-10 shadow-xl sm:p-14 lg:p-16">
          <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-accent/30 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 -translate-x-1/4 translate-y-1/4 rounded-full bg-accent/20 blur-2xl" />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-accent">
                Club visual
              </p>
              <h2 className="font-display mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Pace. People. Pink.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
                Your mascot is now live in this section to keep the homepage
                playful while preserving the minimalist black, white, and pink
                brand style.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white p-3 shadow-inner">
                <Image
                  src="/runclub-mascot.png"
                  alt="Prestons Run Club running mascot"
                  width={960}
                  height={540}
                  className="h-auto w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
