import { useState } from "react";
import { WATCHES } from "../data/watches";

const Shop = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  
  const filteredWatches = WATCHES.filter((watch) => {
    const matchesSearch = watch.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || watch.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", "Luxury", "Sports", "Vintage", "Classic"];

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Search & Filter Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
        <h1 className="text-4xl font-black uppercase tracking-tighter">
          Our <span className="text-yellow-500">Collection</span>
        </h1>
        
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          {/* Search Input */}
          <input 
            type="text" 
            placeholder="Search watches..." 
            className="bg-gray-900 border border-gray-800 px-6 py-3 rounded-full text-sm focus:outline-none focus:border-yellow-500 transition w-full md:w-64"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          {/* Category Filter */}
          <select 
            className="bg-gray-900 border border-gray-800 px-6 py-3 rounded-full text-sm focus:outline-none cursor-pointer"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>
      </div>

      {/* Product Grid */}
      {filteredWatches.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {filteredWatches.map((watch) => (
            <div key={watch.id} className="group">
              <div className="relative overflow-hidden aspect-3/4 bg-gray-900 rounded-2xl mb-4">
                <img 
                  src={watch.image} 
                  alt={watch.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-80" 
                />
                <button 
                  onClick={() => addToCart(watch)}
                  className="absolute bottom-4 left-4 right-4 bg-yellow-500 text-black py-3 rounded-xl font-bold text-[10px] uppercase translate-y-20 group-hover:translate-y-0 transition duration-500"
                >
                  Add to Cart
                </button>
              </div>
              <h3 className="font-bold text-lg">{watch.name}</h3>
              <p className="text-yellow-500 font-mono">${watch.price.toLocaleString()}</p>
              <p className="text-gray-600 text-[10px] uppercase tracking-widest mt-1">{watch.category}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-500 italic">No watches found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default Shop;