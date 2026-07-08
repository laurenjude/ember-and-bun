import useFadeIn from '../hooks/useFadeIn'

const items = [
  {
    image: '/burger-hero.png',
    title: 'CLASSIC SMASH BURGER',
    description: 'Double beef patty, melted cheddar, crispy lettuce, tomato, house sauce',
    price: '$8.99',
    imgClass: 'object-cover',
  },
  {
    image: '/fries.png',
    title: 'LOADED FRIES',
    description: 'Golden crispy fries with signature Ember sauce, sea salt flakes',
    price: '$5.99',
    imgClass: 'object-cover',
  },
  {
    image: '/burger-hero.png',
    title: 'THE INFERNO',
    description: 'Spicy beef patty, pepper jack cheese, jalapenos, chipotle mayo, pickled onions',
    price: '$10.99',
    imgClass: 'object-cover object-[center_30%] scale-110',
  },
]

function MenuCard({ item }) {
  const ref = useFadeIn()
  return (
    <div
      ref={ref}
      className="fade-in-section bg-dark-secondary rounded-xl overflow-hidden border border-transparent hover:border-amber/50 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="h-[200px] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className={`w-full h-full ${item.imgClass}`}
        />
      </div>
      <div className="p-5">
        <h3 className="font-heading font-bold text-white text-lg uppercase mb-2">{item.title}</h3>
        <p className="font-body text-white-muted text-sm mb-4">{item.description}</p>
        <span className="font-heading font-bold text-amber text-lg">{item.price}</span>
      </div>
    </div>
  )
}

export default function Menu() {
  const headingRef = useFadeIn()

  return (
    <section id="menu" className="bg-dark py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="fade-in-section text-center mb-14">
          <h2 className="font-heading font-bold uppercase text-white text-3xl md:text-4xl">
            Our Favorites
          </h2>
          <div className="w-16 h-[3px] bg-amber mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => (
            <MenuCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
