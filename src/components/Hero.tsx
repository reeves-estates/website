"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Shot at the July 2026 Memorial sale. The previous hero-*.webp files remain in
// public/images/hero/ unreferenced, so the earlier set can be restored by
// swapping this array back.
const images = [
  { src: "/images/hero/memorial-3.webp", alt: "Bronze sculptures on pedestals beneath a wall of framed paintings at a Reeves Estates sale" },
  { src: "/images/hero/memorial-2.webp", alt: "Estate sale floor in Houston — stacked china, silver holloware, framed art, and racks of clothing" },
  { src: "/images/hero/memorial-1.webp", alt: "Green transferware china — tureens, teapot, and gravy boat — laid out at a Houston estate sale" },
  { src: "/images/hero/memorial-5.webp", alt: "White porcelain figurines arranged on a polished mahogany dining table" },
  { src: "/images/hero/memorial-4.webp", alt: "Display case of carved stone fetish figures and Pueblo pottery at a Houston estate sale" },
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  // Image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen md:min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background image carousel */}
      {images.map(({ src, alt }, i) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          fill
          priority={i === 0}
          className="object-cover transition-opacity duration-[1500ms] ease-in-out"
          style={{ opacity: i === currentImage ? 1 : 0 }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(17, 17, 17, 0.45)" }} />

      {/* Provenance note. Dated rather than "current" so it stays true once the
          sale closes — the images can sit here for months without contradicting
          themselves. Update the date when the hero set is next replaced. */}
      <p className="absolute z-10 bottom-5 md:bottom-7 left-1/2 -translate-x-1/2 md:left-8 lg:left-12 md:translate-x-0 font-compact text-[10px] md:text-xs tracking-widest uppercase text-cream/45 whitespace-nowrap">
        From our Memorial sale, July 2026
      </p>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-16 md:pt-20">
        <h1
          className="hero-fade-in text-[15vw] md:text-[9vw] lg:text-[min(7vw,110px)] text-cream mb-4 text-center"
          style={{ fontFamily: "var(--font-hatton)", fontWeight: 500, lineHeight: 0.95, letterSpacing: "-0.020em" }}
        >
          The Provenance Continues.
        </h1>
        <div className="hero-fade-in w-[60px] h-[1px] bg-bronze mx-auto mb-6" />
        <p
          className="hero-fade-in-delay text-[1.25rem] md:text-[1.9rem] text-cream/90 leading-relaxed mb-14 px-2"
          style={{ fontFamily: "'PPFragmentGlareItalic', serif", fontStyle: "italic" }}
        >
          White-glove service. Cash offers. Nothing left behind.
        </p>

        <div className="hero-fade-in-delay-2 flex flex-col items-center">
          <div className="flex flex-col items-center gap-2">
            <span className="font-compact text-sm tracking-widest uppercase font-semibold text-cream/85">
              Call or text
            </span>
            <a
              href="tel:8324749547"
              className="font-compact text-4xl md:text-5xl text-cream tracking-wide hover:text-bronze transition-colors"
            >
              832-474-9547
            </a>
          </div>

          <a
            href="#how-it-works"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-12 md:mt-16 cursor-pointer w-11 h-11 rounded-full border border-cream/40 flex items-center justify-center hover:border-cream/75 transition-colors"
          >
            <svg
              className="w-4 h-4 text-cream/80 scroll-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

    </section>
  );
}
