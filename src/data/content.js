import carrioImg from '../assets/projects/carrio.jpg';
import jobboardImg from '../assets/projects/jobboard.jpg';
import loanaptechImg from '../assets/projects/loanaptech.jpg';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIALS = [
  { label: 'WhatsApp', href: 'https://wa.me/2348065878877', icon: 'whatsapp' },
  { label: 'Email', href: 'mailto:omotuyifeisrael@gmail.com', icon: 'mail' },
  { label: 'GitHub', href: 'https://github.com/Tuyife', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/omotuyife-israel-75891540b', icon: 'linkedin' },
  { label: 'Instagram', href: 'https://www.instagram.com/tuyife_consult', icon: 'instagram' },
];

export const HERO_CODE = [
  { line: "const growth = Tuyife.build(", color: '#7dd3fc' },
  { line: "  { vision, strategy, execution },", color: '#94a3b8' },
  { line: "  { performance: 100, scale: '∞' }", color: '#94a3b8' },
  { line: ");", color: '#7dd3fc' },
];

export const ABOUT_STATS = [
  { value: 50, suffix: '+', label: 'Projects Completed' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
  { value: 24, suffix: 'h', label: 'Fast Delivery Start' },
  { value: 15, suffix: '+', label: 'Modern Technologies' },
];

export const SPECIALTIES = [
  'Business Websites',
  'Web Applications',
  'UI/UX Design',
  'Landing Pages',
  'E-commerce',
  'Portfolio Websites',
  'Dashboard Systems',
  'Website Maintenance',
];

export const SERVICES = [
  {
    icon: 'palette',
    title: 'Website Design',
    desc: 'Pixel-perfect, conversion-focused designs crafted with a premium aesthetic and brand-first thinking.',
  },
  {
    icon: 'code',
    title: 'Website Development',
    desc: 'Fast, secure, and scalable websites built with modern best practices and clean architecture.',
  },
  {
    icon: 'react',
    title: 'React Applications',
    desc: 'Blazing-fast single-page applications with buttery-smooth interactions and reusable components.',
  },
  {
    icon: 'layout',
    title: 'Frontend Development',
    desc: 'Beautiful, responsive interfaces that feel native on every screen size and device.',
  },
  {
    icon: 'server',
    title: 'Backend Development',
    desc: 'Robust APIs, databases, and server logic engineered for performance, security, and scale.',
  },
  {
    icon: 'layers',
    title: 'Full Stack Development',
    desc: 'End-to-end product development from database design to the final polished UI.',
  },
  {
    icon: 'figma',
    title: 'UI/UX Design',
    desc: 'Intuitive, delightful user journeys backed by research, wireframes, and modern design systems.',
  },
  {
    icon: 'link',
    title: 'API Integration',
    desc: 'Seamless connections to third-party services, payments, analytics, and external platforms.',
  },
  {
    icon: 'gauge',
    title: 'Performance Optimization',
    desc: 'Core Web Vitals tuned to perfection — fast loads, smooth renders, and Lighthouse 95+ scores.',
  },
  {
    icon: 'refresh',
    title: 'Website Redesign',
    desc: 'Breathe new life into existing websites with modern visuals, better UX, and stronger results.',
  },
];

export const PROJECTS = [
  {
    name: 'Carrio Motors',
    category: 'Automobile Dealership',
    stack: ['React', 'Vite', 'JavaScript'],
    desc: 'Luxury automobile dealership in Ibeju-Lekki, Lagos. A sleek, showroom-grade experience showcasing premium brands including BMW, Audi, Hyundai, Kia, Jeep, Suzuki, and MG.',
    live: 'https://carrio-motors-opal.vercel.app/',
    github: '',
    image: carrioImg,
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    metric: 'Luxury Brands',
  },
  {
    name: 'JobBoard Pro',
    category: 'Job Portal',
    stack: ['React', 'Vite', 'JavaScript'],
    desc: 'A modern job portal connecting recruiters and job seekers — with secure account login, job listings, and an intuitive, responsive dashboard.',
    live: 'https://job-portal-zfmb.vercel.app/',
    github: '',
    image: jobboardImg,
    gradient: 'linear-gradient(135deg, #0a84ff 0%, #818cf8 100%)',
    metric: 'Jobs Hub',
  },
  {
    name: 'LoanAptech',
    category: 'Loan Application Platform',
    stack: ['React', 'Vite', 'JavaScript'],
    desc: 'A clean, professional loan application platform for APTECH, featuring a polished landing page and a streamlined loan request flow.',
    live: 'https://loan-aptech-pearl.vercel.app/',
    github: '',
    image: loanaptechImg,
    gradient: 'linear-gradient(135deg, #34d399 0%, #22d3ee 100%)',
    metric: 'Loan Platform',
  },
];

export const TECH_STACK = [
  { name: 'HTML5', icon: 'html', level: 95 },
  { name: 'CSS3', icon: 'css', level: 93 },
  { name: 'JavaScript', icon: 'js', level: 95 },
  { name: 'TypeScript', icon: 'ts', level: 88 },
  { name: 'React', icon: 'react', level: 94 },
  { name: 'Next.js', icon: 'next', level: 85 },
  { name: 'Node.js', icon: 'node', level: 90 },
  { name: 'Express', icon: 'express', level: 89 },
  { name: 'MongoDB', icon: 'mongo', level: 86 },
  { name: 'MySQL', icon: 'mysql', level: 83 },
  { name: 'Firebase', icon: 'firebase', level: 84 },
  { name: 'Git', icon: 'git', level: 92 },
  { name: 'GitHub', icon: 'github', level: 92 },
  { name: 'Figma', icon: 'figma', level: 87 },
  { name: 'Tailwind CSS', icon: 'tailwind', level: 91 },
];

export const PROCESS_STEPS = [
  {
    title: 'Discovery',
    desc: 'We dive deep into your business, goals, and audience to define a clear direction.',
    icon: 'search',
  },
  {
    title: 'Research',
    desc: 'Competitor analysis and market insights shape a strategy that stands out.',
    icon: 'microscope',
  },
  {
    title: 'UI/UX Design',
    desc: 'Wireframes evolve into beautiful, intuitive interfaces your users will love.',
    icon: 'palette',
  },
  {
    title: 'Development',
    desc: 'Clean, scalable code brings the design to life with premium performance.',
    icon: 'code',
  },
  {
    title: 'Testing',
    desc: 'Rigorous QA on every device and browser ensures a flawless experience.',
    icon: 'bug',
  },
  {
    title: 'Launch',
    desc: 'We deploy carefully and handle everything for a smooth, zero-drama go-live.',
    icon: 'rocket',
  },
  {
    title: 'Maintenance',
    desc: 'Ongoing support, updates, and improvements keep your product future-proof.',
    icon: 'wrench',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Oluwakemi Olorunda',
    role: 'Founder, Luxury By Temmy',
    quote:
      'Tuyife Consult delivered a preview of my business beyond anything we imagined. The design is stunning and our conversions doubled within weeks. Truly world-class work.',
    rating: 5,
    initials: 'LBT',
    gradient: 'linear-gradient(135deg, #0a84ff, #38bdf8)',
  },
  {
    name: 'Hammed Chill',
    role: 'CEO, ChillTech',
    quote:
      'Fast, professional, and incredibly detail-oriented. They built our entire booking platform in record time without compromising on quality.',
    rating: 5,
    initials: 'HC',
    gradient: 'linear-gradient(135deg, #818cf8, #f0abfc)',
  },
  {
    name: 'Aptech Loan',
    role: 'Product Lead, LoanAptech',
    quote:
      'The dashboard they built is a work of art. Clean, blazing fast, and the team was a joy to work with from discovery to launch.',
    rating: 5,
    initials: 'AL',
    gradient: 'linear-gradient(135deg, #34d399, #38bdf8)',
  },
];

export const CONTACT_SERVICES = [
  'Website Design',
  'Website Development',
  'Web Application',
  'UI/UX Design',
  'E-commerce',
  'Redesign',
  'Maintenance',
  'Other',
];
