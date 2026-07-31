'use client';

import React, { useState } from 'react';
import { Star, Mail } from 'lucide-react';

export const DepartmentSection = ({ openOfficialMessage }) => {
  const facultyList = [
    { name: 'Mr. T. Suresh Babu', role: 'Assistant Professor', dept: 'Mechanical Engineering', initials: 'SB', image: '/assets/Suresh.jpg' },
    { name: 'Dr. T. Ravi Teja', role: 'Assistant Professor', dept: 'Mechanical Engineering', initials: 'RT', image: '/assets/Ravi Teja.jpg' },
    { name: 'Mrs. K. Sridevi', role: 'Assistant Professor', dept: 'Mechanical Engineering', initials: 'KS' },
    { name: 'Mrs. A. Padmaja', role: 'Assistant Professor', dept: 'Mechanical Engineering', initials: 'AP' },
  ];

  const [hodErr, setHodErr] = useState(false);
  const [balaErr, setBalaErr] = useState(false);

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 md:px-12 w-full flex justify-center bg-[#090909]">
      <div className="max-w-6xl w-full space-y-24">
        
        {/* --- 1. Head of Department --- */}
        <div className="w-full">
          <div className="flex flex-col items-center text-center space-y-3 mb-12">
            <span className="role-tag">DEPARTMENT LEADERSHIP</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Head of <span className="text-[#F97316]">Department</span>
            </h2>
            <div className="w-12 h-[3px] bg-[#F97316] rounded-full my-2" />
          </div>

          <div className="bg-[#141414]/30 border border-[#2F2F2F] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8 text-center md:text-left group">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden bg-[#090909] border border-[#2F2F2F] shrink-0 relative">
              {!hodErr ? (
                <img 
                  src="/assets/Hod.jpg" 
                  alt="Mr. B. Ramanjaneyulu (HOD)"
                  className="w-full h-full object-cover rounded-2xl"
                  onError={() => setHodErr(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#141414] rounded-2xl text-[#F97316] font-heading font-black text-4xl">
                  BR
                </div>
              )}
            </div>

            <div className="space-y-3">
              <span className="role-tag">
                Head of Department (Mechanical)
              </span>
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-white group-hover:text-[#F97316]">
                Mr. B. Ramanjaneyulu
              </h3>
              <p className="text-[#B3B3B3] text-sm md:text-base leading-relaxed font-light">
                As Head of the Mechanical Engineering Department at NSRIET, Mr. B. Ramanjaneyulu provides visionary guidance to student innovations. Under his stewardship, the department fosters hands-on technical learning, industrial exposure, and active student guild participation to produce future-ready engineers.
              </p>

              {openOfficialMessage && (
                <div className="pt-4 flex justify-center md:justify-start">
                  <button
                    onClick={() => openOfficialMessage({
                      id: 'hod',
                      role: 'Head of Department',
                      name: 'Mr. B. Ramanjaneyulu',
                      qualification: 'Assistant Professor & HOD',
                      institution: 'N S Raju Institute of Engineering and Technology',
                      image: '/assets/Hod.jpg',
                      initials: 'BR',
                      message: `"It gives me great pleasure to present the launch of our Mechanical Engineering Guild Association. This association aims to bring together the achievements, activities, and creative contributions of our faculty and students under one dynamic platform. I deeply appreciate the efforts of the organizing team and all contributors who made this possible. I hope this initiative inspires everyone to pursue excellence, foster teamwork, and uphold the values of our institution."`
                    })}
                    className="btn-jaswanth-secondary w-full md:w-auto justify-center text-xs"
                  >
                    <Mail className="w-4 h-4 text-[#F97316]" />
                    <span>Read Official Message</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* --- 2. Our Faculty --- */}
        <div className="w-full">
          <div className="flex flex-col items-center text-center space-y-3 mb-12">
            <span className="role-tag">FACULTY MENTORS</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Our <span className="text-[#F97316]">Faculty</span>
            </h2>
            <p className="text-[#B3B3B3] text-base md:text-lg tracking-wide font-light max-w-2xl">
              Dedicated professors guiding mechanical engineering students toward brilliance.
            </p>
            <div className="w-12 h-[3px] bg-[#F97316] rounded-full my-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {facultyList.map((faculty, idx) => {
              const [fErr, setFErr] = useState(false);
              return (
                <div key={idx} className="bg-[#141414]/30 border border-[#2F2F2F] rounded-2xl p-6 flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-[#090909] border border-[#2F2F2F] mb-4 shrink-0 relative">
                    {faculty.image && !fErr ? (
                      <img 
                        src={faculty.image} 
                        alt={faculty.name}
                        className="w-full h-full object-cover rounded-2xl"
                        onError={() => setFErr(true)}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#141414] rounded-2xl text-[#F97316] font-heading font-black text-xl">
                        {faculty.initials}
                      </div>
                    )}
                  </div>
                  <h4 className="text-base font-bold font-heading text-white group-hover:text-[#F97316]">
                    {faculty.name}
                  </h4>
                  <p className="text-[#F97316] text-xs font-semibold mt-1">
                    {faculty.role}
                  </p>
                  <p className="text-[#B3B3B3] text-[11px] mt-1 font-light">
                    {faculty.dept}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- 3. Ex Student Club Co-Ordinator --- */}
        <div className="w-full">
          <div className="bg-[#141414]/30 border border-[#2F2F2F] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left group">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-[#090909] border border-[#2F2F2F] shrink-0 relative">
              {!balaErr ? (
                <img 
                  src="/assets/Bala Mam.jpg" 
                  alt="Ms. M. V. Baleswari"
                  className="w-full h-full object-cover rounded-2xl"
                  onError={() => setBalaErr(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#141414] rounded-2xl text-[#F97316] font-heading font-black text-2xl">
                  MB
                </div>
              )}
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-[#F97316] font-extrabold text-xs tracking-widest uppercase font-heading">
                <Star className="w-3.5 h-3.5 text-[#F97316]" />
                Ex Student Club Co-Ordinator
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-[#F97316]">
                Ms. M. V. Baleswari <span className="text-xs font-semibold text-[#B3B3B3] font-body">(M.Tech)</span>
              </h3>
              <p className="text-xs font-bold text-[#F97316]">
                Assistant Professor (Mechanical Engineering Department)
              </p>
              <p className="text-[#B3B3B3] text-xs sm:text-sm leading-relaxed pt-1 font-light">
                Foundational mentor and guide who played an invaluable role in organizing student activities and establishing the guild's core framework.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
