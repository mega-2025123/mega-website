'use client';

import React, { useState } from 'react';
import { Sparkles, Search, Bell, ShieldCheck } from 'lucide-react';

export const NotificationsPage = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const notifications = [
    {
      id: 1,
      date: '2025 • Official Release',
      title: 'Official MEGA Association Launch & Website Unveiling 🎉',
      content: 'We are thrilled to launch the official Mechanical Engineering Guild Association (MEGA) website for NSRIET! Stay connected for all department news, industrial visits, and workshop events.',
      category: 'Official Announcement',
      catId: 'official',
      pinned: true,
    },
    {
      id: 2,
      date: '2025 • Emblem Release',
      title: 'Guild Emblem & Executive Student Portal',
      content: 'The official emblem of MEGA has been unveiled along with full leadership details, faculty mentorship listings, and office bearer portfolios.',
      category: 'Guild Update',
      catId: 'update',
      pinned: false,
    },
    {
      id: 3,
      date: '2025 • Academic Calendar',
      title: 'Upcoming Industrial Visit & Technical Symposium Registration',
      content: 'Preparations for the upcoming Jindal Steel Plant industrial visit and National Tech Symposium MECH-X 2025 are underway. Registration details will be released soon.',
      category: 'Event Notice',
      catId: 'event',
      pinned: false,
    }
  ];

  const filtered = notifications.filter((item) => {
    const matchesFilter = filter === 'all' || item.catId === filter;
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || 
                          item.content.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pb-20 pt-2 px-6 md:px-12 max-w-6xl mx-auto w-full flex justify-center min-h-[60vh]">
      <div className="w-full space-y-8">

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Notices' },
              { id: 'official', label: 'Official' },
              { id: 'update', label: 'Guild Updates' },
              { id: 'event', label: 'Event Notices' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  filter === tab.id
                    ? 'bg-orange-500 text-white shadow-[0_0_15px_rgba(255,69,0,0.4)]'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search notifications..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-black/60 border border-white/10 rounded-full pl-10 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>
        </div>

        {/* Notifications Feed */}
        <div className="space-y-6">
          {filtered.map((notif, i) => (
            <div 
              key={notif.id} 
              className={`card-jaswanth-24 ${notif.pinned ? 'fire-border-left bg-gradient-to-r from-orange-500/10 via-transparent to-transparent' : ''} space-y-3 animate-fadeInUp`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  {notif.pinned ? <ShieldCheck className="w-3.5 h-3.5 text-orange-500" /> : <Sparkles className="w-3.5 h-3.5" />}
                  {notif.category}
                </span>
                <span className="text-xs text-gray-400 font-medium">{notif.date}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">{notif.title}</h3>
              <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">{notif.content}</p>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="card-jaswanth-24 text-center py-12">
              <p className="text-gray-400 text-sm">No notifications found matching your search.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
