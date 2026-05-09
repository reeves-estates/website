import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Reeves Estates | Houston Estate Sales",
  description:
    "Reach Reeves Estates for a free, no-obligation consultation. Call 832-474-9547, email us, or visit our gallery at 2415 Taft St, Houston TX 77006. We serve River Oaks, Memorial, Tanglewood, and greater Houston.",
  alternates: { canonical: "https://reevesestates.com/contact" },
  openGraph: {
    title: "Contact Reeves Estates | Houston Estate Sales",
    description:
      "Free consultations. No obligation. Call, email, or visit our Midtown Houston gallery. Serving Houston families for three generations.",
    url: "https://reevesestates.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-cream min-h-screen">

      {/* Hero */}
      <section className="bg-charcoal pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="font-compact text-xs tracking-widest uppercase text-bronze mb-4">
            Houston Estate Specialists
          </p>
          <h1
            className="text-4xl md:text-6xl text-cream mb-6"
            style={{ fontFamily: "var(--font-hatton)", fontWeight: 500, lineHeight: 0.95, letterSpacing: "-0.020em" }}
          >
            Let&rsquo;s Talk About Your Estate
          </h1>
          <div className="w-16 h-[1px] bg-bronze mx-auto mb-6" />
          <p className="font-body text-base md:text-lg text-cream/65 max-w-xl mx-auto leading-relaxed">
            Every engagement begins with a conversation. There&rsquo;s no charge,
            no obligation, and no pressure — just an honest assessment of what&rsquo;s
            possible and what makes sense for your family.
          </p>
        </div>
      </section>

      {/* Contact methods */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="text-center p-6 border border-bronze/15">
              <span className="font-compact text-xs tracking-widest uppercase text-bronze/60 block mb-4">
                Call or Text
              </span>
              <a
                href="tel:8324749547"
                className="font-heading text-2xl text-charcoal hover:text-bronze transition-colors block"
                style={{ fontFamily: "var(--font-hatton)", fontWeight: 500 }}
              >
                832-474-9547
              </a>
              <p className="font-body text-sm text-charcoal/50 mt-3 leading-relaxed">
                Available Monday through Saturday. We return all messages promptly.
              </p>
            </div>

            <div className="text-center p-6 border border-bronze/15">
              <span className="font-compact text-xs tracking-widest uppercase text-bronze/60 block mb-4">
                Email
              </span>
              <a
                href="mailto:midtownmodern@gmail.com?subject=Estate%20consultation%20inquiry"
                className="font-heading text-2xl text-charcoal hover:text-bronze transition-colors block"
                style={{ fontFamily: "var(--font-hatton)", fontWeight: 500 }}
              >
                Email us
              </a>
              <p className="font-body text-sm text-charcoal/50 mt-3 leading-relaxed">
                Describe your situation and we&rsquo;ll respond within one business day.
              </p>
            </div>

            <div className="text-center p-6 border border-bronze/15">
              <span className="font-compact text-xs tracking-widest uppercase text-bronze/60 block mb-4">
                Visit
              </span>
              <a
                href="https://www.google.com/maps/place/?q=place_id:ChIJP21-eCcjoIgRuxqKmoIKAvY"
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-2xl text-charcoal hover:text-bronze transition-colors block"
                style={{ fontFamily: "var(--font-hatton)", fontWeight: 500 }}
              >
                2415 Taft St
              </a>
              <p className="font-body text-sm text-charcoal/50 mt-3 leading-relaxed">
                Houston, TX 77006 &mdash; Midtown. Gallery visits by appointment.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-16 lg:py-20 bg-charcoal/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <h2
              className="text-2xl md:text-3xl text-charcoal mb-4"
              style={{ fontFamily: "var(--font-hatton)", fontWeight: 500 }}
            >
              What Happens Next
            </h2>
            <div className="w-16 h-[1px] bg-bronze mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                heading: "You reach out",
                body: "Call, text, or email — whichever is easiest. Tell us as much or as little as you like.",
              },
              {
                step: "02",
                heading: "We visit",
                body: "One of our specialists comes to you, assesses the estate, and listens to your situation. No charge, no obligation.",
              },
              {
                step: "03",
                heading: "We recommend",
                body: "We tell you honestly what approach makes the most sense — and what to expect from it. Then the decision is entirely yours.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="font-compact text-xs tracking-widest uppercase text-bronze block mb-3">
                  {item.step}
                </span>
                <h3 className="font-body text-lg font-semibold text-charcoal mb-2">
                  {item.heading}
                </h3>
                <p className="font-body text-sm text-charcoal/60 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighbourhoods */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2
            className="text-2xl md:text-3xl text-charcoal mb-4"
            style={{ fontFamily: "var(--font-hatton)", fontWeight: 500 }}
          >
            Serving Greater Houston
          </h2>
          <div className="w-16 h-[1px] bg-bronze mx-auto mb-8" />
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "River Oaks", href: "/neighborhoods/river-oaks" },
              { name: "Memorial", href: "/neighborhoods/memorial" },
              { name: "Tanglewood", href: "/neighborhoods/tanglewood" },
              { name: "West University Place", href: "/neighborhoods/west-university" },
              { name: "Bellaire", href: "/neighborhoods/bellaire" },
              { name: "Museum District", href: "/neighborhoods/museum-district" },
              { name: "Midtown", href: "/neighborhoods/midtown" },
              { name: "Upper Kirby", href: "/neighborhoods/upper-kirby" },
            ].map((n) => (
              <a
                key={n.name}
                href={n.href}
                className="font-compact text-sm text-charcoal/60 border border-bronze/20 px-3 py-1 hover:text-bronze hover:border-bronze/40 transition-colors"
              >
                {n.name}
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
