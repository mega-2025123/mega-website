'use client';

import React from 'react';
import { Cog, Wrench, Lightbulb, Compass, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const WelcomeSection = () => {
  const pillars = [
    { 
      icon: <Cog className="w-6 h-6 text-orange-400" />, 
      title: 'Innovation & Design',
      desc: 'Hands-on CAD modeling, rapid 3D prototyping, and mechanical automation projects.'
    },
    { 
      icon: <Wrench className="w-6 h-6 text-orange-400" />, 
      title: 'Student Leadership',
      desc: 'Driven by 11 student executive office bearers steering technical symposiums.'
    },
    { 
      icon: <Lightbulb className="w-6 h-6 text-orange-400" />, 
      title: 'Technical Excellence',
      desc: 'Guided by expert faculty mentors and industry-aligned training workshops.'
    },
    { 
      icon: <Compass className="w-6 h-6 text-orange-400" />, 
      title: 'Mechanical Guild',
      desc: 'Fostering unity, teamwork, and unstoppable creativity among engineering students.'
    },
  ];

  return (
    <section id="welcome" className="w-full pt-40 md:pt-52 pb-20 md:pb-28 px-6 md:px-12 flex justify-center">
      <div className="max-w-6xl w-full space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 animate-fadeInUp">
          <span className="role-tag">DISCOVER MEGA</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Welcome to Our <span className="shimmer-text">Association</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg tracking-wide font-light max-w-2xl">
            Driven by curiosity. Defined by engineering precision.
          </p>
          <div className="section-divider-line mt-2" />
        </div>

        {/* Main Featured Banner Card */}
        <div className="card-jaswanth-24 text-center animate-fadeInUp delay-200">
          <div className="flex flex-col space-y-8">
            
            <div className="space-y-4 max-w-3xl mx-auto">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3.5 py-1 rounded-full">
                ESTABLISHED 2025 • NSRIET
              </span>
              <p className="text-gray-200 font-light text-lg md:text-xl leading-relaxed">
                Welcome to the official portal of <strong className="text-white font-semibold">MEGA (Mechanical Engineering Guild Association)</strong>. Here, you'll find real-time updates on upcoming events, industrial workshops, and highlights from our technical achievements. We invite you to explore and stay connected!
              </p>
            </div>

            <div className="h-px w-full bg-white/10" />

            {/* 4 Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {pillars.map((p, i) => (
                <div 
                  key={i} 
                  className="bg-[#111111]/80 border border-white/8 rounded-[24px] p-6 hover:border-orange-500/35 hover:bg-[#111111]/95 transition-all duration-300 hover:scale-[1.03] hover:translate-y-[-2px] shadow-lg flex flex-col justify-between backdrop-blur-md group"
                >
                  <div className="space-y-4">
                    <div className="w-11 h-11 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {p.icon}
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-light">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Link */}
            <div className="pt-2 flex justify-center">
              <Link href="/about" className="btn-jaswanth-secondary group">
                <span>Learn More About Our Guild</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-orange-400" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
