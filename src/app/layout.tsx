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
    "Reeves Estates — Houston's full-service estate handling specialists. Cash buyouts, estate sales, appraisals, and liquidations. Serving River Oaks and greater Houston for three generations.",
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
  },
  verification: {
    google: "0ZvlKynvzOy89HqbicAAppPNQ_u5lx48RIRmIfkUoIo",
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
        <link rel="preload" href="/images/hero/Hero-1.webp" as="image" type="image/webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
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
                  "River Oaks", "Midtown Houston", "Memorial", "West University",
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
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How quickly can Reeves Estates get started?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We can typically arrange an initial consultation within 48 hours. For time-sensitive situations, we do our best to accommodate same-week visits."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What happens during the initial consultation?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "One of our specialists visits the property, listens to your situation, and assesses the full scope of the estate — at no charge and with no obligation. We then recommend the approach that best fits your needs and timeline."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do I need to organize anything before you arrive?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Not at all. We ask that you leave everything exactly as it is. Part of what we do is assess the estate in its entirety — including items you may not realize have value."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is a cash buyout?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A cash buyout means Reeves Estates purchases your entire estate inventory outright — one transaction, one payment, fast closing. No waiting for buyers, no commission fees, no uncertainty."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How is the buyout price determined?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our specialists draw on decades of expertise in fine art, antiques, and mid-century modern furniture to assess fair market value. We make a transparent, no-obligation offer based on that assessment."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I sell just part of the estate?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We handle partial estates and work with you to identify which pieces to include."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is a living estate sale?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A living estate sale is for clients who are downsizing or relocating. We handle everything with the same care and discretion we bring to any estate, on your timeline."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "We're moving a parent into assisted living. Can Reeves help?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. This is one of the most common situations we handle. We work sensitively with families during what can be an emotional transition, managing the process so you can focus on what matters most."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What makes Reeves Estates different?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our 5,000 square foot gallery in Houston's Midtown gives us a significant advantage. Rather than a rushed sale in a private home, we bring the estate to our gallery — presenting pieces in a professional environment that attracts serious buyers."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What neighbourhoods do you serve?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We serve Houston and the surrounding area, with particular experience in River Oaks, Midtown, and Houston's condo and high-rise communities."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can you conduct a sale at the property itself?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We organize and manage professional on-site sales events — handling all logistics, pricing, marketing, and staffing from start to finish."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How are proceeds handled?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We provide a full accounting of all items sold and issue payment promptly after the sale concludes. Complete transparency at every step."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What happens to items that don't sell?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Options include donation to Houston-area charities, recycling, or removal — we handle all of it so the property is left clean and ready."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Are you licensed and insured?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Reeves carries full professional liability insurance and operates in full compliance with Texas state requirements for estate sales and appraisals."
                    }
                  }
                ]
              }
            ])
          }}
        />
      </head>
      <body className="antialiased relative z-10">{children}</body>
    </html>
  );
}
