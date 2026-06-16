"use client";

import Image from "next/image";
import { useEffect, useState, type PointerEvent } from "react";
import { ButtonLink } from "@/components/Button";
import { INSTAGRAM_URL } from "@/lib/constants";

export function Hero() {
  const [cardTransform, setCardTransform] = useState("translate3d(0px, 0px, 0px)");

  useEffect(() => {
    const onScroll = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const y = window.scrollY;
      const dy = Math.min(12, y * 0.02);
      setCardTransform(`translate3d(0px, ${dy.toFixed(1)}px, 0px)`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
    setCardTransform(
      `perspective(1000px) rotateX(${(-y).toFixed(2)}deg) rotateY(${x.toFixed(
        2,
      )}deg) translate3d(0px, 2px, 0px)`,
    );
  };

  const onPointerLeave = () => {
    setCardTransform("translate3d(0px, 0px, 0px)");
  };

  return (
    <section className="relative overflow-hidden border-b border-black/10 bg-[#F7F4F0]">
      <div className="pointer-events-none absolute -right-24 top-8 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />
      <div className="pointer-events-none absolute left-1/3 top-0 h-full w-px bg-black/10" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="relative mx-auto grid min-h-[92vh] max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-12 lg:py-20">
        <div>
          <span className="inline-flex -rotate-2 rounded-md border border-black/10 bg-accent px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-black shadow-sm">
            Every Saturday
          </span>

          <h1 className="font-display mt-6 text-6xl font-black uppercase leading-[0.86] tracking-tight text-black sm:text-7xl lg:text-8xl">
            <span className="hero-line hero-line-delay-1">Prestons</span>
            <br />
            <span className="hero-line hero-line-delay-2">Run Club</span>
          </h1>

          <p className="mt-6 text-xl font-extrabold text-black sm:text-2xl">
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-1 h-3 rotate-[-1.5deg] rounded bg-accent/75" />
              <span className="relative">9:00 AM</span>
            </span>{" "}
            at Black Elk
          </p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/75 sm:text-lg">
            A local running community built for movement, connection and good
            energy. All levels welcome.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="/waiver">Sign Waiver</ButtonLink>
            <ButtonLink href="/merch" variant="outline">
              View Merch
            </ButtonLink>
            <ButtonLink href={INSTAGRAM_URL} variant="outline" external>
              Follow Instagram
            </ButtonLink>
          </div>

          <div className="mt-7 inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-black/70 sm:text-sm">
            <span>Saturday Runs</span>
            <span className="text-accent">•</span>
            <span>9:00 AM</span>
            <span className="text-accent">•</span>
            <span>Black Elk</span>
            <span className="text-accent">•</span>
            <span>All Levels Welcome</span>
          </div>
        </div>

        <div
          className="relative transition-transform duration-[var(--motion-medium)] ease-out"
          style={{ transform: cardTransform }}
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
        >
          <div className="absolute -inset-6 rounded-3xl bg-accent/25 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-3 shadow-xl sm:p-4">
            <Image
              src="/hero-moon.png"
              alt="Join our journey with Prestons Run Club"
              width={1024}
              height={682}
              className="h-auto w-full rounded-2xl object-cover"
              priority
              sizes="(max-width: 1024px) 90vw, 520px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
