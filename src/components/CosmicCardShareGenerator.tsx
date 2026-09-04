"use client";

import React, { useState, useRef } from "react";
import { Sparkles, Share2, Download, Copy, Check, QrCode, Shield, Zap, Flame, Droplets, Wind, Mountain, Eye, X } from "lucide-react";

interface Archetype {
  id: string;
  name: string;
  tagline: string;
  element: "Api" | "Bumi" | "Udara" | "Air";
  colorGradient: string;
  borderColor: string;
  textColor: string;
  symbol: string;
  stats: { intel: number; agility: number; integrity: number; synergy: number };
}

const archetypes: Archetype[] = [
  {
    id: "ai-visionary",
    name: "AI Visionary & Prompt Architect",
    tagline: "Meretas Masa Depan dengan Nalar Generatif",
    element: "Udara",
    colorGradient: "from-cyan-500 via-teal-400 to-emerald-400",
    borderColor: "border-cyan-400/50",
    textColor: "text-cyan-300",
    symbol: "⚡",
    stats: { intel: 99, agility: 94, integrity: 98, synergy: 97 }
  },
  {
    id: "code-wizard",
    name: "Full Stack Cyber Artisan",
    tagline: "Merajut Logika Kode Berkinerja Tinggi",
    element: "Api",
    colorGradient: "from-emerald-500 via-teal-400 to-cyan-500",
    borderColor: "border-emerald-400/50",
    textColor: "text-emerald-300",
    symbol: "🔮",
    stats: { intel: 97, agility: 99, integrity: 96, synergy: 95 }
  },
  {
    id: "tactical-strategist",
    name: "Tactical Drill & Leadership Scout",
    tagline: "Disiplin Presisi, Integritas & Ketegasan Regu",
    element: "Bumi",
    colorGradient: "from-amber-400 via-emerald-500 to-teal-500",
    borderColor: "border-amber-400/50",
    textColor: "text-amber-300",
    symbol: "🛡️",
    stats: { intel: 95, agility: 96, integrity: 100, synergy: 98 }
  },
  {
    id: "cosmic-explorer",
    name: "Celestial Zodiac & Philosophy Scholar",
    tagline: "Menyelami Kebijaksanaan Bintang Kosmik",
    element: "Air",
    colorGradient: "from-indigo-500 via-purple-500 to-pink-500",
    borderColor: "border-purple-400/50",
    textColor: "text-purple-300",
    symbol: "🌌",
    stats: { intel: 98, agility: 92, integrity: 99, synergy: 100 }
  }
];

