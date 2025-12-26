import React from 'react';
import type { Service } from '../types';
import { useLanguage } from '../i18n/LanguageContext';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { icon, titleKey, descriptionKey } = service;
  const { language, translations } = useLanguage();
  const t = translations[language];

  const title = t[titleKey as keyof typeof t] || 'Service Title';
  const description = t[descriptionKey as keyof typeof t] || 'Service description.';

  return (
    <div className="group relative bg-white/5 p-8 rounded-xl border border-white/10 shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <div className="text-cyan-400 mb-4">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;