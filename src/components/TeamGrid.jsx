'use client';

import React, { useState } from 'react';
import { InstagramIcon, WhatsAppIcon } from './Icons';

export const TeamGrid = () => {
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

  return (
    <section id="team" className="pb-20 pt-2 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto w-full flex justify-center bg-[#090909]">
      <div className="w-full space-y-10">
        
        {/* 11 Office Bearers Grid */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-10">
          {teamMembers.map((member, index) => {
            const [imgError, setImgError] = useState(false);

            return (
              <div 
                key={index} 
                className="card-jaswanth-24 flex flex-col justify-between group text-center sm:text-left hover:border-[#F97316] w-full sm:w-[calc(50%-1.25rem)] md:w-[calc(33.333%-1.75rem)] lg:w-[calc(25%-1.875rem)]"
              >
                <div>
                  {/* Photo / Avatar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden border border-[#2F2F2F] bg-[#090909] shrink-0 shadow-md relative">
                      {member.image && !imgError ? (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={() => setImgError(true)}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[#090909] border border-[#2F2F2F] text-[#F97316] font-heading font-black text-xl">
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
                          className="w-8 h-8 rounded-full bg-[#090909] border border-[#2F2F2F] flex items-center justify-center text-white hover:border-[#F97316]"
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
                          className="w-8 h-8 rounded-full bg-[#090909] border border-[#2F2F2F] flex items-center justify-center text-white hover:border-[#F97316]"
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
                  <h3 className="text-base sm:text-lg font-bold font-heading text-white leading-snug group-hover:text-[#F97316]">
                    {member.name}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-[#2F2F2F] flex items-center justify-between text-[11px] text-[#B3B3B3] font-medium">
                  <span>NSRIET Mechanical</span>
                  <span className="text-[#F97316] font-bold uppercase tracking-widest text-[9px]">ESTD 2025</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
