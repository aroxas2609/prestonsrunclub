"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/cart-context";
import { INSTAGRAM_URL } from "@/lib/constants";

const links = [
  { href: "/", label: "Home" },
  { href: "/run-info", label: "Run Info" },
  { href: "/waiver", label: "Waiver" },
  { href: "/merch", label: "Merch" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { itemCount, toggleCart } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-display text-lg font-black tracking-tight sm:text-xl"
        >
          Prestons Run Club
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold tracking-wide transition-colors hover:text-black ${
                pathname === link.href ? "text-black" : "text-black/65"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold tracking-wide text-black/65 transition-colors hover:text-black"
          >
            Instagram
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleCart}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-black text-white transition-all hover:bg-black/90"
            aria-label="Open cart"
          >
            <span aria-hidden>🛒</span>
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-black">
                {itemCount > 99 ? "99+" : itemCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden ${open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"} overflow-hidden border-t border-black/10 bg-white transition-all duration-200`}
      >
        <div className="px-4 py-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-black/80 hover:bg-black/5"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-xl px-3 py-2.5 text-sm font-semibold text-black/80 hover:bg-black/5"
          >
            Instagram
          </a>
        </div>
      </div>
    </header>
  );
}
