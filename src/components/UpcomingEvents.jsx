'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

export const UpcomingEvents = () => {
  const featuredEvents = [];

  return (
    <section className="w-full py-20 md:py-28 px-4 sm:px-6 md:px-12 flex justify-center">
      <div className="max-w-6xl w-full space-y-10">
        
        {/* Header with matching alignment */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" />
              Guild Calendar
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Upcoming <span className="shimmer-text">Events & Activities</span>
            </h2>
          </div>

          <Link
            href="/events"
            className="btn-jaswanth-secondary group shrink-0"
          >
            <span>All Events & Gallery</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-orange-400" />
          </Link>
        </div>

        {/* Featured Upcoming Cards (if any exist) */}
        {featuredEvents.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {featuredEvents.map((evt) => (
              <div 
                key={evt.id} 
                className="card-jaswanth-24 flex flex-col justify-between group hover:border-orange-500/40 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
                      {evt.category}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-black border border-white/10 flex items-center justify-center">
                      {evt.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {evt.title}
                  </h3>

                  <p className="text-xs text-gray-300 font-light leading-relaxed">
                    {evt.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-gray-400 gap-2">
                  <span className="flex items-center gap-1.5 text-gray-300 font-medium">
                    <Clock className="w-3.5 h-3.5 text-orange-500" />
                    {evt.date}
                  </span>
                  <span className="flex items-center gap-1 text-gray-400">
                    <MapPin className="w-3.5 h-3.5 text-orange-500" />
                    {evt.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Announcements / No Events Banner Card */}
        <div className="card-jaswanth-24 border-dashed border-orange-500/20 text-center flex flex-col items-center justify-center p-8 bg-[#111111]/40 hover:border-orange-500/45">
          <div className="w-12 h-12 rounded-2xl bg-[#111111] border border-orange-500/30 flex items-center justify-center mb-4 text-orange-400 shadow-md">
            <Clock className="w-6 h-6 animate-pulse" />
          </div>
          <h3 className="text-lg md:text-xl font-bold font-heading text-white tracking-widest uppercase mb-2">
            NO UPCOMING EVENTS AT THIS TIME
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm max-w-md font-light">
            Check back soon! Interactive workshops, guest symposiums, and guild competitions will be posted here as soon as they are scheduled.
          </p>
        </div>

      </div>
    </section>
  );
};
