'use client';

import React, { useRef, useEffect } from 'react';

export default function DotField({
  dotSize = 1.5,
  dotSpacing = 30,
  dotColor = 'rgba(255, 255, 255, 0.2)',
  hoverRadius = 250, 
  hoverScale = 6,    
  className = '',
}) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let dots = [];
    
    let lastMoveTime = Date.now();
    let effectMultiplier = 0;

    const initDots = () => {
      dots = [];
      for (let x = 0; x < canvas.width; x += dotSpacing) {
        for (let y = 0; y < canvas.height; y += dotSpacing) {
          dots.push({
            x,
            y,
            currentX: x,
            currentY: y,
            baseSize: dotSize,
            targetSize: dotSize,
            currentSize: dotSize,
          });
        }
      }
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initDots();
    };

    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      lastMoveTime = Date.now();
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
      effectMultiplier = 0;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { x: mouseX, y: mouseY } = mouseRef.current;
      const timeSinceMove = Date.now() - lastMoveTime;

      // Cool down effect
      if (timeSinceMove > 100) {
        effectMultiplier = Math.max(0, effectMultiplier - 0.05);
      } else {
        effectMultiplier = Math.min(1, effectMultiplier + 0.1);
      }

      dots.forEach((dot) => {
        const dx = dot.x - mouseX;
        const dy = dot.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let targetX = dot.x;
        let targetY = dot.y;

        if (dist < hoverRadius) {
          const intensity = (1 - dist / hoverRadius) * effectMultiplier;
          dot.targetSize = dot.baseSize + intensity * hoverScale;
          
          const repelDist = 35 * Math.pow(intensity, 1.5); 
          if (dist > 0) {
            targetX = dot.x + (dx / dist) * repelDist;
            targetY = dot.y + (dy / dist) * repelDist;
          }
        } else {
          dot.targetSize = dot.baseSize;
        }

        dot.currentSize += (dot.targetSize - dot.currentSize) * 0.15;
        dot.currentX += (targetX - dot.currentX) * 0.15;
        dot.currentY += (targetY - dot.currentY) * 0.15;

        // In this project we use dark theme by default, but let's support both
        const isDark = typeof document !== 'undefined' && document.documentElement.classList.contains('dark') || true;
        const colorBase = isDark ? '255, 255, 255' : '0, 0, 0';
        const opacityBase = isDark ? 0.2 : 0.12;
        const brightness = Math.min(1, opacityBase + (dot.currentSize - dot.baseSize) * 0.15);
        ctx.fillStyle = `rgba(${colorBase}, ${brightness})`;

        ctx.beginPath();
        ctx.arc(dot.currentX, dot.currentY, dot.currentSize, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [dotSize, dotSpacing, dotColor, hoverRadius, hoverScale]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}
