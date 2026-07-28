'use client';

import Link from 'next/link';
import { Plus, Search, CalendarDays } from 'lucide-react';

export default function EventsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-white font-heading">Events</h1>
        <Link 
          href="/admin/events/new" 
          className="inline-flex items-center gap-2 bg-orange-500/100 hover:bg-orange-600 text-white px-4 py-2 rounded-xl transition-colors font-medium"
        >
          <Plus size={20} />
          New Event
        </Link>
      </div>

      <div className="bg-[#121215]/90 border border-white/[0.08] backdrop-blur-xl rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search events..." 
              className="w-full pl-10 pr-4 py-2 bg-[#18181c] border-white/10 text-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
            />
          </div>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-4">
            <CalendarDays size={32} className="text-orange-500" />
          </div>
          <h3 className="text-lg font-semibold text-white font-heading mb-2">No events yet</h3>
          <p className="text-gray-500 max-w-sm mb-6">Create your first event to start engaging with your community.</p>
          <Link 
            href="/admin/events/new" 
            className="inline-flex items-center gap-2 bg-[#18181c] border border-white/10 text-white hover:border-gray-300 text-gray-300 px-4 py-2 rounded-xl transition-all font-medium shadow-sm hover:shadow"
          >
            <Plus size={20} />
            Create Event
          </Link>
        </div>
      </div>
    </div>
  );
}
