"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";

export interface GameContextType {
  stars: number;
  xp: number;
  level: number;
  hp: number;
  mp: number;
  rankTitle: string;
  collectedStarIds: string[];
  recentEvent: string | null;
  collectStar: (starId: string, xpGain?: number, label?: string) => void;
  gainXp: (amount: number, reason?: string) => void;
  playGameSfx: (type: "star" | "levelup" | "laser" | "hit" | "coin" | "powerup") => void;
  resetGameProgress: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

const RANKS = [
  { minLevel: 1, title: "NOVICE CADET" },
  { minLevel: 2, title: "CYBER APPRENTICE" },
  { minLevel: 3, title: "CODE WARRIOR" },
  { minLevel: 4, title: "TACTICAL COMMANDER" },
  { minLevel: 5, title: "AI PROMPT MASTER" },
  { minLevel: 6, title: "CELESTIAL GRANDMASTER" },
  { minLevel: 7, title: "DUTA INTELEGENSIA LEGEND" }
];

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [stars, setStars] = useState<number>(0);
  const [xp, setXp] = useState<number>(0);
  const [hp, setHp] = useState<number>(100);
  const [mp, setMp] = useState<number>(100);
  const [collectedStarIds, setCollectedStarIds] = useState<string[]>([]);
  const [recentEvent, setRecentEvent] = useState<string | null>(null);

  const audioCtxRef = useRef<AudioContext | null>(null);

  // Load from localStorage if available
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const savedStars = localStorage.getItem("sbk_game_stars");
      const savedXp = localStorage.getItem("sbk_game_xp");
      const savedIds = localStorage.getItem("sbk_game_star_ids");
      if (savedStars) setStars(parseInt(savedStars, 10));
      if (savedXp) setXp(parseInt(savedXp, 10));
      if (savedIds) setCollectedStarIds(JSON.parse(savedIds));
    } catch {
      // Ignore storage errors
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem("sbk_game_stars", stars.toString());
      localStorage.setItem("sbk_game_xp", xp.toString());
      localStorage.setItem("sbk_game_star_ids", JSON.stringify(collectedStarIds));
    } catch {
      // Ignore storage errors
    }
  }, [stars, xp, collectedStarIds]);

  // Calculate Level based on XP
  // Level 1: 0-149 XP, Level 2: 150-349 XP, Level 3: 350-649 XP, Level 4: 650-1049 XP, Level 5: 1050+ XP
  const calculateLevel = (currentXp: number): number => {
    if (currentXp >= 1500) return 7;
    if (currentXp >= 1050) return 6;
    if (currentXp >= 700) return 5;
    if (currentXp >= 450) return 4;
    if (currentXp >= 250) return 3;
    if (currentXp >= 100) return 2;
    return 1;
  };

  const level = calculateLevel(xp);

  const rankTitle = RANKS.slice().reverse().find(r => level >= r.minLevel)?.title || "NOVICE CADET";

  // Web Audio Synth Arcade Sound Generator
  const playGameSfx = useCallback((type: "star" | "levelup" | "laser" | "hit" | "coin" | "powerup") => {
    if (typeof window === "undefined") return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume().catch(() => {});
      }

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === "star" || type === "coin") {
        // Bright 8-bit Star Coin Arpeggio
        osc.type = "sine";
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.setValueAtTime(880.00, now + 0.08); // A5
        osc.frequency.setValueAtTime(1174.66, now + 0.16); // D6
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === "levelup") {
        // Grand 8-bit Level Up Fanfare
        osc.type = "triangle";
        osc.frequency.setValueAtTime(440, now); // A4
        osc.frequency.setValueAtTime(554.37, now + 0.1); // C#5
        osc.frequency.setValueAtTime(659.25, now + 0.2); // E5
        osc.frequency.setValueAtTime(880, now + 0.3); // A5
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
        osc.start(now);
        osc.stop(now + 0.6);
      } else if (type === "powerup") {
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.exponentialRampToValueAtTime(1400, now + 0.25);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      }
    } catch {
      // Audio fallback safe
    }
  }, []);

  const gainXp = useCallback((amount: number, reason?: string) => {
    setXp((prev) => {
      const newXp = prev + amount;
      const oldLevel = calculateLevel(prev);
      const newLevel = calculateLevel(newXp);

      if (newLevel > oldLevel) {
        playGameSfx("levelup");
        setRecentEvent(`🎉 LEVEL UP! NAIK KE LEVEL ${newLevel} [${RANKS.find(r => r.minLevel === newLevel)?.title || "MASTER"}]`);
      } else if (reason) {
        setRecentEvent(`+${amount} XP: ${reason}`);
      }

      setTimeout(() => setRecentEvent(null), 3500);
      return newXp;
    });
  }, [playGameSfx]);

  const collectStar = useCallback((starId: string, xpGain = 100, label?: string) => {
    if (collectedStarIds.includes(starId)) return;

    playGameSfx("star");
    setCollectedStarIds((prev) => [...prev, starId]);
    setStars((prev) => prev + 1);
    gainXp(xpGain, label || "Bintang Kosmik Ditemukan!");
  }, [collectedStarIds, gainXp, playGameSfx]);

  const resetGameProgress = () => {
    setStars(0);
    setXp(0);
    setCollectedStarIds([]);
    setRecentEvent("Progress Game Direset!");
    setTimeout(() => setRecentEvent(null), 2500);
  };

  return (
    <GameContext.Provider
      value={{
        stars,
        xp,
        level,
        hp,
        mp,
        rankTitle,
        collectedStarIds,
        recentEvent,
        collectStar,
        gainXp,
        playGameSfx,
        resetGameProgress
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = (): GameContextType => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};
