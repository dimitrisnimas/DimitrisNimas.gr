import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import type { SocialLink } from '../types';
import { useLanguage } from '../i18n/LanguageContext';

const Footer: React.FC = () => {
  const { language, translations } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-[#0D1117] border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {t.footerCopyright}
          </p>
          <div className="flex space-x-4">
            {SOCIAL_LINKS.map((social: SocialLink) => (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors transform hover:scale-110">
                <span className="sr-only">{social.name}</span>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;