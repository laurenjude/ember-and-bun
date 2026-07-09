import { Mic, Phone } from "lucide-react";
import useFadeIn from "../hooks/useFadeIn";
import { AUTOMATION_PRIME_URL } from "../constants";

export default function AIBanner() {
  const ref = useFadeIn();

  return (
    <section
      ref={ref}
      className="fade-in-section bg-amber py-20 px-6">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
        <h2 className="font-heading font-bold text-2xl md:text-[28px] text-dark">
          Meet Our AI Concierge
        </h2>
        <p className="font-body text-sm md:text-base text-dark/80 max-w-xl">
          Ember & Bun uses an AI-powered phone agent to handle orders and
          reservations 24/7. No waiting, no hold music, no missed calls. Just
          great service, any time of day.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("start-vapi-call"))}
            className="inline-flex items-center gap-3 bg-dark hover:bg-black text-white font-heading font-semibold uppercase rounded-full px-8 py-4 transition-colors">
            <Mic size={20} />
            Speak Now — Browser Call
          </button>
          <a
            href="tel:+15057056169"
            className="inline-flex items-center gap-3 border border-dark/30 text-dark bg-dark/5 hover:bg-dark/10 font-heading font-semibold uppercase rounded-full px-8 py-4 transition-colors">
            <Phone size={20} />
            Call +1 (505) 705-6169
          </a>
        </div>
        <p className="text-dark/70 text-xs mt-2">
          Powered by{" "}
          <a
            href={AUTOMATION_PRIME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline hover:no-underline">
            Automation Prime Africa
          </a>
        </p>
      </div>
    </section>
  );
}
