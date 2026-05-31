import type { Metadata } from "next";
import PhoneLink from "@/components/PhoneLink";

export const metadata: Metadata = {
  title: "Estate Sales in Bellaire, Houston",
  description:
    "Estate sales, cash buyouts, and appraisals in Bellaire, TX. White-glove service for established Houston families. Call 832-474-9547.",
  alternates: { canonical: "https://reevesestates.com/neighborhoods/bellaire" },
  openGraph: {
    title: "Estate Sales in Bellaire, TX | Reeves Estates",
    description:
      "Estate sales, cash buyouts, and appraisals in Bellaire, TX. White-glove service for established Houston families.",
    url: "https://reevesestates.com/neighborhoods/bellaire",
    images: [{ url: "https://reevesestates.com/images/openGraph.webp", width: 1200, height: 630, alt: "Reeves Estates — Houston Estate Sales, Buyouts & Appraisals" }],
  },
};

export default function BellairePage() {
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
                { "@type": "ListItem", "position": 2, "name": "Bellaire", "item": "https://reevesestates.com/neighborhoods/bellaire" }
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
              "areaServed": { "@type": "AdministrativeArea", "name": "Bellaire, TX" }
            }
          ])
        }}
      />

      {/* Header */}
      <div className="bg-charcoal pt-24 pb-14 lg:pt-32 lg:pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="font-compact text-xs tracking-widest uppercase text-bronze mb-4">
            Reeves Estates · Houston, TX
          </p>
          <h1
            className="text-4xl md:text-6xl text-cream mb-4"
            style={{ fontFamily: "var(--font-hatton)", fontWeight: 500, lineHeight: 1.0, letterSpacing: "-0.020em" }}
          >
            Bellaire Estates, Handled with Care
          </h1>
          <div className="w-16 h-[1px] bg-bronze mx-auto mb-4" />
          <p className="font-body text-lg text-cream/70 italic leading-relaxed max-w-2xl mx-auto">
            Bellaire is a neighborhood built on permanence. Families who
            settle here tend to stay, and their homes reflect that.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-10 lg:py-14">
        <div className="flex flex-col gap-10">

          {/* Section 1 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Lives accumulated, not collections assembled
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Bellaire homes rarely change hands. Families put down roots
                and remain — thirty, forty, even fifty years in the same house.
                The estates we handle here are less formal &ldquo;collections&rdquo;
                and more a record of a life: a dining room set chosen the year
                a couple married, a painting from a meaningful trip, silver
                inherited from a grandmother who kept it polished.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                These estates carry real value — monetary and otherwise — and
                deserve to be handled by someone who slows down enough to see
                what&rsquo;s significant.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Reeves Estates has served Houston families since 1969. We bring
                the same patience and expertise to every Bellaire engagement,
                because the families we work with here have every right to
                expect both.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Gallery sale or on-site — whichever serves you better
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                For most estates, we recommend bringing the collection to our
                5,000-square-foot Montrose gallery. The setting attracts
                buyers who seek quality — collectors, interior designers, and
                private individuals who understand what they&rsquo;re purchasing
                and are prepared to pay accordingly.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Many Bellaire properties also suit on-site sales, especially
                when a home&rsquo;s character matches what it holds. If the
                family prefers a professionally managed sale at the property,
                we organize and staff that as well — the same team, the same
                standards, the same commitment to a thorough result.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We handle every step: walkthrough, cataloging, pricing, staging,
                marketing, and the sale, followed by a complete accounting at
                close and prompt distribution of proceeds.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              A clean resolution when the family needs one
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Families often come to this process with competing priorities —
                siblings in different cities, a property that needs to close,
                deadlines set by probate. Our cash buyout service is designed
                for exactly that: one offer on the entire estate, one payment,
                and we handle everything from there.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Within 48 hours of our initial visit, we provide a fair cash
                offer. If it works for you, we move quickly. All removal and
                clearance are included, and the property is left ready for
                whatever comes next. If the offer isn&rsquo;t right, there
                is no obligation.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Appraisals that give every heir a clear picture
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                When a Bellaire estate passes to multiple heirs, an independent
                written appraisal is often the most important step before any
                decisions are made. It gives everyone the same information,
                prevents speculation, and protects the integrity of the process —
                whatever the family ultimately chooses.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Our valuations document each item with provenance, condition
                notes, and current market comparables. They satisfy estate
                attorneys, courts, and insurance carriers — and they give
                families confidence that nothing of value has been overlooked
                or mischaracterized.
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
                { name: "Museum District", href: "/neighborhoods/museum-district" },
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
            No pressure, no obligation. Just an honest conversation about
            what you have and what your options are.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PhoneLink className="px-8 py-3.5 bg-bronze text-cream font-compact text-sm tracking-widest uppercase hover:opacity-90 transition-opacity">Call 832-474-9547</PhoneLink>
            <a
              href="mailto:midtownmodern@gmail.com?subject=Bellaire%20estate%20inquiry"
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
