'use client';

import React, { useState } from 'react';
import { InstagramIcon, WhatsAppIcon } from './Icons';
import { Shield, Users, Award, Sparkles } from 'lucide-react';

export const TeamGrid = () => {
  const [filter, setFilter] = useState('all');

  const teamMembers = [
    {
      name: 'Rohith Pramodh Kottoju',
      role: 'President',
      category: 'board',
      initials: 'RK',
      image: '/assets/Rohith.jpg',
      whatsapp: 'https://wa.me/?text=Hello%20Rohith%20Pramodh%20(MEGA%20President)',
      instagram: 'https://www.instagram.com/mega.estd.2025',
    },
    {
      name: 'Durga Prasad Maturi',
      role: 'Vice President',
      category: 'board',
      initials: 'DM',
      image: '/assets/Pavan.jpg',
      instagram: 'https://www.instagram.com/mega.estd.2025',
    },
    {
      name: 'Raj Kumar Ruthula',
      role: 'Secretary',
      category: 'board',
      initials: 'RR',
      image: '/assets/Raj.jpg',
      instagram: 'https://www.instagram.com/mega.estd.2025',
    },
    {
      name: 'Sai Sharath Karri',
      role: 'Joint Secretary',
      category: 'board',
      initials: 'SK',
      image: '/assets/Sharat.jpg',
      instagram: 'https://www.instagram.com/mega.estd.2025',
    },
    {
      name: 'Subindu Thamarana',
      role: 'Treasurer',
      category: 'board',
      initials: 'ST',
      image: '/assets/Subindu.jpg',
      instagram: 'https://www.instagram.com/mega.estd.2025',
    },
    {
      name: 'Jai Prakash Patnana',
      role: 'Co-Treasurer',
      category: 'board',
      initials: 'JP',
      image: '/assets/Jai Prakash.jpg',
      instagram: 'https://www.instagram.com/mega.estd.2025',
    },
    {
      name: 'Jaswanth Ganta',
      role: 'Executive Member',
      category: 'committee',
      initials: 'JG',
      image: '/assets/Jaswanth.jpg',
      instagram: 'https://www.instagram.com/mega.estd.2025',
    },
    {
      name: 'Nitin Tutika',
      role: 'Executive Member',
      category: 'committee',
      initials: 'NT',
      image: '/assets/Nitin.png',
      instagram: 'https://www.instagram.com/mega.estd.2025',
    },
    {
      name: 'Murali Krishna Boosa',
      role: 'Executive Member',
      category: 'committee',
      initials: 'MB',
      image: '/assets/Murali.jpg',
      instagram: 'https://www.instagram.com/mega.estd.2025',
    },
    {
      name: 'Lalith Kumar Motabotula',
      role: 'Executive Member',
      category: 'committee',
      initials: 'LM',
      image: '/assets/Lalith.jpg',
      instagram: 'https://www.instagram.com/mega.estd.2025',
    },
    {
      name: 'Navadeep Barnika',
      role: 'Executive Member',
      category: 'committee',
      initials: 'NB',
      image: '/assets/Navadeep.jpg',
      instagram: 'https://www.instagram.com/mega.estd.2025',
    }
  ];

  const filteredMembers = filter === 'all' 
    ? teamMembers 
    : teamMembers.filter(m => m.category === filter);

  return (
    <section id="team" className="pb-20 pt-2 px-6 md:px-12 max-w-6xl mx-auto w-full flex justify-center">
      <div className="w-full space-y-10">
        
        {/* Filter Pills Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
              filter === 'all'
                ? 'bg-orange-500 text-white shadow-[0_0_20px_rgba(255,69,0,0.4)]'
                : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            All Office Bearers ({teamMembers.length})
          </button>
          <button
            onClick={() => setFilter('board')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
              filter === 'board'
                ? 'bg-orange-500 text-white shadow-[0_0_20px_rgba(255,69,0,0.4)]'
                : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            Executive Officers (6)
          </button>
          <button
            onClick={() => setFilter('committee')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
              filter === 'committee'
                ? 'bg-orange-500 text-white shadow-[0_0_20px_rgba(255,69,0,0.4)]'
                : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            Executive Members (5)
          </button>
        </div>

        {/* 11 Office Bearers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMembers.map((member, index) => {
            const [imgError, setImgError] = useState(false);

            return (
              <div 
                key={index} 
                className="card-jaswanth-24 flex flex-col justify-between group text-center sm:text-left hover:border-orange-500/40 transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div>
                  {/* Photo / Avatar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300 relative">
                      {member.image && !imgError ? (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={() => setImgError(true)}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-500/20 via-neutral-900 to-neutral-950 text-orange-400 font-heading font-black text-lg">
                          {member.initials}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {member.whatsapp && (
                        <a 
                          href={member.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all"
                          title="WhatsApp Contact"
                        >
                          <WhatsAppIcon className="w-4 h-4" />
                        </a>
                      )}
                      {member.instagram && (
                        <a 
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-pink-400 hover:bg-pink-600 hover:text-white transition-all"
                          title="Instagram Profile"
                        >
                          <InstagramIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Role */}
                  <span className="role-tag block mb-1">
                    {member.role}
                  </span>

                  {/* Name */}
                  <h3 className="text-base sm:text-lg font-bold font-heading text-white leading-snug group-hover:text-orange-400 transition-colors">
                    {member.name}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-500 font-medium">
                  <span>NSRIET Mechanical</span>
                  <span className="text-orange-400 font-bold uppercase tracking-widest text-[9px]">ESTD 2025</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
