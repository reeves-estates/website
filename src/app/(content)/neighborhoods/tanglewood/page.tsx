import type { Metadata } from "next";
import PhoneLink from "@/components/PhoneLink";

export const metadata: Metadata = {
  title: "Estate Sales in Tanglewood, Houston",
  description:
    "Reeves Estates handles estate sales, cash buyouts, and fine art appraisals in Tanglewood, Houston. Expert handling for one of Houston's most storied neighborhoods. Call 832-474-9547.",
  alternates: { canonical: "https://reevesestates.com/neighborhoods/tanglewood" },
  openGraph: {
    title: "Estate Sales in Tanglewood, Houston | Reeves Estates",
    description:
      "Reeves Estates handles estate sales, cash buyouts, and fine art appraisals in Tanglewood, Houston. Expert handling for one of Houston's most storied neighborhoods.",
    url: "https://reevesestates.com/neighborhoods/tanglewood",
    images: [{ url: "https://reevesestates.com/images/openGraph.webp", width: 1200, height: 630, alt: "Reeves Estates — Houston Estate Sales, Buyouts & Appraisals" }],
  },
};

export default function TanglewoodPage() {
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
            Tanglewood Collections, Properly Handled
          </h1>
          <div className="w-16 h-[1px] bg-bronze mx-auto mb-4" />
          <p className="font-body text-lg text-cream/70 italic leading-relaxed max-w-2xl mx-auto">
            Tanglewood wasn&rsquo;t built overnight, and neither were the
            collections inside it. We handle both with the same respect.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-10 lg:py-14">
        <div className="flex flex-col gap-10">

          {/* Section 1 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Collections built with knowledge, not just wealth
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Tanglewood has housed Houston&rsquo;s business and civic
                leadership for generations — and the estates we encounter here
                reflect that history. Art collections acquired with genuine
                discernment. Antique furniture chosen for its quality, not its
                convenience. Fine silver and porcelain that belonged to people
                who understood what they were acquiring.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                These collections weren&rsquo;t assembled casually. They were
                built over decades by people who cared about what surrounded
                them — which means they deserve to be handled by someone who
                understands the difference between a notable piece and a
                reproduction, between market value and sentimental assignment.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Reeves Art + Design has been part of the Houston art and
                antiques market since 1969. That depth of experience is what
                we bring to every Tanglewood engagement — and what allows us
                to find the right outcome for each piece, not just the fastest
                one.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Presented properly, to buyers who know the difference
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We hold estate sales at our 5,000 square foot gallery in
                Midtown Houston — a considered environment that draws the
                kind of buyers Tanglewood collections deserve. Serious
                collectors. Interior designers working at the highest level.
                Private buyers who recognize quality because they&rsquo;ve
                spent a lifetime acquiring it.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                For pieces of particular significance, we look first at private
                placement — reaching directly into our network of collectors and
                specialist dealers before recommending any public channel. The
                right buyer for a significant piece is often someone specific,
                and a direct approach almost always yields a better result than
                a general sale.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Everything is managed in-house: the walkthrough, cataloging
                and research, pricing, staging, marketing, and the sale itself.
                You receive a full accounting at close and proceeds are
                distributed promptly.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              When the priority is resolution, not optimization
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Tanglewood estates are often settled across complex family
                circumstances — out-of-state heirs, properties under contract,
                executors managing probate on a timeline that doesn&rsquo;t
                accommodate a multi-week sale process. When certainty matters
                more than maximizing every item, our cash buyout service
                offers a direct path forward.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We assess the estate, deliver a fair offer within 48 hours
                of our visit, and if it works for you, we take it from there.
                All removal. All clearance. One payment. The property is left
                clean and ready for its next chapter.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Appraisals that protect every member of the family
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Before any decision is made about what to sell, donate, or
                distribute, every family deserves to know what they actually
                have. In a Tanglewood estate, that question is rarely simple —
                the collections here often include pieces whose value isn&rsquo;t
                obvious without specialist knowledge.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Our written valuations document each item with provenance,
                condition, and current market comparables. They satisfy estate
                attorneys, courts, insurance carriers, and the IRS — and they
                ensure that no heir walks away uncertain about whether the
                estate was handled fairly. That certainty is worth the care
                it takes to produce it.
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
                { name: "Memorial", href: "/neighborhoods/memorial" },
                { name: "West University Place", href: "/neighborhoods/west-university" },
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
              href="mailto:midtownmodern@gmail.com?subject=Tanglewood%20estate%20inquiry"
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
