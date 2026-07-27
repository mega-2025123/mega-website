'use client';

import React, { useState } from 'react';

// MEGA Guild Logo Component
export const MegaLogo = ({ className = "w-10 h-10", showText = true }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex items-center gap-3">
      {!imgError ? (
        <img 
          src="/assets/Logo.png" 
          alt="MEGA Guild Logo" 
          className="w-10 h-10 object-contain rounded-full border border-orange-500/40 bg-black/60 p-0.5"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-10 h-10 rounded-full bg-neutral-900 border border-orange-500/50 p-1 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M50 15 L54 8 L62 10 L63 18 L71 22 L77 17 L84 22 L82 30 L88 36 L96 35 L98 43 L91 49 L91 51 L98 57 L96 65 L88 64 L82 70 L84 78 L77 83 L71 78 L63 82 L62 90 L54 92 L50 85 L46 92 L38 90 L37 82 L29 78 L23 83 L16 78 L18 70 L12 64 L4 65 L2 57 L9 51 L9 49 L2 43 L4 35 L12 36 L18 30 L16 22 L23 17 L29 22 L37 18 L38 10 L46 8 Z" 
              fill="#121212" 
              stroke="#FF4500" 
              strokeWidth="3" 
            />
            <path d="M50 25 C45 35 38 42 38 54 C38 64 43 72 50 72 C57 72 62 64 62 54 C62 42 55 35 50 25 Z" fill="#FF4500" />
            <path d="M50 38 C46 45 42 49 42 56 C42 62 46 66 50 66 C54 66 58 62 58 56 C58 49 54 45 50 38 Z" fill="#FFF" />
          </svg>
        </div>
      )}

      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-heading font-black text-xl tracking-wider leading-none text-white">
            MEGA<span className="text-orange-500">.</span>
          </span>
          <span className="text-[9px] font-bold tracking-widest text-gray-400 uppercase">
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
    <div className="flex items-center gap-2.5 bg-neutral-900 border border-white/10 px-3 py-1.5 rounded-lg hover:border-orange-500/40 transition-all">
      {!imgError ? (
        <img 
          src="/assets/NSRIET Logo.png" 
          alt="NSRIET Logo" 
          className="w-8 h-8 object-contain rounded-md bg-white/5 p-0.5"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-7 h-7 rounded-md bg-neutral-800 border border-orange-500/40 flex items-center justify-center">
          <span className="font-heading font-black text-xs text-orange-500">N</span>
        </div>
      )}
      <div className="flex flex-col text-left">
        <span className="font-heading font-bold text-xs tracking-wide text-white">
          NSRIET
        </span>
        <span className="text-[8px] text-gray-400 font-semibold leading-none">
          VISAKHAPATNAM
        </span>
      </div>
    </div>
  );
};
