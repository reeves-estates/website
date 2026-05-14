import type { Metadata } from "next";
import PhoneLink from "@/components/PhoneLink";

export const metadata: Metadata = {
  title: "Estate Sales in West University Place, Houston",
  description:
    "Reeves Estates handles estate sales, cash buyouts, and fine art appraisals in West University Place, Houston. Trusted by families in one of Houston's most desirable inner-loop neighborhoods. Call 832-474-9547.",
  alternates: { canonical: "https://reevesestates.com/neighborhoods/west-university" },
  openGraph: {
    title: "Estate Sales in West University Place | Reeves Estates",
    description:
      "Reeves Estates handles estate sales, cash buyouts, and fine art appraisals in West University Place, Houston. Trusted by families in one of Houston's most desirable inner-loop neighborhoods.",
    url: "https://reevesestates.com/neighborhoods/west-university",
    images: [{ url: "https://reevesestates.com/images/openGraph.webp", width: 1200, height: 630, alt: "Reeves Estates — Houston Estate Sales, Buyouts & Appraisals" }],
  },
};

export default function WestUniversityPage() {
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
            Serving West University Families
          </h1>
          <div className="w-16 h-[1px] bg-bronze mx-auto mb-4" />
          <p className="font-body text-lg text-cream/70 italic leading-relaxed max-w-2xl mx-auto">
            West U families tend to know what they have — and what it took
            to acquire it. We bring the same clarity to every engagement here.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-10 lg:py-14">
        <div className="flex flex-col gap-10">

          {/* Section 1 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Deliberate homes, accumulated over a long time
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                West University Place is one of the few inner-loop neighborhoods
                where the character has held through decades of change. Families
                connected to Rice University, the Texas Medical Center, the legal
                and professional communities — people who chose West U because
                of what it offered and stayed because it delivered. The homes
                here have held the same families for a generation or more.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                What&rsquo;s inside tends to reflect that intentionality.
                Not grand collecting in the formal sense — but things chosen
                with knowledge. Art acquired with a real eye. Furniture that
                was bought well, not bought quickly. Objects from travels that
                meant something. These homes were assembled by people who
                understood quality even when they weren&rsquo;t thinking of
                themselves as collectors.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Reeves Estates has handled estates like these across Houston
                since 1969. We bring the same specialist attention to every
                West University engagement.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              A gallery setting that suits what West U homes hold
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We hold estate sales at our 5,000 square foot gallery in
                Midtown — just a few minutes from West University Place.
                The gallery setting draws buyers who are specifically seeking
                quality and come prepared to recognize it. For the kinds of
                pieces that come from West U homes — well-chosen furniture,
                art with real merit, decorative objects that reward a second
                look — this is the right audience.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We manage every step in-house: walkthrough and assessment,
                cataloging and pricing, staging, marketing, and the sale
                itself. A full accounting at close, with proceeds distributed
                promptly. For families who prefer a professionally managed
                on-site event at the property, we organize those as well —
                same team, same thoroughness.
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
                West University estates are often settled under pressure from
                competing timelines — a property under contract, an out-of-state
                executor managing multiple responsibilities, a probate proceeding
                with a deadline that a multi-week sale can&rsquo;t accommodate.
                These are exactly the situations our cash buyout service is
                built to resolve.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We assess the estate and deliver a fair cash offer within 48 hours
                of our visit. If it works for you, we handle all removal and
                clearance and leave the property clean. One transaction. No
                commissions, no uncertainty, no second visits. The estate is
                resolved and the property is ready for whatever comes next.
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
                Our written appraisals answer those questions in a form that
                holds up everywhere it needs to: estate attorneys, courts,
                insurance carriers, and the IRS. Each item is documented with
                provenance, condition, and current market comparables. For
                estates where more than one heir is involved, that documentation
                is often the most important step the family can take before any
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
