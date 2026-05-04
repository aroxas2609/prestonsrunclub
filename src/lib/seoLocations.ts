export type SeoLocation = {
  slug: string;
  name: string;
  state: string;
  summary: string;
  meetupPoint: string;
  schedule: string;
};

export const seoLocations: SeoLocation[] = [
  {
    slug: "prestons",
    name: "Prestons",
    state: "NSW",
    summary:
      "Prestons Run Club is a social Saturday running community welcoming beginners through experienced runners.",
    meetupPoint: "Black Elk Espresso",
    schedule: "Every Saturday at 9:00 AM",
  },
  {
    slug: "casula",
    name: "Casula",
    state: "NSW",
    summary:
      "Join nearby runners from Casula for a friendly local run and post-run community catch-up.",
    meetupPoint: "Black Elk Espresso (short drive from Casula)",
    schedule: "Every Saturday at 9:00 AM",
  },
  {
    slug: "liverpool",
    name: "Liverpool",
    state: "NSW",
    summary:
      "A Liverpool-area run club option focused on consistency, movement, and all-level community pacing.",
    meetupPoint: "Black Elk Espresso",
    schedule: "Every Saturday at 9:00 AM",
  },
];

export function getLocationBySlug(slug: string) {
  return seoLocations.find((location) => location.slug === slug);
}
