import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Phone, MapPin, Eye, Instagram, Facebook } from 'lucide-react';
import { useCartStore } from '../store';
import { cn } from '../lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItems = useCartStore((state) => state.items);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Our Story', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-medical-900 p-2 rounded-lg text-white group-hover:bg-medical-800 transition-colors">
              <Eye className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900 tracking-tight">SATYAM</span>
              <span className="text-xs text-medical-800 font-medium tracking-wide">EYECARE</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-medical-600",
                  location.pathname === link.path ? "text-medical-800 font-bold" : "text-gray-600"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-6">
             <Link to="/book">
              <button className="px-5 py-2.5 bg-gradient-to-r from-medical-900 to-medical-800 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                Book Checkup
              </button>
            </Link>
            <button 
              onClick={toggleCart} 
              className="relative p-2 text-gray-600 hover:text-medical-800 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold-500 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center space-x-4">
             <button 
              onClick={toggleCart} 
              className="relative p-2 text-gray-600"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold-500 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-medical-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-medical-800 hover:bg-gray-50"
                >
                  {link.name}
                </Link>
              ))}
               <Link to="/book" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full mt-4 px-5 py-3 bg-medical-900 text-white text-base font-semibold rounded-xl shadow-md">
                  Book Free Eye Checkup
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-medical-900 text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
             <Eye className="h-6 w-6 text-gold-500" />
             <span className="font-bold text-xl">SATYAM EYECARE</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Founded by a myopia survivor, for the people of Punjab. We believe clear vision shouldn't cost a fortune.
          </p>
        </div>
        
        <div>
          <h3 className="text-gold-500 font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/shop" className="hover:text-white transition">Shop Eyewear</Link></li>
            <li><Link to="/book" className="hover:text-white transition">Book Appointment</Link></li>
            <li><Link to="/about" className="hover:text-white transition">Our Story</Link></li>
            <li><Link to="/blog" className="hover:text-white transition">Eye Health Blog</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-gold-500 font-semibold mb-4 uppercase tracking-wider text-sm">Contact</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 shrink-0" />
              <span>Shop 12, Model Town Market,<br/>Ludhiana, Punjab 141002</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="h-5 w-5 shrink-0" />
              <span>+91 98765-43210</span>
            </li>
          </ul>
        </div>

        <div>
           <h3 className="text-gold-500 font-semibold mb-4 uppercase tracking-wider text-sm">Follow Us</h3>
           <div className="flex space-x-4">
             <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"><Instagram className="h-5 w-5"/></a>
             <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"><Facebook className="h-5 w-5"/></a>
           </div>
           <div className="mt-6 p-4 bg-medical-800 rounded-lg">
             <p className="text-xs text-gold-400 font-semibold mb-1">Clinic Hours</p>
             <p className="text-xs text-gray-300">Mon - Sat: 10:00 AM - 8:00 PM</p>
             <p className="text-xs text-gray-300">Sunday: Closed</p>
           </div>
        </div>
      </div>
      <div className="border-t border-medical-800 mt-12 pt-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Satyam EyeCare. Made with ❤️ in Ludhiana.
      </div>
    </div>
  </footer>
);

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
