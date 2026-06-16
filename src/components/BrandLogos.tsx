import Image from "next/image";

const brandImages = [
  {
    src: "/brand-mascots.png",
    alt: "Prestons Run Club mascots running together",
    width: 499,
    height: 554,
    maxHeight: "max-h-[260px] sm:max-h-[300px]",
  },
  {
    src: "/run-club-logo.png",
    alt: "Prestons Run Club logo",
    width: 1024,
    height: 1024,
    maxHeight: "max-h-[260px] sm:max-h-[300px]",
    rounded: true,
  },
  {
    src: "/brand-poster.png",
    alt: "Prestons Run Club — join if you wanna have fun",
    width: 502,
    height: 1014,
    maxHeight: "max-h-[300px] sm:max-h-[360px]",
  },
] as const;

export function BrandLogos() {
  return (
    <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 items-center gap-6 sm:mt-12 sm:grid-cols-3 sm:gap-6">
      {brandImages.map((image) => (
        <div
          key={image.src}
          className="flex items-center justify-center rounded-2xl bg-[#F7F4F0] p-4 sm:p-5"
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(max-width: 640px) 80vw, 240px"
            className={`h-auto w-full object-contain ${image.maxHeight} ${
              "rounded" in image && image.rounded ? "rounded-full" : ""
            }`}
          />
        </div>
      ))}
    </div>
  );
}
