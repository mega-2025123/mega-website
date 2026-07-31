'use client';

import React, { useState, useEffect } from 'react';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';

export const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/api/blogs')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setBlogs(data);
        }
      })
      .catch((err) => console.error('Fetch blogs error:', err));
  }, []);

  return (
    <div className="pb-20 pt-2 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto w-full flex flex-col items-center justify-center min-h-[60vh] bg-[#090909]">
      {blogs.length === 0 ? (
        <div className="w-full max-w-3xl border-t border-b border-[#2F2F2F] text-center flex flex-col items-center justify-center py-16">
          <div className="w-14 h-14 rounded-2xl bg-[#141414] flex items-center justify-center mb-5 text-[#F97316]">
            <BookOpen className="w-7 h-7" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-wider uppercase mb-3">
            NO BLOG POSTS YET
          </h3>
          <p className="text-[#B3B3B3] text-xs sm:text-sm max-w-md font-light leading-relaxed mx-auto">
            Interesting articles, stories, and insights from our community will be published here soon. Stay tuned!
          </p>
        </div>
      ) : (
        <div className="w-full space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((item) => (
              <div key={item.id} className="border-t border-[#2F2F2F] pt-6 flex flex-col justify-between group">
                <div>
                  {item.coverImage && (
                    <div className="w-full h-44 rounded-2xl overflow-hidden bg-black mb-4">
                      <img src={item.coverImage} alt={item.title} className="w-full h-full object-cover rounded-2xl" />
                    </div>
                  )}

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-[#B3B3B3]">
                      <span className="text-[#F97316] font-bold uppercase tracking-wider">{item.category || 'Article'}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#F97316]" />
                        {new Date(item.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-[#F97316]">{item.title}</h3>
                    {item.summary && (
                      <p className="text-xs text-[#B3B3B3] font-light leading-relaxed line-clamp-3">{item.summary}</p>
                    )}
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between text-xs font-semibold text-[#F97316] mt-4">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
