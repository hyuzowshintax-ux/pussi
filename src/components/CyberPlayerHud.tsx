"use client";

import React, { useState } from "react";
import { useGame } from "@/context/GameContext";
import { Star, Zap, Heart, Trophy, ChevronDown, ChevronUp, RotateCcw, Volume2, Sparkles, Shield } from "lucide-react";

export const CyberPlayerHud: React.FC = () => {
  const { stars, xp, level, hp, mp, rankTitle, recentEvent, resetGameProgress } = useGame();
  const [isExpanded, setIsExpanded] = useState(false);

  // XP threshold calculation for current level
  const getNextLevelXp = (lvl: number) => {
    switch (lvl) {
      case 1: return 100;
      case 2: return 250;
      case 3: return 450;
      case 4: return 700;
      case 5: return 1050;
      case 6: return 1500;
      default: return 2500;
    }
  };

  const currentLevelMinXp = (lvl: number) => {
    switch (lvl) {
      case 1: return 0;
      case 2: return 100;
      case 3: return 250;
      case 4: return 450;
      case 5: return 700;
      case 6: return 1050;
      default: return 1500;
    }
  };

  const nextLevelXp = getNextLevelXp(level);
  const minXp = currentLevelMinXp(level);
  const levelProgress = Math.min(100, Math.max(0, Math.round(((xp - minXp) / (nextLevelXp - minXp)) * 100)));

  return (
    <>
      {/* Floating Level Up & Event Notification Banner */}
      {recentEvent && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 pointer-events-none animate-bounce">
          <div className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500 via-emerald-500 to-teal-400 text-slate-950 font-mono font-black text-xs sm:text-sm shadow-2xl shadow-emerald-500/50 border border-white/40 flex items-center space-x-2">
            <Sparkles className="w-4 h-4 animate-spin" />
            <span>{recentEvent}</span>
          </div>
        </div>
      )}

      {/* Main Cyber Game Player HUD Dock (Pinned Top Right on Desktop, Compact on Mobile) */}
      <div className="fixed top-3 sm:top-4 right-3 sm:right-4 z-40">
        <div className="glass-card rounded-2xl sm:rounded-3xl border border-emerald-500/40 bg-slate-950/90 shadow-2xl shadow-emerald-950/60 p-2 sm:p-3 backdrop-blur-2xl transition-all max-w-[calc(100vw-1.5rem)] sm:max-w-md">
          
          {/* Compact Header Row */}
          <div className="flex items-center justify-between gap-2.5 sm:gap-4">
            
            {/* Player Avatar & Level Pill */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-400 to-cyan-400 p-0.5 flex items-center justify-center shadow-md shadow-emerald-500/30">
                  <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-xs font-black font-mono text-emerald-400">
                    P1
                  </div>
                </div>
                <span className="absolute -bottom-1 -right-1 px-1.5 py-0.2 rounded-full bg-amber-400 text-slate-950 text-[9px] font-black font-mono shadow">
                  LV.{level}
                </span>
              </div>

              <div className="hidden min-[400px]:block">
                <div className="text-[11px] sm:text-xs font-bold font-mono text-white flex items-center space-x-1">
                  <span>SAMUEL B K</span>
                </div>
                <div className="text-[9px] sm:text-[10px] font-mono text-emerald-400 font-semibold tracking-wider">
                  [{rankTitle}]
                </div>
              </div>
            </div>

            {/* Star Inventory Counter */}
            <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-xl bg-amber-500/15 border border-amber-400/30 text-amber-300 font-mono font-bold text-xs shadow-sm">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 animate-pulse" />
              <span>{stars} <span className="hidden sm:inline text-[10px] text-amber-200">STARS</span></span>
            </div>

            {/* Quick Toggle Details Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-emerald-500/20 transition-all text-xs flex items-center"
              aria-label="Toggle Detail HUD Game"
            >
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

          </div>

          {/* Expanded HUD RPG Stats Panel */}
          {isExpanded && (
            <div className="mt-3 pt-3 border-t border-emerald-500/20 space-y-2.5 font-mono text-xs animate-cloud-enter">
              
              {/* HP Bar */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[10px] text-rose-300 font-bold">
                  <span className="flex items-center space-x-1">
                    <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
                    <span>HEALTH (HP):</span>
                  </span>
                  <span>{hp} / 100</span>
                </div>
                <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-rose-500/30">
                  <div className="h-full bg-gradient-to-r from-rose-500 to-red-400 rounded-full" style={{ width: `${hp}%` }} />
                </div>
              </div>

              {/* MP / Energy Bar */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[10px] text-cyan-300 font-bold">
                  <span className="flex items-center space-x-1">
                    <Zap className="w-3 h-3 text-cyan-400 fill-cyan-400" />
                    <span>ENERGY (MP):</span>
                  </span>
                  <span>{mp} / 100</span>
                </div>
                <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-cyan-500/30">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full" style={{ width: `${mp}%` }} />
                </div>
              </div>

              {/* XP Progress to Next Level */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[10px] text-emerald-300 font-bold">
                  <span className="flex items-center space-x-1">
                    <Trophy className="w-3 h-3 text-emerald-400" />
                    <span>EXP PROGRESS:</span>
                  </span>
                  <span>{xp} / {nextLevelXp} XP ({levelProgress}%)</span>
                </div>
                <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-emerald-500/30">
                  <div className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-full transition-all duration-500" style={{ width: `${levelProgress}%` }} />
                </div>
              </div>

              {/* Game Guidance Note */}
              <div className="p-2 rounded-xl bg-slate-900/80 border border-emerald-500/20 text-[10px] text-slate-300 flex items-start space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>Klik bintang-bintang emas (⭐) yang tersebar di halaman portofolio untuk mengumpulkan Star Coins & menaikkan Level kamu!</span>
              </div>

              {/* Reset Game Button */}
              <div className="flex justify-end pt-1">
                <button
                  onClick={resetGameProgress}
                  className="px-2 py-1 rounded-lg text-[10px] text-slate-400 hover:text-rose-400 flex items-center space-x-1 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset Data Game</span>
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </>
  );
};
