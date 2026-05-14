import type { Metadata } from "next";
import PhoneLink from "@/components/PhoneLink";

export const metadata: Metadata = {
  title: "Estate Sales in Midtown Houston",
  description:
    "Reeves Estates is based in Midtown Houston — estate sales, cash buyouts, fine art appraisals, and complete estate handling from our 5,000 sq ft gallery on Taft Street. Call 832-474-9547.",
  alternates: { canonical: "https://reevesestates.com/neighborhoods/midtown" },
  openGraph: {
    title: "Estate Sales in Midtown Houston | Reeves Estates",
    description:
      "Reeves Estates is based in Midtown Houston — estate sales, cash buyouts, fine art appraisals, and complete estate handling from our 5,000 sq ft gallery on Taft Street.",
    url: "https://reevesestates.com/neighborhoods/midtown",
    images: [{ url: "https://reevesestates.com/images/openGraph.webp", width: 1200, height: 630, alt: "Reeves Estates — Houston Estate Sales, Buyouts & Appraisals" }],
  },
};

export default function MidtownPage() {
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
            Reeves Estates. Rooted in Midtown.
          </h1>
          <div className="w-16 h-[1px] bg-bronze mx-auto mb-4" />
          <p className="font-body text-lg text-cream/70 italic leading-relaxed max-w-2xl mx-auto">
            Most estate companies pass through Midtown. We&rsquo;ve been here
            since 1969. There&rsquo;s a difference.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-10 lg:py-14">
        <div className="flex flex-col gap-10">

          {/* Section 1 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Inside the market, not observing it from the outside
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Reeves Art + Design has occupied the corner of Taft and Fairview
                since 1969. That&rsquo;s not a marketing point — it&rsquo;s the
                reason we understand Houston&rsquo;s art market from the inside.
                The galleries that have come and gone. The collectors who have
                shaped the city&rsquo;s taste. The artists who worked here,
                exhibited here, and whose work now appears in estate inventories
                across the inner loop.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Midtown has changed substantially over the decades — from a
                quieter residential area to one of the most active parts of
                the city — and we&rsquo;ve been part of all of it. That
                continuity is rare. It gives us a view of Houston&rsquo;s
                collector community that few people have, and a network of
                relationships that makes a real difference in how estates
                are handled.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              What Midtown estates actually look like
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Midtown has always drawn people with genuine taste — artists,
                creative professionals, longtime Houstonians, people who chose
                where they lived because of the city&rsquo;s culture, not despite
                it. The estates we handle here are genuinely varied. A lifelong
                Houstonian&rsquo;s apartment packed with acquired art. The studio
                and belongings of an artist who worked in this neighborhood for
                forty years. A professional who bought carefully and well over
                a long career.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We don&rsquo;t approach Midtown estates with a template —
                because this neighborhood doesn&rsquo;t produce them. Each
                walkthrough is its own education, and that&rsquo;s what we
                find interesting about the work.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Your estate, presented right here
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Our 5,000 square foot gallery on Taft Street is where we bring
                estates to be sold properly — not in a hurried home sale, not
                in a cluttered auction warehouse, but in a considered
                environment that draws collectors and buyers from across the
                city who recognize quality when they see it.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                For Midtown families and executors, this is the most direct
                path available. We&rsquo;re not commuting to your neighborhood
                from somewhere else — we&rsquo;re already here. That means
                faster assessments, fewer complications, and the kind of
                familiarity with the local market that only comes from being
                genuinely part of it.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We handle every step: walkthrough, cataloging, pricing, staging,
                marketing, and the sale. Full accounting at close, proceeds
                distributed promptly.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Complete handling — from first visit to cleared property
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Out-of-town executors managing Midtown estates find us especially
                useful. We can assess, advise, and move without the back-and-forth
                that comes from working with a company that has to travel to the
                property every time.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                For families or executors who need certainty over optimization,
                our cash buyout service offers a straightforward path: one offer
                within 48 hours of our visit, one payment at close, all removal
                and clearance included. The property is left ready for whatever
                comes next — no second trips required.
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
              href="mailto:midtownmodern@gmail.com?subject=Midtown%20estate%20inquiry"
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
