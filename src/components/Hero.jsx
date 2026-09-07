import React, { useState, useEffect } from 'react';
import { Calendar, ExternalLink, Clock, ShieldCheck } from 'lucide-react';
import { WORKSHOP_DETAILS } from '../data/workshopData';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-10-30T09:00:00+05:30').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(
            difference / (1000 * 60 * 60 * 24)
          ),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
          ),
          minutes: Math.floor(
            (difference % (1000 * 60 * 60)) /
            (1000 * 60)
          ),
          seconds: Math.floor(
            (difference % (1000 * 60)) /
            1000
          ),
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };

    updateTimer();

    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-slate-900 text-white overflow-hidden"
    >

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/campus_building.jpg"
          alt="NIT Jamshedpur Campus"
          className="w-full h-full object-cover opacity-20 filter brightness-75 scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/85 to-slate-950/90" />
      </div>


      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER STACK ================= */}
        <div className="text-center max-w-4xl mx-auto space-y-3">

          {/* Official SIMPLE Workshop Logo */}
          <div className="flex justify-center mb-2">
            <img
              src="/assets/simple_workshop_logo.png"
              alt="SIMPLE 2026 Official Logo"
              className="w-36 h-36 sm:w-44 sm:h-44 bg-white p-1 rounded-full shadow-2xl ring-4 ring-blue-500/30 transform hover:scale-105 transition-transform duration-300 object-contain"
            />
          </div>


          {/* 1. National Institute of Technology Jamshedpur */}
          <h2 className="text-red-500 font-extrabold text-xl sm:text-3xl md:text-4xl uppercase tracking-wider drop-shadow-md">
            NATIONAL INSTITUTE OF TECHNOLOGY JAMSHEDPUR
          </h2>


          {/* 2. Department */}
          <h3 className="text-blue-300 font-bold text-base sm:text-2xl tracking-wide">
            Department of Metallurgical and Materials Engineering
          </h3>


          {/* 3. Workshop Introduction */}
          <p className="text-amber-400 font-semibold text-sm sm:text-lg italic pt-1">
            presents a 5-day Workshop on
          </p>


          {/* 4. Workshop Title */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight pt-1">
            Structural Integrity Management and Protocols for Life Extension{' '}
            <span className="text-amber-400 block sm:inline">
              (SIMPLE)
            </span>
          </h1>


          {/* 5. Workshop Date */}
          <div className="pt-2">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 text-white font-extrabold text-xs sm:text-base px-4 py-1.5 rounded-full shadow-lg border border-red-400/30">
              <Calendar className="w-4 h-4" />
              30th October to 3rd November 2026
            </span>
          </div>


          {/* 6. Last Date for Registration */}
          <div className="pt-3">
            <span className="inline-flex items-center gap-2 bg-red-500/10 border border-red-400/40 text-red-300 font-bold text-sm sm:text-base px-4 py-2 rounded-lg">
              <Calendar className="w-4 h-4" />
              Last Date for Registration: 20th October 2026
            </span>
          </div>


          {/* 7. Collaboration */}
          <p className="text-slate-300 font-medium text-xs sm:text-sm pt-2 flex items-center justify-center gap-2">
            <span>
              In collaboration with{' '}
              <strong className="text-amber-300">
                IIM Jamshedpur Chapter
              </strong>
            </span>
          </p>


          {/* ================= ACTION BUTTONS ================= */}
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-3">

            {/* Register Now */}
            <a
              href={WORKSHOP_DETAILS.registrationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-bold px-7 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <span>Register Now</span>
              <ExternalLink className="w-5 h-5" />
            </a>


            {/* View Brochure */}
            <button
              onClick={() => {
                // Open PDF in a new tab
                window.open(
                  "/assets/workshop-brochure.pdf",
                  "_blank"
                );

                // Start download
                const link = document.createElement("a");
                link.href = "/assets/workshop-brochure.pdf";
                link.download = "workshop-brochure.pdf";

                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-bold px-7 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <span>📄 View Brochure</span>
              <ExternalLink className="w-5 h-5" />
            </button>

          </div>

        </div>


        {/* ================= COUNTDOWN ================= */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">

          {/* Countdown Timer */}
          <div className="lg:col-span-6 lg:col-start-4">

            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 shadow-2xl backdrop-blur-md">

              {/* Countdown Header */}
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-3 mb-4">

                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  Event Starts In
                </span>

                <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-mono">
                  Oct 30, 2026
                </span>

              </div>


              {/* Countdown Numbers */}
              <div className="grid grid-cols-4 gap-2 text-center">

                {/* Days */}
                <div className="bg-slate-900/80 rounded-xl p-2.5 border border-slate-700/50">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    {timeLeft.days}
                  </span>

                  <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">
                    Days
                  </span>
                </div>


                {/* Hours */}
                <div className="bg-slate-900/80 rounded-xl p-2.5 border border-slate-700/50">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    {timeLeft.hours}
                  </span>

                  <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">
                    Hours
                  </span>
                </div>


                {/* Minutes */}
                <div className="bg-slate-900/80 rounded-xl p-2.5 border border-slate-700/50">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    {timeLeft.minutes}
                  </span>

                  <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">
                    Mins
                  </span>
                </div>


                {/* Seconds */}
                <div className="bg-slate-900/80 rounded-xl p-2.5 border border-slate-700/50">
                  <span className="block text-2xl sm:text-3xl font-extrabold font-mono text-amber-400">
                    {timeLeft.seconds}
                  </span>

                  <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">
                    Secs
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}