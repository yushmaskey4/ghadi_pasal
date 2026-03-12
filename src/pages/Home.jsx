import { WATCHES } from "../data/watches";

const HeroSection = () => (
  <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black z-10" />
      <img src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1780" alt="Watch Hero" className="w-full h-full object-cover opacity-60 scale-105" />
    </div>
    <div className="relative z-20 text-center px-6 max-w-4xl">
      <h3 className="text-yellow-500 tracking-[0.3em] uppercase text-xs md:text-sm font-bold mb-4 animate-pulse">New Arrival 2026</h3>
      <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-6">TIMELESS <br /> <span className="text-yellow-500">ELEGANCE</span></h1>
      <p className="text-gray-400 text-sm md:text-lg max-w-lg mx-auto mb-10 font-light leading-relaxed">Discover our curated collection of luxury timepieces.</p>
      <button className="bg-yellow-500 text-black px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white transition-all">Explore Collection</button>
    </div>
  </section>
);

const Home = ({ addToCart }) => {
  return (
    <>
      <HeroSection />
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold uppercase mb-12 text-center">Featured <span className="text-yellow-500">Watches</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WATCHES.map((watch) => (
            <div key={watch.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4] bg-gray-900 rounded-2xl mb-4">
                <img src={watch.image} alt={watch.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-80" />
                <button onClick={() => addToCart(watch)} className="absolute bottom-4 left-4 right-4 bg-white text-black py-3 rounded-xl font-bold text-xs uppercase translate-y-20 group-hover:translate-y-0 transition duration-500">Add to Cart</button>
              </div>
              <h3 className="font-bold">{watch.name}</h3>
              <p className="text-yellow-500">${watch.price}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;