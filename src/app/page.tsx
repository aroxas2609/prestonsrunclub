import type { Metadata } from "next";
import { FAQ } from "@/components/FAQ";
import { BrandLogos } from "@/components/BrandLogos";
import { Hero } from "@/components/Hero";
import { InstagramGrid } from "@/components/InstagramGrid";
import { RunDetails } from "@/components/RunDetails";
import { ButtonLink } from "@/components/Button";
import { INSTAGRAM_URL, SITE_NAME } from "@/lib/constants";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Home",
  description: `${SITE_NAME} premium community running club website.`,
};

function BrandStatement() {
  return (
    <section className="border-b border-black/10 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-4xl font-black tracking-tight sm:text-6xl">
            Run with people. Build consistency. Find your pace.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-black/70 sm:text-lg">
            Prestons Run Club brings together beginners, casual runners and
            experienced runners for a weekly Saturday community run.
          </p>
          <BrandLogos />
        </Reveal>
      </div>
    </section>
  );
}

function WaiverPreview() {
  return (
    <section className="border-b border-black/10 bg-[#F7F4F0] py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="rounded-3xl border border-black/10 bg-white p-7 shadow-xl sm:p-10">
            <h3 className="font-display text-3xl font-black sm:text-4xl">
              Ready for your first run?
            </h3>
            <p className="mt-3 text-black/70">
              Complete the waiver before joining.
            </p>
            <div className="mt-6">
              <ButtonLink href="/waiver">Sign Waiver</ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MerchTeaser() {
  return (
    <section className="border-b border-black/10 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="rounded-3xl border border-black/10 bg-[#F7F4F0] p-7 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Merch
            </p>
            <h3 className="font-display mt-2 text-4xl font-black">Rep the club</h3>
            <p className="mt-3 max-w-xl text-black/70">
              Premium everyday tee for training, coffee runs and community days.
            </p>
            <div className="mt-6">
              <ButtonLink href="/merch" variant="outline">
                Shop merch
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="bg-black py-14 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="font-display text-4xl font-black tracking-tight sm:text-6xl">
            Saturday morning starts here.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/waiver">Sign Waiver</ButtonLink>
            <ButtonLink href={INSTAGRAM_URL} external variant="inverse">
              Follow Instagram
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <RunDetails />
      <FAQ />
      <WaiverPreview />
      <InstagramGrid />
      <MerchTeaser />
      <ClosingCta />
    </>
  );
}
