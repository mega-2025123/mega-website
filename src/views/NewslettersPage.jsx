'use client';

import React, { useState, useEffect } from 'react';
import { FileText, Download, Calendar } from 'lucide-react';

export const NewslettersPage = () => {
  const [newsletters, setNewsletters] = useState([]);

  useEffect(() => {
    fetch('/api/newsletters')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setNewsletters(data);
        }
      })
      .catch((err) => console.error('Fetch newsletters error:', err));
  }, []);

  return (
    <div className="pb-20 pt-2 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto w-full flex flex-col items-center justify-center min-h-[60vh] bg-[#090909]">
      {newsletters.length === 0 ? (
        <div className="w-full max-w-3xl border-t border-b border-[#2F2F2F] text-center flex flex-col items-center justify-center py-16">
          <div className="w-14 h-14 rounded-2xl bg-[#141414] flex items-center justify-center mb-5 text-[#F97316]">
            <FileText className="w-7 h-7" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-wider uppercase mb-3">
            NO NEWSLETTERS PUBLISHED YET
          </h3>
          <p className="text-[#B3B3B3] text-xs sm:text-sm max-w-md font-light leading-relaxed mx-auto">
            Official guild newsletters and monthly bulletins will be published here soon. Stay tuned for upcoming editions!
          </p>
        </div>
      ) : (
        <div className="w-full space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsletters.map((item) => (
              <div key={item.id} className="border-t border-[#2F2F2F] pt-6 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#141414] text-[#F97316] border border-[#F97316]/40">
                      Issue #{item.issueNumber}
                    </span>
                    <span className="text-[11px] text-[#B3B3B3] flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#F97316]" />
                      {new Date(item.publishDate).toLocaleDateString()}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  {item.description && (
                    <p className="text-xs text-[#B3B3B3] font-light leading-relaxed">{item.description}</p>
                  )}
                </div>

                <a
                  href={item.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-jaswanth-primary w-full justify-center text-xs py-2.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF Edition</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
