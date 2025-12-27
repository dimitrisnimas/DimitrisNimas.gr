import React from 'react';
import type { NavLink, Project, Service, SocialLink, ResumeItem } from './types';

// Icons
const CodeBracketIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const PaintBrushIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L16.732 3.732z" />
  </svg>
);

const ShoppingCartIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const GitHubIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
  </svg>
);

const LinkedInIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const InstagramIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export const DownloadIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);


export const NAV_LINKS: NavLink[] = [
  { nameKey: 'navHome', href: '#home' },
  { nameKey: 'navAbout', href: '#about' },
  { nameKey: 'navServices', href: '#services' },
  { nameKey: 'navPortfolio', href: '#portfolio' },
  { nameKey: 'navResume', href: '#resume' },
  { nameKey: 'navContact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    icon: CodeBracketIcon,
    titleKey: 'serviceWebDevTitle',
    descriptionKey: 'serviceWebDevDesc',
  },
  {
    icon: PaintBrushIcon,
    titleKey: 'serviceWebDesignTitle',
    descriptionKey: 'serviceWebDesignDesc',
  },
  {
    icon: ShoppingCartIcon,
    titleKey: 'serviceEcommerceTitle',
    descriptionKey: 'serviceEcommerceDesc',
  },
];

export const PROJECTS: Project[] = [
  // 1. Kubik Portal
  {
    titleKey: 'projectKubikPortalTitle',
    descriptionKey: 'projectKubikPortalDesc',
    technologies: ['React', 'Node.js', 'HTML', 'Tailwind CSS', 'PostgreSQL'],
    imageUrl: 'assets/images/projects/kubikportal.png',
    link: 'https://github.com/dimitrisnimas/KUBIK-Portal',
    category: 'app',
  },
  // 2. Online Delivery App [NEW]
  {
    titleKey: 'projectDeliveryAppTitle',
    descriptionKey: 'projectDeliveryAppDesc',
    technologies: ['React', 'Node.js', 'HTML', 'Tailwind CSS', 'PostgreSQL'],
    imageUrl: 'assets/images/projects/kubikonlinedelivery.png',
    link: 'https://github.com/dimitrisnimas/Online-Delivery-App',
    category: 'app',
  },
  // 3. Online Book Store
  {
    titleKey: 'projectBookstoreTitle',
    descriptionKey: 'projectBookstoreDesc',
    technologies: ['Java', 'HTML', 'CSS', 'SQL'],
    imageUrl: 'assets/images/projects/onlinebookstore.png',
    link: 'https://github.com/dimitrisnimas/Social-Book-Store',
    category: 'app',
  },
  // 4. Voting System
  {
    titleKey: 'projectVotingTitle',
    descriptionKey: 'projectVotingDesc',
    technologies: ['WordPress', 'PHP', 'HTML', 'CSS'],
    imageUrl: 'assets/images/projects/votingsystem.png',
    link: 'https://github.com/dimitrisnimas/WordPress-Voting-System',
    category: 'plugin',
  },
  // 5. Ticketing System
  {
    titleKey: 'projectTicketingTitle',
    descriptionKey: 'projectTicketingDesc',
    technologies: ['WordPress', 'PHP', 'HTML', 'CSS'],
    imageUrl: 'assets/images/projects/ticketingsystem.png',
    link: 'https://github.com/dimitrisnimas/WordPress-Ticketing-System',
    category: 'plugin',
  },
  // 6. WordPress Members Manager [NEW]
  {
    titleKey: 'projectWPMembersManagerTitle',
    descriptionKey: 'projectWPMembersManagerDesc',
    technologies: ['WordPress', 'PHP', 'HTML', 'CSS'],
    imageUrl: 'assets/images/projects/membersmanagement.png', 
    link: '#',
    category: 'plugin',
  },
  // 7. WooCommerce Invoice Manager [NEW]
  {
    titleKey: 'projectWooInvoiceTitle',
    descriptionKey: 'projectWooInvoiceDesc',
    technologies: ['WordPress', 'PHP', 'HTML', 'CSS'],
    imageUrl: 'assets/images/projects/invoicemanagement.png', 
    link: 'https://github.com/dimitrisnimas/WooCommerce-Invoice-Manager',
    category: 'plugin',
  },
  // 8. B2B WooCommerce Inventory Viewer [NEW]
  {
    titleKey: 'projectB2BInventoryTitle',
    descriptionKey: 'projectB2BInventoryDesc',
    technologies: ['WooCommerce', 'React', 'PHP'],
    imageUrl: 'assets/images/projects/inventorymanagement.png', 
    link: 'https://github.com/dimitrisnimas/B2B-WooCommerce-Inventory-Viewer',
    category: 'plugin',
  },
  // 9. WordPress Notice Management System [NEW]
  {
    titleKey: 'projectWPNoticesTitle',
    descriptionKey: 'projectWPNoticesDesc',
    technologies: ['WordPress', 'PHP', 'JavaScript'],
    imageUrl: 'assets/images/projects/noticemanagement.png', 
    link: 'https://github.com/dimitrisnimas/WordPress-Notice-Management-System',
    category: 'plugin',
  },
  // 10. Battleship
  {
    titleKey: 'projectBattleshipTitle',
    descriptionKey: 'projectBattleshipDesc',
    technologies: ['Python'],
    imageUrl: 'assets/images/projects/battleshipgame.png',
    link: 'https://github.com/dimitrisnimas/Battleship',
    category: 'app',
  },
  // 11. TolidisParts.gr
  {
    titleKey: 'projectTolidisTitle',
    descriptionKey: 'projectTolidisDesc',
    technologies: ['Hosting', 'WordPress', 'WooCommerce', 'PHP', 'HTML', 'CSS'],
    imageUrl: 'assets/images/projects/tolidisparts.png',
    link: 'https://tolidisparts.gr',
    category: 'eshop',
  },
  // 12. Kubik.gr
  {
    titleKey: 'projectKubikSiteTitle',
    descriptionKey: 'projectKubikSiteDesc',
    technologies: ['React', 'Node.js', 'HTML', 'Tailwind CSS'],
    imageUrl: 'assets/images/projects/comingsoon.png',
    link: 'https://kubik.gr',
    category: 'website',
  },
  // 13. AutoTol.gr
  {
    titleKey: 'projectAutotolTitle',
    descriptionKey: 'projectAutotolDesc',
    technologies:['Hosting', 'WordPress', 'WooCommerce', 'PHP', 'HTML', 'CSS'],
    imageUrl: 'assets/images/projects/comingsoon.png',
    link: 'https://autotol.gr',
    category: 'eshop',
  },
  // 14. Resenco.eu [NEW]
  {
    titleKey: 'projectResencoTitle',
    descriptionKey: 'projectResencoDesc',
    technologies: ['Hosting', 'WordPress', 'CSS'],
    imageUrl: 'assets/images/projects/resenco.png', 
    link: 'https://resenco.eu',
    category: 'website',
  },
  // 15. TzepetoBar.gr
  {
    titleKey: 'projectTzepetoTitle',
    descriptionKey: 'projectTzepetoDesc',
    technologies: ['Hosting', 'WordPress'],
    imageUrl: 'assets/images/projects/tzepetobar.png',
    link: 'https://tzepetobar.gr',
    category: 'website',
  },
  // 16. SEPAM.gr
  {
    titleKey: 'projectSepamTitle',
    descriptionKey: 'projectSepamDesc',
    technologies: ['Hosting', 'WordPress', 'PHP', 'HTML', 'CSS'],
    imageUrl: 'assets/images/projects/sepam.png',
    link: 'https://sepam.gr',
    category: 'website',
  },
  // 17. SolarProjects.gr
  {
    titleKey: 'projectSolarProjectsTitle',
    descriptionKey: 'projectSolarProjectsDesc',
    technologies: ['Hosting', 'WordPress', 'CSS'],
    imageUrl: 'assets/images/projects/solarprojects.png',
    link: 'https://solarprojects.gr',
    category: 'website',
  },
  // 18. ComputerMathematica.gr
  {
    titleKey: 'projectComputerMathematicaTitle',
    descriptionKey: 'projectComputerMathematicaDesc',
    technologies: ['Hosting', 'WordPress'],
    imageUrl: 'assets/images/projects/computermathematica.png',
    link: 'https://computermathematica.gr',
    category: 'website',
  },
  // 19. CodeMentors.gr
  {
    titleKey: 'projectCodeMentorsTitle',
    descriptionKey: 'projectCodeMentorsDesc',
    technologies: ['Hosting', 'WordPress'],
    imageUrl: 'assets/images/projects/codementor.png',
    link: 'https://codementor.gr',
    category: 'website',
  },
  // 20. 6Gems.gr
  {
    titleKey: 'project6GemsTitle',
    descriptionKey: 'project6GemsDesc',
    technologies: ['Hosting', 'WordPress', 'WooCommerce', 'PHP'],
    imageUrl: 'assets/images/projects/6gems.png',
    link: 'https://6gems.gr',
    category: 'eshop',
  },
  // 21. BeVintage.gr
  {
    titleKey: 'projectBeVintageTitle',
    descriptionKey: 'projectBeVintageDesc',
    technologies: ['Hosting', 'WordPress', 'WooCommerce', 'PHP'],
    imageUrl: 'assets/images/projects/bevintage.png',
    link: 'https://bevintage.gr',
    category: 'eshop',
  },
  // 22. oBabisPlatanos.gr
  {
    titleKey: 'projectBabisTitle',
    descriptionKey: 'projectBabisDesc',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: 'assets/images/projects/obabisplatanos.png',
    link: 'https://obabisplatanos.gr',
    category: 'website',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    icon: GitHubIcon,
    href: 'https://github.com/dimitrisnimas',
  },
  {
    name: 'LinkedIn',
    icon: LinkedInIcon,
    href: 'https://linkedin.com/in/dimitrisnimas',
  },
  {
    name: 'Instagram',
    icon: InstagramIcon,
    href: 'https://www.instagram.com/dimitris_nimas',
  }
];

