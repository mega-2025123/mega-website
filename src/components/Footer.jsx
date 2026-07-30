'use client';

import React from 'react';
import Link from 'next/link';
import { MegaLogo } from './Logos';
import { InstagramIcon } from './Icons';
import { MapPin, Sparkles } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#090909] border-t border-[#2F2F2F] pt-16 pb-8 px-4 sm:px-6 md:px-12 relative z-10 flex justify-center">
      <div className="max-w-6xl w-full space-y-12">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: About - spans 4 cols */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest">
              About MEGA
            </h4>
            <p className="text-[#B3B3B3] text-xs font-light leading-relaxed max-w-sm">
              Mechanical Engineering Guild Association (MEGA) is the official student representative body for the Mechanical Department at NSRIET, Visakhapatnam. Established in 2025 to foster innovation, peer learning, and industry connections.
            </p>
          </div>

          {/* Col 2: Quick Links - spans 2 cols */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-2 text-xs text-[#B3B3B3] font-medium">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Executive Team', path: '/team' },
                { name: 'Notifications', path: '/notifications' },
              ].map((link) => (
                <Link 
                  key={link.name}
                  href={link.path} 
                  className="hover:text-[#F97316] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Activities - spans 2 cols */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest">
              Activities
            </h4>
            <div className="flex flex-col space-y-2 text-xs text-[#B3B3B3] font-medium">
              {[
                { name: 'Blog', path: '/blog' },
                { name: 'Events', path: '/events' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Newsletters', path: '/newsletters' },
              ].map((link) => (
                <Link 
                  key={link.name}
                  href={link.path} 
                  className="hover:text-[#F97316] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 4: Divider - spans 1 col (on desktop) */}
          <div className="hidden md:flex md:col-span-1 justify-center self-stretch py-2">
            <div className="w-px bg-[#2F2F2F] h-full" />
          </div>

          {/* Col 5: Location & Contact - spans 3 cols */}
          <div className="md:col-span-3 space-y-6 text-xs text-[#B3B3B3] font-light">
            <div className="space-y-3">
              <h4 className="text-white font-bold uppercase tracking-widest">
                Location
              </h4>
              <p className="flex items-start gap-2 leading-relaxed">
                <MapPin className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                <span>
                  N S Raju Institute of Engineering and Technology, Dakamarri (V), Bheemunipatnam (M), Visakhapatnam (D), Andhra Pradesh.
                </span>
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-white font-bold uppercase tracking-widest">
                Social Connection
              </h4>
              <a 
                href="https://www.instagram.com/mega.estd.2025" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#F97316] font-semibold hover:text-white transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-[#1C1C1C] border border-[#2F2F2F] p-0.5 flex items-center justify-center">
                  <InstagramIcon className="w-3 text-[#F97316]" />
                </div>
                <span>@mega.estd.2025</span>
              </a>
            </div>
          </div>

        </div>

        <div className="h-px w-full bg-[#2F2F2F]" />

        {/* Bottom Credits & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B3B3B3] font-medium">
          <p>© {currentYear} MEGA NSRIET. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-[#B3B3B3]">
            <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
            <span>Designed and Created By Mechanical Students</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
