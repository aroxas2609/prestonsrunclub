import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { WAIVER_EMBED_URL, WAIVER_FORM_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Waiver",
  description: "Sign the Prestons Run Club waiver.",
};

export default function WaiverPage() {
  return (
    <div className="bg-[#F7F4F0]">
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h1 className="font-display text-5xl font-black tracking-tight">Sign the waiver</h1>
        <p className="mt-4 text-black/70 sm:text-lg">
          Complete this before your first run.
        </p>

        <div className="mt-10 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-xl">
          <iframe
            title="Prestons Run Club waiver"
            src={WAIVER_EMBED_URL}
            className="h-[900px] w-full border-0"
            loading="lazy"
          />
        </div>

        <div className="mt-6">
          <ButtonLink href={WAIVER_FORM_URL} external variant="outline">
            Open waiver form
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}
