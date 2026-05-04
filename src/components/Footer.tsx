import Link from "next/link";
import { INSTAGRAM_URL, SITE_NAME } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-black text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2">
        <div>
          <p className="font-display text-2xl font-black">{SITE_NAME}</p>
          <p className="mt-3 max-w-md text-sm text-white/65">
            Local Saturday run club for movement, community and good energy.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm font-semibold">
          <Link href="/" className="text-white/80 hover:text-accent">
            Home
          </Link>
          <Link href="/about" className="text-white/80 hover:text-accent">
            About
          </Link>
          <Link href="/run-info" className="text-white/80 hover:text-accent">
            Run Info
          </Link>
          <Link href="/waiver" className="text-white/80 hover:text-accent">
            Waiver
          </Link>
          <Link href="/merch" className="text-white/80 hover:text-accent">
            Merch
          </Link>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-accent"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/45">
        © {year} {SITE_NAME}. Saturday morning starts here.
      </div>
    </footer>
  );
}
