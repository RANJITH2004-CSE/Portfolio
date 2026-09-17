import React from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Backdrop overlay */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-3xl bg-[#111111] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-10 max-h-[88vh] overflow-y-auto">
        {/* Header with Project Number & Close */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-5 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5C00] shadow-[0_0_8px_#FF5C00]"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF5C00]">
              {project.number}
            </span>
            <span className="text-neutral-600">•</span>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              {project.status}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Title & Overview */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          {project.title}
        </h2>

        <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-6 font-normal">
          {project.detailedOverview}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-md text-xs font-semibold tracking-wider bg-white/5 border border-white/10 text-neutral-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Performance & Architecture Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
          {project.metrics.map((metric, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00]"></span>
              <span className="text-xs font-mono text-neutral-300 font-semibold">{metric}</span>
            </div>
          ))}
        </div>

        {/* Architecture Highlights */}
        <div className="mb-8">
          <h3 className="text-xs uppercase font-mono tracking-[0.2em] text-[#FF5C00] font-bold mb-3">
            TECHNICAL ARCHITECTURE & IMPLEMENTATION
          </h3>
          <ul className="space-y-2.5">
            {project.architecturePoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-neutral-300 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00] mt-2 shrink-0"></span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-neutral-500">{project.techStack}</div>

          <div className="flex items-center gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg border border-white/20 text-white text-xs font-bold uppercase tracking-wider hover:border-white transition-colors"
            >
              GitHub Repo
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-[#FF5C00] text-black text-xs font-extrabold uppercase tracking-wider hover:bg-[#ff6f1f] shadow-[0_0_15px_rgba(255,92,0,0.4)] transition-all flex items-center gap-1.5"
            >
              <span>Live Demo</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
