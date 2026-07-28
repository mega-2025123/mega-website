'use client';

import Link from 'next/link';
import { Plus, Search, Bell } from 'lucide-react';

export default function AnnouncementsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900 font-outfit">Announcements</h1>
        <Link 
          href="/admin/announcements/new" 
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl transition-colors font-medium"
        >
          <Plus size={20} />
          New Announcement
        </Link>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search announcements..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
            />
          </div>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-4">
            <Bell size={32} className="text-orange-500" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 font-outfit mb-2">No announcements yet</h3>
          <p className="text-gray-500 max-w-sm mb-6">Create announcements to broadcast important information.</p>
          <Link 
            href="/admin/announcements/new" 
            className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-gray-300 text-gray-700 px-4 py-2 rounded-xl transition-all font-medium shadow-sm hover:shadow"
          >
            <Plus size={20} />
            Create Announcement
          </Link>
        </div>
      </div>
    </div>
  );
}
