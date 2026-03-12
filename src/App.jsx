import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import { ShoppingCart, User, Menu, X } from "lucide-react"; 
import { WATCHES } from "./data/watches";

// --- 1. HOME PAGE COMPONENT (Hero + Featured) ---
// Yo component le Hero ra Watches dubai lai wrap garchha
const Home = ({ addToCart }) => (
  <>
    <HeroSection />
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter uppercase">Featured <span className="text-yellow-500">Watches</span></h2>
          <p className="text-gray-500 text-sm mt-2">Curated for the modern gentleman.</p>
        </div>
        <button className="text-yellow-500 text-xs font-bold tracking-widest uppercase border-b border-yellow-500 pb-1 hover:text-white hover:border-white transition">View All</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {WATCHES.map((watch) => (
          <div key={watch.id} className="group cursor-pointer">
            <div className="relative overflow-hidden aspect-[3/4] bg-gray-900 rounded-2xl mb-4">
              <img 
                src={watch.image} 
                alt={watch.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-80 group-hover:opacity-100" 
              />
              <button 
                onClick={() => addToCart(watch)}
                className="absolute bottom-4 left-4 right-4 bg-white text-black py-3 rounded-xl font-bold text-xs uppercase translate-y-20 group-hover:translate-y-0 transition duration-500 hover:bg-yellow-500"
              >
                Add to Cart
              </button>
            </div>
            <h3 className="font-bold text-lg">{watch.name}</h3>
            <p className="text-yellow-500 font-mono tracking-tighter">${watch.price.toLocaleString()}</p>
            <p className="text-gray-600 text-[10px] uppercase tracking-widest mt-1">{watch.category}</p>
          </div>
        ))}
      </div>
    </section>
  </>
);

// --- 2. HERO SECTION COMPONENT ---
const HeroSection = () => (
  <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black z-10" />
      <img 
        src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1780" 
        alt="Watch Hero" 
        className="w-full h-full object-cover opacity-60 scale-105"
      />
    </div>
    <div className="relative z-20 text-center px-6 max-w-4xl">
      <h3 className="text-yellow-500 tracking-[0.3em] uppercase text-xs md:text-sm font-bold mb-4 animate-pulse">New Arrival 2026</h3>
      <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-6">TIMELESS <br /> <span className="text-yellow-500">ELEGANCE</span></h1>
      <p className="text-gray-400 text-sm md:text-lg max-w-lg mx-auto mb-10 font-light leading-relaxed">Discover our curated collection of luxury timepieces where craftsmanship meets modern technology.</p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <button className="bg-yellow-500 text-black px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white transition-all duration-300 w-full md:w-auto">Explore Collection</button>
        <button className="border border-white/30 px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all duration-300 w-full md:w-auto">Learn More</button>
      </div>
    </div>
  </section>
);

// --- 3. MAIN APP COMPONENT ---
function App() {
  const [cart, setCart] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <div className="bg-black min-h-screen text-white font-sans selection:bg-yellow-500 selection:text-black">
        <nav className="flex justify-between items-center p-6 border-b border-gray-900 sticky top-0 bg-black/80 backdrop-blur-md z-50">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-yellow-500" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link to="/" className="text-2xl font-black tracking-tighter text-yellow-500 uppercase">Time Fusion</Link>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium tracking-widest uppercase">
            <NavLink to="/" className={({isActive}) => isActive ? "text-yellow-500" : "hover:text-yellow-500 transition"}>Home</NavLink>
            <NavLink to="/shop" className={({isActive}) => isActive ? "text-yellow-500" : "hover:text-yellow-500 transition"}>Shop</NavLink>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative cursor-pointer hover:text-yellow-500 transition">
              <ShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">{cart.length}</span>
            </div>
            <User size={22} className="cursor-pointer hover:text-yellow-500 transition" />
          </div>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden fixed inset-x-0 bg-black border-b border-gray-900 p-8 flex flex-col space-y-6 text-center z-40">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-xl uppercase tracking-widest">Home</Link>
            <Link to="/shop" onClick={() => setIsMenuOpen(false)} className="text-xl uppercase tracking-widest">Shop</Link>
          </div>
        )}

        <Routes>
          
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/shop" element={<div className="p-20 text-center">Shop Page Coming Soon...</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;