import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { INSTAGRAM_URL } from "@/lib/constants";

const placeholders = [
  "/hero-running.jpg",
  "/runclub-mascot.png",
  "/runclub-wordmark.png",
  "/merch-tee-cream.png",
  "/merch-tee-white.png",
  "/prclogo.jpeg",
];

export function InstagramGrid() {
  return (
    <section className="border-b border-black/10 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Community
              </p>
              <h2 className="font-display mt-2 text-4xl font-black tracking-tight sm:text-5xl">
                Follow the movement
              </h2>
              <p className="mt-3 max-w-xl text-black/70">
                Stylish placeholders for now. Replace with real weekly run photos
                as your community gallery grows.
              </p>
            </div>
            <ButtonLink href={INSTAGRAM_URL} external>
              Follow Instagram
            </ButtonLink>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {placeholders.map((src, idx) => (
            <Reveal key={idx} delayMs={idx * 60}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-2xl border border-black/10 bg-zinc-100 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <Image
                  src={src}
                  alt="Prestons Run Club community placeholder"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
