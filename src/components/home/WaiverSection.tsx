import { WAIVER_EMBED_URL } from "@/lib/constants";

export function WaiverSection() {
  return (
    <section id="waiver" className="scroll-mt-24 border-b border-black/10 bg-zinc-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-black tracking-tight sm:text-4xl">
          Sign the waiver
        </h2>
        <p className="mt-4 max-w-2xl text-black/70">
          Complete the form below before your first run with us. It opens in the
          same page — scroll inside the frame if needed.
        </p>
        <div className="mt-10 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lg">
          <iframe
            title="Prestons Run Club waiver form"
            src={WAIVER_EMBED_URL}
            className="h-[min(95vh,1000px)] w-full border-0"
            height={1000}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
