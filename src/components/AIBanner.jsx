import { Phone } from 'lucide-react'
import useFadeIn from '../hooks/useFadeIn'
import { VAPI_DEMO_URL, AUTOMATION_PRIME_URL } from '../constants'

export default function AIBanner() {
  const ref = useFadeIn()

  return (
    <section ref={ref} className="fade-in-section bg-amber py-20 px-6">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
        <h2 className="font-heading font-bold text-2xl md:text-[28px] text-dark">
          Meet Our AI Concierge
        </h2>
        <p className="font-body text-sm md:text-base text-dark/80 max-w-xl">
          Ember & Bun uses an AI-powered phone agent to handle orders and reservations 24/7. No
          waiting, no hold music, no missed calls. Just great service, any time of day.
        </p>
        <a
          href={VAPI_DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-3 bg-dark hover:bg-black text-white font-heading font-semibold uppercase rounded-full px-8 py-4 transition-colors"
        >
          <Phone size={20} />
          Try It Now — Call Our AI Agent
        </a>
        <p className="text-dark/70 text-xs mt-2">
          Powered by{' '}
          <a
            href={AUTOMATION_PRIME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline hover:no-underline"
          >
            Automation Prime Africa
          </a>
        </p>
      </div>
    </section>
  )
}
