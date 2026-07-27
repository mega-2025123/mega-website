'use client';

import React from 'react';
import Link from 'next/link';
import { MegaLogo } from './Logos';
import { InstagramIcon } from './Icons';
import { MapPin, Sparkles } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050505] border-t border-white/8 pt-16 pb-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <MegaLogo showText={true} />
            <p className="text-gray-500 text-sm font-light leading-relaxed max-w-sm">
              Mechanical Engineering Guild Association (MEGA) — NSRIET, Visakhapatnam. Established 2025.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-2 text-sm text-gray-500 font-medium">
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
                  className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Address & Social */}
          <div className="space-y-4 text-sm text-gray-500 font-light">
            <h4 className="text-white font-bold uppercase tracking-wider">
              College Location
            </h4>
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-1" />
              <span>
                N S Raju Institute of Engineering and Technology, Dakamarri (V), Bheemunipatnam (M), Visakhapatnam (D), Andhra Pradesh.
              </span>
            </p>

            <a 
              href="https://www.instagram.com/mega.estd.2025" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-400 font-semibold hover:text-white transition-colors pt-2"
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-500 via-rose-500 to-purple-600 p-0.5 flex items-center justify-center">
                <InstagramIcon className="w-3.5 h-3.5 text-white" />
              </div>
              <span>@mega.estd.2025</span>
            </a>
          </div>

        </div>

        <div className="h-px w-full bg-white/8" />

        {/* Bottom Credits & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600 font-medium">
          <p>© {currentYear} MEGA NSRIET. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-gray-500">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            <span>Designed and Created By Mechanical Students</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
