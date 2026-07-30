'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Users, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="w-full min-h-[calc(100vh-6rem)] flex items-center justify-center pt-28 md:pt-36 pb-28 px-4 sm:px-6 md:px-12 relative text-center overflow-hidden bg-[#090909]">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center z-10">
        {/* Spacer to push content below floating navbar */}
        <div className="h-12 md:h-20 shrink-0" />
        
        {/* Tracking Badge with generous bottom separation */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#1C1C1C] border border-[#2F2F2F] text-[#F97316] text-xs md:text-sm font-bold uppercase tracking-[0.25em] shadow-md mb-8 md:mb-12">
          <Sparkles className="w-4 h-4 text-[#F97316]" />
          <span>WELCOME TO OUR ASSOCIATION • ESTD 2025</span>
        </div>

        {/* Big Guild Video Emblem in Continuous Loop */}
        <div className="relative group cursor-pointer my-6 md:my-10 flex justify-center items-center">
          <video
            src="/assets/V.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-label="MEGA Guild Video Emblem"
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px] object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Title: Separated clearly from video and subtitle */}
        <div className="space-y-4 w-full max-w-5xl mt-6 md:mt-10 mb-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-normal text-white leading-tight">
            MECHANICAL ENGINEERING
          </h1>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-normal leading-tight text-[#F97316]">
            GUILD ASSOCIATION
          </h1>
        </div>

        {/* Subtitle with generous spacing */}
        <h2 className="text-base sm:text-xl md:text-2xl text-[#B3B3B3] font-light max-w-3xl leading-relaxed my-4">
          The official student guild of Mechanical Engineering at&nbsp;
          <span className="text-white font-semibold">N S Raju Institute of Engineering and Technology</span>
        </h2>

        {/* Quote */}
        <p className="italic text-sm sm:text-base md:text-lg text-[#B3B3B3]/90 max-w-2xl mx-auto leading-relaxed my-2">
          "Building innovative solutions through Mechanical Design, Automation, Teamwork, and Engineering Excellence."
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-8 w-full sm:w-auto">
          <Link href="/about" className="btn-jaswanth-primary group w-full max-w-[260px] sm:w-auto px-8 py-3.5 text-base">
            <span>Explore Guild</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/team" className="btn-jaswanth-secondary w-full max-w-[260px] sm:w-auto px-8 py-3.5 text-base">
            <Users className="w-4 h-4 text-[#F97316]" />
            <span>Executive Team</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
