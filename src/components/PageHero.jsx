'use client';

import React from 'react';

export const PageHero = ({ title, subtitle, accentWord }) => {
  return (
    <div className="pt-24 md:pt-28 pb-6 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto w-full relative bg-[#090909]">
      {/* Spacer to push headers below floating navbar */}
      <div className="h-16 md:h-24" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Hero Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1C1C1C] border border-[#2F2F2F] text-[#F97316] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] shadow-md mb-6">
          <span>MEGA NSRIET • Estd 2025</span>
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
