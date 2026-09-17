export type PageId = 'home' | 'about' | 'skills' | 'projects' | 'contact';

export interface Project {
  id: string;
  number: string;
  category: string;
  status: string;
  title: string;
  description: string;
  detailedOverview: string;
  tags: string[];
  techStack: string;
  metrics: string[];
  architecturePoints: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  status: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  badge: string;
  skills: string[];
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactChannel {
  label: string;
  value: string;
  href: string;
  tag?: string;
}
