import React from 'react';
import { Users, Target, CheckCircle2, Building2, Lightbulb, BookOpen } from 'lucide-react';
import { ABOUT_TEXT, WORKSHOP_DETAILS } from '../data/workshopData';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            About The Workshop
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Advancing Structural Integrity & Life Extension
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                {ABOUT_TEXT.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-blue-50/60 border border-blue-100 flex items-start gap-4">
                <div className="p-2.5 bg-blue-600 text-white rounded-lg shadow-sm">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Industry-Academia Nexus</h4>
                  <p className="text-xs text-slate-600 mt-1">Connecting experts from petrochemical, power, steel & defense sectors.</p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-amber-50/60 border border-amber-100 flex items-start gap-4">
                <div className="p-2.5 bg-amber-500 text-white rounded-lg shadow-sm">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Practical Case Studies</h4>
                  <p className="text-xs text-slate-600 mt-1">Real-world industrial failure analysis, NDT&E and structural protocols.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Feature Columns (Who & Why) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Who Should Attend */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white p-7 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-4 translate-y-4">
                <Users className="w-40 h-40" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-amber-400" /> Who Should Attend?
              </h3>
              <ul className="space-y-3 relative z-10">
                {ABOUT_TEXT.whoShouldAttend.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/10">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Attend */}
            <div className="bg-slate-50 border border-slate-200/80 p-7 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-blue-600" /> Why Attend?
              </h3>
              <ul className="space-y-3">
                {ABOUT_TEXT.whyAttend.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="p-1 bg-emerald-100 text-emerald-700 rounded-full mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
