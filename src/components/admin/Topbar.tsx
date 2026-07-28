'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Search, Bell, ChevronRight, ShieldCheck } from 'lucide-react';

interface AdminTopbarProps {
  onMenuToggle: () => void;
}

export function AdminTopbar({ onMenuToggle }: AdminTopbarProps) {
  const pathname = usePathname();

  // Generate breadcrumbs based on pathname
  const pathSegments = pathname?.split('/').filter(Boolean) || [];

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between bg-[#0c0c0e]/80 backdrop-blur-xl border-b border-white/[0.08] px-4 sm:px-6 transition-colors">
      <div className="flex items-center gap-4">
        {/* Hamburger Button (Mobile only) */}
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 -ml-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Breadcrumb Navigation */}
        <nav className="hidden sm:flex" aria-label="Breadcrumb">
          <ol className="flex items-center text-xs font-semibold tracking-wide text-gray-400">
            {pathSegments.length === 0 && (
              <li>
                <span className="text-white font-bold" aria-current="page">
                  Admin Overview
                </span>
              </li>
            )}
            
            {pathSegments.map((segment, index) => {
              const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
              const isLast = index === pathSegments.length - 1;
              const title = segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

              return (
                <li key={href} className="flex items-center">
                  {index > 0 && <ChevronRight className="h-3.5 w-3.5 mx-2 text-gray-600 shrink-0" />}
                  {isLast ? (
                    <span className="text-white font-bold bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg" aria-current="page">
                      {title}
                    </span>
                  ) : (
                    <Link href={href} className="text-gray-400 hover:text-orange-400 transition-colors">
                      {title}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Quick Search */}
        <button
          className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 text-gray-400 hover:text-white rounded-xl text-xs transition-all cursor-pointer"
          aria-label="Search"
        >
          <Search className="h-3.5 w-3.5 text-orange-400" />
          <span className="hidden md:inline font-medium">Search CMS...</span>
        </button>

        {/* Notifications */}
        <button
          className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors relative"
          aria-label="Notifications"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(255,69,0,0.8)]" />
        </button>

        {/* Admin Badge & Avatar */}
        <div className="flex items-center gap-2.5 pl-2 border-l border-white/10">
          <div 
            className="h-8 w-8 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-white font-black text-xs shadow-[0_0_15px_rgba(255,69,0,0.3)] border border-orange-400/30"
            title="Administrator Profile"
          >
            M
          </div>
          <div className="hidden xl:block text-left text-xs">
            <p className="font-bold text-white leading-tight">MEGA Admin</p>
            <p className="text-[10px] text-orange-400 flex items-center gap-1 font-mono">
              <ShieldCheck className="w-3 h-3 inline" /> Superuser
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
