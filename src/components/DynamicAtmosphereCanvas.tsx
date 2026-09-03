"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  glowColor: string;
  alpha: number;
  baseAlpha: number;
  pulseSpeed: number;
  pulseOffset: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
  active: boolean;
  color: string;
}

export const DynamicAtmosphereCanvas: React.FC<{ darkMode?: boolean }> = ({ darkMode = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: -1000, y: -1000, active: false };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.active = false;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // Particle Palette (Blue-to-Green Oceanic Stardust Spectrum)
    const colors = darkMode
      ? [
          { c: "rgba(56, 189, 248, ", glow: "#38bdf8" }, // Electric Sky Blue
          { c: "rgba(6, 182, 212, ", glow: "#06b6d4" },  // Bioluminescent Cyan
          { c: "rgba(45, 212, 191, ", glow: "#2dd4bf" },  // Teal Aqua
          { c: "rgba(52, 211, 153, ", glow: "#34d399" }, // Mint Jade
          { c: "rgba(16, 185, 129, ", glow: "#10b981" }  // Emerald Green
        ]
      : [
          { c: "rgba(2, 132, 199, ", glow: "#0284c7" },
          { c: "rgba(13, 148, 136, ", glow: "#0d9488" },
          { c: "rgba(16, 185, 129, ", glow: "#10b981" },
          { c: "rgba(5, 150, 105, ", glow: "#059669" }
        ];

    const particleCount = Math.min(Math.floor((width * height) / 14000), 75);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const col = colors[Math.floor(Math.random() * colors.length)];
      const x = Math.random() * width;
      const y = Math.random() * height;
      const baseAlpha = Math.random() * 0.5 + 0.25;
      particles.push({
        x,
        y,
        originX: x,
        originY: y,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 2.2 + 0.8,
        color: col.c,
        glowColor: col.glow,
        alpha: baseAlpha,
        baseAlpha,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }

    // Shooting Stars
    const shootingStars: ShootingStar[] = [];
    let nextShootingStarTime = Date.now() + 2000;

    const spawnShootingStar = () => {
      const starColors = ["#ffffff", "#38bdf8", "#67e8f9", "#34d399", "#a7f3d0"];
      shootingStars.push({
        x: Math.random() * width * 0.8,
        y: Math.random() * height * 0.4,
        length: Math.random() * 90 + 70,
        speed: Math.random() * 8 + 9,
        angle: (Math.PI / 4) + (Math.random() - 0.5) * 0.2, // ~45 deg
        alpha: 1,
        active: true,
        color: starColors[Math.floor(Math.random() * starColors.length)]
      });
      nextShootingStarTime = Date.now() + Math.random() * 5000 + 3500;
    };

    let frame = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      frame++;

      // Check spawn shooting star
      if (Date.now() > nextShootingStarTime && darkMode) {
        spawnShootingStar();
      }

      // 1. Draw Shooting Stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        if (!s.active) continue;

        const tailX = s.x - Math.cos(s.angle) * s.length;
        const tailY = s.y - Math.sin(s.angle) * s.length;

        const grad = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
        grad.addColorStop(0, s.color);
        grad.addColorStop(0.3, "rgba(52, 211, 153, 0.6)");
        grad.addColorStop(1, "transparent");

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();

        // Spark head
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(s.x, s.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.alpha -= 0.015;

        if (s.x > width + 100 || s.y > height + 100 || s.alpha <= 0) {
          s.active = false;
          shootingStars.splice(i, 1);
        }
      }

      // 2. Draw Ethereal Floating Zodiac Glyphs in the Deep Background
      const zodiacGlyphs = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];
      ctx.font = "16px 'Courier New', monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (let i = 0; i < Math.min(particles.length, 12); i++) {
        const p = particles[i];
        const glyph = zodiacGlyphs[i % zodiacGlyphs.length];
        const glyphAlpha = Math.max(0.08, p.alpha * 0.28);
        ctx.fillStyle = `rgba(52, 211, 153, ${glyphAlpha})`;
        ctx.shadowColor = "#38bdf8";
        ctx.shadowBlur = 8;
        ctx.fillText(glyph, p.x + 10, p.y - 12);
        ctx.shadowBlur = 0;
      }

      // 3. Draw Particles & Constellation Connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges smoothly
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Mouse attraction / interaction
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const force = (150 - dist) / 150;
            p.x += (dx / dist) * force * 1.8;
            p.y += (dy / dist) * force * 1.8;
          }
        }

        // Breathing pulse alpha
        p.alpha = p.baseAlpha + Math.sin(frame * p.pulseSpeed + p.pulseOffset) * 0.25;
        p.alpha = Math.max(0.1, Math.min(0.85, p.alpha));

        // Draw particle node
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowColor = p.glowColor;
        ctx.shadowBlur = p.size * 3.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw soft constellation web lines to nearby neighbors
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 115) {
            const lineAlpha = (1 - dist / 115) * 0.18 * (darkMode ? 1 : 0.7);
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700"
      style={{ opacity: darkMode ? 0.95 : 0.65 }}
    />
  );
};
