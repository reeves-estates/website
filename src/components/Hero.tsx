"use client";

import { useState, useEffect, useCallback } from "react";

const images = [
  "https://i.imgur.com/Wt0DQOX.jpeg",
  "https://i.imgur.com/lkE8s1f.jpeg",
  "https://i.imgur.com/W6UML0q.jpeg",
  "https://i.imgur.com/nf6tdE2.jpeg",
  "https://i.imgur.com/5ASp6ne.jpeg",
  "https://i.imgur.com/SeslhEC.jpeg",
];

const rotatingPhrases = [
  "Estate Buyouts",
  "Living Estates",
  "Complete Liquidations",
  "Partial Estates",
  "On-Site Sales",
  "Three Generations",
];

const LETTER_STAGGER = 40; // ms between each letter appearing
const HOLD_DURATION = 3000; // how long the phrase stays visible
const FADE_OUT_DURATION = 500; // fade out all letters together

type AnimPhase = "entering" | "visible" | "exiting";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [phase, setPhase] = useState<AnimPhase>("entering");
  const [visibleCount, setVisibleCount] = useState(0);

  const currentPhrase = rotatingPhrases[phraseIndex];

  // Image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Letter-by-letter entry
  const startEntry = useCallback(() => {
    setPhase("entering");
    setVisibleCount(0);
  }, []);

  useEffect(() => {
    if (phase !== "entering") return;

    if (visibleCount < currentPhrase.length) {
      const timer = setTimeout(() => {
        setVisibleCount((c) => c + 1);
      }, LETTER_STAGGER);
      return () => clearTimeout(timer);
    } else {
      setPhase("visible");
    }
  }, [phase, visibleCount, currentPhrase.length]);

  // Hold visible, then exit
  useEffect(() => {
    if (phase !== "visible") return;
    const timer = setTimeout(() => {
      setPhase("exiting");
    }, HOLD_DURATION);
    return () => clearTimeout(timer);
  }, [phase]);

  // After fade out, advance phrase
  useEffect(() => {
    if (phase !== "exiting") return;
    const timer = setTimeout(() => {
      setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
      startEntry();
    }, FADE_OUT_DURATION);
    return () => clearTimeout(timer);
  }, [phase, startEntry]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image carousel */}
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out"
          style={{ opacity: i === currentImage ? 1 : 0 }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-charcoal/50" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="hero-fade-in text-[2.75rem] md:text-[4.5rem] lg:text-[6rem] font-light text-cream tracking-[0.05em] leading-[0.8] mb-2 text-center" style={{ fontFamily: "var(--font-neue-machina)" }}>
          Reeves Estates
        </h1>
        <div className="hero-fade-in w-[60px] h-[1px] bg-bronze mx-auto mb-6" />
        <p className="hero-fade-in-delay text-[1.25rem] md:text-[1.5rem] text-white italic leading-relaxed mb-14" style={{ fontFamily: "var(--font-libre-baskerville)" }}>
          Cash offers. White-glove service. Nothing left behind.
        </p>

        {/* Two-line rotating display */}
        <div className="hero-fade-in-delay mb-12">
          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-light text-cream tracking-wide mb-3">
            Your single source for
          </h2>
          <div
            className="h-[2.5rem] md:h-[3rem] flex items-center justify-center"
            aria-live="polite"
          >
            <span
              className="text-2xl md:text-3xl lg:text-4xl italic inline-flex"
              style={{ fontFamily: "var(--font-libre-baskerville)", color: "#B8956A" }}
            >
              {currentPhrase.split("").map((char, i) => (
                <span
                  key={`${phraseIndex}-${i}`}
                  className="inline-block transition-all duration-500 ease-out"
                  style={{
                    opacity:
                      phase === "exiting"
                        ? 0
                        : i < visibleCount
                        ? 1
                        : 0,
                    transform:
                      phase === "exiting"
                        ? "translateY(0)"
                        : i < visibleCount
                        ? "translateY(0)"
                        : "translateY(-12px)",
                    transitionDuration:
                      phase === "exiting" ? "400ms" : "450ms",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          </div>
        </div>

        <div className="hero-fade-in-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3.5 bg-bronze text-cream font-body text-sm tracking-widest uppercase hover:bg-bronze-dark transition-colors"
          >
            Schedule a Consultation
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-3.5 border border-cream/40 text-cream font-body text-sm tracking-widest uppercase hover:border-bronze hover:text-bronze transition-colors"
          >
            Learn How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
