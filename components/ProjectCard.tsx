import React from 'react';
import type { Project } from '../types';
import { useLanguage } from '../i18n/LanguageContext';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { titleKey, descriptionKey, technologies, imageUrl, link } = project;
  const { language, translations } = useLanguage();
  const t = translations[language];

  const title = t[titleKey as keyof typeof t] || 'Project Title';
  const description = t[descriptionKey as keyof typeof t] || 'Project description.';
  const viewProjectText = t.portfolioViewProject || 'View Project';

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="group block relative overflow-hidden rounded-xl shadow-lg bg-gray-800 border border-white/10 transition-all duration-300 hover:shadow-cyan-500/20 hover:border-cyan-500/30 transform hover:-translate-y-1">
      <img src={imageUrl} alt={title} className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-sm text-gray-400 mb-4 h-10 overflow-hidden">{description}</p>
        <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span key={tech} className="bg-cyan-400/10 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                {tech}
              </span>
            ))}
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4">
            <span className="inline-flex items-center text-cyan-400 font-semibold">
                {viewProjectText}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </span>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;