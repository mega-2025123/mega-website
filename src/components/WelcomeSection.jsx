'use client';

import React from 'react';
import { Cog, Wrench, Lightbulb, Compass, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const WelcomeSection = () => {
  const pillars = [
    { 
      icon: <Cog className="w-6 h-6 text-[#F97316]" />, 
      title: 'Innovation & Design',
      desc: 'Hands-on CAD modeling, rapid 3D prototyping, and mechanical automation projects.'
    },
    { 
      icon: <Wrench className="w-6 h-6 text-[#F97316]" />, 
      title: 'Student Leadership',
      desc: 'Driven by 11 student executive office bearers steering technical symposiums.'
    },
    { 
      icon: <Lightbulb className="w-6 h-6 text-[#F97316]" />, 
      title: 'Technical Excellence',
      desc: 'Guided by expert faculty mentors and industry-aligned training workshops.'
    },
    { 
      icon: <Compass className="w-6 h-6 text-[#F97316]" />, 
      title: 'Mechanical Guild',
      desc: 'Fostering unity, teamwork, and unstoppable creativity among engineering students.'
    },
  ];

  return (
    <section id="welcome" className="w-full pt-16 pb-16 md:pb-24 px-4 sm:px-6 md:px-12 flex justify-center bg-[#090909]">
      <div className="max-w-6xl w-full space-y-10 text-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center space-y-3">
          <span className="role-tag">DISCOVER MEGA</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Welcome to Our <span className="text-[#F97316]">Association</span>
          </h2>
          <p className="text-[#B3B3B3] text-base md:text-lg tracking-wide font-light max-w-2xl">
            Driven by curiosity. Defined by engineering precision.
          </p>
          <div className="section-divider-line mt-2" />
        </div>

        {/* Featured Text */}
        <div className="space-y-4 max-w-3xl mx-auto py-4">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F97316] bg-[#141414] border border-[#F97316]/40 px-3.5 py-1 rounded-full">
            ESTABLISHED 2025 • NSRIET
          </span>
          <p className="text-[#B3B3B3] font-light text-lg md:text-xl leading-relaxed">
            Welcome to the official portal of <strong className="text-white font-semibold">MEGA (Mechanical Engineering Guild Association)</strong>. Here, you'll find real-time updates on upcoming events, industrial workshops, and highlights from our technical achievements. We invite you to explore and stay connected!
          </p>
        </div>

        {/* 4 Feature Pillars Grid - No Card Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left py-6 border-t border-[#2F2F2F]">
          {pillars.map((p, i) => (
            <div key={i} className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#141414] border border-[#2F2F2F] flex items-center justify-center">
                {p.icon}
              </div>
              <h3 className="text-base font-bold text-white">
                {p.title}
              </h3>
              <p className="text-xs text-[#B3B3B3] leading-relaxed font-light">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="pt-2 flex justify-center">
          <Link href="/about" className="btn-jaswanth-secondary group">
            <span>Learn More About Our Guild</span>
            <ArrowRight className="w-4 h-4 text-[#F97316]" />
          </Link>
        </div>

      </div>
    </section>
  );
};
