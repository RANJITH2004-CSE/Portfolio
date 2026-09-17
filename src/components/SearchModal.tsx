import React, { useState, useEffect } from 'react';
import { PageId, Project } from '../types';
import { PROJECTS, CERTIFICATIONS, SKILL_CATEGORIES } from '../data/portfolioData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: Project) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onSelectProject,
}) => {
  const [query, setQuery] = useState('');

  // Keyboard shortcut (Escape to close, Cmd+K to open handled in parent)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  const filteredPages = [
    { id: 'home' as PageId, title: 'Home', desc: 'Hero headline, diagonal ribbons, developer introduction' },
    { id: 'about' as PageId, title: 'About Me', desc: 'CS graduate bio, Bengaluru, KodNest GenAI, Wipro & AICTE credentials' },
    { id: 'skills' as PageId, title: 'Skills & Stack', desc: '3 full-width diagonal bands: Java, Spring Boot, React, Next.js, AI/ML' },
    { id: 'projects' as PageId, title: 'Selected Projects', desc: 'SecureRoute, AI Driver Safety System, Portfolio Website' },
    { id: 'contact' as PageId, title: 'Contact & Collaboration', desc: 'Direct form with API submission, channels, live availability' },
  ].filter(
    (p) => !normalizedQuery || p.title.toLowerCase().includes(normalizedQuery) || p.desc.toLowerCase().includes(normalizedQuery)
  );

  const filteredProjects = PROJECTS.filter(
    (proj) =>
      !normalizedQuery ||
      proj.title.toLowerCase().includes(normalizedQuery) ||
      proj.description.toLowerCase().includes(normalizedQuery) ||
      proj.techStack.toLowerCase().includes(normalizedQuery) ||
      proj.tags.some((t) => t.toLowerCase().includes(normalizedQuery))
  );

  const allSkills = SKILL_CATEGORIES.flatMap((c) =>
    c.skills.map((s) => ({ skill: s, category: c.title, badge: c.badge }))
  ).filter((s) => !normalizedQuery || s.skill.toLowerCase().includes(normalizedQuery));

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#111111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[78vh]">
        {/* Search Input Bar */}
        <div className="flex items-center px-5 py-4 border-b border-white/[0.08] gap-3">
          <svg className="w-5 h-5 text-[#FF5C00] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, skills, certifications, pages..."
            autoFocus
            className="w-full bg-transparent text-white text-base placeholder-neutral-500 focus:outline-none focus:ring-0"
          />
          <button
            onClick={onClose}
            className="text-xs font-mono px-2 py-1 bg-white/10 text-neutral-400 rounded hover:text-white cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Search Results */}
        <div className="overflow-y-auto p-4 space-y-6">
          {/* Pages */}
          {filteredPages.length > 0 && (
            <div>
              <div className="text-[10px] font-bold tracking-widest text-[#FF5C00] uppercase mb-2">PAGES & ROUTES</div>
              <div className="space-y-1">
                {filteredPages.map((page) => (
                  <button
                    key={page.id}
                    onClick={() => {
                      onNavigate(page.id);
                      onClose();
                    }}
                    className="w-full text-left p-3 rounded-lg hover:bg-white/[0.06] transition-colors flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-[#FF5C00] transition-colors">
                        {page.title}
                      </div>
                      <div className="text-xs text-neutral-400 line-clamp-1">{page.desc}</div>
                    </div>
                    <span className="text-xs text-neutral-500 font-mono">/{page.id === 'home' ? '' : page.id}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="text-[10px] font-bold tracking-widest text-[#FF5C00] uppercase mb-2">PROJECTS</div>
              <div className="space-y-1">
                {filteredProjects.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => {
                      onSelectProject(proj);
                      onClose();
                    }}
                    className="w-full text-left p-3 rounded-lg hover:bg-white/[0.06] transition-colors flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00]"></span>
                        <span className="text-sm font-bold text-white group-hover:text-[#FF5C00] transition-colors">
                          {proj.title}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-500 px-1.5 py-0.5 bg-white/5 rounded">
                          {proj.status}
                        </span>
                      </div>
                      <div className="text-xs text-neutral-400 mt-1 line-clamp-1">{proj.description}</div>
                    </div>
                    <span className="text-xs text-[#FF5C00] font-bold shrink-0 ml-3">VIEW →</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Skills matches */}
          {allSkills.length > 0 && query && (
            <div>
              <div className="text-[10px] font-bold tracking-widest text-[#FF5C00] uppercase mb-2">SKILLS & TECHNOLOGIES</div>
              <div className="flex flex-wrap gap-2">
                {allSkills.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      onNavigate('skills');
                      onClose();
                    }}
                    className="px-2.5 py-1 rounded-md text-xs font-semibold bg-white/5 hover:bg-[#FF5C00]/20 hover:text-[#FF5C00] text-neutral-300 transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00]"></span>
                    {s.skill}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
