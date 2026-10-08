import React, { useState } from 'react';
import { Calendar, Clock, User, Download, FileText, CheckCircle2, ChevronRight } from 'lucide-react';
import { WORKSHOP_SCHEDULE, WORKSHOP_DETAILS } from '../data/workshopData';

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(0);

  const selectedSchedule = WORKSHOP_SCHEDULE[activeDay];

  return (
    <section id="schedule" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-wider bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            Program Overview
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            5-Day Workshop Schedule
          </h2>
          <p className="text-slate-400 text-base mt-2">
            Detailed session breakdown, technical lectures, practical NDT&E demonstrations, and valedictory program.
          </p>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Schedule PDF Action Banner */}
        <div className="mb-10 bg-gradient-to-r from-blue-900/90 via-slate-800 to-indigo-900/90 border border-blue-500/30 rounded-2xl p-4 sm:p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-3 bg-blue-600/30 text-blue-400 rounded-xl border border-blue-500/30">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Official Final Workshop Schedule PDF</h3>
              <p className="text-xs text-slate-300 mt-0.5">Download or view the complete day-by-day session timetable.</p>
            </div>
          </div>
          <a
            href={WORKSHOP_DETAILS.schedulePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-5 py-2.5 rounded-xl shadow-lg transition-all text-xs"
          >
            <Download className="w-4 h-4" />
            <span>Download Final Schedule PDF</span>
          </a>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {WORKSHOP_SCHEDULE.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveDay(index)}
              className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeDay === index
                  ? 'bg-blue-600 text-white shadow-lg ring-2 ring-blue-400/50 scale-105'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/80'
              }`}
            >
              <Calendar className={`w-4 h-4 ${activeDay === index ? 'text-amber-300' : 'text-slate-400'}`} />
              <div className="text-left">
                <span className="block font-extrabold leading-none">{item.day}</span>
                <span className="text-[10px] font-mono opacity-80 mt-0.5 block">{item.date}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Day Content */}
        <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-700 pb-4 mb-6 gap-2">
            <div>
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20">
                {selectedSchedule.day} • {selectedSchedule.date}
              </span>
              <h3 className="text-xl font-extrabold text-white mt-2">
                {selectedSchedule.title}
              </h3>
            </div>
            <span className="text-xs text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700 font-mono">
              {selectedSchedule.sessions.length} Sessions Scheduled
            </span>
          </div>

          {/* Session Cards list */}
          <div className="space-y-4">
            {selectedSchedule.sessions.map((session, sIdx) => {
              const isBreakOrTea = session.topic.toLowerCase().includes('tea') || session.topic.toLowerCase().includes('lunch') || session.topic.toLowerCase().includes('registration');
              
              return (
                <div
                  key={sIdx}
                  className={`p-4 rounded-xl border transition-all flex flex-col md:flex-row md:items-center justify-between gap-3 ${
                    isBreakOrTea
                      ? 'bg-slate-900/60 border-slate-800/80 text-slate-400'
                      : 'bg-slate-900/90 border-slate-700/80 hover:border-blue-500/50 shadow-md'
                  }`}
                >
                  {/* Time */}
                  <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-amber-400 min-w-[170px]">
                    <Clock className="w-4 h-4 text-slate-500 flex-shrink-0" />
                    <span>{session.time}</span>
                  </div>

                  {/* Topic Title */}
                  <div className="flex-1">
                    <h4 className={`text-sm sm:text-base font-semibold ${isBreakOrTea ? 'text-slate-300 italic' : 'text-slate-100'}`}>
                      {session.topic}
                    </h4>
                  </div>

                  {/* Speaker Tag */}
                  {session.speaker && (
                    <div className="flex items-center gap-1.5 bg-blue-950/80 border border-blue-600/40 text-blue-200 text-xs font-semibold px-3 py-1.5 rounded-lg self-start md:self-auto">
                      <User className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span>{session.speaker}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
