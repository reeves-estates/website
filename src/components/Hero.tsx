"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { src: "/images/hero/hero-1.webp", alt: "Estate sale interior with antiques, furniture, and collectibles" },
  { src: "/images/hero/hero-2.webp", alt: "Fine art and decorative pieces from a Houston estate collection" },
  { src: "/images/hero/hero-3.webp", alt: "Antique furniture and estate items at Reeves Estates gallery" },
  { src: "/images/hero/hero-4.webp", alt: "Curated estate sale inventory featuring art, antiques, and collectibles" },
  { src: "/images/hero/hero-5.webp", alt: "Interior view of estate items at Reeves Estates, Houston" },
  { src: "/images/hero/hero-6.webp", alt: "Houston estate sale collection — furniture, fine art, and decorative arts" },
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
