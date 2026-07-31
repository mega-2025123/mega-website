'use client';

import React from 'react';

export const PageHero = ({ title, subtitle, accentWord }) => {
  return (
    <div className="pt-24 md:pt-28 pb-6 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto w-full relative bg-[#090909]">
      {/* Generous spacer to push headers below floating navbar */}
      <div className="h-24 sm:h-28 md:h-36 shrink-0" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* High-Contrast Hero Badge */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#141414] border border-[#F97316]/40 text-xs font-extrabold uppercase tracking-wider shadow-md mb-6">
          <span className="text-white">MEGA NSRIET</span>
          <span className="text-[#FF8A00]">•</span>
          <span className="text-[#FF8A00]">ESTD 2025</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white text-center leading-tight mb-4.5">
          {accentWord ? (
            <>
              {title ? <>{title}{'\u00A0'}</> : null}
              <span className="text-[#F97316]">{accentWord}</span>
            </>
          ) : (
            title
          )}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-[#B3B3B3] text-sm sm:text-base md:text-lg font-light tracking-wide text-center max-w-2xl mb-6">
            {subtitle}
          </p>
        )}

        {/* Accent Underline */}
        <div className="w-12 h-[3px] bg-[#F97316] rounded-full mb-10" />
      </div>
    </div>
  );
};
