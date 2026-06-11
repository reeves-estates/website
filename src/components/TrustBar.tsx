const textClass = "font-compact font-semibold tracking-[0.2em] uppercase text-charcoal/80";
const dividerClass = "w-[1px] h-5 bg-bronze/40 mx-8";

export default function TrustBar() {
  return (
    <section className="bg-cream border-y border-bronze/20">
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-12 flex flex-col items-center justify-center gap-2 xl:flex-row xl:gap-0">

        {/* Line 1 — credentials (md→xl: row 1; xl+: part of single row) */}
        <div className="flex items-center">
          <span className={`${textClass} text-[0.8rem] xl:text-[0.95rem] whitespace-nowrap`}>
            Three Generations of Expertise
          </span>
          <span className={dividerClass} />
          <span className={`${textClass} text-[0.8rem] xl:text-[0.95rem] whitespace-nowrap`}>
            Fine Art · Antiques · Decorative Arts
          </span>
        </div>

        {/* Divider between groups — only visible in single-row xl+ layout */}
        <span className={`hidden xl:block ${dividerClass}`} />

        {/* Line 2 — differentiator (md→xl: row 2; xl+: end of single row) */}
        <span className={`${textClass} text-[0.8rem] xl:text-[0.95rem] whitespace-nowrap`}>
          Discreet. Thorough. Trusted.
        </span>

      </div>
    </section>
  );
}
