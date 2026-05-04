"use client";

import { FormEvent, useEffect, useState } from "react";

export function EmailSignupSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [count, setCount] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/newsletter", { cache: "no-store" });
        if (!res.ok) return;
        const data = (await res.json()) as { count?: number };
        setCount(data.count ?? 0);
      } catch {
        // ignore
      }
    };

    void load();
  }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      const data = (await res.json()) as { count?: number; error?: string };
      if (!res.ok) {
        setStatus(data.error ?? "Could not sign up right now.");
        return;
      }

      setStatus("Thanks — you&apos;re on the list.");
      setEmail("");
      setName("");
      if (typeof data.count === "number") setCount(data.count);
    } catch {
      setStatus("Network issue. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="border-b border-black/10 bg-black py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-zinc-900 p-8 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-accent">
                Newsletter
              </p>
              <h2 className="font-display mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Get weekly run updates
              </h2>
              <p className="mt-3 max-w-xl text-white/70">
                Route changes, weather calls, social plans, and merch drops sent
                to your inbox.
              </p>
              <p className="mt-6 text-sm font-semibold text-white/60">
                {count} community members subscribed
              </p>
            </div>

            <form onSubmit={onSubmit} className="rounded-2xl bg-white p-5 text-black">
              <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-black/50">
                Name (optional)
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mb-4 w-full rounded-xl border border-black/15 px-4 py-3 outline-none ring-accent focus:ring-2"
                placeholder="Your name"
              />

              <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-black/50">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mb-5 w-full rounded-xl border border-black/15 px-4 py-3 outline-none ring-accent focus:ring-2"
                placeholder="you@example.com"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-black uppercase tracking-wide text-black shadow-md transition-all hover:bg-accent-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Joining..." : "Join email list"}
              </button>

              {status && (
                <p className="mt-3 text-sm font-medium text-black/70">{status}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
