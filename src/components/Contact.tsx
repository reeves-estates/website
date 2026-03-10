export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="font-heading text-3xl md:text-5xl font-light text-charcoal mb-4">
            Get in Touch
          </h2>
          <div className="w-16 h-[1px] bg-bronze mx-auto mb-6" />
          <p className="font-body text-base text-charcoal/60">
            Every estate is different. Let&rsquo;s start with a conversation.
          </p>
        </div>

        <div className="fade-in-section flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          <div className="text-center">
            <span className="font-body text-xs tracking-widest uppercase text-charcoal/40 block mb-2">
              Phone
            </span>
            <a
              href="tel:7135235577"
              className="font-heading text-lg md:text-xl text-bronze hover:text-bronze-dark transition-colors"
            >
              713-523-5577
            </a>
          </div>

          <div className="hidden md:block w-[1px] h-12 bg-bronze/20" />

          <div className="text-center">
            <span className="font-body text-xs tracking-widest uppercase text-charcoal/40 block mb-2">
              Email
            </span>
            <a
              href="mailto:reevesestatesales@gmail.com"
              className="font-heading text-lg md:text-xl text-bronze hover:text-bronze-dark transition-colors"
            >
              reevesestatesales@gmail.com
            </a>
          </div>

          <div className="hidden md:block w-[1px] h-12 bg-bronze/20" />

          <div className="text-center">
            <span className="font-body text-xs tracking-widest uppercase text-charcoal/40 block mb-2">
              Visit
            </span>
            <span className="font-heading text-lg md:text-xl text-charcoal/80">
              Corner of Taft &amp; Fairview,
              <br />
              Midtown Houston
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
