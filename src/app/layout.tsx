import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import { CartDrawer } from "@/components/CartDrawer";
import { Footer } from "@/components/Footer";
import { HashScroll } from "@/components/layout/HashScroll";
import { Navbar } from "@/components/Navbar";
import { CartProvider } from "@/context/cart-context";
import { SITE_NAME } from "@/lib/constants";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Run. Connect. Repeat.`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Local running community. Every Saturday 9:00 AM at Black Elk. All levels welcome.",
  icons: {
    icon: "/run-club-logo.png",
    apple: "/run-club-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${outfit.variable}`}>
      <body className="font-sans min-h-dvh flex flex-col">
        <CartProvider>
          <HashScroll />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
