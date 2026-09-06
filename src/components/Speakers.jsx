import React, { useState } from 'react';
import { Search, UserCheck, Building } from 'lucide-react';
import { SPEAKERS } from '../data/workshopData';

export default function Speakers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInstitution, setSelectedInstitution] = useState('All');

  const institutions = ['All', 'NIT JSR', 'Tata Steel', 'CSIR-NML', 'DMRL'];

  const filteredSpeakers = SPEAKERS.filter((speaker) => {
    const matchesSearch = 
      speaker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      speaker.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      speaker.institution.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesInstitution = 
      selectedInstitution === 'All' || 
      speaker.institution.toLowerCase().includes(selectedInstitution.toLowerCase());

    return matchesSearch && matchesInstitution;
  });

  return (
    <section id="speakers" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider bg-blue-100/60 px-3 py-1 rounded-full border border-blue-200">
            Distinguished Speakers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Keynote & Invited Speakers
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Renowned experts from academia, premier research institutes, and leading metallurgical industries.
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter and Search Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search speaker name or institute..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>

          {/* Institution Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {institutions.map((inst) => (
              <button
                key={inst}
                onClick={() => setSelectedInstitution(inst)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedInstitution === inst
                    ? 'bg-blue-700 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {inst}
              </button>
            ))}
          </div>

        </div>

        {/* Speakers Grid */}
        {filteredSpeakers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredSpeakers.map((speaker, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center group"
              >
                {/* Photo Avatar */}
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full bg-slate-100 p-0.5 ring-4 ring-blue-100 group-hover:ring-blue-500/40 shadow-md transition-all">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="absolute bottom-0 right-0 bg-blue-600 text-white p-1 rounded-full shadow">
                    <UserCheck className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Speaker Info */}
                <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors">
                  {speaker.name}
                </h3>
                <p className="text-xs font-medium text-slate-600 mt-1 line-clamp-2">
                  {speaker.designation}
                </p>
                <div className="mt-3 pt-3 border-t border-slate-100 w-full flex items-center justify-center gap-1.5 text-xs text-amber-600 font-semibold bg-amber-50/50 py-1 rounded-lg">
                  <Building className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="truncate">{speaker.institution}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 text-slate-500">
            No speakers matched your search criteria.
          </div>
        )}

      </div>
    </section>
  );
}
