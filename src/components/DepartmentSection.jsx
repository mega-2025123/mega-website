'use client';

import React, { useState } from 'react';
import { Star, GraduationCap, Award } from 'lucide-react';

export const DepartmentSection = () => {
  const facultyList = [
    { name: 'Mr. T. Suresh Babu', role: 'Assistant Professor', dept: 'Mechanical Engineering', initials: 'SB', image: '/assets/Suresh.jpg' },
    { name: 'Dr. T. Ravi Teja', role: 'Assistant Professor', dept: 'Mechanical Engineering', initials: 'RT', image: '/assets/Ravi Teja.jpg' },
    { name: 'Mrs. K. Sridevi', role: 'Assistant Professor', dept: 'Mechanical Engineering', initials: 'KS' },
    { name: 'Mrs. A. Padmaja', role: 'Assistant Professor', dept: 'Mechanical Engineering', initials: 'AP' },
  ];

  const [hodErr, setHodErr] = useState(false);
  const [balaErr, setBalaErr] = useState(false);

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 w-full flex justify-center">
      <div className="max-w-6xl w-full space-y-20">
        
        {/* --- 1. Head of Department --- */}
        <div className="w-full">
          <div className="flex flex-col items-center text-center space-y-3 mb-10">
            <span className="role-tag">DEPARTMENT LEADERSHIP</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Head of <span className="shimmer-text">Department</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full my-2 shadow-[0_0_12px_rgba(255,69,0,0.5)]" />
          </div>

          <div className="card-jaswanth-24 flex flex-col md:flex-row items-center gap-8 text-center md:text-left group hover:border-orange-500/40 transition-all duration-300">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shrink-0 shadow-2xl relative group-hover:scale-105 transition-transform duration-300">
              {!hodErr ? (
                <img 
                  src="/assets/Hod.jpg" 
                  alt="Mr. B. Ramanjaneyulu (HOD)"
                  className="w-full h-full object-cover"
                  onError={() => setHodErr(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-500/25 via-neutral-900 to-neutral-950 border border-orange-500/30 text-orange-400 font-heading font-black text-4xl shadow-inner">
                  BR
                </div>
              )}
            </div>

            <div className="space-y-3">
              <span className="role-tag">
                Head of Department (Mechanical)
              </span>
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-white group-hover:text-orange-400 transition-colors">
                Mr. B. Ramanjaneyulu
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
                As Head of the Mechanical Engineering Department at NSRIET, Mr. B. Ramanjaneyulu provides visionary guidance to student innovations. Under his stewardship, the department fosters hands-on technical learning, industrial exposure, and active student guild participation to produce future-ready engineers.
              </p>
            </div>
          </div>
        </div>

        {/* --- 2. Our Faculty --- */}
        <div className="w-full">
          <div className="flex flex-col items-center text-center space-y-3 mb-12">
            <span className="role-tag">FACULTY MENTORS</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Our <span className="shimmer-text">Faculty</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg tracking-wide font-light max-w-2xl">
              Dedicated professors guiding mechanical engineering students toward brilliance.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full my-2 shadow-[0_0_12px_rgba(255,69,0,0.5)]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyList.map((faculty, idx) => {
              const [fErr, setFErr] = useState(false);
              return (
                <div key={idx} className="card-jaswanth-24 flex flex-col items-center text-center group hover:border-orange-500/40 transition-all duration-300">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 mb-4 shrink-0 shadow-md relative group-hover:scale-105 transition-transform duration-300">
                    {faculty.image && !fErr ? (
                      <img 
                        src={faculty.image} 
                        alt={faculty.name}
                        className="w-full h-full object-cover"
                        onError={() => setFErr(true)}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-500/20 via-neutral-900 to-neutral-950 border border-orange-500/30 text-orange-400 font-heading font-black text-xl shadow-inner">
                        {faculty.initials}
                      </div>
                    )}
                  </div>
                  <h4 className="text-base font-bold font-heading text-white group-hover:text-orange-400 transition-colors">
                    {faculty.name}
                  </h4>
                  <p className="text-orange-400 text-xs font-semibold mt-1">
                    {faculty.role}
                  </p>
                  <p className="text-gray-400 text-[11px] mt-1 font-light">
                    {faculty.dept}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- 3. Ex Student Club Co-Ordinator --- */}
        <div className="w-full">
          <div className="card-jaswanth-24 fire-border-left flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left group hover:border-orange-500/40 transition-all duration-300">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shrink-0 shadow-xl relative group-hover:scale-105 transition-transform duration-300">
              {!balaErr ? (
                <img 
                  src="/assets/Bala Mam.jpg" 
                  alt="Ms. M. V. Baleswari"
                  className="w-full h-full object-cover"
                  onError={() => setBalaErr(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-500/25 via-neutral-900 to-neutral-950 border border-orange-500/30 text-orange-400 font-heading font-black text-2xl shadow-inner">
                  MB
                </div>
              )}
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-orange-400 font-extrabold text-xs tracking-widest uppercase font-heading">
                <Star className="w-3.5 h-3.5" />
                Ex Student Club Co-Ordinator
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-orange-400 transition-colors">
                Ms. M. V. Baleswari <span className="text-xs font-semibold text-gray-400 font-body">(M.Tech)</span>
              </h3>
              <p className="text-xs font-bold text-orange-400">
                Assistant Professor (Mechanical Engineering Department)
              </p>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed pt-1 font-light">
                Foundational mentor and guide who played an invaluable role in organizing student activities and establishing the guild's core framework.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
