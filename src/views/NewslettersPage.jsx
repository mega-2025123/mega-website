'use client';

import React, { useState, useEffect } from 'react';
import { FileText, Download, Calendar, ExternalLink } from 'lucide-react';

export const NewslettersPage = () => {
  const [newsletters, setNewsletters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/newsletters')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setNewsletters(data);
        }
      })
      .catch((err) => console.error('Fetch newsletters error:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="pb-20 pt-2 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto w-full flex flex-col items-center justify-center min-h-[60vh]">
      {newsletters.length === 0 ? (
        <div className="w-full max-w-3xl">
          <div className="card-jaswanth-24 border-dashed border-orange-500/20 text-center flex flex-col items-center justify-center p-12 bg-[#111111]/40">
            <div className="w-14 h-14 rounded-2xl bg-[#111111] border border-orange-500/30 flex items-center justify-center mb-5 text-orange-400 shadow-md">
              <FileText className="w-7 h-7 animate-pulse" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-wider uppercase mb-3">
              NO NEWSLETTERS PUBLISHED YET
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm max-w-md font-light leading-relaxed mx-auto">
              Official guild newsletters and monthly bulletins will be published here soon. Stay tuned for upcoming editions!
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsletters.map((item) => (
              <div key={item.id} className="card-jaswanth-24 p-6 flex flex-col justify-between space-y-4 hover:border-orange-500/40 transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                      Issue #{item.issueNumber}
                    </span>
                    <span className="text-[11px] text-gray-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-orange-400" />
                      {new Date(item.publishDate).toLocaleDateString()}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  {item.description && (
                    <p className="text-xs text-gray-300 font-light leading-relaxed">{item.description}</p>
                  )}
                </div>

                <a
                  href={item.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md"
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
