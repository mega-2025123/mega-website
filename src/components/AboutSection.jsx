'use client';

import React from 'react';
import { InstagramIcon } from './Icons';
import { Sparkles } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about-vision" className="w-full pb-16 pt-6 px-4 sm:px-6 md:px-12 flex justify-center bg-[#090909]">
      <div className="max-w-5xl w-full text-center space-y-8">
        
        {/* Header Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-[#F97316]/50 text-[#F97316] text-xs font-bold uppercase tracking-[0.2em]">
          <Sparkles className="w-3.5 h-3.5 text-[#FF8A00]" />
          <span className="text-white">Our Founding Story & Vision</span>
        </div>

        {/* Sub-headline */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Uniting Passion, Hands-on Innovation, & <span className="text-[#F97316]">Technical Excellence</span>
        </h2>

        {/* Paragraph Text */}
        <p className="text-[#B3B3B3] font-light text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
          Established in 2025 at <strong className="text-white font-medium">N S Raju Institute of Engineering and Technology (NSRIET)</strong>, the <strong className="text-white font-medium">Mechanical Engineering Guild Association (MEGA)</strong> was founded by passionate student leaders. Built on a bedrock of unity, teamwork, and engineering precision, MEGA serves as a dynamic springboard where academic theory meets real-world industrial application.
        </p>

        {/* Guild Motto Clean Text */}
        <div className="w-full py-8 text-center border-y border-[#2F2F2F] my-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#F97316] block mb-2">
            Official Guild Motto
          </span>
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-heading">
            "One Guild, <span className="text-[#F97316]">Infinite Possibilities</span>"
          </h3>
        </div>

        {/* Instagram Link */}
        <div className="pt-2 flex justify-center">
          <a
            href="https://www.instagram.com/mega.estd.2025"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-jaswanth-secondary group"
          >
            <div className="w-6 h-6 rounded-full bg-[#1C1C1C] border border-[#2F2F2F] p-0.5 flex items-center justify-center">
              <InstagramIcon className="w-3.5 h-3.5 text-[#F97316]" />
            </div>
            <span>Follow Guild @mega.estd.2025</span>
          </a>
        </div>

      </div>
    </section>
  );
};
