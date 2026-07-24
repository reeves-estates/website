import type { Metadata } from "next";
import Link from "next/link";
import SaleSignupForm from "@/components/SaleSignupForm";

export const metadata: Metadata = {
  // Root layout applies the "%s | Reeves Estates" template — no suffix here.
  title: "Hear About Our Next Sale",
  description:
    "Be told when the next Reeves Estates sale opens in Houston — the address and the opening time, a few days ahead. Three generations of estate sales, buyouts, and appraisals.",
  alternates: { canonical: "https://reevesestates.com/signup" },
  openGraph: {
    title: "Hear About Our Next Sale | Reeves Estates", // openGraph has no template — keep the brand here
    description:
      "Be told when the next Reeves Estates sale opens in Houston — a few days ahead.",
    url: "https://reevesestates.com/signup",
  },
};

export default function SignupPage() {
  return (
    <div className="bg-cream min-h-screen">

      {/* Hero — echoes the wording on the QR signage at the sale */}
      <section className="bg-charcoal pt-32 pb-14 lg:pt-40 lg:pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="font-compact text-xs tracking-widest uppercase text-bronze mb-4">
            Reeves Estates
          </p>
          <h1
            className="text-4xl md:text-6xl text-cream mb-6"
            style={{ fontFamily: "var(--font-hatton)", fontWeight: 500, lineHeight: 0.95, letterSpacing: "-0.020em" }}
          >
            There Will Be Another.
          </h1>
          <div className="w-16 h-[1px] bg-bronze mx-auto mb-6" />
          <p className="font-body text-base md:text-lg text-cream/65 max-w-xl mx-auto leading-relaxed">
            Leave your email and we&rsquo;ll tell you when the next sale opens —
            the address and the time, a few days ahead, so you&rsquo;re not
            finding out from the line.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-14 lg:py-20">
        <div className="max-w-lg mx-auto px-6 lg:px-12">
          <SaleSignupForm />
        </div>
      </section>

      {/* Second audience: people with an estate to handle, not shoppers */}
      <section className="border-t border-bronze/15 py-14 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-compact text-xl md:text-2xl text-charcoal mb-4">
            Have an estate of your own to handle?
          </h2>
          <p className="font-body text-base text-charcoal/70 leading-relaxed mb-4 max-w-xl mx-auto">
            That is the other half of what we do. Three generations of appraising
            and selling fine art, antiques, and decorative arts in Houston —
            whether you want everything sold, part of it placed, or the whole
            thing simply taken care of.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:8324749547"
              className="font-compact text-sm tracking-widest uppercase border border-bronze text-charcoal px-6 py-3 hover:bg-bronze hover:text-cream transition-colors"
            >
              832-474-9547
            </a>
            <Link
              href="/services"
              className="font-compact text-sm tracking-widest uppercase text-bronze hover:text-charcoal transition-colors"
            >
              See what we do →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
