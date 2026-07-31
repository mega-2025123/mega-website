'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MegaLogo } from './Logos';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Notifications', path: '/notifications' },
    { name: 'Blog', path: '/blog' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Newsletters', path: '/newsletters' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 md:pt-4 px-4 md:px-8 flex justify-center pointer-events-none transition-all duration-300">
      <div className={`pointer-events-auto w-full max-w-7xl flex items-center justify-between px-6 md:px-10 top-nav-jaswanth transition-all duration-300 ${scrolled ? 'top-nav-jaswanth-scrolled' : ''}`}>
        
        {/* Left: MEGA Branding */}
        <Link href="/" className="flex items-center gap-2 group">
          <MegaLogo showText={true} />
        </Link>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`relative px-3 py-1.5 xl:px-4 xl:py-2 text-xs xl:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white font-bold'
                    : 'text-[#B3B3B3] hover:text-white'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#F97316] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 rounded-xl hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#F97316]" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto lg:hidden fixed top-20 left-4 right-4 bg-[#121212] border border-[#2F2F2F] rounded-[20px] p-5 space-y-1 backdrop-blur-2xl shadow-2xl animate-fadeInUp">
          {navItems.map((item, i) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive
                    ? 'text-[#F97316] font-bold bg-[#1C1C1C]'
                    : 'text-[#B3B3B3] hover:bg-[#1C1C1C] hover:text-white'
                }`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};
