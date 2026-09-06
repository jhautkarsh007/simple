import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Award, ExternalLink, Download, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import { WORKSHOP_DETAILS } from '../data/workshopData';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-10-30T09:00:00+05:30').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-slate-900 text-white overflow-hidden">
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/campus_building.jpg" 
          alt="NIT Jamshedpur Campus" 
          className="w-full h-full object-cover opacity-20 filter brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-950/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 bg-blue-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg backdrop-blur-md">
            <Award className="w-3.5 h-3.5" /> 5-Day National Workshop
          </span>
          <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-md">
            <Calendar className="w-3.5 h-3.5 text-amber-400" /> {WORKSHOP_DETAILS.datesFormatted}
          </span>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="text-center lg:text-left max-w-4xl">
          <p className="text-blue-400 font-semibold text-sm sm:text-base tracking-wide uppercase mb-2">
            NATIONAL INSTITUTE OF TECHNOLOGY JAMSHEDPUR
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
            Structural Integrity Management and Protocols for Life Extension <span className="text-amber-400 block sm:inline">(SIMPLE)</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl mb-4">
            Presents by <span className="text-white font-medium">{WORKSHOP_DETAILS.organizer}</span>, NIT Jamshedpur, in collaboration with the <span className="text-amber-300 font-medium">IIM Jamshedpur Chapter</span>.
          </p>
        </div>

        {/* Hero CTA & Countdown Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Action Buttons */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href={WORKSHOP_DETAILS.registrationFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold px-7 py-3.5 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 text-base"
              >
                <span>Register Now</span>
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="#registration"
                className="inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 font-semibold px-6 py-3.5 rounded-xl backdrop-blur-md transition-all text-base"
              >
                <span>Registration Fees</span>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </a>
            </div>

            <p className="text-xs text-slate-400 text-center lg:text-left flex items-center justify-center lg:justify-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Internal NIT JSR Academia: <span className="text-emerald-300 font-medium">100% Fees Waived Off</span>
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-3 mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" /> Event Starts In
                </span>
                <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-mono">Oct 30, 2026</span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-slate-900/80 rounded-xl p-2.5 border border-slate-700/50">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white font-mono">{timeLeft.days}</span>
                  <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Days</span>
                </div>
                <div className="bg-slate-900/80 rounded-xl p-2.5 border border-slate-700/50">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white font-mono">{timeLeft.hours}</span>
                  <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Hours</span>
                </div>
                <div className="bg-slate-900/80 rounded-xl p-2.5 border border-slate-700/50">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white font-mono">{timeLeft.minutes}</span>
                  <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Mins</span>
                </div>
                <div className="bg-slate-900/80 rounded-xl p-2.5 border border-slate-700/50">
                  <span className="block text-2xl sm:text-3xl font-extrabold font-mono text-amber-400">{timeLeft.seconds}</span>
                  <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Secs</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Highlights Banner Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/90 border border-slate-700/60 rounded-xl p-4 flex items-center gap-4 shadow-lg">
            <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-400 uppercase font-semibold block">Dates</span>
              <span className="text-sm font-bold text-white">Oct 30 – Nov 3, 2026</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/90 border border-slate-700/60 rounded-xl p-4 flex items-center gap-4 shadow-lg">
            <div className="p-3 bg-amber-500/10 text-amber-400 rounded-lg">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-400 uppercase font-semibold block">Venue</span>
              <span className="text-sm font-bold text-white">Room 212, DJLHC, NIT JSR</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/90 border border-slate-700/60 rounded-xl p-4 flex items-center gap-4 shadow-lg">
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-400 uppercase font-semibold block">Organizer</span>
              <span className="text-sm font-bold text-white">DMME & IIM JSR Chapter</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
