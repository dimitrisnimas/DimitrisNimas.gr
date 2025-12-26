import React from 'react';
import Section from './Section';
import { useLanguage } from '../i18n/LanguageContext';

const Contact: React.FC = () => {
  const { language, translations } = useLanguage();
  const t = translations[language];
  
  return (
    <Section id="contact" className="bg-black/20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white relative inline-block">
          {t.contactTitle}
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-cyan-500 to-purple-500"></span>
        </h2>
        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">{t.contactSubtitle}</p>
      </div>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 bg-white/5 p-8 rounded-xl border border-white/10 shadow-2xl shadow-purple-500/10 backdrop-blur-lg">
        <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">{t.contactInfoTitle}</h3>
            <div className="flex items-start space-x-4">
                <div className="bg-cyan-500/10 p-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg></div>
                <div>
                    <h4 className="font-semibold text-white">{t.contactInfoEmail}</h4>
                    <a href="mailto:hello@dimitrisnimas.gr" className="text-gray-300 hover:text-cyan-400">hello@dimitrisnimas.gr</a>
                </div>
            </div>
             
             <div className="flex items-start space-x-4">
                <div className="bg-cyan-500/10 p-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg></div>
                <div>
                    <h4 className="font-semibold text-white">{t.contactInfoLocation}</h4>
                    <p className="text-gray-300">Athens, Greece</p>
                </div>
            </div>
        </div>

        <form 
          action="https://formsubmit.co/hello@dimitrisnimas.gr" 
          method="POST" 
          className="space-y-4"
          >
            {/* Optional: Honeypot to reduce spam */}
            <input type="hidden" name="_honey" />
            {/* Optional: Redirect after submission */}
            <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
          
            <div>
              <label htmlFor="name" className="sr-only">{t.contactFormName}</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder={t.contactFormName} 
                className="w-full bg-gray-900/50 border-2 border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition" 
                required 
              />
            </div>
          
            <div>
              <label htmlFor="email" className="sr-only">{t.contactFormEmail}</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder={t.contactFormEmail} 
                className="w-full bg-gray-900/50 border-2 border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition" 
                required 
              />
            </div>
          
            <div>
              <label htmlFor="message" className="sr-only">{t.contactFormMessage}</label>
              <textarea 
                name="message" 
                id="message" 
                rows={5} 
                placeholder={t.contactFormMessage} 
                className="w-full bg-gray-900/50 border-2 border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition" 
                required
              ></textarea>
            </div>
          
            <div>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold py-3 px-6 rounded-lg text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20"
              >
                {t.contactFormSubmit}
              </button>
            </div>
          </form>


      </div>
    </Section>
  );
};

export default Contact;
