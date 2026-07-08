import { Phone } from 'lucide-react'
import { VAPI_DEMO_URL } from '../constants'

export default function FloatingCallButton() {
  return (
    <a
      href={VAPI_DEMO_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Call our AI phone agent"
      className="fixed bottom-6 right-6 z-40 w-[60px] h-[60px] rounded-full bg-amber flex items-center justify-center text-white shadow-lg shadow-black/40 animate-pulse-ring hover:scale-110 hover:bg-amber-light transition-transform duration-200"
    >
      <Phone size={24} />
    </a>
  )
}
