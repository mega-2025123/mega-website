'use client';

import React, { useState } from 'react';
import { Mail, Award } from 'lucide-react';

export const CollegeOfficials = ({ openOfficialMessage }) => {
  const officials = [
    {
      id: 'secretary',
      role: 'Honorable Secretary',
      name: 'Dr. N. Prasada Raju',
      qualification: 'M.Tech, Ph.D (Mechanical Engineering)',
      institution: 'N S Raju Institute of Engineering and Technology',
      image: '/assets/Secreatry.jpg',
      initials: 'PR',
      message: `Best wishes to the Department of Mechanical Engineering for coming forward to launch the Mechanical Engineering Guild Association to bring together the talents and innovative spirit of its students and faculty. I am confident that this association will serve as a vibrant platform for all stakeholders to collaborate, share knowledge, and showcase their achievements. Hearty congratulations and best wishes once again to all the students, staff, and faculty of the Mechanical Engineering Department.`
    },
    {
      id: 'principal',
      role: 'Respected Principal',
      name: 'Dr. P. Govind Rao',
      qualification: 'M.Tech, Ph.D (Mechanical Engineering)',
      institution: 'N S Raju Institute of Engineering and Technology',
      image: '/assets/per.jpg',
      initials: 'GR',
      message: `I congratulate the Department of Mechanical Engineering and the organizing team for launching the Mechanical Engineering Guild Association. This association will undoubtedly serve as a platform to highlight the talents and achievements of the students and faculty of the department. I am confident that the Guild will inspire every Mechanical Engineering student to actively participate, collaborate, and showcase their skills in the days to come. Hearty wishes to all the students, staff, and faculty of the Mechanical Engineering Department.`
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 w-full flex justify-center">
      <div className="max-w-6xl w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <span className="role-tag">LEADERSHIP VISION</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Our College <span className="shimmer-text">Officials</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg tracking-wide font-light max-w-2xl">
            Guiding visionaries driving academic and technological excellence at NSRIET.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full my-2 shadow-[0_0_12px_rgba(255,69,0,0.5)]" />
        </div>

        {/* 2 Officials Grid - Unified max-w-6xl width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {officials.map((official) => {
            const [imgErr, setImgErr] = useState(false);

            return (
              <div 
                key={official.id}
                className="card-jaswanth-24 flex flex-col justify-between text-center sm:text-left group hover:border-orange-500/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="role-tag">{official.role}</span>
                    <div className="p-2 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
                      <Award className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shrink-0 shadow-xl relative group-hover:scale-105 transition-transform duration-300">
                      {!imgErr ? (
                        <img 
                          src={official.image}
                          alt={official.name}
                          className="w-full h-full object-cover"
                          onError={() => setImgErr(true)}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-500/25 via-neutral-900 to-neutral-950 border border-orange-500/30 text-orange-400 font-heading font-black text-3xl shadow-inner">
                          {official.initials}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-orange-400 transition-colors">
                        {official.name}
                      </h3>
                      <p className="text-orange-400 text-xs font-bold tracking-wide">
                        {official.qualification}
                      </p>
                      <p className="text-gray-400 text-xs font-light leading-relaxed">
                        {official.institution}
                      </p>
                    </div>
                  </div>
                </div>

                {official.message && openOfficialMessage && (
                  <div className="pt-6 border-t border-white/10">
                    <button
                      onClick={() => openOfficialMessage(official)}
                      className="btn-jaswanth-secondary w-full justify-center text-xs py-3"
                    >
                      <Mail className="w-4 h-4 text-orange-400" />
                      <span>Read Official Message</span>
                    </button>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
