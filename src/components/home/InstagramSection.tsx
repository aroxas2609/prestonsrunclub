"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { INSTAGRAM_URL } from "@/lib/constants";

type InstaPost = {
  id: string;
  caption: string;
  permalink: string;
  mediaUrl: string;
};

const fallbackShell = new Array(6).fill(null);

export function InstagramSection() {
  const [posts, setPosts] = useState<InstaPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/instagram-posts", { cache: "no-store" });
        if (!res.ok) return;
        const data = (await res.json()) as { posts?: InstaPost[] };
        setPosts((data.posts ?? []).slice(0, 6));
      } catch {
        // fallback handled by API
      } finally {
        setLoading(false);
      }
    };

    void load();
  }, []);

  return (
    <section className="border-b border-black/10 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-3xl font-black tracking-tight sm:text-4xl">
              Latest on Instagram
            </h2>
            <p className="mt-3 max-w-xl text-black/70">
              Posts are loaded dynamically. Add Instagram Graph API env vars for
              fully official feeds in production.
            </p>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-sm font-black uppercase tracking-wide text-black shadow-md transition-all hover:bg-accent-hover hover:shadow-lg active:scale-[0.98]"
          >
            Follow us on Instagram
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {loading &&
            fallbackShell.map((_, idx) => (
              <div
                key={idx}
                className="aspect-square animate-pulse rounded-2xl border border-black/10 bg-zinc-100"
              />
            ))}

          {!loading &&
            posts.map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-2xl border border-black/10 bg-zinc-100 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Image
                  src={post.mediaUrl}
                  alt={post.caption || "Prestons Run Club Instagram post"}
                  fill
                  unoptimized
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent p-3">
                  <span className="line-clamp-2 text-xs font-semibold text-white/90">
                    {post.caption || "Prestons Run Club"}
                  </span>
                </div>
              </a>
            ))}
        </div>
      </div>
    </section>
  );
}
