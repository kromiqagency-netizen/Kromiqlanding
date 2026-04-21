import type { Metadata } from "next";
import { Inter, Outfit, Space_Mono } from "next/font/google";
import "./globals.css";
import PageLoader from "@/components/PageLoader";

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
  keywords: [
    "Digital Marketing Agency Mumbai",
    "Enterprise SEO Services",
    "Strategic Growth Agency India",
    "PPC Management Global",
    "KROMIQ Digital",
    "Performance Marketing Mumbai"
  ],
  authors: [{ name: "KROMIQ Strategy Team" }],
  creator: "KROMIQ",
  publisher: "KROMIQ",
  alternates: {
    canonical: "https://www.kromiq.in",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "KROMIQ",
  "alternateName": "Kromium Digital",
  "url": "https://www.kromiq.in",
  "logo": "https://www.kromiq.in/icon.png",
  "description": "Premium digital marketing agency specializing in SEO, PPC, and Strategic Growth for Global and Indian markets.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-XXXXXXXXXX",
    "contactType": "sales",
    "areaServed": ["IN", "US", "GB"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/kromiq",
    "https://twitter.com/kromiq"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${spaceMono.variable} dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
      </head>
      <body className="bg-background text-foreground selection:bg-primary/30 font-sans overflow-x-hidden">
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
