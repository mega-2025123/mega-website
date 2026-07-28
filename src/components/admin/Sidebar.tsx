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
    title: "Overview",
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
    title: "Pages CMS",
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
      className={`flex flex-col h-screen bg-[#0c0c0e] border-r border-white/[0.08] text-gray-400 transition-all duration-300 ease-in-out z-20 sticky top-0 shrink-0 select-none ${
        isCollapsed ? 'w-[72px]' : 'w-[250px]'
      }`}
    >
      {/* Header */}
      <div className={`h-16 flex items-center border-b border-white/[0.08] shrink-0 transition-all duration-300 ${isCollapsed ? 'justify-center px-0' : 'justify-between px-5'}`}>
        <div className={`flex items-center gap-2.5 overflow-hidden whitespace-nowrap transition-all duration-300 ${isCollapsed ? 'max-w-0 opacity-0' : 'max-w-[200px] opacity-100'}`}>
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-black text-xs shadow-[0_0_15px_rgba(255,69,0,0.3)]">
            M
          </div>
          <div>
            <div className="font-extrabold text-base text-white tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>MEGA</div>
            <div className="text-[10px] font-bold text-orange-400 uppercase tracking-widest leading-none">CMS Portal</div>
          </div>
        </div>
        <button 
          onClick={onToggle} 
          className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors shrink-0 outline-none"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden py-4 px-3 space-y-6 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-white/10">
        {navStructure.map((section) => (
          <div key={section.title} className="space-y-1">
            {!isCollapsed && (
              <h3 className="px-3 text-[10px] font-extrabold text-gray-500 uppercase tracking-widest mb-1.5">
                {section.title}
              </h3>
            )}
            
            {isCollapsed && (
              <div className="h-px w-6 bg-white/10 mx-auto my-2" />
            )}

            <ul className="space-y-1">
              {section.items.map((item) => {
                const isActive = isActivePath(item.href);
                return (
                  <li key={item.href} className="relative group">
                    <Link 
                      href={item.href} 
                      className={`relative flex items-center h-9 rounded-xl transition-all font-medium text-xs ${
                        isActive 
                          ? 'bg-gradient-to-r from-orange-500/20 to-orange-500/5 text-orange-400 font-bold border border-orange-500/30 shadow-[0_0_15px_rgba(255,69,0,0.15)]' 
                          : 'text-gray-400 hover:bg-white/5 hover:text-white'
                      } ${isCollapsed ? 'justify-center px-0' : 'px-3'}`}
                    >
                      <item.icon size={16} className={`shrink-0 transition-colors ${isActive ? 'text-orange-400' : 'text-gray-400 group-hover:text-white'}`} />
                      <span className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${isCollapsed ? 'max-w-0 opacity-0 ml-0' : 'max-w-[180px] opacity-100 ml-3'}`}>
                        {item.label}
                      </span>
                    </Link>
                    
                    {/* Tooltip for collapsed mode */}
                    {isCollapsed && (
                      <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2.5 py-1.5 bg-[#18181b] text-white text-xs font-semibold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50 shadow-xl border border-white/10 pointer-events-none flex items-center">
                        <span>{item.label}</span>
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
      <div className="p-3 border-t border-white/[0.08] shrink-0">
        <button 
          onClick={handleLogout}
          className={`w-full group relative flex items-center h-9 rounded-xl transition-all text-gray-400 hover:bg-red-500/10 hover:text-red-400 hover:border hover:border-red-500/20 text-xs font-semibold ${isCollapsed ? 'justify-center px-0' : 'px-3'}`}
        >
          <LogOut size={16} className="shrink-0 group-hover:text-red-400 transition-colors" />
          <span className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${isCollapsed ? 'max-w-0 opacity-0 ml-0' : 'max-w-[180px] opacity-100 ml-3'}`}>
            Sign Out
          </span>
        </button>
      </div>
    </aside>
  );
}
