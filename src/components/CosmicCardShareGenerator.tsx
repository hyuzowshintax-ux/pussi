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
    const shareUrl = typeof window !== "undefined" ? window.location.origin : "https://portf-shintax1.vercel.app";
    const shareText = `✨ Lihat Portofolio Resmi & Interaktif AI Design Engineer karya Samuel B K! Buka di: ${shareUrl}`;
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(shareText);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleShareToWhatsApp = () => {
    const shareUrl = typeof window !== "undefined" ? window.location.origin : "https://portf-shintax1.vercel.app";
    const msg = encodeURIComponent(
      `Halo! Saya baru saja melihat Portofolio Interaktif Samuel B K (Duta Intelegensia & AI Design Engineer) lengkap dengan Simulator Taktis LKBB CODASKA! ✨\n\nCek di sini: ${shareUrl}`
    );
    window.open(`https://wa.me/?text=${msg}`, "_blank");
  };

  const handleDownloadCard = async () => {
    setIsDownloading(true);

    try {
      // Create a high-res canvas (1080 x 1400) for IG Story / WA Status
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        setIsDownloading(false);
        return;
      }

      // Ambil 2 font resmi (Inter & Playfair Display) dari variabel CSS next/font
      const rootStyle = getComputedStyle(document.body);
      const bodyFont = rootStyle.getPropertyValue("--font-sans").trim() || "Inter, sans-serif";
      const headingFont = rootStyle.getPropertyValue("--font-heading").trim() || "'Playfair Display', serif";
      await document.fonts.ready;

      canvas.width = 1080;
      canvas.height = 1400;

      // Clean Formal Solid White Background
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, 1080, 1400);

      // Card Outer Border
      ctx.strokeStyle = "#cbd5e1";
      ctx.lineWidth = 4;
      ctx.strokeRect(60, 60, 960, 1280);

      // Card Header Banner
      ctx.fillStyle = "#f8fafc";
      ctx.fillRect(80, 80, 920, 120);

      ctx.fillStyle = "#047857";
      ctx.font = `bold 28px ${bodyFont}`;
      ctx.fillText("✦ SAMUEL B K // OFFICIAL VISITOR IDENTITY PASS", 120, 140);

      ctx.fillStyle = "#475569";
      ctx.font = `22px ${bodyFont}`;
      ctx.fillText("SMAN 1 KANDANGAN • DUTA INTELEGENSIA • CODASKA", 120, 175);

      // Main Badge Center
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(80, 220, 920, 880);
      ctx.strokeStyle = "#e2e8f0";
      ctx.lineWidth = 2;
      ctx.strokeRect(80, 220, 920, 880);

      // Symbol Badge
      ctx.fillStyle = "#0f172a";
      ctx.font = `72px ${bodyFont}`;
      ctx.textAlign = "center";
      ctx.fillText(selectedArchetype.symbol, 540, 385);

      // Visitor Name
      ctx.fillStyle = "#0f172a";
      ctx.font = `bold 52px ${headingFont}`;
      ctx.fillText(visitorName.toUpperCase(), 540, 470);

      // Archetype Tag
      ctx.fillStyle = "#0f766e";
      ctx.font = `bold 32px ${bodyFont}`;
      ctx.fillText(selectedArchetype.name, 540, 530);

      // Tagline & Zodiac
      ctx.fillStyle = "#475569";
      ctx.font = `italic 26px ${headingFont}`;
      ctx.fillText(`"${selectedArchetype.tagline}"`, 540, 580);

      ctx.fillStyle = "#047857";
      ctx.font = `bold 26px ${bodyFont}`;
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
        ctx.fillStyle = "#334155";
        ctx.font = `bold 22px ${bodyFont}`;
        ctx.fillText(s.label, 150, startY);

        ctx.fillStyle = "#047857";
        ctx.font = `bold 22px ${bodyFont}`;
        ctx.fillText(`${s.val}%`, 850, startY);

        // Background Bar
        ctx.fillStyle = "#e2e8f0";
        ctx.fillRect(150, startY + 15, 780, 16);

        // Fill Bar
        const barWidth = (780 * s.val) / 100;
        const barGrad = ctx.createLinearGradient(150, 0, 150 + barWidth, 0);
        barGrad.addColorStop(0, "#059669");
        barGrad.addColorStop(1, "#0d9488");
        ctx.fillStyle = barGrad;
        ctx.fillRect(150, startY + 15, barWidth, 16);

        startY += 75;
      });

      // Watermark Footer
      ctx.fillStyle = "#f8fafc";
      ctx.fillRect(80, 1120, 920, 200);

      ctx.textAlign = "center";
      ctx.fillStyle = "#047857";
      ctx.font = `bold 28px ${bodyFont}`;
      ctx.fillText("🔗 Buka Portofolio: portf-shintax1.vercel.app", 540, 1190);

      ctx.fillStyle = "#64748b";
      ctx.font = `20px ${bodyFont}`;
      ctx.fillText("Next.js 14 • AI Design Engineer • LKBB CODASKA Simulator", 540, 1240);

      // Export & Trigger Download
      const dataUrl = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `Identity-Pass-${visitorName.replace(/\s+/g, "-")}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch {
      // Safe export fallback
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      {/* Floating Share & Card Generator Trigger Badge */}
      <div className="fixed top-24 left-4 sm:left-6 z-30 pointer-events-auto">
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center space-x-2 px-3.5 py-2 rounded-full glass-card bg-white border border-slate-200 hover:border-teal-500 text-slate-700 hover:text-teal-700 text-xs font-semibold shadow-md transition-all duration-300 active:scale-95"
          title="Buat Kartu Hologram & Bagikan Portofolio"
        >
          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-teal-500 to-emerald-500 flex items-center justify-center text-white text-[11px] font-bold shadow-sm">
            🎴
          </div>
          <span className="hidden sm:inline text-[11px] font-semibold text-slate-700 group-hover:text-teal-700 transition-colors">
            Buat Kartu Identitas & Share
          </span>
          <span className="sm:hidden text-[11px] font-semibold text-slate-700">
            Share Card
          </span>
        </button>
      </div>

      {/* Main Generator Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-cloud-enter overflow-y-auto">
          <div className="relative w-full max-w-4xl glass-card bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh] my-auto">
            
            {/* Header */}
            <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between relative z-10">
              <div className="flex items-center space-x-3.5">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-teal-600 to-emerald-500 flex items-center justify-center text-white shadow-md shadow-teal-600/25">
                  <Share2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-teal-700">
                      // SHARE & VISITOR IDENTITY GENERATOR
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Buat Kartu Karakter & Bagikan ke Medsos
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors border border-slate-200"
                aria-label="Tutup Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white">
              
              {/* Left Column: Form Controls */}
              <div className="lg:col-span-5 space-y-5">
                
                {/* Input Name */}
                <div className="space-y-1.5">
                  <label className="text-xs text-slate-700 font-semibold uppercase tracking-wider block">
                    Nama Kamu:
                  </label>
                  <input
                    type="text"
                    maxLength={25}
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value || "Sahabat Samuel")}
                    placeholder="Ketik nama kamu..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 font-semibold text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
                  />
                </div>

                {/* Pick Zodiac */}
                <div className="space-y-1.5">
                  <label className="text-xs text-slate-700 font-semibold uppercase tracking-wider block">
                    Pilih Zodiak Kamu:
                  </label>
                  <select
                    value={selectedZodiac}
                    onChange={(e) => setSelectedZodiac(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 font-semibold text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
                  >
                    {zodiacOptions.map((z, idx) => (
                      <option key={idx} value={z} className="bg-white text-slate-900">
                        {z}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Archetype Selector */}
                <div className="space-y-2">
                  <label className="text-xs text-slate-700 font-semibold uppercase tracking-wider block">
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
                              ? "bg-teal-50 border-teal-500 text-slate-900 shadow-sm"
                              : "bg-slate-50 border-slate-200 text-slate-700 hover:border-teal-400 hover:bg-white"
                          }`}
                        >
                          <div className="flex items-center space-x-2.5">
                            <span className="text-xl">{arch.symbol}</span>
                            <div>
                              <div className="text-xs font-bold text-slate-900">{arch.name}</div>
                              <div className="text-[10px] text-slate-500">{arch.tagline}</div>
                            </div>
                          </div>
                          {isSelected && <span className="w-2 h-2 rounded-full bg-teal-600 animate-ping" />}
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
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/25 flex items-center justify-center space-x-2 active:scale-95 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>{isDownloading ? "Memproses Kartu..." : "Unduh Gambar Kartu (HD)"}</span>
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={handleShareToWhatsApp}
                      className="py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center justify-center space-x-1.5 transition-all"
                    >
                      <span>Share WA</span>
                    </button>
                    <button
                      onClick={handleCopyShareLink}
                      className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center space-x-1.5 transition-all"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? "Tersalin!" : "Salin Link"}</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Right Column: Live Interactive Card Preview */}
              <div className="lg:col-span-7 flex flex-col items-center justify-center">
                <div 
                  ref={cardRef}
                  className="w-full max-w-sm rounded-3xl p-6 relative overflow-hidden bg-white border-2 border-slate-200 shadow-xl space-y-4 text-center group transform transition-transform hover:scale-[1.02]"
                >
                  {/* Top Badge Info */}
                  <div className="flex items-center justify-between text-[10px] font-bold text-emerald-700 border-b border-slate-200 pb-2">
                    <span>✦ SAMUEL B K PORTFOLIO</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700">
                      OFFICIAL PASS
                    </span>
                  </div>

                  {/* Character Avatar Icon */}
                  <div className="w-20 h-20 mx-auto rounded-3xl bg-slate-50 border-2 border-emerald-200 shadow-sm flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                    {selectedArchetype.symbol}
                  </div>

                  {/* Name & Role */}
                  <div className="space-y-1">
                    <h4 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      {visitorName}
                    </h4>
                    <p className="text-xs text-teal-700 font-bold">
                      {selectedArchetype.name}
                    </p>
                    <p className="text-[11px] text-slate-500 italic">
                      &ldquo;{selectedArchetype.tagline}&rdquo;
                    </p>
                  </div>

                  {/* Meta Pills */}
                  <div className="flex items-center justify-center gap-2 pt-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {selectedZodiac}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-50 text-teal-700 border border-teal-200">
                      Elemen: {selectedArchetype.element}
                    </span>
                  </div>

                  {/* Stat Progress Bar */}
                  <div className="space-y-1.5 text-left p-3 rounded-2xl bg-slate-50 border border-slate-200 text-[10px]">
                    <div className="flex justify-between text-slate-700 font-semibold">
                      <span>INTELLIGENCE:</span>
                      <span className="text-emerald-700 font-bold">{selectedArchetype.stats.intel}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full" style={{ width: `${selectedArchetype.stats.intel}%` }} />
                    </div>

                    <div className="flex justify-between text-slate-700 font-semibold pt-1">
                      <span>INTEGRITY & HONOR:</span>
                      <span className="text-emerald-700 font-bold">{selectedArchetype.stats.integrity}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full" style={{ width: `${selectedArchetype.stats.integrity}%` }} />
                    </div>
                  </div>

                  {/* Bottom Footer Watermark */}
                  <div className="pt-2 border-t border-slate-200 text-[9px] font-semibold text-slate-500 flex items-center justify-between">
                    <span>SMAN 1 KANDANGAN</span>
                    <span className="text-emerald-700">portf-shintax1.vercel.app</span>
                  </div>

                </div>

                <span className="text-[11px] text-slate-500 mt-2">
                  ✨ Bagikan kartu ini ke IG Story / WhatsApp Status!
                </span>
              </div>

            </div>

          </div>
        </div>
      )}
    </>
  );
};
