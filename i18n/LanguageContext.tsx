import React, { createContext, useState, useContext, ReactNode } from 'react';
import { translations, Translation } from './translations';

type Language = 'en' | 'el';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: { en: Translation, el: Translation };
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const value = {
    language,
    setLanguage,
    translations,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};