import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/Button";
import { getLocationBySlug, seoLocations } from "@/lib/seoLocations";

type LocationPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return seoLocations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: `${location.name} Run Club`,
    description: location.summary,
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) notFound();

  return (
    <main className="bg-[#F7F4F0]">
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
          Locations
        </p>
        <h1 className="font-display mt-2 text-5xl font-black tracking-tight sm:text-6xl">
          {location.name}, {location.state}
        </h1>
        <p className="mt-5 max-w-3xl text-black/70 sm:text-lg">
          {location.summary}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-black/10 bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/45">
              Meetup Point
            </p>
            <p className="font-display mt-3 text-2xl font-black">
              {location.meetupPoint}
            </p>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/45">
              Schedule
            </p>
            <p className="font-display mt-3 text-2xl font-black">
              {location.schedule}
            </p>
          </article>
        </div>

        <div className="mt-8">
          <ButtonLink href="/waiver">Sign Waiver</ButtonLink>
        </div>
      </section>
    </main>
  );
}
