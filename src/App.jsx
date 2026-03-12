import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// 1. Simple Data
const WATCHES = [
  { id: 1, name: "Luxury Rolex", price: 5000 },
  { id: 2, name: "Omega Seamaster", price: 3500 },
];

function App() {
  const [cart, setCart] = useState([]);

  // 2. Logic: Add to Cart
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added!`);
  };

  return (
    <Router>
      <nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
        <Link to="/">Home</Link> | <Link to="/products">Shop</Link> | 🛒 {cart.length}
      </nav>

      <Routes>
        <Route path="/" element={<h1>Welcome to Time Fusion</h1>} />
        <Route path="/products" element={
          <div>
            <h2>Our Watches</h2>
            {WATCHES.map(w => (
              <div key={w.id}>
                <p>{w.name} - ${w.price}</p>
                <button onClick={() => addToCart(w)}>Add to Cart</button>
              </div>
            ))}
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;