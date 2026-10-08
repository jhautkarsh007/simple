import React from 'react';
import { Award, Building2, Presentation, ShieldCheck } from 'lucide-react';
import { SPONSORS } from '../data/workshopData';

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider bg-blue-100/60 px-3 py-1 rounded-full border border-blue-200">
            Industry Collaboration
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Our Workshop Sponsors & Partners
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Supported by leading metallurgical, heavy engineering, and research organizations.
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Sponsor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto items-center">
          {SPONSORS.map((sponsor) => (
            <div
              key={sponsor.id}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center text-center group"
            >
              <div className="h-32 w-full flex items-center justify-center p-4 bg-slate-50 rounded-xl border border-slate-100 mb-4 group-hover:border-blue-200 transition-colors">
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="max-h-full max-w-full object-contain filter group-hover:brightness-105 transition-all"
                />
              </div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                Official Sponsor
              </span>
            </div>
          ))}
        </div>

        {/* Presentation Note */}
        <div className="mt-12 bg-blue-50/60 border border-blue-200/80 rounded-2xl p-6 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="p-3 bg-blue-600 text-white rounded-xl shadow">
            <Presentation className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-sm">Sponsor Technical Presentations</h4>
            <p className="text-xs text-slate-600 mt-1">
              Industrial sponsor technical presentations and technology demonstrations will take place on Day 5 (3rd November 2026, 3:00 PM – 4:00 PM).
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
