import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Home from "./pages/Home";

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