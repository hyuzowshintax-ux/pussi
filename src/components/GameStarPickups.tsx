"use client";

import React, { useState } from "react";
import { useGame } from "@/context/GameContext";
import { Star, Sparkles, Check } from "lucide-react";

interface FloatingStarProps {
  id: string;
  name: string;
  xpValue?: number;
  className?: string;
}

export const FloatingStarItem: React.FC<FloatingStarProps> = ({
  id,
  name,
  xpValue = 100,
  className = ""
}) => {
  const { collectedStarIds, collectStar } = useGame();
  const [justCollected, setJustCollected] = useState(false);

  const isCollected = collectedStarIds.includes(id);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isCollected) return;

    collectStar(id, xpValue, name);
    setJustCollected(true);
    setTimeout(() => setJustCollected(false), 2000);
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        onClick={handleClick}
        disabled={isCollected}
        className={`group relative p-2.5 rounded-2xl transition-all duration-300 flex items-center justify-center ${
          isCollected
            ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 cursor-default opacity-80"
            : "bg-amber-400/20 hover:bg-amber-400/35 border-2 border-amber-400 text-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.6)] hover:scale-125 active:scale-95 animate-pulse cursor-pointer"
        }`}
        title={isCollected ? `⭐ ${name} (Sudah Terkumpul)` : `Klik untuk klaim ⭐ ${name} (+${xpValue} XP)!`}
      >
        {isCollected ? (
          <div className="flex items-center space-x-1 text-xs font-mono font-bold text-emerald-300">
            <Check className="w-4 h-4 text-emerald-400" />
            <span className="text-[10px]">CLAIMED</span>
          </div>
        ) : (
          <div className="relative">
            <Star className="w-5 h-5 fill-amber-300 text-amber-300 group-hover:rotate-45 transition-transform" />
            <Sparkles className="w-3 h-3 text-amber-200 absolute -top-1.5 -right-1.5 animate-spin" />
          </div>
        )}
      </button>

      {/* Floating XP Gain Badge Popup on Click */}
      {justCollected && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-emerald-400 text-slate-950 text-xs font-black font-mono shadow-xl animate-bounce pointer-events-none z-50">
          ⭐ +{xpValue} XP!
        </div>
      )}
    </div>
  );
};
