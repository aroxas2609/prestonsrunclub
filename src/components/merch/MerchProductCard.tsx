"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/context/cart-context";
import { MERCH_PRODUCT } from "@/lib/constants";

type Product = typeof MERCH_PRODUCT;
const productImages = [
  {
    src: "/merch-tee-cream.png",
    alt: "Prestons Run Club cream t-shirt",
    label: "Cream",
  },
  {
    src: "/merch-tee-white.png",
    alt: "Prestons Run Club white t-shirt",
    label: "White",
  },
] as const;

export function MerchProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-md transition-shadow hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-50 p-4">
        <Image
          src={productImages[selectedImage].src}
          alt={productImages[selectedImage].alt}
          fill
          className="object-contain object-top"
          sizes="(max-width: 768px) 100vw, 420px"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h2 className="font-display text-xl font-black text-black">
          {product.name}
        </h2>
        <p className="mt-2 text-sm text-black/60">
          Official listing on Etsy — colours and sizes on the product page.
        </p>
        <p className="mt-4 font-display text-2xl font-black text-black">
          {product.currency} ${product.price.toFixed(2)}
          <span className="ml-2 text-xs font-semibold uppercase tracking-wide text-black/40">
            mock price
          </span>
        </p>
        <div className="mt-4 flex gap-2">
          {productImages.map((img, idx) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setSelectedImage(idx)}
              className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide transition-colors ${
                selectedImage === idx
                  ? "border-black bg-black text-white"
                  : "border-black/15 bg-white text-black/70 hover:border-black/40"
              }`}
            >
              {img.label}
            </button>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() =>
              addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                currency: product.currency,
              })
            }
            className="min-w-[140px] flex-1 rounded-xl bg-accent px-4 py-3 text-center text-sm font-black uppercase tracking-wide text-black shadow-md transition-all hover:bg-accent-hover hover:shadow-lg active:scale-[0.98]"
          >
            Add to Cart
          </button>
          <a
            href={product.etsyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[140px] flex-1 items-center justify-center rounded-xl border-2 border-black bg-white px-4 py-3 text-center text-sm font-black uppercase tracking-wide text-black transition-all hover:bg-black hover:text-white active:scale-[0.98]"
          >
            View on Etsy
          </a>
        </div>
      </div>
    </article>
  );
}
