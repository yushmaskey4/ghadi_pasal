import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import { ShoppingCart, User, Menu, X } from "lucide-react"; // Icons ko lagi

function App() {
  const [cart, setCart] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <div className="bg-black min-h-screen text-white font-sans selection:bg-yellow-500 selection:text-black">
        
        {/* --- NAVBAR --- */}
        <nav className="flex justify-between items-center p-6 border-b border-gray-900 sticky top-0 bg-black/80 backdrop-blur-md z-50">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-yellow-500" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link to="/" className="text-2xl font-black tracking-tighter text-yellow-500 uppercase">
              Time Fusion
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 text-sm font-medium tracking-widest uppercase">
            <NavLink to="/" className={({isActive}) => isActive ? "text-yellow-500" : "hover:text-yellow-500 transition"}>Home</NavLink>
            <NavLink to="/shop" className={({isActive}) => isActive ? "text-yellow-500" : "hover:text-yellow-500 transition"}>Shop</NavLink>
            <NavLink to="/about" className="hover:text-yellow-500 transition">About</NavLink>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative cursor-pointer hover:text-yellow-500 transition">
              <ShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            </div>
            <User size={22} className="cursor-pointer hover:text-yellow-500 transition" />
          </div>
        </nav>

        {/* --- MOBILE MENU --- */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-x-0 bg-black border-b border-gray-900 p-8 flex flex-col space-y-6 text-center z-40 animate-in slide-in-from-top duration-300">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-xl uppercase tracking-widest">Home</Link>
            <Link to="/shop" onClick={() => setIsMenuOpen(false)} className="text-xl uppercase tracking-widest">Shop</Link>
          </div>
        )}

        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/shop" element={<div className="p-20 text-center">Shop Page Coming Soon...</div>} />
        </Routes>
      </div>
    </Router>
  );
}

// --- HERO SECTION COMPONENT ---
const HeroSection = () => (
  <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
    {/* Background Image Placeholder */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black z-10" />
      <img 
        src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1780" 
        alt="Watch Hero" 
        className="w-full h-full object-cover opacity-60 scale-105"
      />
    </div>

    <div className="relative z-20 text-center px-6 max-w-4xl">
      <h3 className="text-yellow-500 tracking-[0.3em] uppercase text-xs md:text-sm font-bold mb-4 animate-pulse">
        New Arrival 2026
      </h3>
      <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-6">
        TIMELESS <br /> <span className="text-yellow-500">ELEGANCE</span>
      </h1>
      <p className="text-gray-400 text-sm md:text-lg max-w-lg mx-auto mb-10 font-light leading-relaxed">
        Discover our curated collection of luxury timepieces where craftsmanship meets modern technology.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <button className="bg-yellow-500 text-black px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white transition-all duration-300 w-full md:w-auto">
          Explore Collection
        </button>
        <button className="border border-white/30 px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all duration-300 w-full md:w-auto">
          Learn More
        </button>
      </div>
    </div>
  </section>
);

export default App;