import React, { useState } from 'react';
import { PageId } from '../types';
import { SKILL_CATEGORIES } from '../data/portfolioData';

interface SkillsPageProps {
  onNavigate: (page: PageId) => void;
}

export const SkillsPage: React.FC<SkillsPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  return (
    <div className="relative min-h-[calc(100vh-145px)] flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-10 select-none">
      {/* Background Watermark Letter "R" */}
      <div className="absolute left-[-2vw] top-[14vh] select-none pointer-events-none opacity-[0.035] text-[38vw] font-black leading-none z-0">
        R
      </div>

      <div className="max-w-6xl mx-auto w-full mb-8 lg:mb-10 relative z-10">
        {/* Category Pill Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-[2px] bg-[#FF5C00]"></div>
          <span className="text-[11px] font-bold tracking-[0.28em] text-[#FF5C00] uppercase font-mono">
            TECH STACK &amp; CORE COMPETENCIES
          </span>
        </div>

        {/* Headline: "What I" (grey) "Work With." (white) */}
        <h1 className="text-5xl sm:text-7xl lg:text-[5.75rem] font-black tracking-tight leading-[0.95]">
          <span className="text-[#4A4A4A]">What I</span>
          <span className="text-white"> Work With<span className="text-[#FF5C00]">.</span></span>
        </h1>

        <p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed font-normal">
          A focused repertoire spanning enterprise Java backend architectures, AI-assisted frontend interfaces, and collaborative developer workflows.
        </p>
      </div>

      {/* MAIN HERO CONTENT: THREE FULL-WIDTH DIAGONAL RIBBON BANDS STACKED */}
      <div className="relative w-full py-6 sm:py-8 my-2 overflow-hidden z-20">
        <div
          className="-mx-12 sm:-mx-24 flex flex-col gap-4 sm:gap-6 drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)]"
          style={{ transform: 'rotate(-3.5deg) scale(1.06)', transformOrigin: 'center center' }}
        >
          {/* BAND 1: White Ribbon, Black Text */}
          {/* "JAVA • SPRING BOOT • MYSQL • REST API • JDBC • HIBERNATE" */}
          <div className="relative bg-white text-black py-4 sm:py-5 px-6 shadow-2xl border-y border-white flex items-center overflow-hidden group hover:brightness-105 transition-all">
            <div className="flex items-center whitespace-nowrap text-xl sm:text-3xl lg:text-4xl font-black tracking-tight uppercase select-none w-full animate-ticker-left">
              <span className="flex items-center gap-4 sm:gap-6">
                {[...Array(6)].map((_, i) => (
                  <React.Fragment key={i}>
                    <span>JAVA</span>
                    <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#FF5C00] inline-block shadow-sm"></span>
                    <span>SPRING BOOT</span>
                    <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#FF5C00] inline-block shadow-sm"></span>
                    <span>MYSQL</span>
                    <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#FF5C00] inline-block shadow-sm"></span>
                    <span>REST API</span>
                    <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#FF5C00] inline-block shadow-sm"></span>
                    <span className="opacity-70">MONGODB</span>
                    <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#FF5C00] inline-block shadow-sm"></span>
                  </React.Fragment>
                ))}
              </span>
            </div>
            {/* Corner ribbon badge */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2 bg-black text-white text-[10px] font-extrabold tracking-widest px-3 py-1 rounded-sm uppercase">
              <span>BACKEND &amp; DATA</span>
            </div>
          </div>

          {/* BAND 2: Black Ribbon, White Text */}
          {/* "REACT • NEXT.JS • TYPESCRIPT • TAILWIND • RESPONSIVE DESIGN" */}
          <div className="relative bg-[#111111] text-white py-4 sm:py-5 px-6 border-y border-neutral-800 shadow-2xl flex items-center overflow-hidden group hover:border-[#FF5C00]/50 transition-all">
            <div className="flex items-center whitespace-nowrap text-xl sm:text-3xl lg:text-4xl font-black tracking-tight uppercase select-none w-full animate-ticker-right">
              <span className="flex items-center gap-4 sm:gap-6 text-neutral-100">
                {[...Array(6)].map((_, i) => (
                  <React.Fragment key={i}>
                    <span>REACT</span>
                    <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#FF5C00] inline-block shadow-[0_0_10px_rgba(255,92,0,0.8)]"></span>
                    <span>NEXT.JS</span>
                    <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#FF5C00] inline-block shadow-[0_0_10px_rgba(255,92,0,0.8)]"></span>
                    <span>TYPESCRIPT</span>
                    <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#FF5C00] inline-block shadow-[0_0_10px_rgba(255,92,0,0.8)]"></span>
                    <span>TAILWIND</span>
                    <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#FF5C00] inline-block shadow-[0_0_10px_rgba(255,92,0,0.8)]"></span>
                    <span className="text-neutral-400">RESPONSIVE DESIGN</span>
                    <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#FF5C00] inline-block shadow-[0_0_10px_rgba(255,92,0,0.8)]"></span>
                  </React.Fragment>
                ))}
              </span>
            </div>
            {/* Corner ribbon badge */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2 bg-white text-black text-[10px] font-extrabold tracking-widest px-3 py-1 rounded-sm uppercase">
              <span>FRONTEND DEVELOPMENT</span>
            </div>
          </div>

          {/* BAND 3: White Ribbon, Black Text */}
          {/* "GIT & GITHUB • POSTMAN • MAVEN • REST APIS • AGILE WORKFLOWS" */}
          <div className="relative bg-white text-black py-4 sm:py-5 px-6 shadow-2xl border-y border-white flex items-center overflow-hidden group hover:brightness-105 transition-all">
            <div className="flex items-center whitespace-nowrap text-xl sm:text-3xl lg:text-4xl font-black tracking-tight uppercase select-none w-full animate-ticker-left">
              <span className="flex items-center gap-4 sm:gap-6">
                {[...Array(6)].map((_, i) => (
                  <React.Fragment key={i}>
                    <span>GIT &amp; GITHUB</span>
                    <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#FF5C00] inline-block shadow-sm"></span>
                    <span>POSTMAN (APIS)</span>
                    <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#FF5C00] inline-block shadow-sm"></span>
                    <span>MAVEN</span>
                    <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#FF5C00] inline-block shadow-sm"></span>
                    <span>REST APIS</span>
                    <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#FF5C00] inline-block shadow-sm"></span>
                    <span className="opacity-70">AGILE WORKFLOWS</span>
                    <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#FF5C00] inline-block shadow-sm"></span>
                  </React.Fragment>
                ))}
              </span>
            </div>
            {/* Corner ribbon badge */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2 bg-black text-white text-[10px] font-extrabold tracking-widest px-3 py-1 rounded-sm uppercase">
              <span>TOOLS &amp; WORKFLOWS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats / Proficiency Footer Chips */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-white/5 relative z-10">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#FF5C00]"></span>
          <div>
            <div className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider">Enterprise Backend</div>
            <div className="text-xs sm:text-sm font-bold text-neutral-200">Java / Spring Boot</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#FF5C00]"></span>
          <div>
            <div className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider">Client Frameworks</div>
            <div className="text-xs sm:text-sm font-bold text-neutral-200">React.js &amp; Next.js</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#FF5C00]"></span>
          <div>
            <div className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider">Developer Tools</div>
            <div className="text-xs sm:text-sm font-bold text-neutral-200">Postman, Git &amp; Maven</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#FF5C00]"></span>
          <div>
            <div className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider">Databases &amp; Tools</div>
            <div className="text-xs sm:text-sm font-bold text-neutral-200">MySQL, SQLite &amp; Git</div>
          </div>
        </div>
      </div>

      {/* Interactive Detail Matrix Filter (Optional drill-down) */}
      <div className="max-w-6xl mx-auto w-full mt-8 p-6 rounded-2xl bg-[#0E0E0E] border border-white/[0.06] relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold">
            DETAILED COMPETENCY EXPLORER
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#FF5C00] text-black font-extrabold'
                  : 'bg-white/5 text-neutral-400 hover:text-white'
              }`}
            >
              All Skills
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#FF5C00] text-black font-extrabold'
                    : 'bg-white/5 text-neutral-400 hover:text-white'
                }`}
              >
                {cat.badge}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILL_CATEGORIES.filter((c) => activeCategory === 'all' || c.id === activeCategory).map((cat) => (
            <div key={cat.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div className="text-xs font-bold text-white mb-1">{cat.title}</div>
              <div className="text-[11px] text-neutral-500 mb-3">{cat.description}</div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((s, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-neutral-300 border border-white/5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
