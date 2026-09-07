import React from 'react';
import { ArrowUp, ExternalLink, Heart } from 'lucide-react';
import { WORKSHOP_DETAILS } from '../data/workshopData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/assets/simple_workshop_logo.png" alt="SIMPLE Logo" className="h-12 bg-white p-0.5 rounded-full shadow" />
              <img src="/assets/nit_logo.png" alt="NIT JSR" className="h-10 bg-white p-1 rounded" />
              <img src="/assets/iim_logo.png" alt="IIM Logo" className="h-10 bg-white p-1 rounded" />
              <div>
                <span className="font-extrabold text-lg text-white block">SIMPLE 2026</span>
                <span className="text-xs text-amber-400 font-semibold">NIT Jamshedpur</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              5-day Workshop on Structural Integrity Management and Protocols for Life Extension (SIMPLE). 
              Organized by Department of Metallurgical and Materials Engineering, NIT Jamshedpur in collaboration with IIM Jamshedpur Chapter.
            </p>

            {/* <div className="pt-2">
              <a
                href={WORKSHOP_DETAILS.registrationFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold px-4 py-2 rounded-lg shadow"
              >
                <span>Google Registration Form</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Workshop</a></li>
              <li><a href="#areas" className="hover:text-white transition-colors">Broad Areas</a></li>
              <li><a href="#speakers" className="hover:text-white transition-colors">Speakers</a></li>
              <li><a href="#committee" className="hover:text-white transition-colors">Committee Members</a></li>
              <li><a href="#registration" className="hover:text-white transition-colors">Registration & Fee Structure</a></li>
              <li><a href="#venue" className="hover:text-white transition-colors">Venue & Contact</a></li>
            </ul>
          </div>

          {/* Important Info */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-2">
              Event Overview
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p><strong className="text-slate-300">Dates:</strong> Oct 30 – Nov 3, 2026</p>
              <p><strong className="text-slate-300">Venue:</strong> Room 212, DJLHC, NIT Jamshedpur</p>
              <p><strong className="text-slate-300">Convenors:</strong> Dr. Monalisa Mandal & Dr. Prakash Sarkar</p>
              <p><strong className="text-slate-300">Secretaries:</strong> Dr. Ram Krishna & Dr. Aravind Gali</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Department of Metallurgical and Materials Engineering, NIT Jamshedpur. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-800 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
