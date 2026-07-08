import { Phone } from 'lucide-react'
import { AUTOMATION_PRIME_URL } from '../constants'

export default function Footer() {
  const scrollTo = (href) => (e) => {
    e.preventDefault()
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-dark border-t border-amber/30 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <img src="/logo.png" alt="Ember & Bun" className="max-h-[44px] w-auto mb-4" />
          <p className="text-white-muted text-sm font-body">Crafted Burgers. Real Flavor.</p>
        </div>

        <div>
          <h4 className="text-white font-heading font-semibold uppercase text-sm mb-4">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2 font-body text-sm">
            <li>
              <a href="#top" onClick={scrollTo('#top')} className="text-white-muted hover:text-amber transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#menu" onClick={scrollTo('#menu')} className="text-white-muted hover:text-amber transition-colors">
                Menu
              </a>
            </li>
            <li>
              <a href="#about" onClick={scrollTo('#about')} className="text-white-muted hover:text-amber transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#contact" onClick={scrollTo('#contact')} className="text-white-muted hover:text-amber transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-heading font-semibold uppercase text-sm mb-4">
            Contact
          </h4>
          <ul className="flex flex-col gap-2 font-body text-sm text-white-muted">
            <li>123 Bonapriso Avenue, Douala</li>
            <li>hello@emberandbun.com</li>
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-amber shrink-0" />
              AI-Powered Ordering Available 24/7
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 text-center flex flex-col gap-2">
        <p className="text-white-dim text-xs font-body">
          © 2026 Ember & Bun. All rights reserved.
        </p>
        <a
          href={AUTOMATION_PRIME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber text-xs font-body hover:underline"
        >
          Website by Automation Prime Africa
        </a>
      </div>
    </footer>
  )
}
