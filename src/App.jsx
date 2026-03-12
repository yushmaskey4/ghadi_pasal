import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//Static Data  
const WATCHES = [
  { id: 1, name: "Rolex Submariner", price: 9500 },
  { id: 2, name: "Omega Speedmaster", price: 6000 },
  { id: 3, name: "Patek Philippe", price: 45000 },
];

function App() {
  const [cart, setCart] = useState([]);

  // Add to Cart
  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log("Cart Updated:", cart);
  };

  return (
    <Router>
      <div style={{ background: '#111', color: '#fff', minHeight: '100vh' }}>
        {/* Simple Navigation */}
        <nav style={{ padding: '20px', borderBottom: '1px solid #333', display: 'flex', gap: '20px' }}>
          <Link to="/" style={{ color: '#eab308' }}>HOME</Link>
          <Link to="/shop" style={{ color: '#eab308' }}>SHOP</Link>
          <span style={{ marginLeft: 'auto' }}>🛒 Cart: {cart.length}</span>
        </nav>

        <Routes>
          <Route path="/" element={<h1 style={{ textAlign: 'center', marginTop: '50px' }}>Welcome to Time Fusion</h1>} />
          
          <Route path="/shop" element={
            <div style={{ padding: '40px' }}>
              <h2>Our Collection</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                {WATCHES.map(watch => (
                  <div key={watch.id} style={{ border: '1px solid #333', padding: '20px', borderRadius: '10px' }}>
                    <h3>{watch.name}</h3>
                    <p>${watch.price}</p>
                    <button 
                      onClick={() => addToCart(watch)}
                      style={{ background: '#eab308', border: 'none', padding: '10px', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                ))}
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;