import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, ArrowRight } from 'lucide-react';
import { WORKSHOP_DETAILS } from '../data/workshopData';

export default function Navbar() {
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
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Broad Areas', href: '#areas' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Committee', href: '#committee' },
    { name: 'Registration', href: '#registration' },
    { name: 'Venue & Contact', href: '#venue' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5' : 'bg-gradient-to-r from-slate-900/90 via-blue-950/90 to-slate-900/90 backdrop-blur-sm text-white py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand & Logos */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="flex items-center gap-2">
              <img 
                src="/assets/simple_workshop_logo.png" 
                alt="SIMPLE 2026 Logo" 
                className="h-11 w-auto bg-white p-0.5 rounded-full shadow-md object-contain" 
              />
              <img 
                src="/assets/nit_logo.png" 
                alt="NIT Jamshedpur Logo" 
                className="h-10 w-auto bg-white p-1 rounded shadow-sm object-contain hidden sm:block" 
              />
              <img 
                src="/assets/iim_logo.png" 
                alt="IIM Jamshedpur Chapter Logo" 
                className="h-10 w-auto bg-white p-1 rounded shadow-sm object-contain hidden md:block" 
              />
            </div>
            <div>
              <span className={`block font-bold text-lg leading-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                SIMPLE <span className="text-amber-500 font-extrabold">2026</span>
              </span>
              <span className={`block text-xs font-medium tracking-wide ${scrolled ? 'text-slate-600' : 'text-slate-300'}`}>
                NIT Jamshedpur
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 font-medium text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  scrolled 
                    ? 'text-slate-700 hover:text-blue-700 hover:bg-slate-100' 
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={WORKSHOP_DETAILS.registrationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>Register Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-slate-200 hover:bg-white/10'}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 text-white px-4 pt-3 pb-6 space-y-3 shadow-2xl">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
            <img src="/assets/iim_logo.png" alt="IIM Logo" className="h-8 bg-white p-1 rounded" />
            <span className="text-xs text-slate-300">In collaboration with IIM Jamshedpur Chapter</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={WORKSHOP_DETAILS.registrationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-lg shadow-md"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
