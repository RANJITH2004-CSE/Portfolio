import React from 'react';
import { PageId } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenResume: () => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  currentPage,
  onNavigate,
  onOpenResume,
}) => {
  if (!isOpen) return null;

  const links: { id: PageId; label: string; num: string; sub: string }[] = [
    { id: 'home', label: 'Home', num: '01', sub: 'Code. Design. Ship.' },
    { id: 'about', label: 'About', num: '02', sub: 'I build things that work.' },
    { id: 'skills', label: 'Skills', num: '03', sub: 'What I Work With.' },
    { id: 'projects', label: 'Projects', num: '04', sub: 'Selected Works & Systems.' },
    { id: 'contact', label: 'Contact', num: '05', sub: "Let's Build Together." },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/85 backdrop-blur-lg animate-fadeIn">
      {/* Backdrop overlay click */}
      <div className="absolute inset-0" onClick={onClose} />

      <aside className="relative z-10 w-full max-w-lg bg-[#0B0B0B] border-l border-white/10 h-full p-8 sm:p-12 flex flex-col justify-between overflow-y-auto">
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5C00]"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-white">PORTFOLIO DIRECTORY</span>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-2 rounded-md hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation List */}
        <nav className="my-8 space-y-4">
          {links.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  onClose();
                }}
                className="w-full text-left group flex items-baseline justify-between py-2 border-b border-white/[0.04] hover:border-[#FF5C00]/40 transition-colors cursor-pointer"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-neutral-600 group-hover:text-[#FF5C00] transition-colors">
                    {link.num}
                  </span>
                  <div>
                    <div
                      className={`text-3xl sm:text-4xl font-extrabold tracking-tight transition-colors ${
                        isActive ? 'text-[#FF5C00]' : 'text-white group-hover:text-[#FF5C00]'
                      }`}
                    >
                      {link.label}
                    </div>
                    <div className="text-xs text-neutral-500 font-medium mt-0.5">{link.sub}</div>
                  </div>
                </div>

                <span
                  className={`text-lg transition-transform duration-300 group-hover:translate-x-1 ${
                    isActive ? 'text-[#FF5C00]' : 'text-neutral-600 group-hover:text-white'
                  }`}
                >
                  →
                </span>
              </button>
            );
          })}
        </nav>

        {/* Quick Actions & Resume */}
        <div className="pt-6 border-t border-white/10 space-y-4">
          <div className="flex gap-3">
            <button
              onClick={() => {
                onOpenResume();
                onClose();
              }}
              className="flex-1 py-3 px-4 rounded bg-white text-black font-extrabold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-colors text-center cursor-pointer"
            >
              View Full CV
            </button>
            <button
              onClick={() => {
                onNavigate('contact');
                onClose();
              }}
              className="flex-1 py-3 px-4 rounded bg-[#FF5C00] text-black font-extrabold text-xs tracking-wider uppercase hover:bg-[#ff6f1f] transition-colors text-center cursor-pointer shadow-[0_0_15px_rgba(255,92,0,0.3)]"
            >
              Get In Touch
            </button>
          </div>

          <div className="text-xs text-neutral-500 leading-relaxed">
            <span className="text-white font-medium">{PERSONAL_INFO.name}</span> — {PERSONAL_INFO.title} based in {PERSONAL_INFO.location}.
          </div>
        </div>
      </aside>
    </div>
  );
};
