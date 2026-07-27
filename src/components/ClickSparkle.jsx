'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ClickSparkle() {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const newSparkle = { id: Date.now(), x: e.clientX, y: e.clientY };
      setSparkles((prev) => [...prev, newSparkle]);

      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
      }, 800);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute"
            style={{ left: sparkle.x, top: sparkle.y }}
          >
            {/* Center dot */}
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff]"
            />
            
            {/* Particles bursting outward */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                animate={{
                  x: Math.cos((i * 60 * Math.PI) / 180) * 30,
                  y: Math.sin((i * 60 * Math.PI) / 180) * 30,
                  scale: 0,
                  opacity: 0,
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-yellow-300 rounded-full"
              />
            ))}
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}
