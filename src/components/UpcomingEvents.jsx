'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

export const UpcomingEvents = () => {
  return (
    <section className="w-full py-20 md:py-28 px-4 sm:px-6 md:px-12 flex justify-center bg-[#090909]">
      <div className="max-w-6xl w-full space-y-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-[#F97316]/40 text-[#F97316] text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" />
              <span className="text-white">Guild Calendar</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Upcoming <span className="text-[#F97316]">Events & Activities</span>
            </h2>
          </div>

          <Link
            href="/events"
            className="btn-jaswanth-secondary group shrink-0 px-7 py-3 text-xs md:text-sm"
          >
            <span>All Events & Gallery</span>
            <ArrowRight className="w-4 h-4 text-[#F97316]" />
          </Link>
        </div>

        {/* Clean Container Notice */}
        <div className="bg-[#141414]/20 border border-[#2F2F2F] rounded-3xl text-center flex flex-col items-center justify-center p-10 md:p-14">
          <div className="w-12 h-12 rounded-2xl bg-[#141414] flex items-center justify-center mb-4 text-[#F97316] border border-[#2F2F2F]">
            <Clock className="w-6 h-6" />
          </div>
          <h3 className="text-lg md:text-xl font-bold font-heading text-white tracking-widest uppercase mb-2">
            NO UPCOMING EVENTS AT THIS TIME
          </h3>
          <p className="text-[#B3B3B3] text-xs sm:text-sm max-w-md font-light leading-relaxed">
            Check back soon! Interactive workshops, guest symposiums, and guild competitions will be posted here as soon as they are scheduled.
          </p>
        </div>

      </div>
    </section>
  );
};
