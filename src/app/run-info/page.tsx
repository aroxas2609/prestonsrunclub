import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = {
  title: "Run Info",
  description: "Run schedule and first timer info.",
};

const checklist = [
  "Running shoes",
  "Water bottle",
  "Arrive 10 minutes early",
  "Bring good energy",
];

export default function RunInfoPage() {
  return (
    <div className="bg-[#F7F4F0]">
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h1 className="font-display text-5xl font-black tracking-tight sm:text-6xl">
          Run Info
        </h1>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl border border-black/10 bg-white p-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/45">Schedule</p>
            <p className="font-display mt-2 text-2xl font-black">Every Saturday</p>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white p-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/45">Time</p>
            <p className="font-display mt-2 text-2xl font-black">9:00 AM</p>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white p-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/45">Meeting point</p>
            <p className="font-display mt-2 text-2xl font-black">Black Elk</p>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white p-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/45">What to expect</p>
            <p className="font-display mt-2 text-2xl font-black">Social pace</p>
          </article>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-black/10 bg-white p-7">
            <h2 className="font-display text-3xl font-black">First timer checklist</h2>
            <ul className="mt-5 space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3 text-black/75">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-black/10 bg-white p-7">
            <h2 className="font-display text-3xl font-black">Map</h2>
            <div className="mt-5 overflow-hidden rounded-2xl border border-black/10">
              <iframe
                title="Black Elk Espresso map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.224850894866!2d150.84311407644276!3d-33.935344522509865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12936918292011%3A0x2148ed689d509026!2sBlack%20Elk%20Espresso!5e0!3m2!1sen!2sau!4v1777899830724!5m2!1sen!2sau"
                className="h-[360px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.google.com/?q=Black+Elk+Espresso"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-black/70 underline-offset-2 hover:text-black hover:underline"
            >
              Open in Google Maps
            </a>
          </article>
        </div>

        <div className="mt-10">
          <ButtonLink href="/waiver">Complete waiver before first run</ButtonLink>
        </div>
      </section>
    </div>
  );
}
