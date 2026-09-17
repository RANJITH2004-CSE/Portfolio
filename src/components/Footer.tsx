import React from 'react';
import { PageId } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentPage, onNavigate }) => {
  const getIndexNumber = (page: PageId): string => {
    switch (page) {
      case 'home':
        return '01/05';
      case 'about':
        return '02/05';
      case 'projects':
        return '03/05';
      case 'skills':
        return '04/05';
      case 'contact':
        return '05/05';
      default:
        return '01/05';
    }
  };

  const getActionTarget = (): { label: string; page: PageId; orbitalText: string } => {
    switch (currentPage) {
      case 'home':
        return { label: 'EXPLORE SELECTED WORK', page: 'projects', orbitalText: 'VIEW • PROJECTS • VIEW •' };
      case 'about':
        return { label: 'EXPLORE SKILLS MATRIX', page: 'skills', orbitalText: 'SKILLS • MATRIX • EXPLORE •' };
      case 'skills':
        return { label: 'EXPLORE SELECTED WORK', page: 'projects', orbitalText: 'VIEW • PROJECTS •' };
      case 'projects':
        return { label: 'INITIATE COLLABORATION', page: 'contact', orbitalText: 'SAY • HELLO • CONTACT •' };
      case 'contact':
        return { label: 'BACK TO HOME', page: 'home', orbitalText: 'SAY • HELLO • SAY • HELLO •' };
    }
  };

  const action = getActionTarget();

  return (
    <footer className="relative z-30 w-full px-6 sm:px-8 lg:px-14 py-6 sm:py-7 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/[0.04] bg-[#0A0A0A]/90 backdrop-blur-md">
      {/* Left Index & Availability status */}
      <div className="flex items-center gap-3 sm:gap-4 text-xs font-medium tracking-wider text-neutral-400">
        <span className="font-mono text-[11px] text-neutral-500 font-bold">
          {getIndexNumber(currentPage)}
        </span>
        <span className="h-3 w-[1px] bg-neutral-800 hidden sm:block"></span>
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5C00] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF5C00]"></span>
          </span>
          <span className="text-[11px] sm:text-xs">
            <strong className="text-white uppercase font-bold tracking-wider">{PERSONAL_INFO.availabilityStatus}</strong>{' '}
            <span className="text-neutral-600 hidden lg:inline">—</span>{' '}
            <span className="text-neutral-400 hidden lg:inline">{PERSONAL_INFO.name}</span>
          </span>
        </div>
      </div>

      {/* Right Controls: Contextual Next Link & Orbital Badge */}
      <div className="flex items-center gap-6 sm:gap-8 self-center md:self-auto">
        <button
          onClick={() => onNavigate(action.page)}
          className="text-xs font-bold tracking-widest text-neutral-400 hover:text-white flex items-center gap-2 transition-colors group cursor-pointer uppercase"
        >
          <span>{action.label}</span>
          <span className="text-[#FF5C00] group-hover:translate-x-1.5 transition-transform duration-200">→</span>
        </button>

        {/* Circular Rotating Orbital Action Badge */}
        <button
          onClick={() => onNavigate(action.page)}
          className="relative w-14 h-14 rounded-full flex items-center justify-center group cursor-pointer select-none"
          title={action.label}
        >
          <svg className="absolute inset-0 w-full h-full animate-spin-slow pointer-events-none" viewBox="0 0 100 100">
            <defs>
              <path id="footerCirclePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            </defs>
            <text className="text-[9.5px] uppercase font-bold tracking-[0.24em] fill-neutral-300 group-hover:fill-white transition-colors">
              <textPath href="#footerCirclePath" startOffset="0%">
                {action.orbitalText}
              </textPath>
            </text>
          </svg>
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:bg-[#FF5C00] group-hover:scale-110 transition-all duration-300">
            <svg
              className="w-3.5 h-3.5 text-[#FF5C00] group-hover:text-white fill-current ml-0.5 transition-colors"
              viewBox="0 0 24 24"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </button>
      </div>
    </footer>
  );
};
