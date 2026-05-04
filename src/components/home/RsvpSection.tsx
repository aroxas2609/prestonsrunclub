"use client";

import { FormEvent, useEffect, useState } from "react";

type RsvpResponse = {
  count: number;
  latest?: Array<{
    name: string;
    paceGroup: string;
    createdAt: string;
  }>;
};

export function RsvpSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [paceGroup, setPaceGroup] = useState("Social");
  const [count, setCount] = useState<number>(0);
  const [latest, setLatest] = useState<RsvpResponse["latest"]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/rsvp", { cache: "no-store" });
        if (!res.ok) return;
        const data = (await res.json()) as RsvpResponse;
        setCount(data.count ?? 0);
        setLatest(data.latest ?? []);
      } catch {
        // ignore initial load failures
      }
    };
    void load();
  }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, paceGroup }),
      });

      const data = (await res.json()) as { count?: number; error?: string };
      if (!res.ok) {
        setStatus(data.error ?? "Could not RSVP right now.");
        return;
      }

      setStatus("You are in. See you Saturday!");
      setName("");
      setEmail("");
      setPaceGroup("Social");
      if (typeof data.count === "number") setCount(data.count);

      const latestRes = await fetch("/api/rsvp", { cache: "no-store" });
      if (latestRes.ok) {
        const latestData = (await latestRes.json()) as RsvpResponse;
        setLatest(latestData.latest ?? []);
      }
    } catch {
      setStatus("Network issue. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="border-b border-black/10 bg-zinc-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-black tracking-tight sm:text-4xl">
              Event RSVP
            </h2>
            <p className="mt-3 max-w-xl text-black/70">
              Save your spot for this Saturday&apos;s run. We&apos;ll use this to estimate
              group size and pacing pods.
            </p>
            <p className="mt-6 inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-bold">
              {count} runners currently RSVP&apos;d
            </p>

            {latest && latest.length > 0 && (
              <ul className="mt-6 space-y-2">
                {latest.slice(0, 4).map((entry, idx) => (
                  <li
                    key={`${entry.name}-${entry.createdAt}-${idx}`}
                    className="flex items-center justify-between rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm"
                  >
                    <span className="font-semibold text-black">{entry.name}</span>
                    <span className="text-black/50">{entry.paceGroup}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
          >
            <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-black/50">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
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
              className="mb-4 w-full rounded-xl border border-black/15 px-4 py-3 outline-none ring-accent focus:ring-2"
              placeholder="you@example.com"
            />

            <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-black/50">
              Pace Group
            </label>
            <select
              value={paceGroup}
              onChange={(e) => setPaceGroup(e.target.value)}
              className="mb-6 w-full rounded-xl border border-black/15 bg-white px-4 py-3 outline-none ring-accent focus:ring-2"
            >
              <option>Social</option>
              <option>Easy</option>
              <option>Tempo</option>
              <option>Fast</option>
            </select>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-black uppercase tracking-wide text-black shadow-md transition-all hover:bg-accent-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "RSVP for Saturday"}
            </button>

            {status && (
              <p className="mt-3 text-sm font-medium text-black/70">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
