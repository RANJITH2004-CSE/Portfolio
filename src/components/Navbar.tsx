import React from 'react';
import { PageId } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenSearch: () => void;
  onOpenMenu: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch,
  onOpenMenu,
  onOpenResume,
}) => {
  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <header className="relative z-50 w-full px-6 sm:px-8 lg:px-14 py-5 sm:py-6 flex items-center justify-between border-b border-white/[0.04] bg-[#0A0A0A]/90 backdrop-blur-md">
      {/* Left Social Links */}
      <div className="flex items-center gap-2.5 sm:gap-3.5 text-xs tracking-wider font-semibold text-neutral-400 select-none">
        <span className="inline-block w-2 h-2 rounded-full bg-[#FF5C00] shadow-[0_0_8px_#FF5C00] animate-pulse"></span>
        <a
          href="https://github.com/RANJITH2004-CSE"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
          title="GitHub Profile"
        >
          GH
        </a>
        <span className="text-white/20 text-[10px]">•</span>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
          title="LinkedIn Profile"
        >
          LI
        </a>
        <span className="text-white/20 text-[10px]">•</span>
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
          title="X / Twitter"
        >
          X
        </a>
        <span className="text-white/20 text-[10px]">•</span>
        <button
          onClick={onOpenResume}
          className="hover:text-[#FF5C00] transition-colors uppercase font-semibold text-xs cursor-pointer"
          title="View & Download CV"
        >
          CV
        </button>
      </div>

      {/* Center Wordmark & Main Nav (Desktop) */}
      <div className="flex items-center gap-8 lg:gap-10">
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-xs font-bold tracking-[0.18em] uppercase">
          {navItems.slice(0, 2).map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`transition-colors relative py-1 cursor-pointer ${
                currentPage === item.id ? 'text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span>{item.label}</span>
              {currentPage === item.id && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#FF5C00] rounded-full shadow-[0_0_10px_rgba(255,92,0,0.8)]"></span>
              )}
            </button>
          ))}

          {/* Center Brand Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-baseline px-2 text-2xl lg:text-3xl font-black tracking-tight text-white hover:opacity-90 transition-opacity cursor-pointer group"
          >
            <span>ranjith</span>
            <span className="w-2 h-2 rounded-full bg-[#FF5C00] ml-0.5 inline-block group-hover:scale-125 transition-transform"></span>
          </button>

          {navItems.slice(2).map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`transition-colors relative py-1 cursor-pointer ${
                currentPage === item.id ? 'text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span>{item.label}</span>
              {currentPage === item.id && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#FF5C00] rounded-full shadow-[0_0_10px_rgba(255,92,0,0.8)]"></span>
              )}
            </button>
          ))}

          {/* Resume link */}
          <button
            onClick={onOpenResume}
            className="text-neutral-400 hover:text-white transition-colors cursor-pointer py-1"
          >
            RESUME
          </button>
        </nav>

        {/* Mobile Logo centered */}
        <button
          onClick={() => onNavigate('home')}
          className="md:hidden flex items-baseline text-2xl font-black tracking-tight text-white cursor-pointer"
        >
          <span>ranjith</span>
          <span className="w-2 h-2 rounded-full bg-[#FF5C00] ml-0.5 inline-block"></span>
        </button>
      </div>

      {/* Right Controls: Search & Menu */}
      <div className="flex items-center gap-4 sm:gap-6">
        <button
          onClick={onOpenSearch}
          aria-label="Search"
          className="text-neutral-300 hover:text-white p-1.5 transition-colors cursor-pointer rounded-md hover:bg-white/5"
          title="Search Portfolio (Cmd+K)"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        <div className="h-4 w-[1px] bg-neutral-800"></div>

        <button
          onClick={onOpenMenu}
          aria-label="Open Navigation Menu"
          className="flex items-center gap-2.5 sm:gap-3 group text-neutral-300 hover:text-white transition-colors cursor-pointer"
        >
          <span className="text-[11px] sm:text-[12px] font-bold tracking-widest uppercase">MENU</span>
          <div className="flex flex-col space-y-1 w-5 sm:w-6">
            <span className="h-[2px] w-full bg-white group-hover:bg-[#FF5C00] transition-colors"></span>
            <span className="h-[2px] w-3/4 ml-auto bg-white group-hover:w-full group-hover:bg-[#FF5C00] transition-all duration-300"></span>
          </div>
        </button>
      </div>
    </header>
  );
};
