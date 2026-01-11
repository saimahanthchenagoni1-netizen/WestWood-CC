import React from 'react';
import { CLUB_NAME, CLUB_MOTTO } from '../constants.tsx';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=2000")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20 text-center md:text-left">
        <div className="max-w-4xl mx-auto md:mx-0">
          <div className="flex items-center justify-center md:justify-start space-x-4 mb-8">
            <div className="h-1 w-16 bg-warrior-orange"></div>
            <span className="text-warrior-orange font-black uppercase tracking-[0.4em] text-xs">Official Westwood Cricket Club</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black text-white mb-6 leading-[0.9] drop-shadow-2xl font-oswald italic uppercase">
            {CLUB_NAME.split(' ').map((word, i) => (
              <span key={i} className="text-white">
                {word}<br className="hidden md:block" />
              </span>
            ))}
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-200 mb-12 font-medium max-w-xl leading-relaxed tracking-wide mx-auto md:mx-0">
            {CLUB_MOTTO}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="#info" 
              onClick={(e) => handleNavClick(e, 'info')}
              className="bg-warrior-orange hover:bg-white text-white hover:text-warrior-orange px-12 py-5 rounded-lg font-black uppercase tracking-widest text-lg transition-all transform hover:-translate-y-1 shadow-[0_10px_40px_rgba(179,93,40,0.4)] flex items-center justify-center group"
            >
              Join the Roster
              <i className="fa-solid fa-user-plus ml-3 group-hover:scale-125 transition-transform"></i>
            </a>
            <a 
              href="#tournament" 
              onClick={(e) => handleNavClick(e, 'tournament')}
              className="bg-white/10 border-2 border-white/20 hover:bg-white hover:text-warrior-dark text-white px-12 py-5 rounded-lg font-black uppercase tracking-widest text-lg transition-all flex items-center justify-center backdrop-blur-md"
            >
              Match Center
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements for visual depth */}
      <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-warrior-orange/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Stats Overlay */}
      <div className="absolute bottom-12 right-12 hidden lg:flex space-x-12 bg-black/20 p-6 rounded-2xl backdrop-blur-sm border border-white/5">
        <div className="text-right">
          <div className="text-4xl font-black text-white font-oswald tracking-tighter">18</div>
          <div className="text-[10px] text-warrior-orange font-black uppercase tracking-widest">Members</div>
        </div>
        <div className="text-right">
          <div className="text-4xl font-black text-white font-oswald tracking-tighter">1st</div>
          <div className="text-[10px] text-warrior-orange font-black uppercase tracking-widest">Ranking</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;