import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onGetStarted: () => void;
}

export default function Navbar({ onGetStarted }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-white/50 backdrop-blur-sm border-b border-slate-100 shadow-sm' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/logo.svg" 
            alt="Healora Logo" 
            className="w-10 h-10 rounded-xl shadow-lg shadow-emerald-200/50 object-cover" 
          />
          <span className="font-bold text-xl tracking-tight text-emerald-900 font-display">
            Healora
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={onGetStarted}
            className="px-5 py-2 emerald-gradient rounded-full text-white text-sm font-semibold shadow-lg shadow-emerald-200/50 hover:opacity-90 transition-all active:scale-95"
          >
            Get Started Free
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-900 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => {
                  setIsOpen(false);
                  onGetStarted();
                }}
                className="w-full py-4 bg-primary-600 text-white font-semibold rounded-2xl"
              >
                Get Started Free
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
