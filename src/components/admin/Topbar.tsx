'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Search, Bell, ChevronRight } from 'lucide-react';

interface AdminTopbarProps {
  onMenuToggle: () => void;
}

export function AdminTopbar({ onMenuToggle }: AdminTopbarProps) {
  const pathname = usePathname();

  // Generate breadcrumbs based on pathname
  const pathSegments = pathname?.split('/').filter(Boolean) || [];

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between bg-white border-b border-gray-200 px-4 sm:px-6">
      <div className="flex items-center gap-4">
        {/* Hamburger Button (Mobile only) */}
        <button
          onClick={onMenuToggle}
          className="md:hidden p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          aria-label="Toggle Menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Breadcrumb Navigation */}
        <nav className="hidden sm:flex" aria-label="Breadcrumb">
          <ol className="flex items-center text-sm font-medium text-gray-500">
            {pathSegments.length === 0 && (
              <li>
                <span className="text-gray-800" aria-current="page">
                  Admin
                </span>
              </li>
            )}
            
            {pathSegments.map((segment, index) => {
              const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
              const isLast = index === pathSegments.length - 1;
              const title = segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

              return (
                <li key={href} className="flex items-center">
                  {index > 0 && <ChevronRight className="h-4 w-4 mx-2 text-gray-400 shrink-0" />}
                  {isLast ? (
                    <span className="text-gray-800" aria-current="page">
                      {title}
                    </span>
                  ) : (
                    <Link href={href} className="hover:text-orange-600 transition-colors">
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
        <button
          className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
          aria-label="Search"
        >
          <Search className="h-5 w-5" />
        </button>

        <button
          className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
        </button>

        <div 
          className="h-8 w-8 ml-1 sm:ml-2 flex items-center justify-center rounded-full bg-orange-500 text-white font-semibold text-sm cursor-pointer select-none"
          title="Admin Profile"
        >
          M
        </div>
      </div>
    </header>
  );
}
