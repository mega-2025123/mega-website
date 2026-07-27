'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Users, Sparkles } from 'lucide-react';

export const Hero = () => {
  const [heroImgError, setHeroImgError] = useState(false);

  return (
    <section id="home" className="w-full min-h-[calc(100vh-8rem)] flex items-center justify-center pt-28 md:pt-36 pb-24 px-6 md:px-12 relative text-center">
      {/* Full-width Ambient Fire Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-b from-orange-500/12 via-orange-600/5 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center z-10 space-y-8">
        {/* Spacer to push content below floating navbar */}
        <div className="h-20 md:h-28 shrink-0" />
        
        {/* Tracking Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-orange-400 text-xs md:text-sm font-bold uppercase tracking-[0.2em] shadow-lg animate-fadeInUp">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Welcome to Our Association • Estd 2025</span>
        </div>

        {/* Logo Emblem with floating glow animation */}
        <div className="relative group cursor-pointer animate-scaleIn delay-200">
          <div className="animate-float">
            <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-[#111111]/90 border border-orange-500/30 p-6 flex items-center justify-center shadow-[0_0_50px_rgba(255,69,0,0.25)] group-hover:border-orange-500/60 group-hover:shadow-[0_0_70px_rgba(255,69,0,0.45)] transition-all duration-500 backdrop-blur-md">
              {!heroImgError ? (
                <img 
                  src="/assets/Logo.png" 
                  alt="MEGA Guild Logo" 
                  className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(255,69,0,0.4)] group-hover:scale-105 transition-all duration-500"
                  onError={() => setHeroImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-heading font-black text-4xl text-orange-500">
                  MEGA
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-3 animate-fadeInUp delay-300">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-white leading-[1.08]">
            MECHANICAL ENGINEERING
          </h1>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter leading-[1.08]">
            <span className="shimmer-text">GUILD ASSOCIATION</span>
          </h1>
        </div>

        {/* Subtitle */}
        <h2 className="text-base sm:text-xl md:text-2xl text-gray-300 font-light max-w-3xl leading-relaxed animate-fadeInUp delay-400">
          The official student guild of Mechanical Engineering at&nbsp;
          <span className="text-white font-semibold">N S Raju Institute of Engineering and Technology</span>
        </h2>

        {/* Quote */}
        <p className="italic text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fadeIn delay-500">
          "Building innovative solutions through Mechanical Design, Automation, Teamwork, and Engineering Excellence."
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fadeInUp delay-600 w-full sm:w-auto">
          <Link href="/about" className="btn-jaswanth-primary group w-full max-w-[260px] sm:w-auto">
            <span>Explore Guild</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/team" className="btn-jaswanth-secondary w-full max-w-[260px] sm:w-auto">
            <Users className="w-4 h-4 text-orange-400" />
            <span>Executive Team</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
