"use client";

import { useEffect } from "react";
import { ButtonLink } from "@/components/Button";
import { useCart } from "@/context/cart-context";
import { ETSY_MERCH_URL } from "@/lib/constants";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, setQuantity, itemCount, subtotal } =
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
        className={`fixed inset-0 z-50 bg-black/45 transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
        aria-hidden={!isOpen}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-black/10 bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Cart drawer"
      >
        <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
          <h2 className="font-display text-2xl font-black">Cart</h2>
          <button onClick={closeCart} type="button" className="rounded-lg px-2 py-1 hover:bg-black/5">
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="mt-16 text-center text-black/60">No items yet. Add a tee from merch.</p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="rounded-2xl border border-black/10 p-4">
                  <p className="font-bold">{item.name}</p>
                  <p className="mt-1 text-sm text-black/60">${item.price.toFixed(2)} each</p>
                  <div className="mt-3 flex items-center gap-2">
                    <input
                      type="number"
                      min={1}
                      max={99}
                      value={item.quantity}
                      onChange={(e) => setQuantity(item.id, Number(e.target.value))}
                      className="w-16 rounded-lg border border-black/15 px-2 py-1 text-center"
                      aria-label={`Quantity for ${item.name}`}
                    />
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="ml-auto text-sm font-semibold text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-black/10 p-5">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-black/60">Items</span>
            <span className="font-bold">{itemCount}</span>
          </div>
          <div className="mb-5 flex items-center justify-between text-sm">
            <span className="text-black/60">Subtotal</span>
            <span className="font-bold">${subtotal.toFixed(2)}</span>
          </div>

          <ButtonLink href={ETSY_MERCH_URL} external className="w-full">
            Checkout on Etsy
          </ButtonLink>
          <p className="mt-3 text-center text-xs text-black/45">
            Checkout is completed through Etsy.
          </p>
        </div>
      </aside>
    </>
  );
}
