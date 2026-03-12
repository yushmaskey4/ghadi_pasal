import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, User, Menu, X } from "lucide-react";

const Navbar = ({ cartCount, isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="flex justify-between items-center p-6 border-b border-gray-900 sticky top-0 bg-black/80 backdrop-blur-md z-50">
      <div className="flex items-center gap-4">
        <button
          className="md:hidden text-yellow-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <Link
          to="/"
          className="text-2xl font-black tracking-tighter text-yellow-500 uppercase"
        >
          Time Fusion
        </Link>
      </div>
      <div className="hidden md:flex space-x-8 text-sm font-medium tracking-widest uppercase">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-yellow-500" : "hover:text-yellow-500 transition"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? "text-yellow-500" : "hover:text-yellow-500 transition"
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-yellow-500" : "hover:text-yellow-500 transition"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-yellow-500" : "hover:text-yellow-500 transition"
          }
        >
          Contact
        </NavLink>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative cursor-pointer hover:text-yellow-500 transition">
          <ShoppingCart size={22} />
          <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
            {cartCount}
          </span>
        </div>
        <User
          size={22}
          className="cursor-pointer hover:text-yellow-500 transition"
        />
      </div>
    </nav>
  );
};

export default Navbar;
