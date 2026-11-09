"use client";

import React, { useState, useRef } from "react";
import { Award, Sparkles, Shield, Trophy, CheckCircle, RotateCw, ExternalLink } from "lucide-react";

interface TrophyItem {
  id: string;
  title: string;
  role: string;
  year: string;
  badgeUrl: string;
  rarity: "Legendary" | "Mythic" | "Epic";
  colorGradient: string;
  description: string;
  skillsUnlocked: string[];
}

export const HolographicTrophyShowcase: React.FC = () => {
  const [activeTrophyId, setActiveTrophyId] = useState<string>("duta");
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const trophies: TrophyItem[] = [
    {
      id: "duta",
      title: "Duta Intelegensia",
      role: "SMAN 1 Kandangan",
      year: "2025 - 2026",
      badgeUrl: "/badges/duta-intelegensia.svg",
      rarity: "Legendary",
      colorGradient: "from-amber-400 via-purple-500 to-pink-500",
      description: "Representasi teladan siswa berintelektual tinggi, nalar kritis, dan berwawasan luas sebagai Duta Intelegensia terpilih.",
      skillsUnlocked: ["Public Speaking", "Problem Solving", "Academic Excellence", "Leadership"]
    },
    {
      id: "garuda",
      title: "Pramuka Garuda Penggalang",
      role: "Kwartir Gerakan Pramuka",
      year: "2023",
      badgeUrl: "/badges/pramuka-garuda.svg",
      rarity: "Mythic",
      colorGradient: "from-red-500 via-amber-500 to-yellow-400",
      description: "Pencapaian kehormatan tingkat tertinggi Pramuka Penggalang melalui uji keteladanan watak, keterampilan khusus, dan pengabdian.",
      skillsUnlocked: ["Scouting Mastery", "Survival & Navigasi", "Keteladanan Karakter", "Pengabdian Masyarakat"]
    },
    {
      id: "codaska",
      title: "CODASKA (LKBB)",
      role: "SMAN 1 Kandangan",
      year: "2024 - Sekarang",
      badgeUrl: "/badges/codaska-lkbb.svg",
      rarity: "Epic",
      colorGradient: "from-red-600 via-pink-600 to-amber-500",
      description: "Organisasi ketangkasan baris-berbaris dan formasi variasi dengan ketahanan mental serta disiplin komando tinggi.",
      skillsUnlocked: ["Formasi PBB", "Koordinasi Pleton", "Ketahanan Mental", "Disiplin Komando"]
    },
    {
      id: "bantara",
      title: "Penegak Bantara & SAKA Bhayangkara",
      role: "Ambalan SMAN 1 & Kepolisian",
      year: "2024 - Sekarang",
      badgeUrl: "/badges/pramuka-bantara-bhayangkara.svg",
      rarity: "Epic",
      colorGradient: "from-emerald-500 via-cyan-500 to-blue-600",
      description: "Pramuka Penegak Bantara yang mendalami ketertiban masyarakat, kepolisian, dan penanganan tanggap darurat.",
      skillsUnlocked: ["Kamtibmas", "Pertolongan Pertama (P3K)", "Kepemimpinan Lapangan", "Hukum & Disiplin"]
    },
    {
      id: "paskibra",
      title: "Paskibra Kecamatan Kandangan",
      role: "HUT RI Tingkat Kecamatan",
      year: "2024",
      badgeUrl: "/badges/paskibra-kandangan.svg",
      rarity: "Epic",
      colorGradient: "from-pink-500 via-red-500 to-amber-400",
      description: "Pasukan Pengibar Bendera dalam upacara kenegaraan dengan barisan tegap, keserempakan langkah, dan patriotisme.",
      skillsUnlocked: ["Keserempakan Langkah", "Nasionalisme", "Fokus Tinggi", "Ketahanan Fisik"]
    }
  ];

  const currentTrophy = trophies.find((t) => t.id === activeTrophyId) || trophies[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -16;
    const rotY = ((x - centerX) / centerX) * 16;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos({ x: 50, y: 50 });
  };

  return (
    <section id="holographic-trophies" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 flex items-center justify-start space-x-1.5">
            <Trophy className="w-4 h-4" />
            <span>// Galeri Lencana Kehormatan</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Galeri Lencana & Rekam Kehormatan 3D
          </h2>
          <div className="w-16 h-1 bg-emerald-600 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Arahkan kursor ke kartu lencana untuk mengaktifkan efek 3D interaktif dan rincian kompetensi yang dikuasai.
          </p>
        </div>

        {/* Trophy Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {trophies.map((trophy) => (
            <button
              key={trophy.id}
              onClick={() => setActiveTrophyId(trophy.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold flex items-center space-x-2 transition-all duration-300 ${
                activeTrophyId === trophy.id
                  ? "bg-emerald-600 text-white shadow-md scale-105 border border-emerald-600"
                  : "bg-slate-50 text-slate-700 hover:text-emerald-700 border border-slate-200 hover:border-emerald-400"
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${activeTrophyId === trophy.id ? "bg-white" : "bg-emerald-500"}`}></span>
              <span>{trophy.title}</span>
            </button>
          ))}
        </div>

        {/* 3D Holographic Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* 3D Card */}
          <div className="lg:col-span-6 flex justify-center perspective-[1000px]">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: "transform 0.1s ease-out"
              }}
              className="relative w-full max-w-[340px] sm:max-w-[380px] h-[460px] rounded-3xl p-6 sm:p-8 glass-card border-2 border-slate-200 shadow-xl flex flex-col justify-between items-center text-center overflow-hidden cursor-pointer group select-none"
            >
              {/* Subtle Sheen Overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity duration-300 rounded-3xl"
                style={{
                  background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(16, 185, 129, 0.18) 0%, rgba(20, 184, 166, 0.08) 45%, transparent 80%)`,
                }}
              />

              {/* Rarity & Year Badge */}
              <div className="w-full flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase bg-amber-50 text-amber-700 border border-amber-300">
                  ⭐ {currentTrophy.rarity}
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  {currentTrophy.year}
                </span>
              </div>

              {/* Center Emblem */}
              <div className="relative my-auto z-10">
                <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-3xl bg-slate-50 p-4 border-2 border-slate-200 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 flex items-center justify-center">
                  <img
                    src={currentTrophy.badgeUrl}
                    alt={currentTrophy.title}
                    className="w-full h-full object-contain filter drop-shadow"
                  />
                </div>
              </div>

              {/* Title & Organization */}
              <div className="z-10 space-y-1">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  {currentTrophy.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-emerald-700">
                  {currentTrophy.role}
                </p>
              </div>

              {/* 3D Tilt Hint */}
              <span className="text-[10px] text-slate-400 z-10 flex items-center space-x-1">
                <RotateCw className="w-3 h-3" />
                <span>Gerakkan mouse untuk memutar 3D</span>
              </span>
            </div>
          </div>

          {/* Trophy Metadata & Unlocked Skill Buffs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 inline-block">
                // Rincian Akreditasi
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {currentTrophy.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed p-4 rounded-2xl bg-slate-50 border border-slate-200">
                {currentTrophy.description}
              </p>
            </div>

            {/* Unlocked Capabilities */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center space-x-2">
                <Sparkles className="w-4 h-4" />
                <span>// Kemampuan & Kompetensi Utama</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentTrophy.skillsUnlocked.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center space-x-2.5 text-xs text-slate-800 font-medium"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Official Authentication Note */}
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-center space-x-3 text-xs text-slate-700">
              <Shield className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <span>
                Dokumentasi terotentikasi dan terdaftar secara sah dalam portofolio resmi Samuel B K.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
