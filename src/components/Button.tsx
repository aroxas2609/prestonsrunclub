import Link from "next/link";

type Variant = "primary" | "outline" | "inverse";

type Size = "md" | "lg";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
};

const base =
  "inline-flex items-center justify-center rounded-xl font-black uppercase tracking-wide transition-all duration-[var(--motion-fast)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

const variants: Record<Variant, string> = {
  primary:
    "relative overflow-hidden bg-accent text-black shadow-md before:pointer-events-none before:absolute before:inset-y-0 before:-left-1/2 before:w-1/3 before:rotate-12 before:bg-white/40 before:opacity-0 before:blur-[1px] before:transition-all before:duration-[var(--motion-slow)] hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-lg hover:before:left-[120%] hover:before:opacity-100 active:translate-y-0",
  outline:
    "border-2 border-black bg-white text-black hover:-translate-y-0.5 hover:bg-black hover:text-white hover:shadow-lg active:translate-y-0",
  inverse:
    "border-2 border-white bg-transparent text-white hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-lg active:translate-y-0",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-3 text-xs sm:text-sm",
  lg: "px-6 py-3.5 text-sm",
};

export function buttonClass(variant: Variant = "primary", size: Size = "lg") {
  return `${base} ${variants[variant]} ${sizes[size]}`;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "lg",
  className = "",
  external = false,
}: ButtonLinkProps) {
  const cls = `${buttonClass(variant, size)} ${className}`.trim();

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
