import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants';
import { useLanguage } from '../i18n/LanguageContext';

const Portfolio: React.FC = () => {
  const { language, translations } = useLanguage();
  const t = translations[language];

  return (
    <Section id="portfolio" className="bg-[#0D1117]">
       <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white relative inline-block">
          {t.portfolioTitle}
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-cyan-500 to-purple-500"></span>
        </h2>
        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">{t.portfolioSubtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <div className="mt-16 text-center">
            <a 
                href="https://kubik.gr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gray-800 text-cyan-300 font-bold py-3 px-6 rounded-full text-md hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                {t.portfolioExternalLink}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </a>
      </div>
    </Section>
  );
};

export default Portfolio;
