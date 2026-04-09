/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, HeartPulse, Phone, MapPin, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header 
        className={`sticky top-0 z-50 bg-white/80 backdrop-blur-md transition-all duration-300 ${
          isScrolled ? 'shadow-sm py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-110">
              <HeartPulse size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-near-black font-bold text-xl leading-none tracking-tight">PAED</span>
              <span className="text-brand font-medium text-xs tracking-widest uppercase">Medical Center</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand ${
                  location.pathname === link.path ? 'text-brand' : 'text-near-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="airbnb-button-primary text-sm py-2.5"
            >
              Book Appointment
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-near-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-lg font-medium ${
                      location.pathname === link.path ? 'text-brand' : 'text-near-black'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link 
                  to="/contact" 
                  className="airbnb-button-primary text-center mt-2"
                >
                  Book Appointment
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-near-black text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center text-white">
                  <HeartPulse size={20} />
                </div>
                <span className="font-bold text-xl tracking-tight">PAED MEDICAL</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Expert Pediatric & Specialized Care in the Heart of Kampala. Providing compassionate healthcare for your family since 2010.
              </p>
            </div>

            {/* Branch A */}
            <div>
              <h4 className="font-bold text-brand mb-6 uppercase tracking-wider text-xs">Branch A - Kyebando</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-brand shrink-0" size={18} />
                  <p className="text-sm text-gray-400">Kyebando, Kampala, Uganda</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-brand shrink-0" size={18} />
                  <a href="tel:+256703919679" className="text-sm font-bold hover:text-brand transition-colors">+256 703 919 679</a>
                </div>
                <button className="text-xs font-semibold underline hover:text-brand transition-colors">Get Directions</button>
              </div>
            </div>

            {/* Branch B */}
            <div>
              <h4 className="font-bold text-brand mb-6 uppercase tracking-wider text-xs">Branch B - Wakiso</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-brand shrink-0" size={18} />
                  <p className="text-sm text-gray-400">Wakiso, Uganda</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-brand shrink-0" size={18} />
                  <a href="tel:+256707061441" className="text-sm font-bold hover:text-brand transition-colors">+256 707 061 441</a>
                </div>
                <button className="text-xs font-semibold underline hover:text-brand transition-colors">Get Directions</button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/services" className="hover:text-brand transition-colors">Our Services</Link></li>
                <li><Link to="/about" className="hover:text-brand transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-brand transition-colors">Contact</Link></li>
                <li><Link to="/contact" className="hover:text-brand transition-colors">Emergency Care</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© 2026 Paed Medical Center. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer">Terms of Service</span>
              <div className="flex items-center gap-1">
                <Globe size={14} />
                <span>Kampala, Uganda</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
