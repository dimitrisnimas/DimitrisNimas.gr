import React from 'react';
import Section from './Section';
import { EXPERIENCE, EDUCATION, DownloadIcon } from '../constants';
import type { ResumeItem } from '../types';
import { useLanguage } from '../i18n/LanguageContext';

const ResumeTimelineItem: React.FC<{ item: ResumeItem }> = ({ item }) => {
  const { language, translations } = useLanguage();
  const t = translations[language];

  const role = t[item.roleKey as keyof typeof t];
  const company = t[item.companyKey as keyof typeof t];
  const description = t[item.descriptionKey as keyof typeof t];

  return (
    <div className="relative pl-8 sm:pl-12 py-6 group">
      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-800 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-cyan-500 after:border-4 after:box-content after:border-slate-800 after:rounded-full after:self-start after:-translate-x-1/2 after:translate-y-1.5">
        <time className="sm:absolute sm:left-4 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-24 h-6 mb-3 sm:mb-0 text-gray-300 bg-gray-800 rounded-full">{item.period}</time>
        <div className="text-xl font-bold text-white sm:ml-28">{role}</div>
      </div>
      <div className="text-cyan-400 mb-2 sm:ml-28">{company}</div>
      <div className="text-gray-400 sm:ml-28">{description}</div>
    </div>
  );
};

const Resume: React.FC = () => {
  const { language, translations } = useLanguage();
  const t = translations[language];
  
  return (
    <Section id="resume" className="bg-black/20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white relative inline-block">
          {t.resumeTitle}
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-cyan-500 to-purple-500"></span>
        </h2>
        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">{t.resumeSubtitle}</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end mb-8">
            <a 
                href="/Dimitris-Nimas-CV.pdf" 
                download
                className="inline-flex items-center bg-cyan-500 text-white font-bold py-2 px-6 rounded-full text-md hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30">
                {DownloadIcon}
                {t.resumeDownloadButton}
            </a>
        </div>
        
        <div className="bg-white/5 p-8 rounded-xl border border-white/10 shadow-2xl shadow-purple-500/10 backdrop-blur-lg">
            <div>
                <h3 className="text-2xl font-bold text-white mb-6">{t.resumeExperienceTitle}</h3>
                <div>
                    {EXPERIENCE.map((item, index) => (
                        <ResumeTimelineItem key={index} item={item} />
                    ))}
                </div>
            </div>
            <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">{t.resumeEducationTitle}</h3>
                <div>
                    {EDUCATION.map((item, index) => (
                        <ResumeTimelineItem key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Resume;