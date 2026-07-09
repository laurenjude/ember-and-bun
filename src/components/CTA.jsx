import { Phone } from "lucide-react";
import useFadeIn from "../hooks/useFadeIn";
import { AUTOMATION_PRIME_URL } from "../constants";

export default function CTA() {
  const ref = useFadeIn();

  return (
    <section
      id="contact"
      className="relative bg-dark py-28 px-6 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at center, rgba(232,160,32,0.15) 0%, rgba(10,10,10,0) 60%)",
      }}>
      <div
        ref={ref}
        className="fade-in-section max-w-2xl mx-auto text-center flex flex-col items-center gap-5">
        <img
          src="/logo-icon.png"
          alt="Ember & Bun icon"
          loading="lazy"
          className="w-[60px] mb-2"
        />

        <h2 className="font-heading font-bold uppercase text-white text-4xl md:text-5xl">
          Hungry?
        </h2>
        <p className="font-body text-white-muted text-base">
          Order by phone anytime. Our AI agent is ready.
        </p>

        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event("start-vapi-call"))}
          aria-label="Talk to AI Agent"
          className="mt-4 w-20 h-20 rounded-full bg-amber hover:bg-amber-light flex items-center justify-center text-white animate-pulse-glow transition-colors">
          <Phone size={32} />
        </button>
        <span className="text-amber font-heading font-semibold uppercase text-sm">
          Call Now
        </span>

        <p className="text-amber text-sm font-semibold mt-4">
          Or call us directly at{" "}
          <a
            href="tel:+15057056169"
            className="hover:underline">
            +1 (505) 705-6169
          </a>
        </p>

        <p className="text-white-dim text-xs mt-2">
          or visit us at 123 Bonapriso Avenue, Douala, Cameroon
        </p>

        <p className="text-xs mt-4">
          <span className="text-white-dim">AI Voice Agent powered by </span>
          <a
            href={AUTOMATION_PRIME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber font-semibold hover:underline">
            Automation Prime Africa
          </a>
        </p>
      </div>
    </section>
  );
}
