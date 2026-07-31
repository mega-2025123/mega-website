'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Users, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="w-full min-h-screen flex flex-col items-center justify-center pt-24 md:pt-28 pb-16 px-4 sm:px-6 md:px-12 relative text-center overflow-hidden bg-[#090909]">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center z-10">
        
        {/* High-Contrast Visible Tracking Badge sitting right below floating navbar */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#141414] border border-[#F97316]/50 text-xs md:text-sm font-extrabold uppercase tracking-wider shadow-lg mb-4">
          <Sparkles className="w-4 h-4 text-[#FF8A00]" />
          <span className="text-white">WELCOME TO OUR ASSOCIATION</span>
          <span className="text-[#FF8A00] font-black">•</span>
          <span className="text-[#FF8A00]">ESTD 2025</span>
        </div>

        {/* Big Guild Logo White Text Image */}
        <div className="relative group cursor-pointer my-3 sm:my-4 flex justify-center items-center">
          <img 
            src="/assets/Logo White Text.png" 
            alt="MEGA Guild Logo White Text" 
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px] object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Title: Mechanical Engineering Guild Association */}
        <div className="space-y-2 w-full max-w-5xl my-3">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-normal text-white leading-tight">
            MECHANICAL ENGINEERING
          </h1>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-normal leading-tight text-[#F97316]">
            GUILD ASSOCIATION
          </h1>
        </div>

        {/* Subtitle */}
        <h2 className="text-sm sm:text-lg md:text-xl text-[#B3B3B3] font-light max-w-3xl leading-relaxed my-2">
          The official student guild of Mechanical Engineering at&nbsp;
          <span className="text-white font-semibold">N S Raju Institute of Engineering and Technology</span>
        </h2>

        {/* Quote */}
        <p className="italic text-xs sm:text-sm md:text-base text-[#B3B3B3]/90 max-w-2xl mx-auto leading-relaxed my-2">
          "Building innovative solutions through Mechanical Design, Automation, Teamwork, and Engineering Excellence."
        </p>

        {/* CTA Buttons - Explore Guild & Executive Team */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
          <Link href="/about" className="btn-jaswanth-primary group w-full max-w-[240px] sm:w-auto px-7 py-3 text-sm md:text-base">
            <span>Explore Guild</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/team" className="btn-jaswanth-secondary w-full max-w-[240px] sm:w-auto px-7 py-3 text-sm md:text-base">
            <Users className="w-4 h-4 text-[#F97316]" />
            <span>Executive Team</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
