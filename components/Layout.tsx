import React, { useState, useEffect } from 'react';
import { CLUB_EMAIL, INSTAGRAM_URL } from '../constants.tsx';

interface LayoutProps {
  children: React.ReactNode;
}

export const Logo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <div className={`relative flex items-center justify-center rounded-full border-4 border-warrior-orange bg-white shadow-lg overflow-hidden ${className}`}>
    <div className="absolute inset-0 flex items-center justify-center">
       <span className="text-warrior-orange font-black text-2xl font-oswald scale-125">W</span>
    </div>
    <div className="absolute inset-0 border-[3px] border-black rounded-full opacity-20"></div>
  </div>
);

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-warrior-orange selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-warrior-dark/95 py-3 shadow-2xl backdrop-blur-xl border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="flex items-center space-x-4 group">
            <Logo className={`${isScrolled ? 'w-10 h-10' : 'w-16 h-16'} transition-all duration-500 group-hover:rotate-12`} />
            <div className="flex flex-col">
              <span className="text-white font-black text-xl md:text-2xl tracking-tighter uppercase font-oswald leading-none">Westwood CC</span>
              <span className="text-warrior-orange font-bold text-[10px] md:text-xs tracking-[0.3em] uppercase leading-none mt-1">The Warriors</span>
            </div>
          </a>
          
          <div className="hidden lg:flex space-x-10 text-white font-black uppercase text-[11px] tracking-[0.2em]">
            <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="hover:text-warrior-orange transition-all relative group">Home<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-warrior-orange transition-all group-hover:w-full"></span></a>
            <a href="#tournament" onClick={(e) => handleNavClick(e, 'tournament')} className="hover:text-warrior-orange transition-all relative group">Match Center<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-warrior-orange transition-all group-hover:w-full"></span></a>
            <a href="#info" onClick={(e) => handleNavClick(e, 'info')} className="hover:text-warrior-orange transition-all relative group">Join the Club<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-warrior-orange transition-all group-hover:w-full"></span></a>
            <a href="#leadership" onClick={(e) => handleNavClick(e, 'leadership')} className="hover:text-warrior-orange transition-all relative group">Leadership<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-warrior-orange transition-all group-hover:w-full"></span></a>
            <a href="#roster" onClick={(e) => handleNavClick(e, 'roster')} className="hover:text-warrior-orange transition-all relative group">Team Roster<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-warrior-orange transition-all group-hover:w-full"></span></a>
          </div>

          {/* Mobile menu icon (visual only) */}
          <div className="lg:hidden text-white text-2xl">
            <i className="fa-solid fa-bars-staggered"></i>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-warrior-dark text-white pt-20 pb-12 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16 text-center md:text-left">
            <div className="col-span-1">
              <div className="flex items-center justify-center md:justify-start space-x-4 mb-8">
                <Logo className="w-14 h-14" />
                <h3 className="text-3xl font-black font-oswald text-warrior-orange leading-none">Westwood<br/>Cricket Club</h3>
              </div>
              <p className="text-slate-400 max-sm leading-relaxed mb-6 mx-auto md:mx-0 font-medium italic">
                Representing Westwood High with pride. Follow the official channel for updates.
              </p>
              <div className="flex justify-center md:justify-start space-x-4 mt-6">
                 <a 
                   href={INSTAGRAM_URL} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-warrior-orange transition-colors"
                   aria-label="Instagram"
                 >
                   <i className="fa-brands fa-instagram"></i>
                 </a>
              </div>
            </div>
            <div>
              <h4 className="font-black mb-8 uppercase text-warrior-orange tracking-[0.3em] text-xs">Site Links</h4>
              <ul className="space-y-4 text-slate-400 text-sm font-bold uppercase tracking-widest">
                <li><a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="hover:text-white transition-colors flex items-center justify-center md:justify-start group"><i className="fa-solid fa-chevron-right text-[10px] mr-3 text-warrior-orange opacity-0 group-hover:opacity-100 transition-all"></i> Home</a></li>
                <li><a href="#tournament" onClick={(e) => handleNavClick(e, 'tournament')} className="hover:text-white transition-colors flex items-center justify-center md:justify-start group"><i className="fa-solid fa-chevron-right text-[10px] mr-3 text-warrior-orange opacity-0 group-hover:opacity-100 transition-all"></i> Match Center</a></li>
                <li><a href="#info" onClick={(e) => handleNavClick(e, 'info')} className="hover:text-white transition-colors flex items-center justify-center md:justify-start group"><i className="fa-solid fa-chevron-right text-[10px] mr-3 text-warrior-orange opacity-0 group-hover:opacity-100 transition-all"></i> Join the Club</a></li>
                <li><a href="#roster" onClick={(e) => handleNavClick(e, 'roster')} className="hover:text-white transition-colors flex items-center justify-center md:justify-start group"><i className="fa-solid fa-chevron-right text-[10px] mr-3 text-warrior-orange opacity-0 group-hover:opacity-100 transition-all"></i> Team Roster</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-8 uppercase text-warrior-orange tracking-[0.3em] text-xs">Official Contact</h4>
              <ul className="space-y-4 text-slate-400 text-sm font-medium">
                <li className="flex items-start justify-center md:justify-start">
                  <i className="fa-solid fa-map-pin mt-1 mr-4 text-warrior-orange"></i> 
                  Green Field (By Tennis Courts)
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <i className="fa-solid fa-envelope-open-text mr-4 text-warrior-orange"></i> 
                  {CLUB_EMAIL}
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 text-center">
            <div className="text-[11px] text-slate-600 uppercase tracking-[0.4em] font-black mb-2">
              <p>Westwood Cricket Club &copy; 2026. Official Athletic Program.</p>
            </div>
            <div className="text-[10px] text-warrior-orange/60 font-black uppercase tracking-[0.6em] mt-4 opacity-80">
              Made by Sai
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;