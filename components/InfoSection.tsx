import React from 'react';
import { MEETING_INFO, INTEREST_FORM_URL, PARENT_CONSENT_FORM_URL } from '../constants.tsx';

const InfoSection: React.FC = () => {
  return (
    <section id="info" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-warrior-orange/5 border-2 border-warrior-orange/20 rounded-[3rem] p-12 md:p-16 relative overflow-hidden">
          {/* Decorative background text */}
          <div className="absolute top-0 right-0 text-warrior-orange/5 font-black text-9xl -mr-10 -mt-10 pointer-events-none uppercase font-oswald italic">
            WARRIORS
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
            <div className="lg:w-1/2">
              <div className="inline-block px-4 py-1.5 bg-emerald-500 text-white font-black text-[10px] uppercase tracking-widest rounded-full mb-6">
                New Update
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-warrior-dark font-oswald mb-8 uppercase italic leading-none">
                Join the <span className="text-warrior-orange">Team</span>
              </h2>
              <p className="text-slate-600 text-xl font-medium leading-relaxed mb-10 max-w-lg">
                Hey Warriors! If you are interested in playing cricket or want to join Westwood's Cricket Team, come check us out!
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center space-x-6 group">
                  <div className="w-16 h-16 bg-warrior-dark rounded-2xl flex items-center justify-center text-warrior-orange text-2xl group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-calendar-check"></i>
                  </div>
                  <div>
                    <div className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-1">Meetings</div>
                    <div className="text-warrior-dark font-black text-xl italic font-oswald">
                      {MEETING_INFO.frequency} on {MEETING_INFO.day} {MEETING_INFO.time}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <div className="w-16 h-16 bg-warrior-dark rounded-2xl flex items-center justify-center text-warrior-orange text-2xl group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-map-location-dot"></i>
                  </div>
                  <div>
                    <div className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-1">Location</div>
                    <div className="text-warrior-dark font-black text-xl italic font-oswald">
                      {MEETING_INFO.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-warrior-dark p-10 md:p-12 rounded-[2.5rem] shadow-2xl border-t-4 border-warrior-orange space-y-6">
                <div>
                  <h3 className="text-3xl font-black text-white font-oswald mb-2 italic uppercase">Join the Roster</h3>
                  <p className="text-slate-400 mb-6 font-medium italic">
                    Ready to show your skills? Get on the scouting list for the upcoming season.
                  </p>
                  <a 
                    href={INTEREST_FORM_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-warrior-orange hover:bg-white text-white hover:text-warrior-dark py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-center transition-all shadow-xl text-sm"
                  >
                    Interest Form
                  </a>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <h3 className="text-2xl font-black text-white font-oswald mb-2 italic uppercase">Parental Consent</h3>
                  <p className="text-slate-400 mb-6 font-medium italic">
                    Required for all student athletes participating in the club activities.
                  </p>
                  <a 
                    href={PARENT_CONSENT_FORM_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-white/10 border-2 border-white/20 hover:bg-white hover:text-warrior-dark text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-center transition-all text-sm"
                  >
                    Consent Form
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;