'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export const LatestUpdates = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-12 flex justify-center">
      <div className="max-w-6xl w-full">
        
        {/* Featured Announcement Card */}
        <div className="card-jaswanth-24 fire-border-left">
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-orange-400 text-xs font-semibold tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                Latest Announcement • 2025
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                Official Guild Launch & Website Unveiling 🎉
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                We are thrilled to announce the official launch of the <strong className="text-white font-medium">Mechanical Engineering Guild Association (MEGA)</strong>, along with our brand-new digital portal and official guild emblem! 
              </p>

              <div className="bg-black/70 border border-white/10 p-4 sm:p-5 rounded-2xl text-xs sm:text-sm text-gray-300 flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left">
                <ShieldCheck className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span>
                  Our heartfelt gratitude goes to our honorable Secretary, <strong className="text-orange-400">Dr. N. Prasada Raju</strong>, and our Principal, <strong className="text-orange-400">Dr. P. Govind Rao</strong>, for their inspiring guidance, leadership, and constant support in bringing MEGA to life.
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
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
