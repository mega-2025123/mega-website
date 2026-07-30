'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Users, Sparkles } from 'lucide-react';

export const Hero = () => {
  const [heroImgError, setHeroImgError] = useState(false);

  return (
    <section id="home" className="w-full min-h-[calc(100vh-6rem)] flex items-center justify-center pt-28 md:pt-36 pb-24 px-4 sm:px-6 md:px-12 relative text-center overflow-hidden bg-[#090909]">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center z-10 space-y-10">
        {/* Spacer to push content below floating navbar */}
        <div className="h-16 md:h-24 shrink-0" />
        
        {/* Tracking Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C1C1C] border border-[#2F2F2F] text-[#F97316] text-xs md:text-sm font-bold uppercase tracking-[0.2em] shadow-md animate-fadeInUp">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Welcome to Our Association • Estd 2025</span>
        </div>

        {/* Logo Emblem with soft radial orange glow ONLY behind logo */}
        <div className="relative group cursor-pointer animate-scaleIn delay-200">
          {/* Soft orange glow behind logo */}
          <div className="absolute inset-0 -m-6 rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.18),transparent_70%)] pointer-events-none" />

          <div className="animate-float relative z-10">
            <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-[#1C1C1C] border border-[#2F2F2F] p-4 flex items-center justify-center shadow-2xl group-hover:border-[#F97316] transition-all duration-300">
              {!heroImgError ? (
                <img 
                  src="/assets/Logo.jpg" 
                  alt="MEGA Guild Logo" 
                  className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                  onError={() => setHeroImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-heading font-black text-4xl text-[#F97316]">
                  MEGA
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Title: Pure White heading, only GUILD ASSOCIATION in orange */}
        <div className="space-y-3 animate-fadeInUp delay-300 w-full max-w-4xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[1.08]">
            MECHANICAL ENGINEERING
          </h1>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.08] text-[#F97316]">
            GUILD ASSOCIATION
          </h1>
        </div>

        {/* Subtitle */}
        <h2 className="text-base sm:text-xl md:text-2xl text-[#B3B3B3] font-light max-w-3xl leading-relaxed animate-fadeInUp delay-400">
          The official student guild of Mechanical Engineering at&nbsp;
          <span className="text-white font-semibold">N S Raju Institute of Engineering and Technology</span>
        </h2>

        {/* Quote */}
        <p className="italic text-sm sm:text-base md:text-lg text-[#B3B3B3]/80 max-w-2xl mx-auto leading-relaxed animate-fadeIn delay-500">
          "Building innovative solutions through Mechanical Design, Automation, Teamwork, and Engineering Excellence."
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fadeInUp delay-600 w-full sm:w-auto">
          <Link href="/about" className="btn-jaswanth-primary group w-full max-w-[260px] sm:w-auto">
            <span>Explore Guild</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/team" className="btn-jaswanth-secondary w-full max-w-[260px] sm:w-auto">
            <Users className="w-4 h-4 text-[#F97316]" />
            <span>Executive Team</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
