import React from 'react';
import Section from './Section';
import ServiceCard from './ServiceCard';
import { SERVICES } from '../constants';
import { useLanguage } from '../i18n/LanguageContext';

const Services: React.FC = () => {
  const { language, translations } = useLanguage();
  const t = translations[language];

  return (
    <Section id="services" className="bg-black/20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white relative inline-block">
          {t.servicesTitle}
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-cyan-500 to-purple-500"></span>
        </h2>
        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">{t.servicesSubtitle}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </Section>
  );
};

export default Services;