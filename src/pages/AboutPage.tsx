import React from 'react';
import { PageId } from '../types';
import { PERSONAL_INFO, CERTIFICATIONS } from '../data/portfolioData';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenResume: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenResume }) => {
  return (
    <div className="relative min-h-[calc(100vh-145px)] px-6 sm:px-10 lg:px-24 pt-8 sm:pt-10 pb-28 relative flex flex-col justify-between overflow-hidden">
      {/* Background Watermark Initial */}
      <div className="fixed top-20 left-4 hero-watermark font-black z-0 opacity-20 pointer-events-none select-none">
        R
      </div>

      <div className="relative z-20 max-w-6xl mx-auto w-full">
        {/* Subhead / Section Tag */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#FF5C00] font-bold mb-4">
          <span className="w-6 h-[1.5px] bg-[#FF5C00]"></span>
          <span>Profile &amp; Philosophy</span>
        </div>

        {/* Huge Headline: "I build." (white) "things that" (grey) "work." (white) */}
        <h1 className="text-5xl sm:text-7xl lg:text-[6.5rem] font-extrabold leading-[0.93] tracking-tight mb-10 sm:mb-14">
          <span className="text-white">I build.</span>{' '}
          <span className="text-[#4A4A4A]">things that</span>{' '}
          <span className="text-white">work<span className="text-[#FF5C00]">.</span></span>
        </h1>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-8">
          {/* Left Column: Bio & Background */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="glass-card rounded-2xl p-7 sm:p-9 border border-white/10 relative overflow-hidden group hover:border-white/20 transition-all shadow-2xl">
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#FF5C00]/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center gap-2 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5C00] shadow-[0_0_8px_#FF5C00]"></span>
                <span className="text-xs uppercase font-mono tracking-wider text-neutral-400 font-bold">
                  Bio &amp; Background
                </span>
              </div>

              <p className="text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight mb-5">
                {PERSONAL_INFO.bioHeadline}
              </p>

              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                Computer Science &amp; Engineering graduate from{' '}
                <strong className="text-white font-medium">Jansons Institute of Technology</strong> (CGPA 7.8/10), based in{' '}
                <strong className="text-white font-medium">{PERSONAL_INFO.location}</strong>. 
                Currently deep-diving into enterprise architecture and intelligent solutions as a{' '}
                <strong className="text-white font-medium">KodNest Java Full Stack + Gen AI</strong> trainee.
              </p>

              <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                My engineering focus is backend-first: Java, Spring Boot, REST APIs, MySQL, MongoDB — 
                paired with AI-assisted frontend development to ship complete, working products.
              </p>

              <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <span className="text-[#FF5C00]">📍</span>
                  <span className="font-medium text-white">{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#FF5C00]">⚡</span>
                  <span className="font-medium text-white">{PERSONAL_INFO.specialization}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#FF5C00]">💼</span>
                  <span className="font-medium text-white">Open for Opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Credentials & Certifications with Orange-Dot Bullets */}
          <div className="lg:col-span-6">
            <div className="glass-card rounded-2xl p-7 sm:p-9 border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5C00] shadow-[0_0_8px_#FF5C00]"></span>
                  <span className="text-xs uppercase font-mono tracking-wider text-neutral-400 font-bold">
                    Credentials &amp; Training
                  </span>
                </div>
                <span className="text-[11px] font-mono text-neutral-500 tracking-wider uppercase font-semibold">
                  VERIFIED
                </span>
              </div>

              {/* Certifications List */}
              <ul className="space-y-6">
                {CERTIFICATIONS.map((cert) => (
                  <li key={cert.id} className="flex items-start gap-4 group">
                    <span className="mt-2 w-2.5 h-2.5 rounded-full bg-[#FF5C00] shrink-0 shadow-[0_0_10px_rgba(255,92,0,0.8)] group-hover:scale-125 transition-transform"></span>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between flex-wrap gap-2">
                        <h3 className="text-base font-bold text-white group-hover:text-[#FF5C00] transition-colors">
                          {cert.title}
                        </h3>
                        <span className="text-xs font-mono text-[#FF5C00] font-semibold">{cert.status}</span>
                      </div>
                      <p className="text-sm text-neutral-400 mt-1 leading-relaxed">{cert.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* KodNest Accelerator Highlight */}
              <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <div className="text-xs text-neutral-400 font-mono">
                  ACCELERATOR: <strong className="text-white">KodNest GenAI Full Stack</strong>
                </div>
                <button
                  onClick={onOpenResume}
                  className="text-xs font-bold text-[#FF5C00] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>VIEW CREDENTIALS</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* One Diagonal Ribbon: "PROBLEM SOLVER • TEAM PLAYER • FAST LEARNER" */}
      <div className="relative w-[130%] -left-[15%] my-8 pointer-events-none select-none z-30">
        <div
          className="bg-white text-black py-3.5 sm:py-4 px-6 shadow-2xl flex items-center justify-around whitespace-nowrap border-y-2 border-black/10"
          style={{ transform: 'rotate(-13deg) scale(1.04)', transformOrigin: 'center center' }}
        >
          <div className="flex items-center space-x-8 sm:space-x-12 text-sm sm:text-base md:text-lg font-black tracking-widest uppercase animate-ticker-left">
            {[...Array(6)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="inline-flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5C00] inline-block"></span>
                  <span>PROBLEM SOLVER</span>
                </span>
                <span className="inline-flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5C00] inline-block"></span>
                  <span>TEAM PLAYER</span>
                </span>
                <span className="inline-flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5C00] inline-block"></span>
                  <span>FAST LEARNER</span>
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
