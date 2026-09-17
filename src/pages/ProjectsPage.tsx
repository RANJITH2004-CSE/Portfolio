import React from 'react';
import { PageId, Project } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: Project) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate, onSelectProject }) => {
  return (
    <div className="relative min-h-[calc(100vh-145px)] px-6 sm:px-10 lg:px-24 pt-8 sm:pt-10 pb-20 max-w-7xl mx-auto flex flex-col justify-between select-none">
      {/* Background Watermark Letter "R" */}
      <div className="fixed -top-16 -left-20 hero-watermark opacity-20 pointer-events-none select-none z-0">
        R
      </div>

      <div className="relative z-10 w-full">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-7 h-[2px] bg-[#FF5C00]"></span>
          <span className="text-xs font-bold tracking-[0.25em] text-[#FF5C00] uppercase font-mono">
            Selected Works &amp; Systems
          </span>
        </div>

        {/* Giant Hero Headline: "Selected" (white) "work." (grey) */}
        <div className="mb-10 sm:mb-14">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95]">
            <span className="text-white inline-block">Selected</span>{' '}
            <span className="text-[#4A4A4A] inline-block">work<span className="text-[#FF5C00]">.</span></span>
          </h1>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            Full-stack web applications, gamified platforms, and data analytics dashboards engineered with rigorous testing and clean architecture.
          </p>
        </div>

        {/* Projects Grid Container */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative bg-[#111111]/90 backdrop-blur-md rounded-2xl p-7 lg:p-8 border border-white/[0.08] hover:border-[#FF5C00]/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#FF5C00]/5 cursor-pointer"
            >
              <div>
                {/* Card Header / Meta */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF5C00] shadow-[0_0_6px_#FF5C00]"></span>
                    <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase font-mono">
                      {project.number}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
                    {project.status}
                  </span>
                </div>

                {/* Title & Description */}
                <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight group-hover:text-[#FF5C00] transition-colors mb-3">
                  {project.title}
                </h2>

                <p className="text-sm text-neutral-400 leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-[11px] font-semibold tracking-wider bg-white/[0.04] border border-white/[0.06] text-neutral-300 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs text-neutral-500 font-mono">{project.techStack}</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5C00] tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>VIEW</span>
                  <span className="text-base leading-none">→</span>
                </span>
              </div>
            </article>
          ))}
        </section>
      </div>

      {/* Signature Angled Diagonal Ribbon Band (Exact match from Screen 3 / Specs) */}
      <div className="relative w-full overflow-hidden my-4 py-6 pointer-events-none z-20">
        <div
          className="bg-white text-black py-3.5 sm:py-4 shadow-2xl flex items-center justify-center whitespace-nowrap"
          style={{ transform: 'rotate(-7deg) scale(1.08)', transformOrigin: 'center center' }}
        >
          <div className="flex items-center gap-8 font-black text-sm lg:text-base tracking-[0.2em] uppercase text-black animate-ticker-left">
            {[...Array(4)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5C00] inline-block"></span>
                <span>PRODUCTION READY</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5C00] inline-block"></span>
                <span>SECURE ARCHITECTURE</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5C00] inline-block"></span>
                <span>CLEAN CODE</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5C00] inline-block"></span>
                <span>HIGH PERFORMANCE</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5C00] inline-block"></span>
                <span>ROBUST APIS</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5C00] inline-block"></span>
                <span>SCALABLE SYSTEMS</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
