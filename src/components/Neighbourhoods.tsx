import Link from "next/link";

const neighbourhoods = [
  { name: "River Oaks", href: "/neighborhoods/river-oaks" },
  { name: "Tanglewood", href: "/neighborhoods/tanglewood" },
  { name: "Memorial", href: "/neighborhoods/memorial" },
  { name: "West University Place", href: "/neighborhoods/west-university" },
  { name: "Bellaire", href: "/neighborhoods/bellaire" },
  { name: "Upper Kirby", href: "/neighborhoods/upper-kirby" },
  { name: "Museum District", href: "/neighborhoods/museum-district" },
  { name: "Montrose", href: "/neighborhoods/montrose" },
];

export default function Neighbourhoods() {
  return (
    <section className="fade-in-section bg-cream border-y border-bronze/10 py-10 lg:py-14">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">

        {/* Eyebrow + heading — centered */}
        <div className="mb-8 text-center">
          <p className="font-compact text-xs tracking-widest uppercase text-bronze mb-4">
            Where We Work
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-charcoal">
            The neighbourhoods we know best
          </h2>
        </div>

        {/* Paragraph + links, centered as a single column.
            "estate sales" is stated near the links on purpose: the query that
            actually earns clicks is "river oaks estate sales", so the anchor
            context should carry that phrase, not just the place name. */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-body text-base text-charcoal/65 leading-relaxed mb-8">
            We run estate sales across Houston&rsquo;s most established
            neighbourhoods. Every collection carries the character of the home it
            came from, and decades spent working inside these communities shapes
            how we handle each estate we take on.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            {neighbourhoods.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="font-compact text-sm text-charcoal/60 border border-bronze/20 px-4 py-2 hover:text-bronze hover:border-bronze/40 transition-colors"
              >
                {n.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
