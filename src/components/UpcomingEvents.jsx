'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

export const UpcomingEvents = () => {
  const featuredEvents = [];

  return (
    <section className="w-full py-20 md:py-28 px-4 sm:px-6 md:px-12 flex justify-center bg-[#090909]">
      <div className="max-w-6xl w-full space-y-10">
        
        {/* Header with matching alignment */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C1C1C] border border-[#2F2F2F] text-[#F97316] text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" />
              Guild Calendar
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Upcoming <span className="text-[#F97316]">Events & Activities</span>
            </h2>
          </div>

          <Link
            href="/events"
            className="btn-jaswanth-secondary group shrink-0"
          >
            <span>All Events & Gallery</span>
            <ArrowRight className="w-4 h-4 text-[#F97316]" />
          </Link>
        </div>

        {/* Announcements / No Events Banner Card */}
        <div className="card-jaswanth-24 border-dashed border-[#2F2F2F] text-center flex flex-col items-center justify-center p-8 bg-[#1C1C1C] hover:border-[#F97316]">
          <div className="w-12 h-12 rounded-2xl bg-[#090909] border border-[#2F2F2F] flex items-center justify-center mb-4 text-[#F97316] shadow-md">
            <Clock className="w-6 h-6" />
          </div>
          <h3 className="text-lg md:text-xl font-bold font-heading text-white tracking-widest uppercase mb-2">
            NO UPCOMING EVENTS AT THIS TIME
          </h3>
          <p className="text-[#B3B3B3] text-xs sm:text-sm max-w-md font-light">
            Check back soon! Interactive workshops, guest symposiums, and guild competitions will be posted here as soon as they are scheduled.
          </p>
        </div>

      </div>
    </section>
  );
};
