import React from 'react';
import Section from './Section';
import { useLanguage } from '../i18n/LanguageContext';

const About: React.FC = () => {
  const { language, translations } = useLanguage();
  const t = translations[language];

  return (
    <Section id="about" className="bg-[#0D1117]">
      <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white relative">
            {t.aboutTitle}
            <span className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500"></span>
          </h2>
          <div className="space-y-4 text-gray-400 text-lg">
            <p>
              {t.aboutP1}
            </p>
            <p>
              {t.aboutP2}
            </p>
            <p>
              {t.aboutP3}
            </p>
          </div>
      </div>
    </Section>
  );
};

export default About;