import Image from "next/image";
import Link from "next/link";

const btnPrimary =
  "inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-sm font-black uppercase tracking-wide text-black shadow-md transition-all hover:bg-accent-hover hover:shadow-lg active:scale-[0.98]";

const btnOutline =
  "inline-flex items-center justify-center rounded-xl border-2 border-black bg-white px-6 py-3.5 text-sm font-black uppercase tracking-wide text-black shadow-sm transition-all hover:bg-black hover:text-white active:scale-[0.98]";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-black/10 bg-white">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:py-24">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-black/10 bg-black/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-black/80">
            Community run
          </p>
          <h1 className="font-display max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-black sm:text-6xl lg:text-7xl">
            Prestons Run Club
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold text-black/80 sm:text-xl">
            Every Saturday • 9:00 AM • Black Elk
          </p>
          <p className="mt-3 font-display text-2xl font-bold text-accent sm:text-3xl">
            Run. Connect. Repeat.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#waiver" className={btnPrimary}>
              Sign Waiver
            </a>
            <Link href="/merch" className={btnOutline}>
              View Merch
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-black/10 bg-white p-3 shadow-xl sm:p-4">
            <Image
              src="/hero-running.jpg"
              alt="Local running community in action"
              width={1600}
              height={1000}
              className="h-auto w-full rounded-2xl object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -right-4 w-40 overflow-hidden rounded-2xl border border-black/10 bg-white p-2 shadow-xl sm:-right-6 sm:w-52">
            <Image
              src="/runclub-wordmark.png"
              alt="Prestons Run Club logo"
              width={1200}
              height={675}
              className="h-auto w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