export const CosmicCardShareGenerator: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visitorName, setVisitorName] = useState("Sahabat Samuel");
  const [selectedArchetype, setSelectedArchetype] = useState<Archetype>(archetypes[0]);
  const [selectedZodiac, setSelectedZodiac] = useState("♊ Gemini");
  const [copied, setCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const zodiacOptions = [
    "♈ Aries", "♉ Taurus", "♊ Gemini", "♋ Cancer",
    "♌ Leo", "♍ Virgo", "♎ Libra", "♏ Scorpio",
    "♐ Sagittarius", "♑ Capricorn", "♒ Aquarius", "♓ Pisces"
  ];

  const handleCopyShareLink = () => {
    const shareUrl = window.location.origin;
    const shareText = `🚀 Lihat Portofolio Interaktif Cyber Arcade & AI Design Engineer karya Samuel B K! Buka di: ${shareUrl}`;
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleShareToWhatsApp = () => {
    const shareUrl = window.location.origin;
    const msg = encodeURIComponent(
      `Halo! Saya baru saja mencoba Portofolio Interaktif Samuel B K (Duta Intelegensia & AI Design Engineer). Keren banget ada Game Arcade dan Simulator Taktis LKBB! 🎮✨\n\nCek di sini: ${shareUrl}`
    );
    window.open(`https://wa.me/?text=${msg}`, "_blank");
  };

  const handleDownloadCard = () => {
    setIsDownloading(true);

    // Create a high-res canvas (1080 x 1400) for IG Story / WA Status
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      setIsDownloading(false);
      return;
    }

    canvas.width = 1080;
    canvas.height = 1400;

    // Background Gradient (Deep Oceanic Abyssal Void)
    const bgGrad = ctx.createLinearGradient(0, 0, 1080, 1400);
    bgGrad.addColorStop(0, "#020d18");
    bgGrad.addColorStop(0.5, "#031b2e");
    bgGrad.addColorStop(1, "#021220");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1080, 1400);

    // Glowing Nebula Circles
    const drawGlow = (x: number, y: number, r: number, color: string) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, color);
      g.addColorStop(1, "transparent");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    };

    drawGlow(200, 250, 450, "rgba(56, 189, 248, 0.25)");
    drawGlow(880, 1100, 500, "rgba(16, 185, 129, 0.22)");

    // Card Outer Border
    ctx.strokeStyle = "rgba(16, 185, 129, 0.4)";
    ctx.lineWidth = 4;
    ctx.strokeRect(60, 60, 960, 1280);

    // Card Header Banner
    ctx.fillStyle = "rgba(15, 23, 42, 0.9)";
    ctx.fillRect(80, 80, 920, 120);

    ctx.fillStyle = "#34d399";
    ctx.font = "bold 28px 'Fira Code', monospace";
    ctx.fillText("✦ SAMUEL B K // OFFICIAL VISITOR IDENTITY PASS", 120, 140);

    ctx.fillStyle = "#94a3b8";
    ctx.font = "22px 'Fira Code', monospace";
    ctx.fillText("SMAN 1 KANDANGAN • DUTA INTELEGENSIA • CODASKA", 120, 175);

    // Main Badge Center
    ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
    ctx.fillRect(80, 220, 920, 880);

    // Symbol Badge Circle
    drawGlow(540, 360, 120, "rgba(45, 212, 191, 0.35)");
    ctx.fillStyle = "#ffffff";
    ctx.font = "72px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(selectedArchetype.symbol, 540, 385);

    // Visitor Name
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 52px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText(visitorName.toUpperCase(), 540, 470);

    // Archetype Tag
    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 32px 'Fira Code', monospace";
    ctx.fillText(selectedArchetype.name, 540, 530);

    // Tagline & Zodiac
    ctx.fillStyle = "#cbd5e1";
    ctx.font = "italic 26px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText(`"${selectedArchetype.tagline}"`, 540, 580);

    ctx.fillStyle = "#34d399";
    ctx.font = "bold 26px 'Fira Code', monospace";
    ctx.fillText(`ZODIAC: ${selectedZodiac.toUpperCase()} • ELEMEN: ${selectedArchetype.element.toUpperCase()}`, 540, 630);

    // Stat Bars
    const stats = [
      { label: "INTELLIGENCE", val: selectedArchetype.stats.intel },
      { label: "AGILITY & SPEED", val: selectedArchetype.stats.agility },
      { label: "INTEGRITY & HONOR", val: selectedArchetype.stats.integrity },
      { label: "COSMIC SYNERGY", val: selectedArchetype.stats.synergy },
    ];

    ctx.textAlign = "left";
    let startY = 700;
    stats.forEach((s) => {
      ctx.fillStyle = "#94a3b8";
      ctx.font = "bold 22px 'Fira Code', monospace";
      ctx.fillText(s.label, 150, startY);

      ctx.fillStyle = "#34d399";
      ctx.font = "bold 22px 'Fira Code', monospace";
      ctx.fillText(`${s.val}%`, 850, startY);

      // Background Bar
      ctx.fillStyle = "rgba(30, 41, 59, 0.8)";
      ctx.fillRect(150, startY + 15, 780, 16);

      // Fill Bar
      const barWidth = (780 * s.val) / 100;
      const barGrad = ctx.createLinearGradient(150, 0, 150 + barWidth, 0);
      barGrad.addColorStop(0, "#0ea5e9");
      barGrad.addColorStop(1, "#10b981");
      ctx.fillStyle = barGrad;
      ctx.fillRect(150, startY + 15, barWidth, 16);

      startY += 75;
    });

    // Watermark Footer
    ctx.fillStyle = "rgba(15, 23, 42, 0.95)";
    ctx.fillRect(80, 1120, 920, 200);

    ctx.textAlign = "center";
    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 28px 'Fira Code', monospace";
    ctx.fillText("🔗 Buka Portofolio: samuelbk.vercel.app", 540, 1190);

    ctx.fillStyle = "#64748b";
    ctx.font = "20px 'Fira Code', monospace";
    ctx.fillText("Next.js 14 • Cyber Arcade Game Stage • LKBB CODASKA Simulator", 540, 1240);

    // Export & Trigger Download
    const dataUrl = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = `Cosmic-ID-${visitorName.replace(/\s+/g, "-")}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setIsDownloading(false);
  };

  return (
    <>
      {/* Floating Share & Card Generator Trigger Badge */}
      <div className="fixed top-24 left-4 sm:left-6 z-30 pointer-events-auto">
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center space-x-2 px-3.5 py-2 rounded-full glass-card border border-cyan-500/30 hover:border-cyan-400/60 bg-slate-950/80 hover:bg-slate-900 text-slate-200 hover:text-white text-xs font-mono font-semibold shadow-lg shadow-cyan-950/40 hover:shadow-cyan-500/20 transition-all duration-300 backdrop-blur-md active:scale-95"
          title="Buat Kartu Hologram & Bagikan Portofolio"
        >
          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-cyan-400 via-teal-400 to-emerald-400 flex items-center justify-center text-slate-950 text-[11px] font-bold shadow-sm">
            🎴
          </div>
          <span className="hidden sm:inline text-[11px] text-cyan-300 group-hover:text-white transition-colors">
            Buat Kartu Hologram & Share
          </span>
          <span className="sm:hidden text-[11px] text-cyan-300">
            Share Card
          </span>
        </button>
      </div>

      {/* Main Generator Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-cloud-enter overflow-y-auto">
          <div className="relative w-full max-w-4xl glass-card rounded-3xl border border-cyan-500/40 shadow-2xl shadow-cyan-950/60 overflow-hidden flex flex-col max-h-[92vh] my-auto bg-slate-950/95">
            
            {/* Header */}
            <div className="p-4 sm:p-6 bg-slate-900/90 border-b border-cyan-500/25 flex items-center justify-between backdrop-blur-md relative z-10">
              <div className="flex items-center space-x-3.5">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-cyan-500 via-teal-400 to-emerald-400 flex items-center justify-center text-slate-950 shadow-lg shadow-cyan-500/30 animate-pulse">
                  <Share2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
                      // VIRAL SHARE & HOLOGRAPHIC ID GENERATOR
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    Buat Kartu Karakter & Bagikan ke Medsos
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-cyan-500/20"
                aria-label="Tutup Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Form Controls */}
              <div className="lg:col-span-5 space-y-5">
                
                {/* Input Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 font-semibold uppercase tracking-wider block">
                    Nama Kamu:
                  </label>
                  <input
                    type="text"
                    maxLength={25}
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value || "Sahabat Samuel")}
                    placeholder="Ketik nama kamu..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-cyan-500/30 text-white font-semibold text-sm focus:outline-none focus:border-cyan-400 transition-all"
                  />
                </div>

                {/* Pick Zodiac */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 font-semibold uppercase tracking-wider block">
                    Pilih Zodiak Kamu:
                  </label>
                  <select
                    value={selectedZodiac}
                    onChange={(e) => setSelectedZodiac(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-cyan-500/30 text-white font-semibold text-sm focus:outline-none focus:border-cyan-400 transition-all"
                  >
                    {zodiacOptions.map((z, idx) => (
                      <option key={idx} value={z} className="bg-slate-900 text-white">
                        {z}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Archetype Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-300 font-semibold uppercase tracking-wider block">
                    Pilih Karakter AI:
                  </label>
                  <div className="space-y-2">
                    {archetypes.map((arch) => {
                      const isSelected = selectedArchetype.id === arch.id;
                      return (
                        <button
                          key={arch.id}
                          onClick={() => setSelectedArchetype(arch)}
                          className={`w-full p-3 rounded-xl text-left border transition-all flex items-center justify-between ${
                            isSelected
                              ? "bg-cyan-500/20 border-cyan-400 text-white shadow-md shadow-cyan-500/20"
                              : "bg-slate-900/60 border-white/5 text-slate-400 hover:border-cyan-500/30 hover:text-slate-200"
                          }`}
                        >
                          <div className="flex items-center space-x-2.5">
                            <span className="text-xl">{arch.symbol}</span>
                            <div>
                              <div className="text-xs font-bold text-white">{arch.name}</div>
                              <div className="text-[10px] text-slate-400">{arch.tagline}</div>
                            </div>
                          </div>
                          {isSelected && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Share Actions */}
                <div className="pt-2 space-y-2.5">
                  <button
                    onClick={handleDownloadCard}
                    disabled={isDownloading}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-slate-950 font-mono font-black text-xs sm:text-sm shadow-xl shadow-cyan-500/30 flex items-center justify-center space-x-2 active:scale-95 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>{isDownloading ? "Memproses Kartu..." : "Unduh Gambar Kartu (HD)"}</span>
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={handleShareToWhatsApp}
                      className="py-2.5 px-3 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold flex items-center justify-center space-x-1.5 transition-all"
                    >
                      <span>Share WA</span>
                    </button>
                    <button
                      onClick={handleCopyShareLink}
                      className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold flex items-center justify-center space-x-1.5 transition-all"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? "Tersalin!" : "Salin Link"}</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Right Column: Live Interactive Hologram Card Preview */}
              <div className="lg:col-span-7 flex flex-col items-center justify-center">
                <div 
                  ref={cardRef}
                  className="w-full max-w-sm rounded-3xl p-6 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-2 border-cyan-400/40 shadow-2xl shadow-cyan-950/60 space-y-4 text-center backdrop-blur-2xl group transform transition-transform hover:scale-[1.02]"
                >
                  
                  {/* Holographic light sweep */}
                  <div className="opening-shine-overlay animate-beam-sweep" />

                  {/* Top Badge Info */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 border-b border-cyan-500/20 pb-2">
                    <span>✦ SAMUEL B K PORTFOLIO</span>
                    <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/40">
                      LEVEL 01 PASS
                    </span>
                  </div>

                  {/* Character Avatar Icon */}
                  <div className="w-20 h-20 mx-auto rounded-3xl bg-slate-900/90 border-2 border-cyan-400/50 shadow-xl shadow-cyan-500/20 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                    {selectedArchetype.symbol}
                  </div>

                  {/* Name & Role */}
                  <div className="space-y-1">
                    <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      {visitorName}
                    </h4>
                    <p className="text-xs font-mono text-cyan-300 font-bold">
                      {selectedArchetype.name}
                    </p>
                    <p className="text-[11px] text-slate-400 italic">
                      &ldquo;{selectedArchetype.tagline}&rdquo;
                    </p>
                  </div>

                  {/* Meta Pills */}
                  <div className="flex items-center justify-center gap-2 pt-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {selectedZodiac}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      Elemen: {selectedArchetype.element}
                    </span>
                  </div>

                  {/* Stat Progress Bar */}
                  <div className="space-y-1.5 text-left p-3 rounded-2xl bg-slate-950/80 border border-cyan-500/20 text-[10px] font-mono">
                    <div className="flex justify-between text-slate-300">
                      <span>INTELLIGENCE:</span>
                      <span className="text-cyan-400 font-bold">{selectedArchetype.stats.intel}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" style={{ width: `${selectedArchetype.stats.intel}%` }} />
                    </div>

                    <div className="flex justify-between text-slate-300 pt-1">
                      <span>INTEGRITY & HONOR:</span>
                      <span className="text-emerald-400 font-bold">{selectedArchetype.stats.integrity}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-300 rounded-full" style={{ width: `${selectedArchetype.stats.integrity}%` }} />
                    </div>
                  </div>

                  {/* Bottom Footer Watermark */}
                  <div className="pt-2 border-t border-cyan-500/20 text-[9px] font-mono text-slate-400 flex items-center justify-between">
                    <span>SMAN 1 KANDANGAN</span>
                    <span className="text-cyan-400">samuelbk.portfolio</span>
                  </div>

                </div>

                <span className="text-[11px] font-mono text-slate-400 mt-2">
                  ✨ Bagikan kartu ini ke IG Story / WhatsApp Status untuk pamer ke teman-teman!
                </span>
              </div>

            </div>

          </div>
        </div>
      )}
    </>
  );
};
