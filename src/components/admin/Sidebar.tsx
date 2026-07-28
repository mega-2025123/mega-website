'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  FileText, 
  Calendar, 
  Newspaper, 
  Megaphone, 
  Home, 
  Info, 
  Image as ImageIcon, 
  FolderOpen, 
  Mail, 
  Search, 
  BarChart3, 
  Settings, 
  Trash2, 
  LogOut, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { createSupabaseBrowserClient } from '../../lib/supabase/client';

export interface AdminSidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const navStructure = [
  {
    title: "Main",
    items: [
      { label: "Dashboard", href: "/admin", icon: LayoutDashboard }
    ]
  },
  {
    title: "Content",
    items: [
      { label: "Blogs", href: "/admin/blogs", icon: FileText },
      { label: "Events", href: "/admin/events", icon: Calendar },
      { label: "Newsletters", href: "/admin/newsletters", icon: Newspaper },
      { label: "Announcements", href: "/admin/announcements", icon: Megaphone }
    ]
  },
  {
    title: "Pages",
    items: [
      { label: "Home", href: "/admin/pages/home", icon: Home },
      { label: "About", href: "/admin/pages/about", icon: Info }
    ]
  },
  {
    title: "Manage",
    items: [
      { label: "Gallery", href: "/admin/gallery", icon: ImageIcon },
      { label: "Media Library", href: "/admin/media", icon: FolderOpen },
      { label: "Messages", href: "/admin/messages", icon: Mail }
    ]
  },
  {
    title: "System",
    items: [
      { label: "SEO", href: "/admin/seo", icon: Search },
      { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
      { label: "Settings", href: "/admin/settings", icon: Settings },
      { label: "Trash", href: "/admin/trash", icon: Trash2 }
    ]
  }
];

export function AdminSidebar({ isCollapsed, onToggle }: AdminSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const supabase = createSupabaseBrowserClient();
      await supabase.auth.signOut();
      router.push('/admin/login');
      router.refresh();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const isActivePath = (href: string) => {
    if (href === '/admin') {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };

  return (
    <aside 
      className={`flex flex-col h-screen bg-[#0a0a0a] border-r border-white/10 text-zinc-400 transition-all duration-300 ease-in-out z-20 sticky top-0 shrink-0 ${
        isCollapsed ? 'w-[72px]' : 'w-[260px]'
      }`}
    >
      {/* Header */}
      <div className={`h-16 flex items-center border-b border-white/10 shrink-0 transition-all duration-300 ${isCollapsed ? 'justify-center px-0' : 'justify-between px-4'}`}>
        <div className={`flex items-center gap-2 overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out ${isCollapsed ? 'max-w-0 opacity-0' : 'max-w-[200px] opacity-100'}`}>
          <div className="font-bold text-xl text-white tracking-tight">MEGA</div>
          <div className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#FF4500]/20 text-[#FF4500] font-bold">Admin</div>
        </div>
        <button 
          onClick={onToggle} 
          className="p-1.5 rounded-md hover:bg-white/10 text-zinc-400 hover:text-white transition-colors shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[#FF4500]"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden py-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-zinc-800/50 hover:[&::-webkit-scrollbar-thumb]:bg-zinc-700 [&::-webkit-scrollbar-thumb]:rounded-full">
        {navStructure.map((section, idx) => (
          <div key={section.title} className={idx !== 0 ? "mt-6" : ""}>
            {!isCollapsed && section.title !== "Main" && (
              <h3 className="px-5 text-[11px] font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                {section.title}
              </h3>
            )}
            
            {isCollapsed && section.title !== "Main" && (
              <div className="h-px w-6 bg-white/10 mx-auto mb-3 mt-5" aria-hidden="true" />
            )}

            <ul className="space-y-1 px-3">
              {section.items.map((item) => {
                const isActive = isActivePath(item.href);
                return (
                  <li key={item.href} className="relative group">
                    <Link 
                      href={item.href} 
                      className={`group/link relative flex items-center h-[38px] rounded-md transition-all outline-none focus-visible:ring-2 focus-visible:ring-[#FF4500] ${
                        isActive 
                          ? 'bg-[#FF4500]/10 text-[#FF4500]' 
                          : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                      } ${isCollapsed ? 'justify-center px-0' : 'px-3'}`}
                    >
                      {isActive && !isCollapsed && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#FF4500] rounded-r-full" />
                      )}
                      {isActive && isCollapsed && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#FF4500] rounded-r-full" />
                      )}
                      <item.icon size={18} className={`shrink-0 transition-colors ${isActive ? 'text-[#FF4500]' : 'text-zinc-400 group-hover/link:text-white'}`} />
                      <span className={`whitespace-nowrap font-medium text-[14px] overflow-hidden transition-all duration-300 ease-in-out ${isCollapsed ? 'max-w-0 opacity-0 ml-0' : 'max-w-[200px] opacity-100 ml-3'}`}>
                        {item.label}
                      </span>
                    </Link>
                    
                    {/* Tooltip for collapsed mode */}
                    {isCollapsed && (
                      <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2.5 py-1.5 bg-zinc-800 text-white text-[13px] font-medium rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50 shadow-xl border border-white/5 pointer-events-none flex items-center">
                        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-zinc-800 rotate-45 border-l border-b border-white/5" />
                        <span className="relative z-10">{item.label}</span>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-white/10 shrink-0">
        <button 
          onClick={handleLogout}
          className={`w-full group relative flex items-center h-[38px] rounded-md transition-all text-zinc-400 hover:bg-white/5 hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-[#FF4500] ${isCollapsed ? 'justify-center px-0' : 'px-3'}`}
        >
          <LogOut size={18} className="shrink-0 group-hover:text-red-400 transition-colors" />
          <span className={`whitespace-nowrap font-medium text-[14px] overflow-hidden transition-all duration-300 ease-in-out ${isCollapsed ? 'max-w-0 opacity-0 ml-0' : 'max-w-[200px] opacity-100 ml-3'}`}>
            Logout
          </span>
          
          {/* Tooltip for collapsed mode */}
          {isCollapsed && (
            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2.5 py-1.5 bg-zinc-800 text-white text-[13px] font-medium rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50 shadow-xl border border-white/5 pointer-events-none flex items-center">
              <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-zinc-800 rotate-45 border-l border-b border-white/5" />
              <span className="relative z-10">Logout</span>
            </div>
          )}
        </button>
      </div>
    </aside>
  );
}
