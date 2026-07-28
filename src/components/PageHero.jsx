'use client';

import React from 'react';

/**
 * Reusable page hero banner for sub-pages (About, Team, Notifications, Blog, Events, Newsletters).
 * Features generous top spacing (pt-24 md:pt-28) to guarantee 100% visibility below the floating navbar.
 */
export const PageHero = ({ title, subtitle, accentWord }) => {
  return (
    <div className="pt-24 md:pt-28 pb-6 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto w-full relative">
      {/* Spacer to push headers below floating navbar */}
      <div className="h-20 md:h-28" />
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col items-center text-center animate-fadeInUp">
        {/* Hero Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-orange-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] shadow-md mb-6">
          <span>MEGA NSRIET • Estd 2025</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white text-center leading-tight mb-4.5">
          {accentWord ? (
            <>
              {title ? <>{title}{'\u00A0'}</> : null}
              <span className="shimmer-text">{accentWord}</span>
            </>
          ) : (
            title
          )}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-gray-300 text-sm sm:text-base md:text-lg font-light tracking-wide text-center max-w-2xl animate-fadeIn delay-200 mb-6">
            {subtitle}
          </p>
        )}

        {/* Accent Underline */}
        <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mb-10 shadow-[0_0_15px_rgba(255,69,0,0.6)] animate-scaleIn delay-300" />
      </div>
    </div>
  );
};
