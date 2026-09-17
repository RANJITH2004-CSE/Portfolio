import React, { useState, useEffect } from 'react';
import { PageId, Project } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LeftRail } from './components/LeftRail';
import { SearchModal } from './components/SearchModal';
import { MenuDrawer } from './components/MenuDrawer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Initialize from current URL pathname or hash
  useEffect(() => {
    const parseRoute = () => {
      const path = window.location.pathname.replace(/^\//, '').toLowerCase();
      const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
      const route = path || hash;

      if (route === 'about') setCurrentPage('about');
      else if (route === 'skills') setCurrentPage('skills');
      else if (route === 'projects') setCurrentPage('projects');
      else if (route === 'contact') setCurrentPage('contact');
      else setCurrentPage('home');
    };

    parseRoute();
    window.addEventListener('popstate', parseRoute);
    return () => window.removeEventListener('popstate', parseRoute);
  }, []);

  // Sync route changes to browser history
  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const newPath = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState({ page }, '', newPath);
    }
  };

  // Keyboard shortcut: Cmd+K / Ctrl+K to open Search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white flex flex-col justify-between selection:bg-[#FF5C00] selection:text-white antialiased overflow-x-hidden">
      {/* Background Dot Matrix Texture */}
      <div className="fixed inset-0 bg-grid-dots pointer-events-none opacity-40 z-0"></div>

      {/* Top Sticky Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Left Fixed Rail Navigation on Desktop */}
      <LeftRail
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Page Content Area with Left Margin for Rail on Desktop */}
      <main className="relative z-10 flex-1 lg:pl-20">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} onOpenResume={() => setIsResumeOpen(true)} />
        )}
        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} onOpenResume={() => setIsResumeOpen(true)} />
        )}
        {currentPage === 'skills' && <SkillsPage onNavigate={handleNavigate} />}
        {currentPage === 'projects' && (
          <ProjectsPage
            onNavigate={handleNavigate}
            onSelectProject={(project) => setSelectedProject(project)}
          />
        )}
        {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
      </main>

      {/* Shared Bottom Footer */}
      <div className="lg:pl-20">
        <Footer currentPage={currentPage} onNavigate={handleNavigate} />
      </div>

      {/* Modals & Drawers */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
        onSelectProject={(proj) => setSelectedProject(proj)}
      />

      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

