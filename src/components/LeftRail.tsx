import React from 'react';
import { PageId } from '../types';

interface LeftRailProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenResume: () => void;
}

export const LeftRail: React.FC<LeftRailProps> = ({ currentPage, onNavigate, onOpenResume }) => {
  return (
    <aside className="fixed left-0 top-0 bottom-0 w-20 hidden lg:flex flex-col justify-between items-center py-8 z-30 border-r border-white/[0.04] pointer-events-none select-none">
      {/* Rotating Circular Emblem Badge at Top */}
      <div className="relative mt-20 pointer-events-auto flex items-center justify-center">
        <div
          onClick={() => onNavigate('home')}
          className="relative w-16 h-16 flex items-center justify-center cursor-pointer group"
          title="Ranjithkumar G • Full Stack Developer"
        >
          <svg className="w-16 h-16 absolute animate-spin-slow pointer-events-none" viewBox="0 0 100 100">
            <defs>
              <path id="leftRailCircle" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
            </defs>
            <text className="text-[8px] uppercase tracking-[2.2px] fill-neutral-400 font-bold group-hover:fill-white transition-colors">
              <textPath href="#leftRailCircle" startOffset="0%">
                RANJITH • FULL STACK DEVELOPER •
              </textPath>
            </text>
          </svg>
          <div className="w-8 h-8 rounded-full bg-white text-black font-black text-xs flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#FF5C00] group-hover:text-white transition-all">
            r<span className="text-[#FF5C00] group-hover:text-white -ml-0.5">.</span>
          </div>
        </div>
      </div>

      {/* Rotated Nav Labels (Sideways) */}
      <div className="flex flex-col items-center gap-14 pointer-events-auto my-auto text-[10.5px] font-bold tracking-[0.25em] text-neutral-500">
        <button
          onClick={onOpenResume}
          className="writing-vertical hover:text-white transition-colors cursor-pointer"
        >
          RESUME
        </button>

        <button
          onClick={() => onNavigate('skills')}
          className={`writing-vertical transition-colors cursor-pointer flex items-center gap-2 ${
            currentPage === 'skills' ? 'text-white' : 'hover:text-white'
          }`}
        >
          {currentPage === 'skills' && (
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00] shadow-[0_0_6px_#FF5C00] mb-1 inline-block"></span>
          )}
          SKILLS
        </button>

        <button
          onClick={() => onNavigate('projects')}
          className={`writing-vertical transition-colors cursor-pointer flex items-center gap-2 ${
            currentPage === 'projects' ? 'text-white' : 'hover:text-white'
          }`}
        >
          {currentPage === 'projects' && (
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00] shadow-[0_0_6px_#FF5C00] mb-1 inline-block"></span>
          )}
          PROJECTS
        </button>
      </div>

      {/* Current Page index at rail bottom */}
      <div className="text-[10px] font-mono text-neutral-600 font-bold tracking-widest">
        {currentPage === 'home' && '01/05'}
        {currentPage === 'about' && '02/05'}
        {currentPage === 'projects' && '03/05'}
        {currentPage === 'skills' && '04/05'}
        {currentPage === 'contact' && '05/05'}
      </div>
    </aside>
  );
};
