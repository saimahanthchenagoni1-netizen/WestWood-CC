import React, { useState, useEffect } from 'react';
import { TEAM_ROSTER } from '../constants.tsx';
import { getCricketInsight } from '../services/geminiService.ts';

const Leadership: React.FC = () => {
  const captain = TEAM_ROSTER.find(p => p.isCaptain);
  const viceCaptain = TEAM_ROSTER.find(p => p.isViceCaptain);
  
  const [insight, setInsight] = useState<string>("Analyzing team strategy...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInsight = async () => {
      if (captain) {
        try {
          const text = await getCricketInsight(captain.name);
          setInsight(text || "Victory belongs to the most persevering.");
        } catch (err) {
          setInsight("Unity and discipline define the Westwood spirit.");
        } finally {
          setLoading(false);
        }
      }
    };
    fetchInsight();
  }, [captain]);

  return (
    <section id="leadership" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-warrior-orange font-black text-xs uppercase tracking-[0.3em] mb-4 block">Field Commanders</span>
          <h2 className="text-5xl md:text-6xl font-black text-warrior-dark mb-4 inline-block relative font-oswald">
            Team Leadership
            <span className="absolute -bottom-2 left-0 w-full h-2 bg-warrior-orange/20"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 max-w-6xl mx-auto">
          {/* Captain Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-warrior-orange transform translate-x-4 translate-y-4 rounded-2xl -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform"></div>
            <div className="bg-warrior-dark rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 border border-white/10">
              <div className="relative h-96 bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800" 
                  alt="Captain"
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warrior-dark via-transparent to-transparent"></div>
                <div className="absolute top-8 left-8 bg-warrior-orange text-white font-black text-3xl w-16 h-16 rounded-xl flex items-center justify-center shadow-xl border-4 border-warrior-dark transform -rotate-6 group-hover:rotate-0 transition-transform">
                  C
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-4xl font-black text-white mb-2 font-oswald tracking-tight">{captain?.name}</h3>
                <div className="inline-block px-3 py-1 bg-warrior-orange/10 text-warrior-orange font-bold uppercase tracking-widest text-[10px] rounded mb-6 border border-warrior-orange/20">
                  {captain?.specialty}
                </div>
                <p className="text-slate-400 text-lg italic leading-relaxed font-medium">
                  "As Warriors, we don't just play the game; we dominate the field. Westwood High stands for resilience and tactical brilliance."
                </p>
              </div>
            </div>
          </div>

          {/* Vice Captain Card */}
          <div className="group relative mt-12 md:mt-0">
            <div className="absolute inset-0 bg-slate-200 transform translate-x-4 translate-y-4 rounded-2xl -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform"></div>
            <div className="bg-white border-2 border-slate-100 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500">
              <div className="relative h-96 bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1512719994953-eabf50895df7?auto=format&fit=crop&q=80&w=800" 
                  alt="Vice Captain"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                <div className="absolute top-8 left-8 bg-warrior-dark text-warrior-orange font-black text-3xl w-16 h-16 rounded-xl flex items-center justify-center shadow-xl border-4 border-white transform rotate-6 group-hover:rotate-0 transition-transform">
                  VC
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-4xl font-black text-warrior-dark mb-2 font-oswald tracking-tight">{viceCaptain?.name}</h3>
                <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 font-bold uppercase tracking-widest text-[10px] rounded mb-6 border border-slate-200">
                  {viceCaptain?.specialty}
                </div>
                <p className="text-slate-500 text-lg italic leading-relaxed font-medium">
                  "Every ball counts. My role is to bridge the gap between strategy and execution, ensuring the Westwood spirit remains unbroken."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Strategy Room */}
        <div className="mt-24 max-w-5xl mx-auto bg-warrior-dark rounded-3xl p-10 relative overflow-hidden shadow-2xl group border border-warrior-orange/20">
          <div className="absolute top-0 right-0 w-32 h-32 bg-warrior-orange/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="w-24 h-24 bg-warrior-orange text-white rounded-2xl flex items-center justify-center text-4xl shadow-[0_0_30px_rgba(179,93,40,0.5)] animate-pulse">
              <i className="fa-solid fa-microchip"></i>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h4 className="text-warrior-orange font-black uppercase tracking-[0.3em] text-xs mb-4">Tactical AI Analysis</h4>
              <p className="text-white italic text-2xl leading-tight font-medium">
                {loading ? "Decrypting match data..." : `"${insight}"`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;