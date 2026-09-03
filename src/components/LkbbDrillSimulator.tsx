"use client";

import React, { useState, useEffect } from "react";
import { Shield, Play, RotateCcw, Volume2, Sparkles, Award, Compass, Flag } from "lucide-react";

type FormationType = "standard" | "garuda" | "shield" | "varrow";

interface SoldierPos {
  id: number;
  x: number; // percentage (0 - 100)
  y: number; // percentage (0 - 100)
  role: string;
}

export const LkbbDrillSimulator: React.FC = () => {
  const [formation, setFormation] = useState<FormationType>("standard");
  const [stepCount, setStepCount] = useState(0);
  const [isMarching, setIsMarching] = useState(false);

  // Standard 4x4 Squad
  const standardPositions: SoldierPos[] = [
    { id: 1, x: 25, y: 25, role: "Danton (Pemimpin)" },
    { id: 2, x: 42, y: 25, role: "Shaf 1" },
    { id: 3, x: 58, y: 25, role: "Shaf 1" },
    { id: 4, x: 75, y: 25, role: "Shaf 1" },

    { id: 5, x: 25, y: 45, role: "Shaf 2" },
    { id: 6, x: 42, y: 45, role: "Shaf 2" },
    { id: 7, x: 58, y: 45, role: "Shaf 2" },
    { id: 8, x: 75, y: 45, role: "Shaf 2" },

    { id: 9, x: 25, y: 65, role: "Shaf 3" },
    { id: 10, x: 42, y: 65, role: "Shaf 3" },
    { id: 11, x: 58, y: 65, role: "Shaf 3" },
    { id: 12, x: 75, y: 65, role: "Shaf 3" },

    { id: 13, x: 25, y: 85, role: "Penutup" },
    { id: 14, x: 42, y: 85, role: "Penutup" },
    { id: 15, x: 58, y: 85, role: "Penutup" },
    { id: 16, x: 75, y: 85, role: "Penutup" },
  ];

  // Sayap Garuda Formation
  const garudaPositions: SoldierPos[] = [
    { id: 1, x: 50, y: 15, role: "Danton (Kepala Garuda)" },
    { id: 2, x: 35, y: 30, role: "Sayap Kiri 1" },
    { id: 3, x: 65, y: 30, role: "Sayap Kanan 1" },
    { id: 4, x: 20, y: 45, role: "Sayap Kiri 2" },
    { id: 5, x: 80, y: 45, role: "Sayap Kanan 2" },
    { id: 6, x: 10, y: 60, role: "Ujung Sayap Kiri" },
    { id: 7, x: 90, y: 60, role: "Ujung Sayap Kanan" },
    { id: 8, x: 50, y: 35, role: "Jantung Garuda" },
    { id: 9, x: 40, y: 50, role: "Badan Kiri" },
    { id: 10, x: 60, y: 50, role: "Badan Kanan" },
    { id: 11, x: 50, y: 65, role: "Pusat Perisai" },
    { id: 12, x: 35, y: 80, role: "Ekor Kiri" },
    { id: 13, x: 65, y: 80, role: "Ekor Kanan" },
    { id: 14, x: 50, y: 85, role: "Pangkal Ekor" },
    { id: 15, x: 45, y: 92, role: "Cakar Kiri" },
    { id: 16, x: 55, y: 92, role: "Cakar Kanan" },
  ];

  // Cakra Perisai (Shield Circle)
  const shieldPositions: SoldierPos[] = [
    { id: 1, x: 50, y: 50, role: "Danton (Pusat Komando)" },
    { id: 2, x: 50, y: 18, role: "Penjaga Utara" },
    { id: 3, x: 72, y: 26, role: "Perisai Timur Laut" },
    { id: 4, x: 82, y: 50, role: "Penjaga Timur" },
    { id: 5, x: 72, y: 74, role: "Perisai Tenggara" },
    { id: 6, x: 50, y: 82, role: "Penjaga Selatan" },
    { id: 7, x: 28, y: 74, role: "Perisai Barat Daya" },
    { id: 8, x: 18, y: 50, role: "Penjaga Barat" },
    { id: 9, x: 28, y: 26, role: "Perisai Barat Laut" },
    { id: 10, x: 50, y: 34, role: "Lingkar Dalam U" },
    { id: 11, x: 62, y: 42, role: "Lingkar Dalam T" },
    { id: 12, x: 62, y: 58, role: "Lingkar Dalam S" },
    { id: 13, x: 38, y: 58, role: "Lingkar Dalam B" },
    { id: 14, x: 38, y: 42, role: "Lingkar Dalam BL" },
    { id: 15, x: 45, y: 64, role: "Cakra Bawah" },
    { id: 16, x: 55, y: 64, role: "Cakra Bawah" },
  ];

  // V-Formation Arrow
  const varrowPositions: SoldierPos[] = [
    { id: 1, x: 50, y: 15, role: "Ujung Panah (Danton)" },
    { id: 2, x: 42, y: 27, role: "Sayap Kiri 1" },
    { id: 3, x: 58, y: 27, role: "Sayap Kanan 1" },
    { id: 4, x: 34, y: 39, role: "Sayap Kiri 2" },
    { id: 5, x: 66, y: 39, role: "Sayap Kanan 2" },
    { id: 6, x: 26, y: 51, role: "Sayap Kiri 3" },
    { id: 7, x: 74, y: 51, role: "Sayap Kanan 3" },
    { id: 8, x: 18, y: 63, role: "Sayap Kiri 4" },
    { id: 9, x: 82, y: 63, role: "Sayap Kanan 4" },
    { id: 10, x: 10, y: 75, role: "Ujung Sayap Kiri" },
    { id: 11, x: 90, y: 75, role: "Ujung Sayap Kanan" },
    { id: 12, x: 44, y: 55, role: "Kolom Inti Kiri" },
    { id: 13, x: 56, y: 55, role: "Kolom Inti Kanan" },
    { id: 14, x: 50, y: 70, role: "Pangkal Tombak" },
    { id: 15, x: 45, y: 85, role: "Pengawal Belakang" },
    { id: 16, x: 55, y: 85, role: "Pengawal Belakang" },
  ];

  const getPositions = () => {
    switch (formation) {
      case "garuda":
        return garudaPositions;
      case "shield":
        return shieldPositions;
      case "varrow":
        return varrowPositions;
      default:
        return standardPositions;
    }
  };

  const handleSwitchFormation = (type: FormationType) => {
    setIsMarching(true);
    setFormation(type);
    setStepCount((prev) => prev + 16);
    setTimeout(() => setIsMarching(false), 900);
  };

  const positions = getPositions();

  return (
    <section id="lkbb-simulator" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 flex items-center justify-center space-x-1.5">
            <Flag className="w-4 h-4" />
            <span>// Simulasi Taktis CODASKA</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Simulator Formasi Variasi Baris-Berbaris (LKBB)
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 mx-auto rounded-full" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Eksplorasi simulasi 2D interaktif pergerakan 16 personil pleton CODASKA SMAN 1 Kandangan dalam menyusun formasi variasi ketangkasan PBB.
          </p>
        </div>

        {/* Simulator Grid & Controls */}
        <div className="glass-card rounded-3xl border border-emerald-500/25 shadow-2xl shadow-emerald-950/30 overflow-hidden max-w-4xl mx-auto">
          
          {/* Top Status Bar */}
          <div className="p-4 bg-slate-900/90 border-b border-emerald-500/20 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
            <div className="flex items-center space-x-2 text-white">
              <Compass className="w-4 h-4 text-emerald-400" />
              <span>Pleton: <strong>16 Pasukan CODASKA</strong></span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-slate-300">Tempo: <strong>110 BPM</strong></span>
              <span className="text-emerald-400 font-bold">Langkah Total: {stepCount}</span>
              <span className={`px-2.5 py-0.5 rounded-full font-bold ${isMarching ? "bg-amber-500/20 text-amber-300 animate-pulse" : "bg-emerald-500/20 text-emerald-400"}`}>
                {isMarching ? "BERPINDAH..." : "SIAP SEMPURNA"}
              </span>
            </div>
          </div>

          {/* 2D Drill Field (Canvas Area) */}
          <div className="relative w-full h-[360px] sm:h-[420px] bg-slate-950/95 p-4 sm:p-8 overflow-hidden">
            
            {/* Tactical Grid Background Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.08)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
            
            {/* Compass Center Marker */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
              <div className="w-48 h-48 rounded-full border border-emerald-500/50 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border border-dashed border-emerald-500/60"></div>
              </div>
            </div>

            {/* 16 Marching Soldiers */}
            {positions.map((soldier) => {
              const isLeader = soldier.id === 1;
              return (
                <div
                  key={soldier.id}
                  style={{
                    left: `${soldier.x}%`,
                    top: `${soldier.y}%`,
                    transition: "all 0.85s cubic-bezier(0.34, 1.56, 0.64, 1)"
                  }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10`}
                >
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-[11px] shadow-lg transition-transform group-hover:scale-125 ${
                      isLeader
                        ? "bg-gradient-to-tr from-amber-400 to-emerald-500 text-slate-950 ring-4 ring-amber-400/40 font-mono font-extrabold"
                        : "bg-gradient-to-tr from-emerald-600 to-teal-500 text-white ring-2 ring-emerald-500/30"
                    }`}
                  >
                    {isLeader ? "★" : soldier.id}
                  </div>

                  {/* Tooltip Hover */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 hidden group-hover:block whitespace-nowrap px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[10px] font-mono border border-emerald-500/40 shadow-xl pointer-events-none z-30">
                    #{soldier.id} {soldier.role}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Drill Formations Selector Bar */}
          <div className="p-4 sm:p-6 bg-slate-900/90 border-t border-emerald-500/20 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleSwitchFormation("standard")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  formation === "standard"
                    ? "bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-600/30"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                1. Standar Siap (4x4)
              </button>

              <button
                onClick={() => handleSwitchFormation("garuda")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  formation === "garuda"
                    ? "bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-600/30"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                2. Sayap Garuda CODASKA 🦅
              </button>

              <button
                onClick={() => handleSwitchFormation("shield")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  formation === "shield"
                    ? "bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-600/30"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                3. Cakra Perisai Pleton 🛡️
              </button>

              <button
                onClick={() => handleSwitchFormation("varrow")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  formation === "varrow"
                    ? "bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-600/30"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                4. V-Formation Arrow ⚡
              </button>
            </div>

            <button
              onClick={() => {
                setStepCount(0);
                setFormation("standard");
              }}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white text-xs font-mono flex items-center space-x-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
