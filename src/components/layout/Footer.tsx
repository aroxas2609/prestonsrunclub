import Link from "next/link";
import { INSTAGRAM_URL, SITE_NAME } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-display text-lg font-black">{SITE_NAME}</p>
          <p className="mt-1 text-sm text-white/70">
            Run. Connect. Repeat. Every Saturday at Black Elk.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent transition-colors hover:text-white"
          >
            Instagram
          </a>
          <Link
            href="/#waiver"
            className="text-accent transition-colors hover:text-white"
          >
            Waiver
          </Link>
          <Link href="/merch" className="text-white/90 hover:text-white">
            Merch
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {year} {SITE_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
