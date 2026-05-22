import type { Metadata } from "next";
import PhoneLink from "@/components/PhoneLink";

export const metadata: Metadata = {
  title: "Estate Sales in Montrose, Houston",
  description:
    "Reeves Estates is based in Montrose — estate sales, cash buyouts, and fine art appraisals from our 5,000 sq ft Taft Street gallery. Call 832-474-9547.",
  alternates: { canonical: "https://reevesestates.com/neighborhoods/montrose" },
  openGraph: {
    title: "Estate Sales in Montrose, Houston | Reeves Estates",
    description:
      "Reeves Estates is based in Montrose — estate sales, cash buyouts, and fine art appraisals from our 5,000 sq ft Taft Street gallery.",
    url: "https://reevesestates.com/neighborhoods/montrose",
    images: [{ url: "https://reevesestates.com/images/openGraph.webp", width: 1200, height: 630, alt: "Reeves Estates — Houston Estate Sales, Buyouts & Appraisals" }],
  },
};

export default function MontrosePage() {
  return (
    <div className="bg-cream min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://reevesestates.com" },
                { "@type": "ListItem", "position": 2, "name": "Montrose", "item": "https://reevesestates.com/neighborhoods/montrose" }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Reeves Estates",
              "url": "https://reevesestates.com",
              "telephone": "+18324749547",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2415 Taft St",
                "addressLocality": "Houston",
                "addressRegion": "TX",
                "postalCode": "77006",
                "addressCountry": "US"
              },
              "areaServed": { "@type": "AdministrativeArea", "name": "Montrose, Houston, TX" }
            }
          ])
        }}
      />
      {/* Header */}
      <div className="bg-charcoal py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="font-compact text-xs tracking-widest uppercase text-bronze mb-4">
            Reeves Estates · Houston, TX
          </p>
          <h1
            className="text-4xl md:text-6xl text-cream mb-4"
            style={{ fontFamily: "var(--font-hatton)", fontWeight: 500, lineHeight: 0.95, letterSpacing: "-0.020em" }}
          >
            Reeves Estates. Rooted in Montrose.
          </h1>
          <div className="w-16 h-[1px] bg-bronze mx-auto mb-4" />
          <p className="font-body text-lg text-cream/70 italic leading-relaxed max-w-2xl mx-auto">
            Most estate companies pass through Montrose. We&rsquo;ve been here
            since 1969. That matters.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-10 lg:py-14">
        <div className="flex flex-col gap-10">

          {/* Section 1 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Inside the market
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Since 1969, Reeves Estates has been at Taft and Fairview.
                That history is why we understand Houston&rsquo;s art market
                from the inside. We&rsquo;ve seen galleries open and close,
                worked with the collectors who shaped the city&rsquo;s taste,
                and represented artists whose work now appears in estate
                inventories across the inner loop.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                In that time, Montrose has shifted from a quiet residential
                area to one of Houston&rsquo;s most active neighborhoods&mdash;and
                we&rsquo;ve been here throughout. That continuity gives us a
                rare view of Houston&rsquo;s collector community and a network
                that improves how estates are handled.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              What Montrose estates look like
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Montrose attracts people with real taste&mdash;artists,
                creative professionals, longtime Houstonians, and those who
                chose this neighborhood for its culture. The estates here are
                varied: a lifelong Houstonian&rsquo;s apartment full of art;
                an artist&rsquo;s studio active here for forty years; a
                professional&rsquo;s home built through careful collecting.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                This isn&rsquo;t a neighborhood of standard-issue homes, so
                we don&rsquo;t use a template for Montrose estates. Each
                walkthrough teaches us something new&mdash;and that keeps
                the work interesting.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Your estate, presented here
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Our 5,000-square-foot gallery on Taft Street is where estates
                are sold properly&mdash;not in a rushed home sale or a
                cluttered auction warehouse, but in a considered setting that
                attracts buyers and collectors who recognize quality.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                For Montrose families and executors, this is the direct
                option. We&rsquo;re already here, which means quicker
                assessments, fewer complications, and real familiarity
                with the local market.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We handle everything: walkthrough, cataloging, pricing,
                staging, marketing, and the sale. You receive a complete
                accounting at close, and proceeds are paid promptly.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              From the first visit to the cleared property
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Out-of-town executors find this especially valuable. We can
                assess, advise, and move quickly without repeated travel
                or delays.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                For families or executors who prioritize certainty, our cash
                buyout service offers a clear path: one offer within 48 hours
                of our visit, one payment at close, all removal and clearance
                included. The property is left ready for whatever comes
                next&mdash;no second trips required.
              </p>
            </div>
          </div>

          {/* Neighborhoods nearby */}
          <div className="border-t border-bronze/15 pt-8">
            <p className="font-compact text-xs tracking-widest uppercase text-bronze mb-4">
              Also serving nearby
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "River Oaks", href: "/neighborhoods/river-oaks" },
                { name: "Tanglewood", href: "/neighborhoods/tanglewood" },
                { name: "Memorial", href: "/neighborhoods/memorial" },
                { name: "West University Place", href: "/neighborhoods/west-university" },
                { name: "Bellaire", href: "/neighborhoods/bellaire" },
                { name: "Museum District", href: "/neighborhoods/museum-district" },
                { name: "Upper Kirby", href: "/neighborhoods/upper-kirby" },
              ].map((n) => (
                <a key={n.name} href={n.href} className="font-compact text-sm text-charcoal/60 border border-bronze/20 px-3 py-1 hover:text-bronze hover:border-bronze/40 transition-colors">
                  {n.name}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-charcoal py-14 lg:py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-light text-cream mb-4">
            Let&rsquo;s talk about your estate.
          </h2>
          <p className="font-body text-sm text-cream/60 mb-6">
            No pressure, no obligation. Just an honest conversation about what
            you have and what your options are.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PhoneLink className="px-8 py-3.5 bg-bronze text-cream font-compact text-sm tracking-widest uppercase hover:opacity-90 transition-opacity">Call 832-474-9547</PhoneLink>
            <a
              href="mailto:midtownmodern@gmail.com?subject=Montrose%20estate%20inquiry"
              className="px-8 py-3.5 border border-cream/30 text-cream font-compact text-sm tracking-widest uppercase hover:border-bronze hover:text-bronze transition-colors"
            >
              Email us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
