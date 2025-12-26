import React from 'react';
import { SOCIAL_LINKS, SKILLS } from '../constants';
import { useLanguage } from '../i18n/LanguageContext';

const Hero: React.FC = () => {
  const { language, translations } = useLanguage();
  const t = translations[language];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-32 pb-16">
      {/* Aurora Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40">
          <div className="absolute bottom-0 left-[-20%] right-[-20%] top-[20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>
      
      {/* Animated Grid Lines */}
      <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
              backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
              backgroundSize: '3rem 3rem',
              animation: 'animated-grid 20s linear infinite',
              maskImage: 'radial-gradient(ellipse at center, white 20%, transparent 70%)',
          }}
      ></div>

      <div className="relative z-10 px-4 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 tracking-tight leading-tight mb-4 animate-fade-in-down">
          {t.heroName}
        </h1>
        <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-8 animate-fade-in-up">
          {t.heroTitle}
        </p>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-12 animate-fade-in">
          {t.heroSubtitle}
        </p>
        <div className="flex flex-col items-center space-y-6 animate-fade-in">
          <a href="#contact" className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30">
            {t.heroCta}
          </a>
           <div className="flex space-x-6">
              {SOCIAL_LINKS.map((social) => (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      <span className="sr-only">{social.name}</span>
                      {social.icon}
                  </a>
              ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full text-left animate-fade-in">
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 backdrop-blur-sm">
                <h3 className="font-bold text-white text-lg">5+</h3>
                <p className="text-gray-400 text-sm">{t.heroBentoExperience}</p>
            </div>
             <div className="bg-white/5 p-4 rounded-lg border border-white/10 backdrop-blur-sm">
                <h3 className="font-bold text-white text-lg">20+</h3>
                <p className="text-gray-400 text-sm">{t.heroBentoProjects}</p>
            </div>
             <div className="bg-white/5 p-4 rounded-lg border border-white/10 backdrop-blur-sm">
                <h3 className="font-bold text-white text-lg">99%</h3>
                <p className="text-gray-400 text-sm">{t.heroBentoSatisfaction}</p>
            </div>
        </div>
        
        <div className="mt-20 w-full max-w-4xl animate-fade-in">
            <h3 className="text-xl font-semibold mb-4 text-white">{t.heroTechArsenal}</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {SKILLS.map((skill) => (
                <span key={skill} className="bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm font-medium px-4 py-2 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;