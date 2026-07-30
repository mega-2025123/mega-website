'use client';

import React, { useState } from 'react';

// MEGA Guild Logo Component
export const MegaLogo = ({ className = "w-10 h-10", showText = true }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex items-center gap-3">
      {!imgError ? (
        <img 
          src="/assets/Logo.jpg" 
          alt="MEGA Guild Logo" 
          className="w-10 h-10 object-cover rounded-full border border-[#2F2F2F] bg-[#121212] p-0.5"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-10 h-10 rounded-full bg-[#1C1C1C] border border-[#F97316] p-1 flex items-center justify-center">
          <span className="font-bold text-xs text-[#F97316]">M</span>
        </div>
      )}

      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-heading font-black text-xl tracking-wider leading-none text-white">
            MEGA<span className="text-[#F97316]">.</span>
          </span>
          <span className="text-[9px] font-bold tracking-widest text-[#B3B3B3] uppercase">
            NSRIET • ESTD 2025
          </span>
        </div>
      )}
    </div>
  );
};

// NSRIET College Logo Component
export const NsrietLogo = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex items-center gap-2.5 bg-[#1C1C1C] border border-[#2F2F2F] px-3 py-1.5 rounded-xl hover:border-[#F97316] transition-all">
      {!imgError ? (
        <img 
          src="/assets/NSRIET Logo.png" 
          alt="NSRIET Logo" 
          className="w-8 h-8 object-contain rounded-md bg-white/5 p-0.5"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-7 h-7 rounded-md bg-[#121212] border border-[#F97316] flex items-center justify-center">
          <span className="font-heading font-black text-xs text-[#F97316]">N</span>
        </div>
      )}
      <div className="flex flex-col text-left">
        <span className="font-heading font-bold text-xs tracking-wide text-white">
          NSRIET
        </span>
        <span className="text-[8px] text-[#B3B3B3] font-semibold leading-none">
          VISAKHAPATNAM
        </span>
      </div>
    </div>
  );
};
