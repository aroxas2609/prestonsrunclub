"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/cart-context";
import { INSTAGRAM_URL } from "@/lib/constants";

const navLink =
  "text-sm font-semibold tracking-wide text-black/80 transition-colors hover:text-black";

export function Navbar() {
  const pathname = usePathname();
  const { itemCount, toggleCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (href: string) =>
    `${navLink} ${pathname === href ? "text-black" : ""}`;

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="transition-transform hover:scale-[1.02]"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/nav-logo.png"
            alt="Prestons Run Club"
            width={280}
            height={154}
            className="h-10 w-auto sm:h-11"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/merch" className={linkClass("/merch")}>
            Merch
          </Link>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={navLink}
          >
            Instagram
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleCart}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-black text-white shadow-sm transition-all hover:bg-black/90 hover:shadow-md active:scale-95"
            aria-label="Open cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63 0 0 .75.75 0 00.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.347 60.347 0 002.37-7.228c1.087-.63 2.7-.17 3.188 1.067a.75.75 0 001.15.38l1.462-1.462a.75.75 0 00-.213-1.319c-.845-.28-2.163-.655-3.188-.213a60.228 60.228 0 00-2.498-.052 6.712 6.712 0 00-.818-.042c-.286.475-.542.967-.76 1.476l-2.49-9.327A.75.75 0 005.378 3H2.25zM3.75 18a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm12.75 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-black">
                {itemCount > 99 ? "99+" : itemCount}
              </span>
            )}
          </button>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 md:hidden"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`border-t border-black/10 bg-white md:hidden ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 overflow-hidden opacity-0"
        } transition-all duration-200`}
      >
        <div className="flex flex-col gap-1 px-4 py-3">
          <Link
            href="/"
            className="rounded-xl px-3 py-2.5 text-sm font-semibold hover:bg-black/5"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/merch"
            className="rounded-xl px-3 py-2.5 text-sm font-semibold hover:bg-black/5"
            onClick={() => setMenuOpen(false)}
          >
            Merch
          </Link>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl px-3 py-2.5 text-sm font-semibold hover:bg-black/5"
            onClick={() => setMenuOpen(false)}
          >
            Instagram
          </a>
        </div>
      </div>
    </header>
  );
}
