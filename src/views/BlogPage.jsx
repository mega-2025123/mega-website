'use client';

import React from 'react';
import { BookOpen } from 'lucide-react';

export const BlogPage = () => {
  return (
    <div className="pb-20 pt-2 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto w-full flex flex-col items-center justify-center min-h-[60vh]">
      <div className="w-full max-w-3xl">
        <div className="card-jaswanth-24 border-dashed border-orange-500/20 text-center flex flex-col items-center justify-center p-12 bg-[#111111]/40">
          <div className="w-14 h-14 rounded-2xl bg-[#111111] border border-orange-500/30 flex items-center justify-center mb-5 text-orange-400 shadow-md">
            <BookOpen className="w-7 h-7 animate-pulse" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-wider uppercase mb-3">
            NO BLOG POSTS YET
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm max-w-md font-light leading-relaxed mx-auto">
            Interesting articles, stories, and insights from our community will be published here soon. Stay tuned!
          </p>
        </div>
      </div>
    </div>
  );
};
