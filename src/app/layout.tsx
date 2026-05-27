import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const hatton = localFont({
  src: "../../public/fonts/PPHatton-Medium.otf",
  variable: "--font-hatton",
  weight: "500",
  display: "swap",
});

const pangram = localFont({
  src: "../../public/fonts/PPPangramSans-CompactRegular.otf",
  variable: "--font-pangram",
  weight: "400",
  display: "swap",
});

const fragment = localFont({
  src: "../../public/fonts/PPFragment-GlareRegular.otf",
  variable: "--font-fragment",
  weight: "400",
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://reevesestates.com"),
  title: {
    default: "Reeves Estates | Houston Estate Sales, Buyouts & Liquidations",
    template: "%s | Reeves Estates",
  },
  description:
    "Reeves Estates — Houston estate handling specialists. Cash buyouts, estate sales, appraisals, and liquidations. Three generations of expertise.",
  keywords:
    "Houston estate sales, estate liquidation Houston, cash estate buyout Houston, River Oaks estate sales, living estate Houston, estate executor Houston, antique estate sale Houston, Houston estate specialists",
  alternates: {
    canonical: "https://reevesestates.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reevesestates.com",
    siteName: "Reeves Estates",
    title: "Reeves Estates | Houston Estate Sales, Buyouts & Liquidations",
    description:
      "Reeves Estates — Houston's full-service estate handling specialists. Cash buyouts, estate sales, appraisals, and liquidations. Serving River Oaks and greater Houston.",
    images: [{ url: "https://reevesestates.com/images/openGraph.webp", width: 1200, height: 630, alt: "Reeves Estates — Houston Estate Sales, Buyouts & Appraisals" }],
  },
  verification: {
    google: "BfsHm3rYAYrHb8ROlYwZz4KFq5bi-RmFioYolMzIaKE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hatton.variable} ${pangram.variable} ${fragment.variable}`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          @font-face {
            font-family: 'PPFragmentGlareItalic';
            src: url('/fonts/PPFragment-GlareRegularItalic.woff2') format('woff2'),
                 url('/fonts/PPFragment-GlareRegularItalic.otf') format('opentype');
            font-weight: 400;
            font-style: italic;
            font-display: swap;
          }
        `}} />
        <link rel="preload" href="/images/hero/Hero-1.webp" as="image" type="image/webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Reeves Estates",
              "description": "Reeves Estates — Houston's full-service estate handling specialists. Cash buyouts, estate sales, appraisals, and liquidations. Serving River Oaks and greater Houston for three generations.",
              "url": "https://reevesestates.com",
              "telephone": "+18324749547",
              "email": "midtownmodern@gmail.com",
              "priceRange": "$$",
              "image": "https://reevesestates.com/images/hero/Hero-1.webp",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2415 Taft St",
                "addressLocality": "Houston",
                "addressRegion": "TX",
                "postalCode": "77006",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 29.747749,
                "longitude": -95.38554
              },
              "areaServed": [
                "River Oaks", "Montrose", "Memorial", "West University",
                "Tanglewood", "Bellaire", "Museum District", "Houston"
              ],
              "makesOffer": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Estate Sales" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cash Estate Buyouts" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Estate Liquidation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Estate Appraisals" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "White-Glove Estate Services" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Living Estates" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "On-Site Estate Sales" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Executor Support" } }
              ],
              "sameAs": [
                "https://reevesartgallery.com"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased relative z-10">{children}</body>
    </html>
  );
}
