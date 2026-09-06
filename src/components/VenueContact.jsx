import React from 'react';
import { MapPin, Phone, Mail, User, Building, Compass } from 'lucide-react';
import { VENUE_DETAILS, CONTACT_DETAILS } from '../data/workshopData';

export default function VenueContact() {
  return (
    <section id="venue" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Location & Assistance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Venue & Contact Information
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Reach out to our convenors or visit us at the Diamond Jubilee Lecture Hall Complex, NIT Jamshedpur.
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Venue Card */}
          <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute right-0 top-0 opacity-10 transform translate-x-4 -translate-y-4">
              <Compass className="w-48 h-48" />
            </div>

            <div>
              <span className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                <MapPin className="w-3.5 h-3.5" /> Event Location
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">
                {VENUE_DETAILS.building}
              </h3>
              <p className="text-amber-400 font-mono font-semibold text-lg mb-4">
                {VENUE_DETAILS.room}
              </p>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                National Institute of Technology (NIT) Jamshedpur, Adityapur, Jamshedpur, Jharkhand 831014, India.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                <Building className="w-4 h-4 text-blue-400" />
                <span>Department of Metallurgical & Materials Engineering</span>
              </div>
              <span className="text-xs bg-blue-600/30 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-lg">
                On-site Hybrid Sessions
              </span>
            </div>
          </div>

          {/* Contact Details Card */}
          <div id="contact" className="lg:col-span-6 bg-slate-50 border border-slate-200/80 rounded-2xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-blue-600 font-bold text-xs uppercase tracking-wider bg-blue-100/60 px-3 py-1 rounded-full border border-blue-200 mb-4 inline-block">
                Get In Touch
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Contact Convenors
              </h3>

              <div className="space-y-4">
                {CONTACT_DETAILS.map((contact, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-blue-50 text-blue-700 rounded-lg font-bold">
                        <User className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-base">{contact.name}</h4>
                        <span className="text-xs text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded">Convenor</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2 border-t border-slate-100">
                      <a
                        href={`tel:${contact.phone}`}
                        className="flex items-center gap-2 text-slate-700 hover:text-blue-700 font-medium bg-slate-50 p-2 rounded-lg transition-colors"
                      >
                        <Phone className="w-4 h-4 text-emerald-600" />
                        <span>{contact.phone}</span>
                      </a>
                      <a
                        href={`mailto:${contact.email}`}
                        className="flex items-center gap-2 text-slate-700 hover:text-blue-700 font-medium bg-slate-50 p-2 rounded-lg transition-colors truncate"
                      >
                        <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="truncate">{contact.email}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-center text-xs text-slate-500">
              For workshop queries regarding registration, failure analysis topics, or certificates.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
