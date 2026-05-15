import type { Metadata } from "next";
import PhoneLink from "@/components/PhoneLink";

export const metadata: Metadata = {
  title: "Estate Sales in Upper Kirby, Houston",
  description:
    "Estate sales, cash buyouts, and appraisals in Upper Kirby, Houston. Specialists in fine art, antiques, and quality collections. Call 832-474-9547.",
  alternates: { canonical: "https://reevesestates.com/neighborhoods/upper-kirby" },
  openGraph: {
    title: "Estate Sales in Upper Kirby, Houston | Reeves Estates",
    description:
      "Estate sales, cash buyouts, and appraisals in Upper Kirby, Houston. Specialists in fine art, antiques, and quality collections.",
    url: "https://reevesestates.com/neighborhoods/upper-kirby",
    images: [{ url: "https://reevesestates.com/images/openGraph.webp", width: 1200, height: 630, alt: "Reeves Estates — Houston Estate Sales, Buyouts & Appraisals" }],
  },
};

export default function UpperKirbyPage() {
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
            Upper Kirby Estates, In Trusted Hands
          </h1>
          <div className="w-16 h-[1px] bg-bronze mx-auto mb-4" />
          <p className="font-body text-lg text-cream/70 italic leading-relaxed max-w-2xl mx-auto">
            Upper Kirby doesn&rsquo;t announce itself. But the people who
            live here care about what surrounds them — and their estates
            reflect that.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-10 lg:py-14">
        <div className="flex flex-col gap-10">

          {/* Section 1 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              A neighborhood of considered taste
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Upper Kirby occupies a distinctive position, drawing on the
                established residential character of River Oaks and West
                University to the north and west, and the cultural density of
                Montrose and the Museum District to the east. The people who
                settle here are often those who have moved from a larger house
                and kept only the best of it, or professionals who have bought
                carefully over the course of a career.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                The estates here are eclectic in the best sense. A significant
                painting above well-chosen mid-century furniture. Estate jewelry
                from a grandmother with good taste. Objects collected over a
                well-traveled life, alongside pieces that were simply bought
                well. Range doesn&rsquo;t mean inconsistency — it means the
                people who lived here were curious.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Our gallery on Taft Street is less than two miles away. When
                we bring an Upper Kirby estate to our showroom, it reaches
                collectors and buyers from across the city who understand what
                they&rsquo;re looking at.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              An honest assessment before any commitment
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We begin every Upper Kirby engagement the same way: a thorough,
                unhurried walkthrough of the property. No pressure, no sales
                pitch. We identify what has real market value, what belongs in
                a gallery sale, and what might warrant a private approach with
                a specific buyer. Then we share our recommendations — honestly —
                before you make any decision.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                For most estates here, a gallery sale is the right path.
                We manage everything in-house: cataloging, staging, marketing,
                the sale itself, and all clearance afterward. You receive a
                full accounting and a property left clean.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                For families who prefer a professionally managed event at
                the property — particularly when a well-furnished home is a
                natural setting for what it holds — we organize and staff
                on-site sales as well. Same team, same standards.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Specialist knowledge where generalists fall short
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Upper Kirby estates often include pieces that reward specialist
                attention: Texas art and regional work, mid-century furniture
                by recognized designers, decorative antiques, estate jewelry,
                and properly maintained silver. A generalist will often miss
                the mark — undervaluing what&rsquo;s significant, or
                overvaluing what looks impressive but isn&rsquo;t.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Our team brings decades of expertise in these categories. Our
                written appraisals document each significant item with
                provenance, condition notes, and current market comparables,
                ensuring that nothing of value leaves without being properly
                recognized.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              When speed and simplicity are the priority
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Not every family arrives at this process with time to optimize.
                Properties under contract, out-of-town executors, and probate
                timelines that won&rsquo;t accommodate a multi-week sale — these
                are the situations our cash buyout service is built for. One
                offer, one payment, everything cleared.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We deliver a fair cash offer within 48 hours of our initial
                visit. If it works for you, we handle all removal and clearance
                and leave the property ready. If it doesn&rsquo;t, there
                is no obligation. Most families know quickly which path is
                right for them — and we make it easy to take either one.
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
                { name: "Montrose", href: "/neighborhoods/montrose" },
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
              href="mailto:midtownmodern@gmail.com?subject=Upper%20Kirby%20estate%20inquiry"
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
