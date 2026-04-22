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
  metadataBase: new URL('https://www.kromiq.in'),
  title: {
    default: "Best Strategic Digital Agency in India | KROMIQ",
    template: "%s | Best Digital Agency"
  },
  description: "KROMIQ is a premier strategic growth agency synthesizing radical creative design with data-driven intelligence. Specializing in SEO, PPC, and AI Automation for global brands.",
  openGraph: {
    title: "KROMIQ | Strategic Growth Agency",
    description: "Synthesis of Chroma and IQ. We build high-performance digital ecosystems for modern brands.",
    url: "https://www.kromiq.in",
    siteName: "KROMIQ",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'KROMIQ Strategic Growth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KROMIQ | Strategic Growth Agency',
    description: 'Synthesis of Chroma and IQ for modern brands.',
    creator: '@kromiq',
    images: ['/og-image.png'],
  },
  keywords: [
    "Digital Marketing Agency Mumbai",
    "Best SEO Agency India",
    "Performance Marketing Agency",
    "Strategic Brand Design",
    "AI Automation Services India",
    "PPC Management Agency",
    "KROMIQ Digital",
    "Conversion Rate Optimization"
  ],
  authors: [{ name: "KROMIQ Strategy Team" }],
  creator: "KROMIQ",
  publisher: "KROMIQ",
  alternates: {
    canonical: "https://www.kromiq.in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.kromiq.in/#organization",
      "name": "KROMIQ",
      "url": "https://www.kromiq.in",
      "logo": "https://www.kromiq.in/icon.png",
      "sameAs": [
        "https://www.instagram.com/kromiq.agency?igsh=MWkwdTlzYWVraGU2Mw==",
        "https://www.linkedin.com/company/kromiq-agency/about"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "contactType": "sales",
        "areaServed": "IN"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.kromiq.in/#website",
      "url": "https://www.kromiq.in",
      "name": "KROMIQ",
      "publisher": { "@id": "https://www.kromiq.in/#organization" }
    },
    {
      "@type": "Service",
      "serviceType": "Search Engine Optimization",
      "provider": { "@id": "https://www.kromiq.in/#organization" },
      "areaServed": "Global"
    },
    {
      "@type": "Service",
      "serviceType": "Performance Marketing",
      "provider": { "@id": "https://www.kromiq.in/#organization" },
      "areaServed": "Global"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does KROMIQ drive ROI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We combine forensic data analysis with high-fidelity creative execution to ensure maximum capital efficiency for marketing spend."
          }
        },
        {
          "@type": "Question",
          "name": "How do you handle SEO and Indexing?",
          "acceptedAnswer": {
            "@type": { "@type": "Answer" },
            "text": "Our SEO framework is built on Semantic Connectivity, using structured data and technical architecture optimized for both search engines and AI answer engines."
          }
        }
      ]
    }
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
      <body className="bg-background text-foreground selection:bg-primary/30 font-sans overflow-x-hidden">
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
