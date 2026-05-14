import type { Metadata } from "next";
import PhoneLink from "@/components/PhoneLink";

export const metadata: Metadata = {
  title: "Estate Sales in the Museum District, Houston",
  description:
    "Reeves Estates handles estate sales, cash buyouts, and fine art appraisals in Houston's Museum District. Deep expertise in art, antiques, and significant collections. Call 832-474-9547.",
  alternates: { canonical: "https://reevesestates.com/neighborhoods/museum-district" },
  openGraph: {
    title: "Estate Sales in the Museum District, Houston | Reeves Estates",
    description:
      "Reeves Estates handles estate sales, cash buyouts, and fine art appraisals in Houston's Museum District. Deep expertise in art, antiques, and significant collections.",
    url: "https://reevesestates.com/neighborhoods/museum-district",
    images: [{ url: "https://reevesestates.com/images/openGraph.webp", width: 1200, height: 630, alt: "Reeves Estates — Houston Estate Sales, Buyouts & Appraisals" }],
  },
};

export default function MuseumDistrictPage() {
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
            For Museum District Collectors
          </h1>
          <div className="w-16 h-[1px] bg-bronze mx-auto mb-4" />
          <p className="font-body text-lg text-cream/70 italic leading-relaxed max-w-2xl mx-auto">
            You don&rsquo;t choose to live in the Museum District by
            coincidence. The people here know art — and so do we.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-10 lg:py-14">
        <div className="flex flex-col gap-10">

          {/* Section 1 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              A neighborhood shaped by proximity to great art
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Living within walking distance of the Museum of Fine Arts, the
                Menil Collection, the Contemporary Arts Museum, and the Rothko
                Chapel shapes how a person relates to art — whether they intend
                it to or not. The residents of the Museum District have spent
                their lives surrounded by serious work, and the collections
                inside their homes reflect that exposure.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                What we find in Museum District estates is consistently more
                considered than elsewhere. Not necessarily more expensive —
                though often that too — but more deliberate. Works chosen
                because someone understood them. Objects acquired because they
                meant something, not because they filled a wall.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Reeves Art + Design has been active in Houston&rsquo;s art world
                since 1969. We know the galleries, the artists, the institutions,
                and the collector community that has shaped this part of the city.
                That history is directly relevant to the estates we encounter here.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Significant works handled with specialist knowledge
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Museum District estates regularly include works that benefit from
                more than a general appraisal — paintings with documented
                provenance, prints from known editions, sculpture by artists
                with established market records, and decorative objects chosen
                by people who understood their context. These pieces deserve
                individual attention.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                For works of particular significance, we look first at private
                placement — connecting your family directly with a collector or
                institution that knows the work and is prepared to pay for it
                appropriately. Some pieces belong in the right hands, and we
                have the relationships to find them.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Our written appraisals document each item with provenance,
                condition notes, and current market comparables — reports that
                hold up for estate attorneys, courts, insurance carriers, and
                tax purposes, and that ensure nothing of value goes unrecognized.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Gallery sales that reach the right audience
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                For the broader estate, our 5,000 square foot gallery in Midtown
                is the right environment. The buyers who come to Reeves are
                collectors and serious buyers — exactly the audience for the
                kinds of pieces that tend to come from this neighborhood. We
                handle everything in-house: the initial walkthrough, cataloging,
                pricing, staging, marketing, and the sale itself.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We begin every engagement with an honest walkthrough — no
                obligation, no pressure. Just a clear picture of what you have,
                what it&rsquo;s worth, and what your options are. The family
                makes the decision; we make sure that decision is an informed one.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Cash buyouts for families who need simplicity
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Not every family needs an art auction. Sometimes the most
                important pieces have already been identified and distributed —
                and what remains is a home that needs to be handled quickly
                and completely. Our cash buyout service is designed for that:
                one offer, one payment, everything cleared.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We deliver a fair cash offer within 48 hours of our initial
                visit. If it works for you, we handle all removal and clearance
                and leave the property ready for whatever comes next. Executors
                managing a Museum District estate from out of town find this
                option removes more complexity than almost anything else we offer.
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
            No pressure, no obligation. Just an honest conversation about what
            you have and what your options are.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PhoneLink className="px-8 py-3.5 bg-bronze text-cream font-compact text-sm tracking-widest uppercase hover:opacity-90 transition-opacity">Call 832-474-9547</PhoneLink>
            <a
              href="mailto:midtownmodern@gmail.com?subject=Museum%20District%20estate%20inquiry"
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
