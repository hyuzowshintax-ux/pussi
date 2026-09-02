"use client";

import React, { useEffect } from "react";

export const InteractiveClickFX: React.FC = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const ripple = document.createElement("div");
      ripple.className = "click-ripple-circle";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;

      document.body.appendChild(ripple);

      setTimeout(() => {
        if (ripple.parentElement) {
          ripple.parentElement.removeChild(ripple);
        }
      }, 700);

      // Check if target is inside an interactive card/button
      const target = (e.target as HTMLElement).closest(".glass-card, button, a, .interactive-field");
      if (target && !target.classList.contains("no-pop")) {
        target.classList.remove("animate-opening-pop");
        void (target as HTMLElement).offsetWidth; // Trigger reflow
        target.classList.add("animate-opening-pop");
      }
    };

    window.addEventListener("click", handleClick, { passive: true });
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return null;
};
