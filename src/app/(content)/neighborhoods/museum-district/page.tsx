import type { Metadata } from "next";
import PhoneLink from "@/components/PhoneLink";

export const metadata: Metadata = {
  title: "Estate Sales in the Museum District, Houston",
  description:
    "Estate sales, cash buyouts, and appraisals in Houston's Museum District. Deep expertise in fine art, antiques, and significant collections. Call 832-474-9547.",
  alternates: { canonical: "https://reevesestates.com/neighborhoods/museum-district" },
  openGraph: {
    title: "Estate Sales in the Museum District, Houston | Reeves Estates",
    description:
      "Estate sales, cash buyouts, and appraisals in Houston's Museum District. Deep expertise in fine art, antiques, and significant collections.",
    url: "https://reevesestates.com/neighborhoods/museum-district",
    images: [{ url: "https://reevesestates.com/images/openGraph.webp", width: 1200, height: 630, alt: "Reeves Estates — Houston Estate Sales, Buyouts & Appraisals" }],
  },
};

export default function MuseumDistrictPage() {
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
                { "@type": "ListItem", "position": 2, "name": "Museum District", "item": "https://reevesestates.com/neighborhoods/museum-district" }
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
              "areaServed": { "@type": "AdministrativeArea", "name": "Museum District, Houston, TX" }
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
            For Museum District Collectors
          </h1>
          <div className="w-16 h-[1px] bg-bronze mx-auto mb-4" />
          <p className="font-body text-lg text-cream/70 italic leading-relaxed max-w-2xl mx-auto">
            You don&rsquo;t choose to live in the Museum District by
            coincidence. The people here know art — and so do we.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-10 lg:py-14">
        <div className="flex flex-col gap-10">

          {/* Section 1 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              A neighborhood shaped by world-class cultural institutions
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Living within walking distance of the Museum of Fine Arts, the
                Menil Collection, the Contemporary Arts Museum, and the Rothko
                Chapel changes how a person relates to art. Museum District
                residents have spent their lives surrounded by serious work,
                and their homes reflect that.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                In these estates, collections are consistently more considered.
                Not always more expensive — though often that too — but more
                deliberate. Works chosen with understanding. Objects acquired
                because they meant something, not just to fill a wall.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Reeves Art + Design has been part of Houston&rsquo;s art world
                since 1969. We know the galleries, artists, institutions, and
                collectors that have shaped this part of the city&mdash;experience
                that directly informs how we handle Museum District estates.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Significant works, specialist handling
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Museum District estates often include works that need more than
                a general appraisal — paintings with provenance, prints from
                known editions, sculpture by artists with track records, and
                decorative objects chosen with context in mind. These pieces
                deserve individual attention.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                For especially important works, we first pursue private
                placement — connecting your family with a collector or institution
                that knows the work and will pay appropriately for it. Some
                pieces belong in the right hands; we know how to find them.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Our written appraisals record provenance, condition, and current
                market comparables for each item — reports that satisfy estate
                attorneys, courts, insurers, and tax requirements, and ensure
                nothing of value is overlooked.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Gallery sales that reach the right buyers
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                For the broader estate, our 5,000-square-foot Montrose gallery
                is the right setting. Reeves attracts collectors and serious
                buyers — exactly the audience for pieces that come from this
                neighborhood. We handle everything in-house: walkthrough,
                cataloging, pricing, staging, marketing, and sales.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Every engagement begins with an honest walkthrough — no
                obligation, no pressure. You get a clear picture of what you
                have, what it&rsquo;s worth, and your options. The family
                decides; we make sure that the decision is informed.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Cash buyouts when simplicity matters
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Not every family needs an auction. Sometimes the key pieces
                have already been placed, and what&rsquo;s left is a house
                that needs to be cleared quickly and completely. Our cash
                buyout service is for that: one offer, one payment,
                everything removed.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Within 48 hours of our visit, we will present a fair cash
                offer. If you accept, we handle all removal and leave the
                property ready for whatever comes next. For out-of-town
                executors, this option often removes more complexity than
                anything else we offer.
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
                { name: "Montrose", href: "/neighborhoods/montrose" },
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
              href="mailto:midtownmodern@gmail.com?subject=Museum%20District%20estate%20inquiry"
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
