'use client';

import React, { useState, useEffect } from 'react';
import { Bell, Megaphone, Pin, Calendar } from 'lucide-react';

export const NotificationsPage = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/announcements')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setAnnouncements(data);
        }
      })
      .catch((err) => console.error('Fetch announcements error:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="pb-20 pt-2 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto w-full flex flex-col items-center justify-center min-h-[60vh]">
      {announcements.length === 0 ? (
        <div className="w-full max-w-3xl">
          <div className="card-jaswanth-24 border-dashed border-orange-500/20 text-center flex flex-col items-center justify-center p-12 bg-[#111111]/40">
            <div className="w-14 h-14 rounded-2xl bg-[#111111] border border-orange-500/30 flex items-center justify-center mb-5 text-orange-400 shadow-md">
              <Bell className="w-7 h-7 animate-pulse" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-wider uppercase mb-3">
              NO NOTIFICATIONS YET
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm max-w-md font-light leading-relaxed mx-auto">
              There are no updates or announcements posted at this time. Please check back later.
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full space-y-4">
          {announcements.map((item) => (
            <div
              key={item.id}
              className={`card-jaswanth-24 p-6 space-y-3 transition-all ${
                item.pinned ? 'border-orange-500/50 bg-[#16161a]' : 'hover:border-orange-500/30'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 flex items-center gap-1">
                    <Megaphone className="w-3 h-3" />
                    {item.type}
                  </span>
                  {item.pinned && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 flex items-center gap-1">
                      <Pin className="w-3 h-3" /> Pinned Notice
                    </span>
                  )}
                </div>

                <span className="text-[11px] text-gray-400 flex items-center gap-1 font-mono">
                  <Calendar className="w-3 h-3 text-orange-400" />
                  {new Date(item.createdAt).toLocaleDateString()}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-xs text-gray-300 font-light leading-relaxed whitespace-pre-line">{item.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
