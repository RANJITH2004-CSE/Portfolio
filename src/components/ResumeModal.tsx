import React, { useEffect } from 'react';
import { PERSONAL_INFO, CERTIFICATIONS, SKILL_CATEGORIES, PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Backdrop overlay */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-3xl bg-[#0E0E0E] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-10 max-h-[88vh] overflow-y-auto print:max-h-none print:overflow-visible print:bg-white print:text-black print:border-none">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-5 mb-6 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5C00]"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-mono font-bold text-white">
              CURRICULUM VITAE
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Print / Download</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Close CV modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* CV Content */}
        <div className="space-y-8 text-neutral-300 print:text-black">
          {/* Header block */}
          <div className="border-b border-white/[0.06] pb-6 print:border-black/20">
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight print:text-black">
              {PERSONAL_INFO.name}
            </h1>
            <div className="text-sm font-bold text-[#FF5C00] mt-1 tracking-wider uppercase print:text-black font-mono">
              {PERSONAL_INFO.title} • {PERSONAL_INFO.specialization}
            </div>
            <div className="text-xs text-neutral-400 mt-2 flex flex-wrap gap-x-4 gap-y-1 print:text-neutral-700">
              <span>📍 {PERSONAL_INFO.location}</span>
              <span>📞 {PERSONAL_INFO.phone}</span>
              <span>✉️ {PERSONAL_INFO.displayEmail}</span>
              <span>💻 {PERSONAL_INFO.github}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-[0.2em] text-[#FF5C00] uppercase mb-2 print:text-black">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-neutral-300 print:text-neutral-800">
              Java Developer with strong expertise in Core Java and Object-Oriented Programming (OOP). Actively building full-stack applications to gain practical experience with Spring Boot, React, and both relational and NoSQL databases. Proven ability to combine backend APIs with responsive frontends. Seeking a Java Developer or Full Stack role to deliver clean, scalable code in an agile environment.
            </p>
          </div>

          {/* Professional Experience & Training */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-[0.2em] text-[#FF5C00] uppercase mb-3 print:text-black">
              PROFESSIONAL EXPERIENCE &amp; TRAINING
            </h2>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] print:border-black/20 print:p-2">
                <div className="flex justify-between items-baseline flex-wrap">
                  <div className="text-base font-bold text-white print:text-black">Full Stack Development Program</div>
                  <span className="text-xs font-mono text-[#FF5C00] print:text-black">2026 – Present</span>
                </div>
                <div className="text-xs text-[#FF5C00] font-mono mt-0.5 print:text-neutral-700">KodNest, Bengaluru</div>
                <ul className="text-xs text-neutral-400 mt-2 space-y-1 list-disc list-inside print:text-neutral-800">
                  <li>Receiving intensive hands-on training in Java, Spring Boot, React, MySQL, and MongoDB following modern SDLC practices.</li>
                  <li>Building functional full stack mini-projects integrating frontend, backend, and database layers.</li>
                  <li>Practicing API testing, debugging, and database operation validation to ensure robust client-server communication.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] print:border-black/20 print:p-2">
                <div className="flex justify-between items-baseline flex-wrap">
                  <div className="text-base font-bold text-white print:text-black">Full Stack Intern &amp; Trainee</div>
                  <span className="text-xs font-mono text-[#FF5C00] print:text-black">2026</span>
                </div>
                <div className="text-xs text-[#FF5C00] font-mono mt-0.5 print:text-neutral-700">AISECT – Standard Chartered Foundation</div>
                <ul className="text-xs text-neutral-400 mt-2 space-y-1 list-disc list-inside print:text-neutral-800">
                  <li>Completed an intensive full stack development course, building functional mini-projects integrating frontend, backend, and MySQL databases.</li>
                  <li>Applied industry-standard coding and testing practices, performing manual and functional checks on integrated modules to validate software quality.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Featured Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-[0.2em] text-[#FF5C00] uppercase mb-3 print:text-black">
              PROJECTS
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] print:border-black/20 print:p-2">
                  <div className="flex justify-between items-baseline flex-wrap">
                    <div className="text-sm font-bold text-white print:text-black">{proj.title}</div>
                    <span className="text-xs font-mono text-neutral-400 print:text-neutral-600">{proj.techStack}</span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-1 print:text-neutral-800">{proj.detailedOverview}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-[0.2em] text-[#FF5C00] uppercase mb-3 print:text-black">
              EDUCATION
            </h2>
            <div className="space-y-3">
              <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-start justify-between gap-4 print:border-black/20 print:p-2">
                <div>
                  <div className="text-sm font-bold text-white print:text-black">
                    Bachelor of Engineering (B.E.), Computer Science and Engineering
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5 print:text-neutral-700">
                    Jansons Institute of Technology, Tamil Nadu
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs font-mono text-[#FF5C00] font-semibold print:text-black">CGPA: 7.8/10</div>
                  <div className="text-[11px] font-mono text-neutral-500">2022 – 2026</div>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-start justify-between gap-4 print:border-black/20 print:p-2">
                <div>
                  <div className="text-sm font-bold text-white print:text-black">
                    Higher Secondary Education (12th Grade)
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5 print:text-neutral-700">
                    Maharshi Higher Secondary School, Chengam
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs font-mono text-[#FF5C00] font-semibold print:text-black">Score: 72%</div>
                  <div className="text-[11px] font-mono text-neutral-500">2022</div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-[0.2em] text-[#FF5C00] uppercase mb-3 print:text-black">
              CERTIFICATIONS
            </h2>
            <div className="space-y-2.5">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-between gap-4 print:border-black/20 print:p-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00]"></span>
                    <span className="text-xs font-bold text-white print:text-black">{cert.title}</span>
                    <span className="text-[11px] text-neutral-500">— {cert.issuer}</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#FF5C00] uppercase shrink-0 font-semibold print:text-black">
                    {cert.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Technical Matrix */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-[0.2em] text-[#FF5C00] uppercase mb-3 print:text-black">
              TECHNICAL SKILLS MATRIX
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.id} className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.05] print:border-black/20 print:p-2">
                  <div className="text-xs font-bold text-white mb-2 print:text-black">{cat.badge}</div>
                  <ul className="space-y-1 text-xs text-neutral-400 print:text-neutral-800">
                    {cat.skills.map((s, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#FF5C00]"></span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

