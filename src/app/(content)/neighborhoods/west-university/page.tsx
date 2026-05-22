import type { Metadata } from "next";
import PhoneLink from "@/components/PhoneLink";

export const metadata: Metadata = {
  title: "Estate Sales in West University Place, Houston",
  description:
    "Estate sales, cash buyouts, and appraisals in West University Place, Houston. Trusted by inner-loop families for three generations. Call 832-474-9547.",
  alternates: { canonical: "https://reevesestates.com/neighborhoods/west-university" },
  openGraph: {
    title: "Estate Sales in West University Place | Reeves Estates",
    description:
      "Estate sales, cash buyouts, and appraisals in West University Place, Houston. Trusted by inner-loop families for three generations.",
    url: "https://reevesestates.com/neighborhoods/west-university",
    images: [{ url: "https://reevesestates.com/images/openGraph.webp", width: 1200, height: 630, alt: "Reeves Estates — Houston Estate Sales, Buyouts & Appraisals" }],
  },
};

export default function WestUniversityPage() {
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
                { "@type": "ListItem", "position": 2, "name": "West University Place", "item": "https://reevesestates.com/neighborhoods/west-university" }
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
              "areaServed": { "@type": "AdministrativeArea", "name": "West University Place, TX" }
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
            style={{ fontFamily: "var(--font-hatton)", fontWeight: 500, lineHeight: 1.0, letterSpacing: "-0.020em" }}
          >
            Serving West University Families
          </h1>
          <div className="w-16 h-[1px] bg-bronze mx-auto mb-4" />
          <p className="font-body text-lg text-cream/70 italic leading-relaxed max-w-2xl mx-auto">
            West U families tend to know what they have — and what it took
            to acquire it. We bring that same clarity to every engagement.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-10 lg:py-14">
        <div className="flex flex-col gap-10">

          {/* Section 1 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Deliberate homes, assembled over time
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                West University Place is one of the few inner-loop neighborhoods
                whose character has endured decades of change. Families connected
                to Rice University, the Texas Medical Center, and Houston&rsquo;s
                legal and professional communities chose West U for what it
                offered — and stayed because it delivered. Many homes have
                remained with the same families for a generation or more.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Inside, the contents reflect that intention: art chosen with
                care, furniture bought well rather than quickly, objects from
                meaningful travels. These homes were built piece by piece by
                people who understood quality, even if they never called
                themselves collectors.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Reeves Estates has handled estates like these across Houston
                since 1969, bringing specialist attention to every West
                University engagement.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              A gallery setting that fits West U homes
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We hold estate sales at our 5,000-square-foot Montrose gallery,
                just minutes from West University Place. This setting draws
                buyers who are specifically seeking quality and ready to
                recognize it — the right audience for well-chosen furniture,
                art with real merit, and decorative objects that reward a
                second look.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We manage every step in-house: walkthrough and assessment,
                cataloging and pricing, staging, marketing, and the sale
                itself. You receive a full accounting at close and prompt
                distribution of proceeds. If you prefer a professionally
                managed on-site event, we organize those as well with the
                same team and the same thoroughness.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              When the timeline won&rsquo;t wait
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                West University estates are often settled under pressure — a
                property under contract, an out-of-state executor with limited
                time, or a probate deadline a multi-week sale can&rsquo;t meet.
                These are exactly the situations our cash buyout service is
                designed to resolve.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We assess the estate and provide a fair cash offer within 48
                hours of our visit. If it works for you, we handle all removal
                and clearance and leave the property clean. One transaction.
                No commissions, no uncertainty, no second visits. The estate
                is resolved, and the property is ready for what comes next.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Appraisals for families who want to understand what they have
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                West University families often approach an estate with more
                knowledge than most — and more questions. What is this piece
                actually worth today? Has the market moved since it was
                purchased? How should it be valued for equitable distribution
                among multiple heirs?
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Our written appraisals answer those questions in a format that
                holds up with estate attorneys, courts, and insurance carriers. Each item is documented with provenance, condition,
                and current market comparables. For estates with multiple heirs,
                that documentation is often the most important step before any
                decisions are made.
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
                { name: "Bellaire", href: "/neighborhoods/bellaire" },
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
              href="mailto:midtownmodern@gmail.com?subject=West%20University%20estate%20inquiry"
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
