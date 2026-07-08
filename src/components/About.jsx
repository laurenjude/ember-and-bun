import useFadeIn from '../hooks/useFadeIn'

export default function About() {
  const imgRef = useFadeIn()
  const textRef = useFadeIn()

  return (
    <section id="about" className="bg-dark-tertiary py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div ref={imgRef} className="fade-in-section">
          <img
            src="/fries.png"
            alt="Ember & Bun loaded fries"
            loading="lazy"
            className="rounded-2xl w-full object-cover shadow-2xl shadow-black/50"
          />
        </div>

        <div ref={textRef} className="fade-in-section flex flex-col gap-5">
          <span className="text-amber font-body text-xs font-semibold uppercase tracking-[3px]">
            About Us
          </span>
          <h2 className="font-heading font-bold uppercase text-white text-3xl md:text-[32px]">
            Made With Passion
          </h2>
          <p className="font-body text-white-muted text-sm leading-[1.7] max-w-lg">
            At Ember & Bun, we believe great burgers start with great ingredients. Every patty is
            hand-pressed, every bun is toasted to perfection, and every order is crafted with
            care. Whether you order in person or through our AI phone agent, the quality never
            changes.
          </p>
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="self-start bg-amber hover:bg-amber-light text-dark font-heading font-semibold uppercase rounded-lg px-7 py-3 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
