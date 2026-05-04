"use client";

import { useEffect } from "react";
import { useCart } from "@/context/cart-context";
import { ETSY_MERCH_URL } from "@/lib/constants";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, setQuantity, itemCount } =
    useCart();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isOpen}
        onClick={closeCart}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-black/10 bg-white shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
          <h2 className="font-display text-xl font-black">Your cart</h2>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-xl p-2 text-black/60 transition-colors hover:bg-black/5 hover:text-black"
            aria-label="Close cart"
          >
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
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-black/5 text-3xl">
                🛒
              </div>
              <p className="font-semibold text-black">Your cart is empty</p>
              <p className="mt-2 text-sm text-black/60">
                Add merch from the shop — checkout happens on Etsy.
              </p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-4 rounded-2xl border border-black/10 bg-white p-4 shadow-sm"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/40 to-accent/10 text-xl font-black text-black">
                    PRC
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold leading-tight text-black">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm text-black/60">
                      {item.currency} ${item.price.toFixed(2)} each
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <label className="sr-only" htmlFor={`qty-${item.id}`}>
                        Quantity for {item.name}
                      </label>
                      <input
                        id={`qty-${item.id}`}
                        type="number"
                        min={1}
                        max={99}
                        value={item.quantity}
                        onChange={(e) => {
                          const v = parseInt(e.target.value, 10);
                          if (Number.isNaN(v)) return;
                          setQuantity(item.id, v);
                        }}
                        className="w-16 rounded-lg border border-black/15 px-2 py-1 text-center text-sm font-semibold outline-none ring-accent focus:ring-2"
                      />
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-sm font-semibold text-red-600 underline-offset-2 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-black/10 p-5">
          <div className="mb-4 flex items-center justify-between text-sm">
            <span className="text-black/60">Items</span>
            <span className="font-bold">{itemCount}</span>
          </div>
          <a
            href={ETSY_MERCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-xl bg-accent px-4 py-3.5 text-center text-sm font-black uppercase tracking-wide text-black shadow-md transition-all hover:bg-accent-hover hover:shadow-lg active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
          >
            Checkout on Etsy
          </a>
          <p className="mt-3 text-center text-xs text-black/50">
            You&apos;ll complete purchase on Etsy. This cart is for planning
            only.
          </p>
        </div>
      </aside>
    </>
  );
}
