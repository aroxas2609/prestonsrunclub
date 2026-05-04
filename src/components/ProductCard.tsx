"use client";

import Image from "next/image";
import { useState } from "react";
import { ButtonLink, buttonClass } from "@/components/Button";
import { useCart } from "@/context/cart-context";
import { MERCH_PRODUCT } from "@/lib/constants";

type Product = typeof MERCH_PRODUCT;

const images = [
  { src: "/merch-tee-cream.png", label: "Cream" },
  { src: "/merch-tee-white.png", label: "White" },
];

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [active, setActive] = useState(0);
  const [selectedSize, setSelectedSize] = useState<keyof Product["sizePricing"]>(
    "L",
  );

  const sizeOptions = Object.entries(product.sizePricing) as Array<
    [keyof Product["sizePricing"], Product["sizePricing"][keyof Product["sizePricing"]]]
  >;
  const selectedPrice = product.sizePricing[selectedSize];
  const isSoldOut = selectedPrice === null;

  return (
    <article className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-xl">
      <div className="relative aspect-[4/3] bg-[#F7F4F0] p-4">
        <Image
          src={images[active].src}
          alt={product.name}
          fill
          className="object-contain object-top"
          sizes="(max-width: 768px) 100vw, 700px"
        />
      </div>

      <div className="p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Rep the club</p>
        <h2 className="font-display mt-2 text-4xl font-black">{product.name}</h2>
        <p className="mt-4 max-w-xl text-black/70">{product.description}</p>

        <p className="font-display mt-6 text-3xl font-black">
          ${isSoldOut ? "--" : selectedPrice.toFixed(2)}
          <span className="ml-2 text-sm font-semibold text-black/45">AUD</span>
        </p>

        <div className="mt-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/45">
            Size
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {sizeOptions.map(([size, price]) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide ${
                  selectedSize === size
                    ? "border-black bg-black text-white"
                    : "border-black/15 bg-white text-black/70"
                } ${price === null ? "cursor-not-allowed opacity-45" : ""}`}
                disabled={price === null}
                title={price === null ? "Sold out" : undefined}
              >
                {size}
              </button>
            ))}
          </div>
          {isSoldOut && (
            <p className="mt-2 text-sm font-semibold text-black/50">
              Selected size is sold out.
            </p>
          )}
        </div>

        <div className="mt-5 flex gap-2">
          {images.map((img, idx) => (
            <button
              key={img.label}
              type="button"
              onClick={() => setActive(idx)}
              className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide ${
                idx === active
                  ? "border-black bg-black text-white"
                  : "border-black/15 bg-white text-black/70"
              }`}
            >
              {img.label}
            </button>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() =>
              addItem({
                id: `${product.id}-${selectedSize}`,
                name: `${product.name} (${selectedSize})`,
                price: selectedPrice ?? product.price,
                currency: product.currency,
              })
            }
            className={buttonClass("primary")}
            disabled={isSoldOut}
          >
            Add to Cart
          </button>
          <ButtonLink href={product.etsyUrl} variant="outline" external>
            Shop on Etsy
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
