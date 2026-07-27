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
    const handleScroll = () => setScrolled(window.scrollY > 30);
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
    { name: 'Newsletters', path: '/newsletters' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 md:pt-6 px-4 md:px-8 flex justify-center pointer-events-none transition-all duration-500">
      <div className={`pointer-events-auto w-full max-w-7xl flex items-center justify-between px-6 md:px-10 py-3.5 top-nav-jaswanth transition-all duration-500 ${
        scrolled ? 'shadow-[0_8px_40px_rgba(0,0,0,0.9)]' : ''
      }`}>
        
        {/* Left: MEGA Branding */}
        <Link href="/" className="flex items-center gap-2 group">
          <MegaLogo showText={true} />
        </Link>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'text-white bg-white/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-orange-500 rounded-full" />
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
          {mobileMenuOpen ? <X className="w-5 h-5 text-orange-500" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto lg:hidden fixed top-24 left-4 right-4 bg-[#0a0a0a]/95 border border-white/10 rounded-[24px] p-5 space-y-1 backdrop-blur-2xl shadow-2xl animate-fadeInUp">
          {navItems.map((item, i) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive
                    ? 'bg-orange-500/15 text-orange-400 font-bold'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
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
