import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { useLanguage } from '../i18n/LanguageContext';
import type { NavLink } from '../types';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, translations } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  
  const handleLanguageChange = (lang: 'en' | 'el') => {
    setLanguage(lang);
  };

  const t = translations[language];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/30 backdrop-blur-lg shadow-2xl shadow-cyan-500/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-24">
          <a href="#home" className="text-2xl font-bold tracking-tight text-white hover:text-cyan-400 transition-colors">
            DN/
          </a>
          
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex items-center space-x-2 bg-gray-900/50 border border-gray-700 rounded-full px-4 py-2">
              {NAV_LINKS.map((link: NavLink) => (
                <a 
                  key={link.nameKey} 
                  href={link.href} 
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-full transition-colors relative"
                >
                  {t[link.nameKey as keyof typeof t]}
                </a>
              ))}
            </nav>
            {/* Language Switcher */}
            <div className="flex items-center bg-gray-900/50 border border-gray-700 rounded-full p-1">
                <button
                    onClick={() => handleLanguageChange('en')}
                    className={`px-3 py-1 text-sm font-bold rounded-full transition-colors ${language === 'en' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                    EN
                </button>
                <button
                    onClick={() => handleLanguageChange('el')}
                    className={`px-3 py-1 text-sm font-bold rounded-full transition-colors ${language === 'el' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                    EL
                </button>
            </div>
          </div>


          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none p-2 rounded-md bg-gray-800/50">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 12h16"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-black/80 backdrop-blur-lg`}>
        <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
          {NAV_LINKS.map((link: NavLink) => (
            <a 
              key={link.nameKey} 
              href={link.href}
              onClick={handleLinkClick}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700/50">
              {t[link.nameKey as keyof typeof t]}
            </a>
          ))}
          <div className="flex justify-center pt-4">
             <div className="flex items-center bg-gray-900/50 border border-gray-700 rounded-full p-1">
                <button
                    onClick={() => handleLanguageChange('en')}
                    className={`px-4 py-2 text-sm font-bold rounded-full transition-colors ${language === 'en' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                    EN
                </button>
                <button
                    onClick={() => handleLanguageChange('el')}
                    className={`px-4 py-2 text-sm font-bold rounded-full transition-colors ${language === 'el' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                    EL
                </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;