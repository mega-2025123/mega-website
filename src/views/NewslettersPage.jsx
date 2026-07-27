'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle, Download, FileText, Sparkles } from 'lucide-react';

export const NewslettersPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  const newsletters = [
    {
      id: 1,
      edition: 'Edition 01 • 2025',
      title: 'MEGA Guild Unveiling & Inaugural Address',
      month: 'Year 2025',
      highlights: 'Highlights include the official launch of the guild, messages from Secretary Dr. N. Prasada Raju & Principal Dr. P. Govind Rao, and executive committee introductions.',
      file: '/assets/Logo.png'
    },
    {
      id: 2,
      edition: 'Edition 02 • 2025',
      title: 'Industrial Exposure & CAD Workshop Recap',
      month: 'Upcoming Issue',
      highlights: 'Recap of the Jindal Steel Plant industrial visit, hands-on 3D printing lab sessions, and student project showcases.',
      file: '/assets/Logo.png'
    }
  ];

  return (
    <div className="pb-20 pt-2 px-6 md:px-12 max-w-6xl mx-auto w-full flex justify-center min-h-[60vh]">
      <div className="w-full space-y-12">

        {/* Subscription Card */}
        <div className="card-jaswanth-24 fire-border-left max-w-3xl mx-auto text-center space-y-6 animate-scaleIn">
          <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mx-auto text-orange-400 shadow-lg">
            <Mail className="w-7 h-7" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
              OFFICIAL BULLETIN SUBSCRIPTION
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Stay Connected with <span className="shimmer-text">MEGA</span>
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed max-w-xl mx-auto">
              Get official guild newsletters, industrial trip announcements, and technical symposium alerts delivered directly to your inbox.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto pt-2">
              <input
                type="email"
                required
                placeholder="Enter your student or personal email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-black/60 border border-white/10 rounded-full px-5 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button
                type="submit"
                className="btn-jaswanth-primary text-xs py-3 px-6 shrink-0"
              >
                <span>Subscribe Now</span>
              </button>
            </form>
          ) : (
            <div className="p-4 bg-emerald-950/50 border border-emerald-500/30 rounded-2xl text-emerald-400 text-xs font-medium flex items-center justify-center gap-2 max-w-lg mx-auto animate-fadeIn">
              <CheckCircle className="w-5 h-5 shrink-0" />
              <span>Thank you for subscribing! You will receive our next monthly newsletter edition.</span>
            </div>
          )}
        </div>

        {/* Archived Newsletter Editions Grid */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-orange-500" />
            <h3 className="text-xl font-bold text-white">Published Bulletin Editions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsletters.map((nl, i) => (
              <div 
                key={nl.id}
                className="card-jaswanth-24 flex flex-col justify-between space-y-4 group hover:border-orange-500/40 transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
                      {nl.edition}
                    </span>
                    <span className="text-xs text-gray-400">{nl.month}</span>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors leading-snug">
                    {nl.title}
                  </h4>

                  <p className="text-gray-300 text-xs font-light leading-relaxed">
                    {nl.highlights}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-gray-400 font-medium">NSRIET Mechanical Guild</span>
                  <a
                    href={nl.file}
                    download="MEGA_Newsletter_Edition.png"
                    className="inline-flex items-center gap-1.5 text-xs text-orange-400 font-bold hover:text-white transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Bulletin</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
