import React from 'react';
import { PageId } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenResume: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenResume }) => {
  return (
    <div className="relative min-h-[calc(100vh-145px)] flex flex-col justify-center px-6 sm:px-10 lg:px-24 py-8 lg:py-0 overflow-hidden select-none">
      {/* Giant Architectural Background Watermark Letter "R" */}
      <div className="absolute left-[3%] top-[48%] -translate-y-1/2 hero-watermark font-black select-none pointer-events-none opacity-40 z-0">
        R
      </div>

      <div className="grid grid-cols-12 w-full items-center relative z-10 max-w-7xl mx-auto">
        {/* Left Column on Desktop: Circular Emblem Badge (Visible on Mobile & Tablet) */}
        <div className="col-span-12 lg:hidden flex items-center justify-between mb-8">
          <div
            onClick={() => onNavigate('about')}
            className="relative w-20 h-20 flex items-center justify-center cursor-pointer group"
          >
            <svg className="absolute inset-0 w-full h-full animate-spin-slow pointer-events-none" viewBox="0 0 120 120">
              <defs>
                <path id="heroCirclePathMobile" d="M 60, 60 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" />
              </defs>
              <text className="text-[8px] uppercase font-bold tracking-[0.22em] fill-neutral-300">
                <textPath href="#heroCirclePathMobile" startOffset="0%">
                  RANJITH • FULL STACK CREATOR •
                </textPath>
              </text>
            </svg>
            <div className="w-10 h-10 rounded-full bg-white text-black font-extrabold flex items-center justify-center text-sm shadow-xl z-10">
              r<span className="text-[#FF5C00] -ml-0.5">.</span>
            </div>
          </div>

          <div className="text-right">
            <span className="text-[11px] font-mono text-[#FF5C00] uppercase font-bold tracking-widest">
              PORTFOLIO 2026
            </span>
            <div className="text-xs text-neutral-400">Bengaluru, IN</div>
          </div>
        </div>

        {/* Main Headline Content */}
        <article className="col-span-12 flex flex-col justify-center space-y-3 lg:space-y-4">
          <div className="flex items-center gap-3 text-xs tracking-[0.25em] font-bold text-[#FF5C00] uppercase mb-1">
            <span className="w-7 h-[2px] bg-[#FF5C00]"></span>
            <span>Java Developer &amp; Full Stack Engineer</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl xl:text-[6.8rem] font-extrabold tracking-tight leading-[1.02]">
            {/* Line 1: Code. (white) Design. (grey) Ship. (white) */}
            <div className="flex flex-wrap items-baseline gap-x-3 sm:gap-x-6">
              <span className="text-white hover:text-[#FF5C00] transition-colors duration-300">Code.</span>
              <span className="text-[#4A4A4A] hover:text-neutral-300 transition-colors duration-300">Design.</span>
              <span className="text-white hover:text-[#FF5C00] transition-colors duration-300">Ship.</span>
            </div>

            {/* Line 2: Full Stack Development (white bold) */}
            <div className="text-white whitespace-nowrap overflow-hidden text-ellipsis mt-1 sm:mt-2">
              Full Stack Development
            </div>

            {/* Line 3: & AI Products (white bold) */}
            <div className="text-white mt-1 sm:mt-2 flex items-baseline">
              <span>&amp; AI Products</span>
              <span className="text-[#FF5C00] ml-1">.</span>
            </div>
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed pt-2">
            Focused on <strong className="text-white font-semibold">Java &amp; Spring Boot</strong> backend development,
            with <strong className="text-white font-semibold">React &amp; Next.js</strong> frontends built using AI-assisted workflows — sharpened through real projects like SecureRoute.
          </p>

          {/* CTA Buttons: View Projects & Download Resume */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6 z-20">
            <button
              onClick={() => onNavigate('projects')}
              className="px-8 py-4 rounded-sm bg-[#FF5C00] text-black font-black text-xs sm:text-sm uppercase tracking-[0.2em] hover:bg-[#ff6f1f] shadow-[0_0_25px_rgba(255,92,0,0.4)] hover:shadow-[0_0_35px_rgba(255,92,0,0.6)] transition-all duration-300 transform active:scale-95 flex items-center gap-2.5 cursor-pointer"
            >
              <span>View Projects</span>
              <span className="text-base leading-none">→</span>
            </button>

            <button
              onClick={onOpenResume}
              className="px-8 py-4 rounded-sm border border-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-[0.2em] hover:border-white hover:bg-white/[0.05] transition-all duration-200 cursor-pointer flex items-center gap-2"
            >
              <span>Download Resume</span>
              <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>
        </article>
      </div>

      {/* Two Diagonal Marquee Ribbons Crossing Hero Section (As explicitly requested in prompt & Screen 1) */}
      <section
        aria-hidden="true"
        className="absolute -right-32 sm:-right-24 md:-right-12 bottom-10 sm:bottom-16 lg:bottom-20 z-20 overflow-hidden pointer-events-none w-[170vw] max-w-[2600px]"
      >
        <div className="flex flex-col space-y-2.5" style={{ transform: 'rotate(-16deg)', transformOrigin: 'center right' }}>
          {/* Top Ribbon: High-contrast White Background with Black Bold Text */}
          <div className="bg-white text-black py-3.5 sm:py-4 shadow-2xl relative flex overflow-hidden border-y border-white">
            <div className="flex whitespace-nowrap text-sm sm:text-base font-black tracking-widest uppercase animate-ticker-left">
              <span className="inline-flex items-center">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>JAVA
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>REACT
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>SPRING BOOT
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>DOCKER
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>POSTGRESQL
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>SYSTEM ARCHITECTURE
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>KUBERNETES
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>JAVA
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>REACT
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>SPRING BOOT
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>DOCKER
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>POSTGRESQL
              </span>
              <span className="inline-flex items-center">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>JAVA
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>REACT
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>SPRING BOOT
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>DOCKER
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>POSTGRESQL
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>SYSTEM ARCHITECTURE
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>KUBERNETES
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>JAVA
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>REACT
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>SPRING BOOT
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>DOCKER
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>POSTGRESQL
              </span>
            </div>
          </div>

          {/* Bottom Ribbon: Obsidian Dark Ribbon with Crisp White Text */}
          <div className="bg-[#141414] text-white py-3.5 sm:py-4 border-t border-b border-neutral-800 shadow-2xl flex overflow-hidden">
            <div className="flex whitespace-nowrap text-sm sm:text-base font-black tracking-widest uppercase animate-ticker-right">
              <span className="inline-flex items-center">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>TAILWIND CSS
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>TYPESCRIPT
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>NEXT.JS
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>AI/ML INTEGRATIONS
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>PYTHON
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>RESTFUL APIS
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>UI/UX ENGINEERING
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>TAILWIND CSS
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>TYPESCRIPT
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>NEXT.JS
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>AI/ML INTEGRATIONS
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>PYTHON
              </span>
              <span className="inline-flex items-center">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>TAILWIND CSS
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>TYPESCRIPT
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>NEXT.JS
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>AI/ML INTEGRATIONS
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>PYTHON
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>RESTFUL APIS
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>UI/UX ENGINEERING
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>TAILWIND CSS
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>TYPESCRIPT
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>NEXT.JS
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>AI/ML INTEGRATIONS
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5C00] mx-4"></span>PYTHON
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
