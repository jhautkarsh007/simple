import React from 'react';
import { Award, Users, Shield, UserCheck, Briefcase } from 'lucide-react';
import { COMMITTEE } from '../data/workshopData';

export default function Committee() {
  return (
    <section id="committee" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Organization
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Committee Members
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Organized under the patronage and advisory of distinguished leadership from NIT Jamshedpur & partner institutes.
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Patrons & Leadership Section */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-slate-800 mb-8 text-center flex items-center justify-center gap-2">
            <Award className="w-5 h-5 text-amber-500" /> Workshop Patrons
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Chief Patron */}
            <div className="bg-gradient-to-b from-slate-50 to-blue-50/30 border border-blue-200/80 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all">
              <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-slate-100 p-0.5 ring-4 ring-blue-500/20 shadow-md">
                <img
                  src={COMMITTEE.chiefPatron.image}
                  alt={COMMITTEE.chiefPatron.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <span className="inline-block bg-blue-700 text-white text-xs font-extrabold px-3 py-1 rounded-full mb-2 uppercase tracking-wide">
                {COMMITTEE.chiefPatron.role}
              </span>
              <h4 className="text-lg font-bold text-slate-900">{COMMITTEE.chiefPatron.name}</h4>
              <p className="text-xs text-slate-600 font-medium mt-1">{COMMITTEE.chiefPatron.designation}</p>
            </div>

            {/* Chief Co-Patron */}
            <div className="bg-gradient-to-b from-slate-50 to-blue-50/30 border border-blue-200/80 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all">
              <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-slate-100 p-0.5 ring-4 ring-indigo-500/20 shadow-md">
                <img
                  src={COMMITTEE.chiefCoPatron.image}
                  alt={COMMITTEE.chiefCoPatron.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <span className="inline-block bg-indigo-700 text-white text-xs font-extrabold px-3 py-1 rounded-full mb-2 uppercase tracking-wide">
                {COMMITTEE.chiefCoPatron.role}
              </span>
              <h4 className="text-lg font-bold text-slate-900">{COMMITTEE.chiefCoPatron.name}</h4>
              <p className="text-xs text-slate-600 font-medium mt-1">{COMMITTEE.chiefCoPatron.designation}</p>
            </div>

            {/* Patron */}
            <div className="bg-gradient-to-b from-slate-50 to-blue-50/30 border border-blue-200/80 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all">
              <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-slate-100 p-0.5 ring-4 ring-slate-400/20 shadow-md">
                <img
                  src={COMMITTEE.patron.image}
                  alt={COMMITTEE.patron.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <span className="inline-block bg-slate-800 text-white text-xs font-extrabold px-3 py-1 rounded-full mb-2 uppercase tracking-wide">
                {COMMITTEE.patron.role}
              </span>
              <h4 className="text-lg font-bold text-slate-900">{COMMITTEE.patron.name}</h4>
              <p className="text-xs text-slate-600 font-medium mt-1">{COMMITTEE.patron.designation}</p>
            </div>

          </div>
        </div>

        {/* Convenors & Organizing Secretaries Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-slate-800 mb-8 text-center flex items-center justify-center gap-2">
            <UserCheck className="w-5 h-5 text-blue-600" /> Convenors & Organizing Secretaries
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Convenors */}
            {COMMITTEE.convenors.map((member, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-all">
                <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-slate-100 p-0.5 ring-2 ring-amber-400 shadow">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <span className="inline-block bg-amber-100 text-amber-800 text-[11px] font-bold px-2.5 py-0.5 rounded mb-1">
                  {member.role}
                </span>
                <h4 className="text-base font-bold text-slate-900">{member.name}</h4>
                <p className="text-xs text-slate-500 mt-0.5">{member.designation}</p>
              </div>
            ))}

            {/* Secretaries */}
            {COMMITTEE.organizingSecretaries.map((member, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-all">
                <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-slate-100 p-0.5 ring-2 ring-blue-400 shadow">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <span className="inline-block bg-blue-100 text-blue-800 text-[11px] font-bold px-2.5 py-0.5 rounded mb-1">
                  {member.role}
                </span>
                <h4 className="text-base font-bold text-slate-900">{member.name}</h4>
                <p className="text-xs text-slate-500 mt-0.5">{member.designation}</p>
              </div>
            ))}

          </div>
        </div>

        {/* Advisory Committee & Organizing Members split cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Advisory Committee */}
          <div className="bg-slate-900 text-white rounded-2xl p-7 shadow-xl">
            <h3 className="text-lg font-bold text-amber-400 mb-4 flex items-center gap-2 border-b border-slate-800 pb-3">
              <Shield className="w-5 h-5" /> Advisory Committee
            </h3>
            <ul className="space-y-3">
              {COMMITTEE.advisoryCommittee.map((member, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-200 border-b border-slate-800/50 pb-2 last:border-0">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>{member}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Organizing Members */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-200 pb-3">
              <Users className="w-5 h-5 text-blue-600" /> Organizing Members
            </h3>
            <p className="text-xs text-slate-500 font-medium mb-4">Faculties of DMME, NIT Jamshedpur:</p>
            <div className="flex flex-wrap gap-2">
              {COMMITTEE.organizingMembers.map((member, idx) => (
                <span key={idx} className="bg-white border border-slate-300 text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm">
                  {member}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
