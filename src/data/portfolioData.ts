import { Project, Certification, SkillCategory, ContactChannel } from '../types';

export const PERSONAL_INFO = {
  name: 'Ranjithkumar G',
  shortName: 'Ranjith',
  title: 'Java Developer & Full Stack Engineer',
  specialization: 'Java, Spring Boot, React & GenAI',
  location: 'Bengaluru, India',
  timezone: 'IST (UTC+5:30)',
  phone: '+91 9176494801',
  email: 'rranjith8904@gmail.com',
  displayEmail: 'rranjith8904@gmail.com',
  linkedin: 'https://linkedin.com/in/ranjithkumar-g',
  github: 'https://github.com/RANJITH2004-CSE',
  bioHeadline:
    'Engineering clean, scalable backend systems with Core Java, Spring Boot, and REST APIs, and building AI-assisted frontends with React & Next.js.',
  bioExtended:
    'Computer Science & Engineering graduate from Jansons Institute of Technology (CGPA 7.8/10), based in Bengaluru, India. Currently deep-diving into enterprise architecture and intelligent solutions as a KodNest Java Full Stack + Gen AI trainee.\n\nMy engineering focus is backend-first: Java, Spring Boot, REST APIs, MySQL, MongoDB — paired with AI-assisted frontend development to ship complete, working products.',
  availabilityStatus: 'AVAILABLE FOR FULL-TIME ROLES',
  availabilityNotice:
    'Actively seeking Java Developer or Full Stack Developer roles to deliver clean, scalable, and secure code in an agile engineering environment.',
};

