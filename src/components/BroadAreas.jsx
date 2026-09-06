import React from 'react';
import { 
  AlertTriangle, 
  Activity, 
  ShieldAlert, 
  Microscope, 
  Scan, 
  Cpu, 
  Binary, 
  FileCheck2 
} from 'lucide-react';
import { BROAD_AREAS } from '../data/workshopData';

const areaIcons = [
  AlertTriangle,
  Activity,
  ShieldAlert,
  Microscope,
  Scan,
  Cpu,
  Binary,
  FileCheck2
];

export default function BroadAreas() {
  return (
    <section id="areas" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-wider bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            Technical Scope
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Broad Areas of the Workshop
          </h2>
          <p className="text-slate-400 text-base mt-2">
            Explore 8 key domains covering materials testing, failure diagnostics, computational modelling, and industry standards.
          </p>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BROAD_AREAS.map((area, idx) => {
            const IconComponent = areaIcons[idx % areaIcons.length];
            return (
              <div
                key={area.id}
                className="group relative bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:border-blue-500/50 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-extrabold text-slate-500 bg-slate-900 px-2.5 py-1 rounded-lg">
                      0{area.id}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-100 group-hover:text-white leading-snug">
                    {area.title}
                  </h3>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-700/50 flex items-center justify-between text-xs text-slate-400 group-hover:text-blue-400">
                  <span className="font-medium">Topic Area {area.id}</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
