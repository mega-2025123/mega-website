'use client';

import React, { useState } from 'react';
import { InstagramIcon, WhatsAppIcon } from './Icons';
import { Eye, X } from 'lucide-react';

export const TeamGrid = () => {
  const [selectedMember, setSelectedMember] = useState(null);

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
    <section id="team" className="pb-24 pt-4 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto w-full flex justify-center bg-[#090909]">
      <div className="w-full space-y-12">
        
        {/* 11 Office Bearers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => {
            const [imgError, setImgError] = useState(false);

            return (
              <div 
                key={index} 
                className="bg-[#141414]/30 border border-[#2F2F2F] rounded-2xl p-5 flex flex-col justify-between group hover:border-[#F97316] transition-all duration-300"
              >
                <div>
                  {/* Larger Photo Avatar Container with Hover Lightbox Trigger */}
                  <div 
                    onClick={() => setSelectedMember(member)}
                    className="w-full h-52 sm:h-56 rounded-xl overflow-hidden bg-[#090909] border border-[#2F2F2F] mb-4 relative cursor-pointer group/img shrink-0"
                  >
                    {member.image && !imgError ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover/img:scale-105"
                        onError={() => setImgError(true)}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#141414] rounded-xl text-[#F97316] font-heading font-black text-3xl">
                        {member.initials}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 flex items-center justify-center gap-2 text-white font-medium text-xs rounded-xl transition-opacity duration-200">
                      <Eye className="w-4 h-4 text-[#F97316]" />
                      <span>Click to Preview</span>
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

                {/* Footer Meta & Social Buttons */}
                <div className="mt-4 pt-3 border-t border-[#2F2F2F] flex items-center justify-between">
                  <span className="text-[#B3B3B3] text-[11px] font-medium">NSRIET Mechanical</span>
                  
                  <div className="flex items-center gap-2">
                    {member.whatsapp && (
                      <a 
                        href={member.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full bg-[#141414] border border-[#2F2F2F] flex items-center justify-center text-white hover:border-[#F97316]"
                        title="WhatsApp Contact"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.instagram && (
                      <a 
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full bg-[#141414] border border-[#2F2F2F] flex items-center justify-center text-white hover:border-[#F97316]"
                        title="Instagram Profile"
                      >
                        <InstagramIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Member Lightbox Preview Modal */}
        {selectedMember && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-8">
            <div className="relative max-w-md w-full bg-[#141414] border border-[#2F2F2F] rounded-3xl p-6 overflow-hidden shadow-2xl space-y-4 text-center">
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 text-[#B3B3B3] hover:text-white p-2 rounded-full bg-[#090909] border border-[#2F2F2F] z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full h-72 rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-[#2F2F2F]">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              <div className="space-y-2 pt-2">
                <span className="role-tag block">{selectedMember.role}</span>
                <h3 className="text-2xl font-bold text-white font-heading">{selectedMember.name}</h3>
                <p className="text-xs text-[#B3B3B3]">N S Raju Institute of Engineering and Technology</p>
              </div>

              <div className="flex justify-center items-center gap-3 pt-2">
                {selectedMember.whatsapp && (
                  <a 
                    href={selectedMember.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-jaswanth-secondary text-xs px-4 py-2"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>
                )}
                {selectedMember.instagram && (
                  <a 
                    href={selectedMember.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-jaswanth-secondary text-xs px-4 py-2"
                  >
                    <InstagramIcon className="w-4 h-4 text-[#F97316]" />
                    <span>Instagram</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
