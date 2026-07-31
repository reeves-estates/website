"use client";
// trigger Vercel preview build
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Neighbourhoods from "@/components/Neighbourhoods";
import About from "@/components/About";
import Credentials from "@/components/Credentials";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  // Handle hash navigation: browser tries to scroll before React renders,
  // so we re-scroll after mount and listen for subsequent hash changes.
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const el = document.getElementById(hash.slice(1));
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    };
    setTimeout(scrollToHash, 100);
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.05 }
    );

    sections.forEach((el) => observer.observe(el));

    // Safety net: if observer never fires (JS error, timing issue), force all visible
    const fallback = setTimeout(() => {
      sections.forEach((el) => el.classList.add("visible"));
    }, 1500);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <main>
      <Navigation />
      <Hero />
      <div className="hidden md:block"><TrustBar /></div>
      <HowItWorks />
      <Neighbourhoods />
      <Credentials />
<Services />
      <FAQ />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
