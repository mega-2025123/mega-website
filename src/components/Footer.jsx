'use client';

import React from 'react';
import Link from 'next/link';
import { MegaLogo } from './Logos';
import { InstagramIcon } from './Icons';
import { MapPin, Sparkles } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050505] border-t border-white/8 pt-16 pb-12 px-4 sm:px-6 md:px-12 relative z-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-10">
        
        {/* Brand Column Centered */}
        <div className="flex flex-col items-center space-y-4">
          <MegaLogo showText={true} />
          <p className="text-gray-500 text-sm font-light leading-relaxed max-w-md">
            Mechanical Engineering Guild Association (MEGA) — NSRIET, Visakhapatnam. Established 2025.
          </p>
        </div>

        {/* Navigation Links Inline */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-500 font-medium max-w-2xl">
          {[
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about' },
            { name: 'Executive Team', path: '/team' },
            { name: 'Notifications', path: '/notifications' },
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

        {/* Address & Social Centered */}
        <div className="flex flex-col items-center space-y-6 text-sm text-gray-500 font-light max-w-2xl">
          <div className="flex flex-col items-center space-y-2.5">
            <div className="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
              <MapPin className="w-4 h-4" />
            </div>
            <p className="max-w-xl leading-relaxed">
              N S Raju Institute of Engineering and Technology, Dakamarri (V), Bheemunipatnam (M), Visakhapatnam (D), Andhra Pradesh.
            </p>
          </div>

          <a 
            href="https://www.instagram.com/mega.estd.2025" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-orange-400 font-semibold hover:text-white transition-colors"
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-500 via-rose-500 to-purple-600 p-0.5 flex items-center justify-center">
              <InstagramIcon className="w-3.5 h-3.5 text-white" />
            </div>
            <span>@mega.estd.2025</span>
          </a>
        </div>

        <div className="h-px w-full bg-white/8" />

        {/* Bottom Credits & Copyright Centered */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600 font-medium w-full">
          <p>© {currentYear} MEGA NSRIET. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-gray-500">
            <Sparkles className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
            <span>Designed and Created By Mechanical Students</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
