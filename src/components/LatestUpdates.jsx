'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export const LatestUpdates = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-12 flex justify-center bg-[#090909]">
      <div className="max-w-6xl w-full border-t border-b border-[#2F2F2F] py-12">
        
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#F97316]/40 text-[#F97316] text-xs font-semibold tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
              <span className="text-white">Latest Announcement • 2025</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              Official Guild Launch & Website Unveiling 🎉
            </h2>

            <p className="text-[#B3B3B3] text-sm sm:text-base leading-relaxed font-light">
              We are thrilled to announce the official launch of the <strong className="text-white font-medium">Mechanical Engineering Guild Association (MEGA)</strong>, along with our brand-new digital portal and official guild emblem! 
            </p>

            <div className="text-xs sm:text-sm text-[#B3B3B3] flex items-start gap-3 pt-2">
              <ShieldCheck className="w-5 h-5 text-[#F97316] shrink-0 mt-0.5" />
              <span>
                Our heartfelt gratitude goes to our honorable Secretary, <strong className="text-[#F97316]">Dr. N. Prasada Raju</strong>, and our Principal, <strong className="text-[#F97316]">Dr. P. Govind Rao</strong>, for their inspiring guidance, leadership, and constant support in bringing MEGA to life.
              </span>
            </div>
          </div>

          {/* Action Link to /blog */}
          <div className="shrink-0 flex justify-start lg:justify-end">
            <Link
              href="/blog"
              className="btn-jaswanth-primary group w-full sm:w-auto text-center justify-center"
            >
              <span>Read All Blogs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
