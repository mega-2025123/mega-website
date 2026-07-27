'use client';

import React from 'react';

/**
 * Reusable page hero banner for sub-pages (About, Team, Notifications, Blog, Events, Newsletters).
 * Features generous top spacing (pt-24 md:pt-28) to guarantee 100% visibility below the floating navbar.
 */
export const PageHero = ({ title, subtitle, accentWord }) => {
  return (
    <div className="pt-24 md:pt-28 pb-8 px-6 md:px-12 max-w-6xl mx-auto w-full relative">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col items-center text-center space-y-3 animate-fadeInUp">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white text-center leading-tight">
          {accentWord ? (
            <>
              {title}{' '}
              <span className="shimmer-text">{accentWord}</span>
            </>
          ) : (
            title
          )}
        </h1>
        {subtitle && (
          <p className="text-gray-300 text-base md:text-xl font-light tracking-wide text-center max-w-3xl animate-fadeIn delay-200">
            {subtitle}
          </p>
        )}
        <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full my-2 shadow-[0_0_15px_rgba(255,69,0,0.6)] animate-scaleIn delay-300" />
      </div>
    </div>
  );
};
