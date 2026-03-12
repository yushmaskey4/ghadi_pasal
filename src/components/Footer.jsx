import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-900 pt-16 pb-8 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Brand Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-yellow-500 tracking-tighter uppercase">Time Fusion</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Crafting elegance since 2026. We provide the world's finest timepieces for those who value every second.
          </p>
          <div className="flex gap-4">
            <Facebook size={18} className="text-gray-500 hover:text-yellow-500 cursor-pointer transition" />
            <Instagram size={18} className="text-gray-500 hover:text-yellow-500 cursor-pointer transition" />
            <Twitter size={18} className="text-gray-500 hover:text-yellow-500 cursor-pointer transition" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Explore</h4>
          <ul className="space-y-3 text-gray-500 text-sm">
            <li><Link to="/" className="hover:text-yellow-500 transition">Home</Link></li>
            <li><Link to="/shop" className="hover:text-yellow-500 transition">Shop</Link></li>
            <li><Link to="/about" className="hover:text-yellow-500 transition">About Us</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Support</h4>
          <ul className="space-y-3 text-gray-500 text-sm">
            <li className="hover:text-yellow-500 cursor-pointer transition">Shipping Policy</li>
            <li className="hover:text-yellow-500 cursor-pointer transition">Warranty</li>
            <li className="hover:text-yellow-500 cursor-pointer transition">FAQs</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 text-gray-500 text-sm">
          <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Contact</h4>
          <div className="flex items-center gap-3">
            <MapPin size={16} className="text-yellow-500" />
            <span>Koshi Haraicha, Nepal</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={16} className="text-yellow-500" />
            <span>+977 98XXXXXXXX</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={16} className="text-yellow-500" />
            <span>info@timefusion.com</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 uppercase tracking-[0.2em]">
        <p>© {currentYear} TIME FUSION. ALL RIGHTS RESERVED.</p>
        <p>DESIGNED BY YUSH MASKEY</p>
      </div>
    </footer>
  );
};

export default Footer;