export const SKILLS: string[] = [
  'PHP', 'HTML', 'CSS', 'WordPress', 'MySQL', // Proficient
  'React', 'PostgreSQL', 'JavaScript', 'Next.js', 'Node.js', 'Angular' // Focussing on
];

export const EXPERIENCE: ResumeItem[] = [
  {
    companyKey: 'exp1Company',
    roleKey: 'exp1Role',
    period: 'May 2025 - Present',
    descriptionKey: 'exp1Desc',
  },
  {
    companyKey: 'exp2Company',
    roleKey: 'exp2Role',
    period: 'Sep 2024 - Dec 2024',
    descriptionKey: 'exp2Desc',
  },
  {
    companyKey: 'exp3Company',
    roleKey: 'exp3Role',
    period: 'Feb 2024 - Sep 2024',
    descriptionKey: 'exp3Desc',
  },
  {
    companyKey: 'exp4Company',
    roleKey: 'exp4Role',
    period: '2018 - Present',
    descriptionKey: 'exp4Desc',
  },
];

export const EDUCATION: ResumeItem[] = [
  {
    companyKey: 'edu1Company',
    roleKey: 'edu1Role',
    period: '2018 - Present',
    descriptionKey: 'edu1Desc',
  },
  {
    companyKey: 'edu2Company',
    roleKey: 'edu2Role',
    period: '2015 - 2018',
    descriptionKey: 'edu2Desc',
  },
];
