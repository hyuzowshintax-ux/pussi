"use client";

import React, { useState } from "react";
import { Cpu, Award, Zap, Compass, Shield, BookOpen, Target, Sparkles } from "lucide-react";

interface RadarPillar {
  name: string;
  currentScore: number;
  futureScore: number;
  category: string;
  icon: React.ReactNode;
  detail: string;
}

export const SkillRadarMatrix: React.FC = () => {
  const [visionMode, setVisionMode] = useState<"current" | "future">("current");

  const pillars: RadarPillar[] = [
    {
      name: "Eksplorasi AI & Prompting",
      currentScore: 48,
      futureScore: 85,
      category: "Teknologi",
      icon: <Cpu className="w-4 h-4 text-purple-400" />,
      detail: "Penguasaan LLM, Prompt Engineering, Generative AI & Machine Learning Dasar."
    },
    {
      name: "Pengembangan Web Modern",
      currentScore: 88,
      futureScore: 96,
      category: "Teknologi",
      icon: <Zap className="w-4 h-4 text-pink-400" />,
      detail: "Next.js, React, Tailwind CSS, TypeScript, arsitektur antarmuka & responsivitas."
    },
    {
      name: "Duta Intelegensia & Public Speaking",
      currentScore: 92,
      futureScore: 98,
      category: "Kepemimpinan",
      icon: <Award className="w-4 h-4 text-amber-400" />,
      detail: "Komunikasi publik persuasif, nalar kritis, integritas akademik, dan representasi sekolah."
    },
    {
      name: "Kepanduan Pramuka Garuda & Bantara",
      currentScore: 95,
      futureScore: 99,
      category: "Karakter",
      icon: <Compass className="w-4 h-4 text-emerald-400" />,
      detail: "Survival kepanduan, kode etik tri satya dasa darma, kepemimpinan regu & ambalan."
    },
    {
      name: "Taktik LKBB & Baris-Berbaris",
      currentScore: 94,
      futureScore: 98,
      category: "Kedisiplinan",
      icon: <Shield className="w-4 h-4 text-red-400" />,
      detail: "Formasi variasi CODASKA, ketangkasan pleton, dan persiapan kontingen LBB 2026."
    },
    {
      name: "Kamtibmas SAKA Bhayangkara",
      currentScore: 90,
      futureScore: 95,
      category: "Pengabdian",
      icon: <BookOpen className="w-4 h-4 text-cyan-400" />,
      detail: "Kesadaran hukum, pertolongan pertama (P3K), ketertiban masyarakat & penanganan darurat."
    }
  ];

  // Hexagon math points generator
  const size = 320;
  const center = size / 2;
  const radius = 110;

  const getCoordinates = (score: number, index: number) => {
    const angle = (Math.PI / 3) * index - Math.PI / 2;
    const r = (score / 100) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  const getPolygonPoints = (isFuture: boolean) => {
    return pillars
      .map((p, idx) => {
        const score = isFuture ? p.futureScore : p.currentScore;
        const coords = getCoordinates(score, idx);
        return `${coords.x},${coords.y}`;
      })
      .join(" ");
  };

  return (
    <section id="radar-matrix" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 flex items-center justify-center space-x-1.5">
            <Target className="w-4 h-4" />
            <span>// Matriks Kompetensi 360°</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Radar Keahlian & Peta Visi Strategis
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 mx-auto rounded-full" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Visualisasi integratif 6 pilar kekuatan Samuel B K yang memadukan teknologi AI, rekam jejak kepemimpinan Duta Intelegensia, dan ketangguhan kepanduan.
          </p>
        </div>

        {/* Vision Timeline Switcher */}
        <div className="flex justify-center mb-12">
          <div className="p-1.5 rounded-2xl glass-card border border-emerald-500/30 flex items-center space-x-2 shadow-lg">
            <button
              onClick={() => setVisionMode("current")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                visionMode === "current"
                  ? "bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-md shadow-emerald-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              📅 Penguasaan Saat Ini (2025)
            </button>
            <button
              onClick={() => setVisionMode("future")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center space-x-1.5 transition-all ${
                visionMode === "future"
                  ? "bg-gradient-to-r from-teal-500 to-emerald-400 text-white shadow-md shadow-teal-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Target Visi Masa Depan (2026 - 2027)</span>
            </button>
          </div>
        </div>

        {/* Radar & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
          
          {/* Hexagon Radar SVG Chart */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-[320px] h-[320px] glass-card rounded-3xl p-4 border border-emerald-500/30 shadow-2xl shadow-emerald-950/40 flex items-center justify-center">
              <svg width={size} height={size} className="overflow-visible">
                {/* Background Concentric Hexagons */}
                {[0.25, 0.5, 0.75, 1].map((scale, i) => (
                  <polygon
                    key={i}
                    points={pillars
                      .map((_, idx) => {
                        const coords = getCoordinates(100 * scale, idx);
                        return `${coords.x},${coords.y}`;
                      })
                      .join(" ")}
                    fill="none"
                    stroke="rgba(52, 211, 153, 0.18)"
                    strokeWidth="1"
                    strokeDasharray={scale === 1 ? "none" : "2,2"}
                  />
                ))}

                {/* Spokes Lines */}
                {pillars.map((_, idx) => {
                  const coords = getCoordinates(100, idx);
                  return (
                    <line
                      key={idx}
                      x1={center}
                      y1={center}
                      x2={coords.x}
                      y2={coords.y}
                      stroke="rgba(52, 211, 153, 0.2)"
                      strokeWidth="1"
                    />
                  );
                })}

                {/* Animated Filled Area Polygon */}
                <polygon
                  points={getPolygonPoints(visionMode === "future")}
                  className="transition-all duration-700 ease-out"
                  fill={visionMode === "future" ? "rgba(20, 184, 166, 0.38)" : "rgba(16, 185, 129, 0.35)"}
                  stroke={visionMode === "future" ? "#2dd4bf" : "#34d399"}
                  strokeWidth="2.5"
                />

                {/* Data Vertex Nodes */}
                {pillars.map((p, idx) => {
                  const score = visionMode === "future" ? p.futureScore : p.currentScore;
                  const coords = getCoordinates(score, idx);
                  return (
                    <g key={idx} className="transition-all duration-700">
                      <circle
                        cx={coords.x}
                        cy={coords.y}
                        r="5"
                        className={visionMode === "future" ? "fill-teal-300" : "fill-emerald-400"}
                      />
                      <circle
                        cx={coords.x}
                        cy={coords.y}
                        r="8"
                        className={`${visionMode === "future" ? "stroke-teal-300/40" : "stroke-emerald-400/40"} fill-none animate-ping`}
                      />
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Pillars List Details */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {pillars.map((pillar, idx) => {
              const currentVal = visionMode === "future" ? pillar.futureScore : pillar.currentScore;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl glass-card border border-emerald-500/20 hover:border-emerald-400/40 transition-all space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-7 h-7 rounded-xl bg-slate-900/80 flex items-center justify-center border border-emerald-500/30">
                        {pillar.icon}
                      </div>
                      <span className="text-xs font-bold text-white line-clamp-1">{pillar.name}</span>
                    </div>
                    <span className="font-mono text-xs font-extrabold text-emerald-400">{currentVal}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden border border-slate-700/50">
                    <div
                      style={{ width: `${currentVal}%` }}
                      className={`h-full rounded-full transition-all duration-700 ${
                        visionMode === "future"
                          ? "bg-gradient-to-r from-teal-400 to-emerald-300"
                          : "bg-gradient-to-r from-emerald-600 to-teal-400"
                      }`}
                    ></div>
                  </div>

                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
