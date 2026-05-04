import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { MERCH_PRODUCT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Merch",
  description: "Premium Prestons Run Club merch.",
};

export default function MerchPage() {
  return (
    <div className="bg-[#F7F4F0]">
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Shop</p>
        <h1 className="font-display mt-2 text-5xl font-black tracking-tight">Merch</h1>
        <p className="mt-4 max-w-2xl text-black/70 sm:text-lg">
          Premium run club essentials. Add to cart here, then complete checkout on Etsy.
        </p>

        <div className="mt-12">
          <ProductCard product={MERCH_PRODUCT} />
        </div>
      </section>
    </div>
  );
}
