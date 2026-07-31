'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Users, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="w-full min-h-[calc(100vh-80px)] mt-[80px] flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 relative text-center overflow-hidden bg-[#090909]">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center my-auto py-4">
        
        {/* Tracking Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#141414] border border-[#F97316]/50 text-xs md:text-sm font-extrabold uppercase tracking-wider shadow-lg mb-3">
          <Sparkles className="w-4 h-4 text-[#FF8A00]" />
          <span className="text-white">WELCOME TO OUR ASSOCIATION</span>
          <span className="text-[#FF8A00] font-black">•</span>
          <span className="text-[#FF8A00]">ESTD 2025</span>
        </div>

        {/* Guild Logo White Text Image */}
        <div className="relative group cursor-pointer my-2 flex justify-center items-center">
          <img 
            src="/assets/Logo White Text.png" 
            alt="MEGA Guild Logo White Text" 
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[300px] md:h-[300px] lg:w-[340px] lg:h-[340px] object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Title: Mechanical Engineering Guild Association */}
        <div className="space-y-1.5 w-full max-w-5xl my-2">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-normal text-white leading-tight">
            MECHANICAL ENGINEERING
          </h1>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-normal leading-tight text-[#F97316]">
            GUILD ASSOCIATION
          </h1>
        </div>

        {/* Subtitle */}
        <h2 className="text-xs sm:text-base md:text-lg text-[#B3B3B3] font-light max-w-3xl leading-relaxed my-2">
          The official student guild of Mechanical Engineering at&nbsp;
          <span className="text-white font-semibold">N S Raju Institute of Engineering and Technology</span>
        </h2>

        {/* Quote */}
        <p className="italic text-xs sm:text-sm text-[#B3B3B3]/90 max-w-2xl mx-auto leading-relaxed my-1.5">
          "Building innovative solutions through Mechanical Design, Automation, Teamwork, and Engineering Excellence."
        </p>

        {/* CTA Buttons - Explore Guild & Executive Team */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3 w-full sm:w-auto">
          <Link href="/about" className="btn-jaswanth-primary group w-full max-w-[220px] sm:w-auto px-7 py-3 text-xs md:text-sm">
            <span>Explore Guild</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/team" className="btn-jaswanth-secondary w-full max-w-[220px] sm:w-auto px-7 py-3 text-xs md:text-sm">
            <Users className="w-4 h-4 text-[#F97316]" />
            <span>Executive Team</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
