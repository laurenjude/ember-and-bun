import { Mic, Phone } from "lucide-react";

export default function Hero() {
  const scrollToMenu = (e) => {
    e.preventDefault();
    document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 pb-16 md:pt-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left column */}
        <div className="flex flex-col gap-6 order-1">
          <h1 className="font-heading font-bold uppercase text-4xl md:text-[56px] leading-[1.1] text-white">
            Good Food.
            <br />
            <span className="text-amber">Good Mood.</span>
          </h1>
          <p className="font-body text-base text-white-muted max-w-md">
            Crafted burgers made with premium ingredients, fresh every day. Now
            with 24/7 AI-powered ordering.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-amber hover:bg-amber-light text-dark font-heading font-semibold uppercase rounded-lg px-7 py-3.5 transition-colors">
              Order Now
            </a>
            <a
              href="#menu"
              onClick={scrollToMenu}
              className="border border-amber text-amber hover:bg-amber/10 font-heading font-semibold uppercase rounded-lg px-7 py-3.5 transition-colors">
              View Menu
            </a>
          </div>

          {/* AI CTA bar */}
          <div className="mt-6 rounded-xl bg-white/5 border-l-[3px] border-amber px-5 py-4 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-4">
              <Phone
                className="text-amber shrink-0"
                size={28}
              />
              <div className="flex-1">
                <p className="text-white font-semibold text-sm md:text-base">
                  Talk to our AI Agent
                </p>
                <p className="text-white-muted text-xs md:text-sm">
                  Click to speak through your browser or call +1 (505) 705-6169
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() =>
                  window.dispatchEvent(new Event("start-vapi-call"))
                }
                className="inline-flex items-center gap-2 bg-amber hover:bg-amber-light text-dark font-heading font-semibold uppercase rounded-full px-5 py-3 transition-colors">
                <Mic size={18} />
                Talk to AI Agent
              </button>
              <a
                href="tel:+15057056169"
                className="inline-flex items-center gap-2 border border-amber text-amber hover:bg-amber/10 font-heading font-semibold uppercase rounded-full px-5 py-3 transition-colors">
                <Phone size={18} />
                Call +1 (505) 705-6169
              </a>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="relative order-2 flex justify-center md:justify-end">
          <img
            src="/burger-hero.png"
            alt="Ember & Bun signature cheeseburger"
            className="w-[85%] md:w-[120%] max-w-none drop-shadow-[0_25px_50px_rgba(0,0,0,0.6)] md:-mr-10"
            loading="eager"
            fetchpriority="high"
          />
        </div>
      </div>
    </section>
  );
}
