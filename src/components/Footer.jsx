'use client';

import React from 'react';
import Link from 'next/link';
import { MegaLogo } from './Logos';
import { InstagramIcon } from './Icons';
import { MapPin, Sparkles } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#020202] pt-16 pb-12 px-4 sm:px-6 md:px-12 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Footer Container Card */}
        <div className="bg-[#0c0c0c] border border-white/5 rounded-[32px] p-8 sm:p-12 space-y-10 shadow-2xl relative overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute -top-1/2 -right-1/4 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Brand Col - spans 5 cols */}
            <div className="lg:col-span-5 space-y-6">
              <MegaLogo showText={true} />
              <p className="text-gray-400 text-sm font-light leading-relaxed max-w-sm">
                Mechanical Engineering Guild Association (MEGA) — NSRIET, Visakhapatnam. Connecting mechanical students, fostering innovation, and bridging academic learning with industry realities.
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.instagram.com/mega.estd.2025" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-400 hover:border-orange-400/40 hover:bg-orange-500/10 transition-all duration-300"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 1: Quick Links - spans 2 cols */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-white text-sm font-bold uppercase tracking-wider">
                Quick Links
              </h4>
              <div className="flex flex-col space-y-2.5 text-sm text-gray-400 font-medium">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About Us', path: '/about' },
                  { name: 'Executive Team', path: '/team' },
                  { name: 'Notifications', path: '/notifications' },
                ].map((link) => (
                  <Link 
                    key={link.name}
                    href={link.path} 
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 2: Activities - spans 2 cols */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-white text-sm font-bold uppercase tracking-wider">
                Activities
              </h4>
              <div className="flex flex-col space-y-2.5 text-sm text-gray-400 font-medium">
                {[
                  { name: 'Blog', path: '/blog' },
                  { name: 'Events', path: '/events' },
                  { name: 'Newsletters', path: '/newsletters' },
                ].map((link) => (
                  <Link 
                    key={link.name}
                    href={link.path} 
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 3: Location - spans 3 cols */}
            <div className="lg:col-span-3 space-y-4 text-sm text-gray-400 font-light">
              <h4 className="text-white font-bold uppercase tracking-wider">
                Location
              </h4>
              <div className="space-y-3">
                <p className="flex items-start gap-2.5 leading-relaxed">
                  <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span>
                    N S Raju Institute of Engineering and Technology, Dakamarri (V), Bheemunipatnam (M), Visakhapatnam (D), Andhra Pradesh.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-white/5" />

          {/* Bottom Credits & Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium w-full">
            <p>© {currentYear} MEGA NSRIET. All rights reserved.</p>
            <p className="flex items-center gap-1.5 text-gray-400">
              <Sparkles className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
              <span>Designed and Created By Mechanical Students</span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};
