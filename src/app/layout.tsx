import type { Metadata } from "next";
import { Inter, Outfit, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "KROMIQ | Strategic Growth Agency",
  description: "Accelerate your vision with a synthesis of creative design and data-driven intelligence. KROMIQ is your strategic integrator for exponential growth.",
  openGraph: {
    title: "KROMIQ | Strategic Growth",
    description: "Synthesis of Chroma and IQ for modern brands.",
    url: "https://kromiq.agency",
    siteName: "KROMIQ",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${spaceMono.variable} dark scroll-smooth`}>
      <body className="bg-background text-foreground selection:bg-primary/30 font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
