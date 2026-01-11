
import React from 'react';
import { TEAM_ROSTER } from '../constants';

const Roster: React.FC = () => {
  return (
    <section id="roster" className="py-32 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-warrior-orange font-black text-xs uppercase tracking-[0.3em] mb-4 block">Our Team</span>
            <h2 className="text-5xl md:text-6xl font-black text-warrior-dark mb-4 font-oswald leading-none">
              Team Roster
            </h2>
            <p className="text-slate-500 text-lg font-medium italic">
              Meet the Westwood High School Cricket Club members for the current season.
            </p>
          </div>
          <div className="flex space-x-4">
            <div className="bg-white px-8 py-4 rounded-2xl shadow-xl border-b-4 border-warrior-orange text-center min-w-[120px]">
              <div className="text-4xl font-black text-warrior-dark font-oswald">{TEAM_ROSTER.length}</div>
              <div className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Total Members</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {TEAM_ROSTER.map((player) => (
            <div 
              key={player.id} 
              className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-warrior-orange/40 hover:-translate-y-2 group"
            >
              <div className="h-2 bg-warrior-dark group-hover:bg-warrior-orange transition-colors"></div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-warrior-orange border border-slate-100 group-hover:bg-warrior-orange group-hover:text-white transition-all">
                    <i className="fa-solid fa-shield-halved text-2xl"></i>
                  </div>
                  <div className="flex flex-col items-end">
                    {player.isCaptain && (
                      <span className="bg-warrior-orange text-white px-3 py-1 rounded-full text-[9px] font-black uppercase mb-1 shadow-lg">Captain</span>
                    )}
                    {player.isViceCaptain && (
                      <span className="bg-warrior-dark text-warrior-orange px-3 py-1 rounded-full text-[9px] font-black uppercase mb-1 shadow-lg border border-warrior-orange/20">Vice Captain</span>
                    )}
                    <span className="text-slate-200 font-oswald text-4xl leading-none mt-2 group-hover:text-warrior-orange/20 transition-colors">#{String(player.id).padStart(2, '0')}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-black text-warrior-dark mb-1 group-hover:text-warrior-orange transition-colors font-oswald tracking-tight">
                  {player.name}
                </h3>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                  {player.specialty || "Club Member"}
                </p>

                <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roster;
