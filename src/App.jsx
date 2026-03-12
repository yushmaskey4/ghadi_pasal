import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [cart, setCart] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <div className="bg-black min-h-screen text-white">
        <Navbar cartCount={cart.length} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        
        {/* Mobile Menu Logic */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-x-0 bg-black border-b border-gray-900 p-8 flex flex-col space-y-6 text-center z-40">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-xl">Home</Link>
            <Link to="/shop" onClick={() => setIsMenuOpen(false)} className="text-xl">Shop</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-xl">About</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-xl">Contact</Link>
          </div>
        )}

        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;