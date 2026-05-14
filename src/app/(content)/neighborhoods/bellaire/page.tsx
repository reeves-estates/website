import type { Metadata } from "next";
import PhoneLink from "@/components/PhoneLink";

export const metadata: Metadata = {
  title: "Estate Sales in Bellaire, Houston",
  description:
    "Reeves Estates handles estate sales, cash buyouts, and fine art appraisals in Bellaire, TX. White-glove service for families in one of Houston's most established communities. Call 832-474-9547.",
  alternates: { canonical: "https://reevesestates.com/neighborhoods/bellaire" },
  openGraph: {
    title: "Estate Sales in Bellaire, TX | Reeves Estates",
    description:
      "Reeves Estates handles estate sales, cash buyouts, and fine art appraisals in Bellaire, TX. White-glove service for families in one of Houston's most established communities.",
    url: "https://reevesestates.com/neighborhoods/bellaire",
    images: [{ url: "https://reevesestates.com/images/openGraph.webp", width: 1200, height: 630, alt: "Reeves Estates — Houston Estate Sales, Buyouts & Appraisals" }],
  },
};

export default function BellairePage() {
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
            style={{ fontFamily: "var(--font-hatton)", fontWeight: 500, lineHeight: 1.0, letterSpacing: "-0.020em" }}
          >
            Bellaire Estates, Handled with Care
          </h1>
          <div className="w-16 h-[1px] bg-bronze mx-auto mb-4" />
          <p className="font-body text-lg text-cream/70 italic leading-relaxed max-w-2xl mx-auto">
            Bellaire is a neighborhood built on permanence. The families who
            settle here tend to stay. What&rsquo;s inside reflects that.
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
                Bellaire homes don&rsquo;t turn over quickly. Families put down
                roots here and stay — thirty, forty, fifty years in the same
                house, acquiring as they go. The estates we handle here are
                rarely grand collections in the formal sense. They&rsquo;re
                something more personal than that: a dining room set chosen the
                year a couple married, a painting picked up on a trip that
                meant something, silver inherited from a grandmother who kept
                it polished.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                These estates carry real value — monetary and otherwise. And
                they deserve to be handled by someone who slows down enough to
                recognize what&rsquo;s significant, rather than moving through
                a property as quickly as possible.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Reeves Estates has served Houston families since 1969. We bring
                the same patience and expertise to every Bellaire engagement —
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
                5,000 square foot gallery in Midtown Houston. The gallery
                setting draws buyers who are specifically looking for quality —
                collectors, interior designers, private individuals who
                understand what they&rsquo;re purchasing and are prepared to
                pay accordingly.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Bellaire properties often lend themselves to on-site sales as
                well — particularly when a home has a character that suits what
                it holds. If the family prefers a professionally managed event
                at the property itself, we organize and staff those too. The
                same team, the same standards, the same commitment to a
                thorough result.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We handle every step: walkthrough, cataloging, pricing, staging,
                marketing, and the sale. A complete accounting at close, with
                proceeds distributed without delay.
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
                Sometimes a family arrives at this process with competing
                priorities — siblings managing an estate from different cities,
                a property that needs to close, a timeline set by probate.
                Our cash buyout service is designed for exactly that: one offer
                on the entire estate, one payment, and we handle everything
                from there.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We deliver a fair cash offer within 48 hours of our initial
                visit. If it works, we move quickly. All removal and clearance
                is included. The property is left ready for whatever comes next.
                If the offer doesn&rsquo;t work for you, there is no obligation.
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
                written appraisal is often the most important step a family can
                take before making any decisions. It gives everyone the same
                information, removes speculation, and protects the integrity of
                the process — whatever direction the family ultimately chooses.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Our valuations document each item with provenance, condition
                notes, and current market comparables. They satisfy estate
                attorneys, courts, insurance carriers, and the IRS — and they
                give families the confidence that nothing of value has been
                overlooked or mischaracterized.
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
                { name: "Midtown", href: "/neighborhoods/midtown" },
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
