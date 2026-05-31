import Link from "next/link";

const neighbourhoods = [
  { name: "River Oaks",          href: "/neighborhoods/river-oaks" },
  { name: "Tanglewood",          href: "/neighborhoods/tanglewood" },
  { name: "Memorial",            href: "/neighborhoods/memorial" },
  { name: "West University Place", href: "/neighborhoods/west-university" },
  { name: "Bellaire",            href: "/neighborhoods/bellaire" },
  { name: "Upper Kirby",         href: "/neighborhoods/upper-kirby" },
  { name: "Museum District",     href: "/neighborhoods/museum-district" },
  { name: "Montrose",            href: "/neighborhoods/montrose" },
];

export default function Neighbourhoods() {
  return (
    <section className="fade-in-section bg-cream border-y border-bronze/10 py-10 lg:py-14">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-20">

          {/* Text */}
          <div className="lg:w-80 shrink-0 mb-8 lg:mb-0">
            <p className="font-compact text-xs tracking-widest uppercase text-bronze mb-4">
              Houston, TX
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-4">
              The neighbourhoods<br />we know best
            </h2>
            <p className="font-body text-base text-charcoal/65 leading-relaxed">
              Every collection carries the character of the neighbourhood it came from.
              We&rsquo;ve spent decades working inside Houston&rsquo;s most distinguished
              homes &mdash; and that history shapes how we approach every estate we touch.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 content-start pt-1 lg:pt-10">
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
