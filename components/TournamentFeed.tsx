import React from 'react';

const SCOREBOARD_URL = "https://ddomain.cricclubs.com/USHSC/viewScorecard.do?matchId=1053&clubId=1000013";

const TournamentFeed: React.FC = () => {
  return (
    <section id="tournament" className="py-32 bg-warrior-dark relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[120%] bg-warrior-orange/10 blur-[150px] rounded-full rotate-45 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[80%] bg-warrior-orange/5 blur-[120px] rounded-full -rotate-12"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
             <div className="h-px w-16 bg-gradient-to-r from-transparent to-warrior-orange"></div>
             <span className="text-warrior-orange font-black uppercase tracking-[0.5em] text-[10px]">The Match Center</span>
             <div className="h-px w-16 bg-gradient-to-l from-transparent to-warrior-orange"></div>
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-white font-oswald italic uppercase tracking-tighter leading-none mb-6">
            Match <span className="text-warrior-orange">Center</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto italic text-center">
            View the official Westwood Warriors match progress and upcoming schedule via CricClubs.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Impact Scoreboard Button - Simplified to be the main focal point */}
          <div className="flex flex-col items-center">
            <a 
              href={SCOREBOARD_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-white text-warrior-dark px-12 md:px-20 py-6 md:py-8 rounded-[30px] font-black uppercase tracking-[0.3em] text-xl md:text-2xl shadow-[0_30px_70px_rgba(0,0,0,0.6)] hover:-translate-y-3 active:scale-95 transition-all duration-500 text-center"
            >
              <div className="absolute inset-0 bg-warrior-orange translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <span className="relative z-10 flex items-center justify-center group-hover:text-white transition-colors">
                View Official Scoreboard 
                <i className="fa-solid fa-arrow-up-right-from-square ml-6 transition-transform group-hover:translate-x-4"></i>
              </span>
            </a>
            
            <p className="mt-12 text-white/20 text-[11px] font-black uppercase tracking-[0.5em] text-center max-w-lg leading-relaxed">
              Official Match data provided by CricClubs USA. Tournament ID: USHSC | Club ID: 1000013
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TournamentFeed;