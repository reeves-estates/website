import type { Metadata } from "next";
import PhoneLink from "@/components/PhoneLink";

export const metadata: Metadata = {
  title: "Estate Sales in Tanglewood, Houston",
  description:
    "Estate sales, cash buyouts, and appraisals in Tanglewood, Houston. Expert handling for one of Houston's most storied neighborhoods. Call 832-474-9547.",
  alternates: { canonical: "https://reevesestates.com/neighborhoods/tanglewood" },
  openGraph: {
    title: "Estate Sales in Tanglewood, Houston | Reeves Estates",
    description:
      "Estate sales, cash buyouts, and appraisals in Tanglewood, Houston. Expert handling for one of Houston's most storied neighborhoods.",
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
            Tanglewood didn&rsquo;t appear overnight, and neither did the
            collections inside its homes. Both grew slowly, with care and
            intention. We treat them the same way.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-10 lg:py-14">
        <div className="flex flex-col gap-10">

          {/* Section 1 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Collections built on taste, not just means
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                For decades, Tanglewood has been home to much of Houston&rsquo;s
                business and civic leadership. The estates we see here reflect
                that history. Paintings were bought after real consideration,
                not on a whim. Furniture was chosen because it was well-made
                and would last. Silver and porcelain were selected by people
                who knew exactly what they were looking at.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                These are collections that took years to assemble. They mattered
                to the people who built them, and that deserves to be honored.
                It calls for someone who can tell the difference between a great
                piece and a merely decorative one, and who understands that
                value can be measured in memory as well as in money.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Reeves Estates has been part of the Houston art and antiques
                world since 1969. We&rsquo;ve watched tastes change, markets
                rise and fall, and whole collections pass from one generation
                to the next. That long view is what we bring to every Tanglewood
                estate, and it&rsquo;s why we focus on the right outcome for
                each piece&mdash;not just getting it sold quickly.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Shown in a setting that matches the work
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We don&rsquo;t hold sales in crowded garages or bare rooms.
                We work out of a 5,000-square-foot gallery in Montrose,
                designed to show pieces properly and to attract the people most
                likely to appreciate them: seasoned collectors, serious
                designers, and private buyers who have spent years training
                their eye.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                When a piece is truly important, we rarely start with a public
                sale. Instead, we go directly to the small circle of collectors
                and specialist dealers we know will understand it. Often, the
                right buyer is a specific person, and a direct phone call or
                quiet introduction will do more than any broad marketing
                campaign.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                From the first walkthrough to the last check, we keep
                everything under one roof: research, cataloging, pricing,
                staging, marketing, and the sale itself. At the end, you
                receive a clear accounting and prompt payment.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              When the goal is closure, not squeezing every last dollar
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Many Tanglewood estates change hands under pressure: heirs who
                live in other states, homes that are already under contract,
                probate timelines that don&rsquo;t leave room for a long sale
                process. In those moments, certainty can matter more than
                wringing out every possible dollar.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                For families in that situation, we offer a straightforward cash
                buyout. We walk the property, evaluate the contents, and bring
                you a fair offer within 48 hours. If you accept, we handle
                everything that follows&mdash;packing, removal, and final
                clearance. One decision. One payment. The house is left clean
                and ready for whatever comes next.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Appraisals that keep the peace
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Before anyone decides what to sell, donate, or keep, every
                member of the family deserves to know what&rsquo;s actually
                there. In Tanglewood, that&rsquo;s rarely obvious at a glance.
                A picture that&rsquo;s been over the mantel for decades may be
                more important than it looks; a small piece of silver might
                turn out to be the most valuable object in the house.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Our written valuations describe each item in plain language,
                backed by provenance, condition notes, and current market
                comparisons. They stand up to scrutiny from attorneys, courts,
                and insurers&mdash;and they give heirs a shared set
                of facts. No one has to guess whether a sibling got the
                &ldquo;good&rdquo; piece or whether something important was
                sold for too little.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                In the midst of grief and logistics, that kind of certainty
                is a quiet but real kindness.
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
