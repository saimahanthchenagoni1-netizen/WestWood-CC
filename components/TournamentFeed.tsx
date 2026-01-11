import React, { useState, useEffect } from 'react';
import { getTournamentReport } from '../services/geminiService.ts';

const SCOREBOARD_URL = "https://ddomain.cricclubs.com/USHSC/viewScorecard.do?matchId=1053&clubId=1000013";

const TournamentFeed: React.FC = () => {
  const [data, setData] = useState<{ text: string; sources: any[] } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const report = await getTournamentReport();
        setData(report);
      } catch (err) {
        console.error("Failed to load match center:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const splitInfo = (text: string) => {
    if (!text) return { latest: "Syncing latest results...", next: "Check full schedule..." };
    const parts = text.split(/\|/i);
    return {
      latest: parts[0]?.trim() || "Result Pending",
      next: parts[1]?.trim() || "See official schedule for details."
    };
  };

  const { latest, next } = splitInfo(data?.text || "");

  return (
    <section id="tournament" className="py-32 bg-warrior-dark relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[120%] bg-warrior-orange/10 blur-[150px] rounded-full rotate-45 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[80%] bg-warrior-orange/5 blur-[120px] rounded-full -rotate-12"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="flex items-center justify-center space-x-4 mb-6">
             <div className="h-px w-16 bg-gradient-to-r from-transparent to-warrior-orange"></div>
             <span className="text-warrior-orange font-black uppercase tracking-[0.5em] text-[10px]">The Match Center</span>
             <div className="h-px w-16 bg-gradient-to-l from-transparent to-warrior-orange"></div>
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-white font-oswald italic uppercase tracking-tighter leading-none mb-6">
            Match <span className="text-warrior-orange">Center</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto italic text-center">
            Real-time insights from the USHSC Championship trail.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
            
            {/* Main Scoreboard Card */}
            <div className="bg-black/80 border-2 border-warrior-orange/50 rounded-[40px] p-10 md:p-12 shadow-[0_0_60px_rgba(179,93,40,0.15)] relative overflow-hidden transition-all hover:border-warrior-orange group">
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center space-x-3">
                  <span className={`w-3 h-3 rounded-full ${loading ? 'bg-yellow-500 animate-pulse' : 'bg-emerald-500'}`}></span>
                  <span className="text-white font-black uppercase tracking-widest text-[10px]">{loading ? 'Live Syncing...' : 'Sync Complete'}</span>
                </div>
                <span className="bg-warrior-orange/20 text-warrior-orange border border-warrior-orange/30 text-[9px] font-black px-4 py-1 rounded-full uppercase tracking-widest">Recent Result</span>
              </div>

              {loading ? (
                <div className="space-y-6 py-4">
                  <div className="h-14 bg-white/5 rounded-2xl animate-pulse"></div>
                  <div className="h-8 bg-white/5 rounded-2xl animate-pulse w-2/3"></div>
                </div>
              ) : (
                <div className="space-y-6">
                  <h3 className="text-white font-oswald text-4xl md:text-5xl leading-[1.1] uppercase italic tracking-tight group-hover:scale-[1.02] transition-transform origin-left">
                    {latest}
                  </h3>
                  <div className="flex items-center text-slate-500 font-bold text-xs uppercase tracking-[0.2em] pt-6 border-t border-white/5">
                    <i className="fa-solid fa-trophy mr-3 text-warrior-orange"></i>
                    USHSC Regional Series
                  </div>
                </div>
              )}
            </div>

            {/* Next Fixture Briefing */}
            <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 md:p-12 backdrop-blur-xl relative overflow-hidden transition-all hover:bg-white/[0.08]">
               <div className="flex justify-between items-center mb-10">
                <span className="text-white/40 font-black uppercase tracking-widest text-[10px]">Upcoming Fixture</span>
                <i className="fa-solid fa-calendar-day text-white/10 text-2xl"></i>
              </div>

              {loading ? (
                <div className="space-y-4 py-4">
                  <div className="h-20 bg-white/5 rounded-2xl animate-pulse"></div>
                </div>
              ) : (
                <div className="space-y-8">
                  <p className="text-slate-200 text-2xl md:text-3xl font-medium italic border-l-4 border-warrior-orange pl-8 leading-tight">
                    {next}
                  </p>
                  <div className="flex items-center space-x-3">
                    <span className="bg-emerald-500/10 text-emerald-500 text-[10px] font-black px-3 py-1 rounded uppercase tracking-widest">Venue Confirmed</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Impact Scoreboard Button - Always available as reliable fallback */}
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