export const PROJECTS: Project[] = [
  {
    id: 'secureroute',
    number: '01 / FULL STACK PLATFORM',
    category: 'CYBERSECURITY & GAMIFICATION',
    status: 'SUBMITTED',
    title: 'SecureRoute',
    description:
      'Gamified cybersecurity learning platform with interactive challenges, dynamic sandboxes, and secure authentication workflows.',
    detailedOverview:
      'Designed and developed a full stack gamified learning platform using Next.js 14, React 18, Node.js, Express.js, and MongoDB, submitted as a Google Antigravity entry. Implemented secure authentication workflows using JWT and bcrypt, and managed application state using Zustand. Validated edge-case scenarios and executed extensive functional and API regression testing with Postman.',
    tags: ['NEXT.JS 14', 'REACT 18', 'NODE.JS', 'EXPRESS', 'MONGODB', 'JWT', 'ZUSTAND'],
    techStack: 'NEXT.JS / REACT / NODE / MONGODB',
    metrics: ['Google Antigravity Entry', 'JWT & Bcrypt Security', 'Comprehensive Postman Test Suite'],
    architecturePoints: [
      'Engineered responsive frontend with Next.js 14 & React 18, utilizing Zustand for dynamic state management',
      'Architected Node.js & Express REST APIs integrated with MongoDB for real-time challenge tracking and scoring',
      'Designed and executed test suites covering functional, regression, API endpoints (Postman), and JWT expiration',
    ],
    githubUrl: 'https://github.com/RANJITH2004-CSE/SecureRoute',
    liveUrl: 'https://github.com/RANJITH2004-CSE/SecureRoute',
  },
  {
    id: 'student-analytics',
    number: '02 / ANALYTICS DASHBOARD',
    category: 'DATA ANALYTICS & DASHBOARD',
    status: 'COMPLETED',
    title: 'Student Performance Analytics Dashboard',
    description:
      'Data analytics dashboard to visualize and track student performance metrics with responsive UI and SQL verification.',
    detailedOverview:
      'Built a responsive data analytics dashboard to visualize and track student academic and performance metrics using Python, SQLite, JavaScript/React, HTML5, and CSS3. Ensured absolute data integrity through rigorous SQL validation, executed manual testing workflows, and documented defects in JIRA for optimal performance and usability.',
    tags: ['PYTHON', 'SQLITE', 'REACT.JS', 'JAVASCRIPT', 'HTML5/CSS3', 'JIRA'],
    techStack: 'PYTHON / SQLITE / REACT / JIRA',
    metrics: ['100% SQL Data Verification', 'Cross-Browser UX Tested', 'Documented JIRA Defect Lifecycle'],
    architecturePoints: [
      'Designed normalized SQLite relational schema to track student grades, attendance, and exam trajectories',
      'Implemented responsive data visualization cards with intuitive navigation and cross-browser compatibility',
      'Conducted extensive functional, usability, and edge-case testing to ensure zero defect leakage',
    ],
    githubUrl: 'https://github.com/RANJITH2004-CSE',
    liveUrl: 'https://github.com/RANJITH2004-CSE',
  },
  {
    id: 'portfolio-system',
    number: '03 / WEB ARCHITECTURE',
    category: 'PORTFOLIO & ARCHITECTURE',
    status: 'ACTIVE',
    title: 'Developer Portfolio & Systems Showcase',
    description:
      'High-performance agency-grade web experience featuring brutalist typography, micro-interactions, spring animations, and modular components.',
    detailedOverview:
      'Engineered as a showcase uniting bold agency-style aesthetics with robust web engineering. Features dynamic diagonal ribbon tickers, responsive command palette search, modular React 19 architecture, and mobile-first responsive layout.',
    tags: ['REACT 19', 'TYPESCRIPT', 'TAILWIND CSS', 'MOTION', 'VITE'],
    techStack: 'REACT 19 / TS / TAILWIND V4 / VITE',
    metrics: ['100 Lighthouse Score', 'Sub-80ms First Paint', 'Zero Layout Shift'],
    architecturePoints: [
      'Modular React 19 & TypeScript component hierarchy with Tailwind CSS v4 design tokens',
      'Custom continuous ticker ribbons and responsive drawer/modal state orchestration',
      'SEO-optimized metadata and accessible keyboard-driven search navigation',
    ],
    githubUrl: 'https://github.com/RANJITH2004-CSE',
    liveUrl: 'https://github.com/RANJITH2004-CSE',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'wipro-talentnext',
    title: 'Java Full Stack – Wipro TalentNext',
    issuer: 'Wipro Certified (2025)',
    status: 'Certified',
    description:
      'Enterprise Java, OOP, Collections, JDBC, Java 8 Streams, MVC architecture, REST API design, and backend development.',
  },
  {
    id: 'edunet-aicte',
    title: 'Advanced Green Skills & Artificial Intelligence',
    issuer: 'Edunet Foundation, AICTE, Shell India (2025)',
    status: 'Certified',
    description:
      'Applied machine learning, generative AI integrations, prompt engineering, sustainable computing, and ethical AI development.',
  },
  {
    id: 'aisect-cert',
    title: 'Full Stack Development Certification',
    issuer: 'AISECT – Standard Chartered Foundation (2026)',
    status: 'Certified',
    description:
      'Intensive full stack program covering frontend development, backend APIs, MySQL databases, and industry-standard QA testing.',
  },
  {
    id: 'be-cse',
    title: 'B.E. Computer Science & Engineering',
    issuer: 'Jansons Institute of Technology (2022 – 2026)',
    status: 'CGPA: 7.8/10',
    description:
      'Comprehensive study of Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, and Software Engineering.',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend & Database Architecture',
    badge: 'BACKEND & DATA',
    skills: ['Java (Core Java, OOP, Collections, JDBC, Streams)', 'Spring Boot', 'REST API Design', 'JWT Authentication', 'MVC Architecture', 'MySQL', 'MongoDB', 'SQLite'],
    description: 'Developing scalable REST APIs, secure token-based authentication, and optimized relational and NoSQL database schemas.',
  },
  {
    id: 'frontend',
    title: 'Frontend & UI Development',
    badge: 'FRONTEND DEVELOPMENT',
    skills: ['React.js', 'Next.js 14', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
    description: 'Building clean, component-driven user interfaces and AI-assisted frontends with seamless API integration.',
  },
  {
    id: 'tools-workflow',
    title: 'Developer Tools & Workflows',
    badge: 'TOOLS & WORKFLOWS',
    skills: ['Git & GitHub', 'Postman (API Testing)', 'Maven', 'Agile/Scrum', 'REST API Testing', 'VS Code', 'IntelliJ IDEA'],
    description: 'Collaborative development with Git version control, API validation via Postman, and modern agile build workflows.',
  },
];

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    label: 'EMAIL',
    value: 'rranjith8904@gmail.com',
    href: 'mailto:rranjith8904@gmail.com',
  },
  {
    label: 'PHONE',
    value: '+91 9176494801',
    href: 'tel:+919176494801',
    tag: 'Direct',
  },
  {
    label: 'GITHUB',
    value: 'github.com/RANJITH2004-CSE',
    href: 'https://github.com/RANJITH2004-CSE',
  },
  {
    label: 'LOCATION & TIMEZONE',
    value: 'Bengaluru, India',
    href: '#',
    tag: 'IST (UTC+5:30)',
  },
];

