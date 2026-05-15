import type { Metadata } from "next";
import PhoneLink from "@/components/PhoneLink";

export const metadata: Metadata = {
  title: "Estate Sales in River Oaks, Houston",
  description:
    "Estate sales, cash buyouts, and appraisals in River Oaks, Houston. White-glove service for distinguished collections. Call 832-474-9547.",
  alternates: { canonical: "https://reevesestates.com/neighborhoods/river-oaks" },
  openGraph: {
    title: "Estate Sales in River Oaks, Houston | Reeves Estates",
    description:
      "Estate sales, cash buyouts, and appraisals in River Oaks, Houston. White-glove service for distinguished collections.",
    url: "https://reevesestates.com/neighborhoods/river-oaks",
    images: [{ url: "https://reevesestates.com/images/openGraph.webp", width: 1200, height: 630, alt: "Reeves Estates — Houston Estate Sales, Buyouts & Appraisals" }],
  },
};

export default function RiverOaksPage() {
  return (
    <div className="bg-cream min-h-screen">
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
            Handling River Oaks Estates
          </h1>
          <div className="w-16 h-[1px] bg-bronze mx-auto mb-4" />
          <p className="font-body text-lg text-cream/70 italic leading-relaxed max-w-2xl mx-auto">
            River Oaks collections weren&rsquo;t assembled by accident. Neither
            is the way we handle them.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-10 lg:py-14">
        <div className="flex flex-col gap-10">

          {/* Section 1 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              A neighborhood that demands genuine expertise
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                River Oaks is home to some of the most significant private
                collections in Texas&mdash;fine art acquired over decades,
                European antiques, mid-century furniture by designers whose
                work now appears in museums, and silver and porcelain passed
                down through generations. These estates didn&rsquo;t accumulate
                by default. The people who built them understood markets,
                provenance, and quality.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Settling an estate here requires someone who can read what
                they&rsquo;re looking at&mdash;not just catalog it, but
                understand it. Someone who knows which pieces deserve individual
                attention, which buyers are right for what&rsquo;s truly
                significant, and where the real value lies beneath the surface
                of a room.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Reeves Estates has been active in Houston&rsquo;s art and
                antiques market since 1969. That history is what makes us the
                right call for River Oaks families. We don&rsquo;t guess at
                values. We know them.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              The right buyer for the right piece
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                For most River Oaks estates, we begin with private
                placement&mdash;reaching out directly to collectors and
                specialist buyers before recommending any public channel.
                The right buyer for a significant Texas regionalist painting,
                a notable piece of sculpture, or a fine European antique is
                often someone specific, someone who already knows the work and
                is prepared to pay accordingly.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                For the broader estate, our 5,000-square-foot gallery in
                Montrose attracts exactly the kind of buyers River Oaks
                collections deserve: serious collectors, interior designers
                working at the highest level, and private buyers who understand
                what they&rsquo;re acquiring. A home sale&mdash;even a
                well-run one&mdash;rarely puts pieces in front of the same
                audience.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We manage the entire process in-house: walkthrough and
                assessment, cataloging, staging, marketing, and the sale itself.
                You receive a detailed accounting at close, and proceeds are
                distributed promptly.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Cash buyouts for families who need certainty
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                River Oaks estates are often among the most complex to
                settle: formal probate proceedings, out-of-town executors,
                multiple heirs with different priorities, properties that must
                be cleared before they can be listed. These situations call for
                a path that removes uncertainty from the process entirely.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Our cash buyout service purchases the entire estate outright.
                One offer within 48 hours of our visit. One payment at close.
                We handle all removal and clearance and leave the property
                ready for whatever comes next. If the offer doesn&rsquo;t
                work for you, there is no obligation.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Appraisals that hold up where it counts
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Before any River Oaks estate is sold or distributed, a proper
                written appraisal is essential&mdash;not optional. Our appraisers
                document each significant item with provenance, condition notes,
                and current market comparables. These reports satisfy estate
                attorneys, courts, and insurance carriers.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                More than their legal utility, a thorough appraisal ensures
                that nothing of value is missed, undervalued, or sold for
                less than it should be. In an estate of this caliber,
                that protection is worth the time it takes.
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
                { name: "Tanglewood", href: "/neighborhoods/tanglewood" },
                { name: "Memorial", href: "/neighborhoods/memorial" },
                { name: "West University Place", href: "/neighborhoods/west-university" },
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
            No pressure, no obligation. Just an honest conversation about what
            you have and what your options are.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PhoneLink className="px-8 py-3.5 bg-bronze text-cream font-compact text-sm tracking-widest uppercase hover:opacity-90 transition-opacity">Call 832-474-9547</PhoneLink>
            <a
              href="mailto:midtownmodern@gmail.com?subject=River%20Oaks%20estate%20inquiry"
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
