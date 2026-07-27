'use client';

import React, { useEffect, useRef } from 'react';

export const EmberCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const particleCount = 50;
    const particles = [];

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 50;
        this.size = Math.random() * 2.2 + 0.8;
        this.speedY = Math.random() * 1.0 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.life = 0;
        this.maxLife = Math.random() * 200 + 120;
        this.opacity = Math.random() * 0.6 + 0.25;

        const colors = ['#FF4500', '#FF7A00', '#FFD700', '#D62828'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX + Math.sin(this.life * 0.04) * 0.25;
        this.y -= this.speedY;
        this.life++;

        if (this.life >= this.maxLife || this.y < -10) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.opacity * (1 - this.life / this.maxLife));
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      const p = new Particle();
      p.y = Math.random() * height;
      particles.push(p);
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
    />
  );
};
