import React from 'react';
import { HERO_SUBTITLE, HERO_TITLE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse delay-1000"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Available for Hire</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 leading-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          VISUAL <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary">
            EXPERIENCE
          </span> <br />
          DESIGNER
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light">
          {HERO_SUBTITLE}
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#portfolio" className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-bgDark font-bold font-heading hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,242,234,0.3)]">
                View My Work
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold font-heading backdrop-blur-sm transition-all">
                Contact Me
            </a>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-32 right-[10%] w-20 h-20 border border-primary/30 rounded-lg animate-float opacity-50 rotate-12"></div>
      <div className="absolute bottom-32 left-[10%] w-16 h-16 border border-secondary/30 rounded-full animate-float opacity-50 delay-700"></div>
    </section>
  );
};

export default Hero;