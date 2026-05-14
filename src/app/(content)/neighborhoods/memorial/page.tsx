import type { Metadata } from "next";
import PhoneLink from "@/components/PhoneLink";

export const metadata: Metadata = {
  title: "Estate Sales in Memorial, Houston",
  description:
    "Reeves Estates handles estate sales, cash buyouts, and fine art appraisals in Memorial, Houston. Three generations of expertise serving one of Houston's most established neighborhoods. Call 832-474-9547.",
  alternates: { canonical: "https://reevesestates.com/neighborhoods/memorial" },
  openGraph: {
    title: "Estate Sales in Memorial, Houston | Reeves Estates",
    description:
      "Reeves Estates handles estate sales, cash buyouts, and fine art appraisals in Memorial, Houston. Three generations of expertise serving one of Houston's most established neighborhoods.",
    url: "https://reevesestates.com/neighborhoods/memorial",
    images: [{ url: "https://reevesestates.com/images/openGraph.webp", width: 1200, height: 630, alt: "Reeves Estates — Houston Estate Sales, Buyouts & Appraisals" }],
  },
};

export default function MemorialPage() {
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
            Memorial Estates. Handled at Scale.
          </h1>
          <div className="w-16 h-[1px] bg-bronze mx-auto mb-4" />
          <p className="font-body text-lg text-cream/70 italic leading-relaxed max-w-2xl mx-auto">
            Memorial properties are substantial — large homes, long tenures,
            decades of accumulated life spread across a lot of square footage.
            We&rsquo;ve handled that scope before.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-10 lg:py-14">
        <div className="flex flex-col gap-10">

          {/* Section 1 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              The scope of a Memorial estate requires real expertise
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Memorial operates at a different scale than most of Houston.
                Large lots. Long driveways. Houses built to hold a life fully
                lived — with the rooms, the storage, and the square footage
                to match. When it comes time to settle an estate here, the
                sheer scope of what needs to be assessed can feel overwhelming.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                The substance inside is real. Texas art acquired over decades.
                Fine furniture from rooms that were actually used. Silver
                services, mid-century pieces, objects that have been in
                families for generations. These aren&rsquo;t things that should
                be cleared out quickly by someone who can&rsquo;t tell the
                difference between what&rsquo;s valuable and what isn&rsquo;t.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Reeves Art + Design has been active in the Houston market since
                1969. The relationships we&rsquo;ve built with collectors,
                dealers, and institutions across the city are what allow us to
                find the right outcome for what a Memorial estate holds — not
                just the most efficient one.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Bringing Memorial estates to the right buyers
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We hold estate sales at our 5,000 square foot gallery in
                Midtown Houston. For Memorial families, the gallery setting
                makes a real difference — it draws buyers who are specifically
                looking for quality and understand what they&rsquo;re
                purchasing. Collectors. Interior designers. Private individuals
                with a genuine eye.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                For families who prefer a sale at the property itself,
                Memorial homes are often well-suited to on-site events.
                Large, well-appointed rooms can work in a sale&rsquo;s favor —
                and we manage those events with the same standards we bring to
                the gallery. The same team, the same thoroughness, the same
                commitment to a fair result.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We handle every step: the walkthrough, cataloging, pricing,
                staging, marketing, and the sale itself. A full accounting
                at close, with proceeds distributed promptly.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              For executors managing things from a distance
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Memorial estates are frequently settled by executors or family
                members who are managing the process from out of town. A
                property that needs to be cleared before it can be listed, a
                probate timeline that won&rsquo;t accommodate a drawn-out sale —
                these are among the most common situations we encounter here.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Our cash buyout service was built for exactly this. We assess
                the estate, deliver a fair cash offer within 48 hours of our
                visit, and if you accept, we handle everything from there.
                All removal. All clearance. One payment. The property is left
                clean and ready for sale. No second trips. No uncertainty.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Appraisals for estates that go through formal probate
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Memorial estates often involve formal probate proceedings —
                which means the appraisal documentation needs to hold up in
                court, not just in conversation. Our written valuations document
                each item with provenance, condition, and current market
                comparables. They satisfy estate attorneys, courts, insurance
                carriers, and the IRS.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Memorial properties reward the careful attention a proper
                appraisal requires. Texas art, significant mid-century furniture,
                decorative objects assembled by people who knew what they were
                doing — these are the pieces that benefit most from a specialist
                who takes the time to get them right.
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
              href="mailto:midtownmodern@gmail.com?subject=Memorial%20estate%20inquiry"
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
