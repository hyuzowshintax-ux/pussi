"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Terminal, Copy, Check, Play, BookOpen, Shield, Palette, RefreshCw, Cpu } from "lucide-react";

type LabMode = "edu" | "drill" | "palette";

export const AiPromptLab: React.FC = () => {
  const [activeMode, setActiveMode] = useState<LabMode>("edu");
  const [customPrompt, setCustomPrompt] = useState("");
  const [outputResult, setOutputResult] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const presets: Record<LabMode, { title: string; defaultPrompt: string; sampleResponse: string }> = {
    edu: {
      title: "Edu-Genius (Asisten Belajar Siswa)",
      defaultPrompt: "Jelaskan prinsip Hukum Kekekalan Energi & berikan 1 contoh soal SMA",
      sampleResponse: `🧠 **Edu-Genius Insight by Samuel AI**:

**1. Konsep Utama:**
Energi tidak dapat diciptakan atau dimusnahkan, melainkan hanya dapat berubah dari satu bentuk ke bentuk energi lainnya ($E_{m1} = E_{m2}$).

**2. Rumus Esensial:**
$$E_p + E_k = \\text{Konstan} \\quad \\rightarrow \\quad mgh_1 + \\frac{1}{2}mv_1^2 = mgh_2 + \\frac{1}{2}mv_2^2$$

**3. Contoh Soal Latihan:**
*Sebuah kelapa bermassa 2 kg jatuh dari pohon setinggi 10 m ($g = 10\\text{ m/s}^2$). Berapakah kecepatan saat mencapai tanah?*
👉 **Solusi Kilat**: $v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 10} = \\mathbf{14.14\\text{ m/s}}$`
    },
    drill: {
      title: "CODASKA LKBB Tactical Drill Engine",
      defaultPrompt: "Rancang formasi variasi 16 langkah berputar untuk pleton CODASKA",
      sampleResponse: `🦅 **CODASKA LKBB Formation Strategy**:

**1. Nama Formasi:** *Garuda Cakra Tri-Sula*
**2. Jumlah Langkah:** 16 Hitungan Transisi Tegak
**3. Pola Gerakan Pasukan:**
- **Hitungan 1–4**: Shaf depan langkah tegap condong 45° kanan, shaf tengah buka formasi sayap sayup.
- **Hitungan 5–8**: Pimpinan pleton aba-aba "JALAN DI TEMPAT", dua banjar luar rotasi melingkar menyerupai perisai.
- **Hitungan 9–12**: Hentak kaki serentak ganda (Twin Stomp), regu cakra silang langkah balik arah.
- **Hitungan 13–16**: Penutupan formasi lencana Garuda, posisi siap sempurna serempak!

🚩 **Catatan Komando**: Ketukan tempo 110 BPM, pandangan lurus 15° ke atas dengan hentakan tegap seragam.`
    },
    palette: {
      title: "Cosmic UI Palette & Prompt Engine",
      defaultPrompt: "Generate palet warna futuristik bertema Intelegensia AI & Tailwind CSS class",
      sampleResponse: `🎨 **Cosmic Intelegensia AI Color Palette**:

\`\`\`css
/* Primary Cosmic Violet */   --cosmic-violet: #7c3aed; /* bg-violet-600 */
/* Electric Cyber Pink */     --electric-pink: #ec4899; /* bg-pink-500 */
/* Bioluminescent Cyan */     --bio-cyan:      #06b6d4; /* bg-cyan-500 */
/* Deep Stellar Void */       --stellar-void:  #06010e; /* bg-slate-950 */
\`\`\`

**Tailwind CSS Component Card:**
\`\`\`html
<div class="p-6 rounded-3xl bg-slate-900/70 border border-purple-500/30 backdrop-blur-xl shadow-2xl shadow-purple-900/40 hover:border-pink-500/60 transition-all">
  <span class="gradient-text font-bold text-lg">Intelegensia System</span>
</div>
\`\`\``
    }
  };

  useEffect(() => {
    setCustomPrompt(presets[activeMode].defaultPrompt);
    setOutputResult(presets[activeMode].sampleResponse);
  }, [activeMode]);

  const handleSimulateStream = () => {
    setIsGenerating(true);
    setOutputResult("");
    const targetText = presets[activeMode].sampleResponse;
    let currentIdx = 0;

    const interval = setInterval(() => {
      currentIdx += 6;
      if (currentIdx >= targetText.length) {
        setOutputResult(targetText);
        setIsGenerating(false);
        clearInterval(interval);
      } else {
        setOutputResult(targetText.slice(0, currentIdx));
      }
    }, 15);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputResult);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-lab" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
            // Laboratorium Interaktif
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            AI Prompt Playground & Neural Simulation Lab
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Eksperimen langsung dengan model inferensi AI rancangan Samuel: mulai dari asisten belajar siswa, taktik formasi LKBB, hingga peracik palet desain antarmuka.
          </p>
        </div>

        {/* Interactive Lab Container */}
        <div className="glass-card rounded-3xl border border-purple-500/30 shadow-2xl shadow-purple-950/40 overflow-hidden">
          
          {/* Lab Toolbar */}
          <div className="p-4 sm:p-5 bg-slate-900/90 border-b border-purple-500/20 flex flex-wrap items-center justify-between gap-4">
            
            {/* Mode Selectors */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveMode("edu")}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center space-x-2 transition-all ${
                  activeMode === "edu"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-600/30"
                    : "bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700"
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Edu-Genius (Belajar SMA)</span>
              </button>

              <button
                onClick={() => setActiveMode("drill")}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center space-x-2 transition-all ${
                  activeMode === "drill"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-600/30"
                    : "bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700"
                }`}
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Taktik LKBB CODASKA</span>
              </button>

              <button
                onClick={() => setActiveMode("palette")}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center space-x-2 transition-all ${
                  activeMode === "palette"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-600/30"
                    : "bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700"
                }`}
              >
                <Palette className="w-3.5 h-3.5" />
                <span>Cosmic UI Studio</span>
              </button>
            </div>

            {/* Neural Status */}
            <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Model: Samuel-AI-Engine-v2.0</span>
            </div>
          </div>

          {/* Playground Body */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Input Prompt Box */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-purple-300 uppercase tracking-wider block">
                Prompt Masukan:
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  className="flex-1 bg-slate-900/80 border border-purple-500/30 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-pink-500 transition-colors"
                  placeholder="Masukkan instruksi prompt kustom..."
                />
                <button
                  onClick={handleSimulateStream}
                  disabled={isGenerating}
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 via-purple-700 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white font-semibold text-sm flex items-center justify-center space-x-2 shadow-lg shadow-purple-600/30 transition-all disabled:opacity-50"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Sedang Meracik...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      <span>Jalankan Prompt</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Output Display Terminal */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono text-cyan-300 uppercase tracking-wider flex items-center space-x-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Hasil Inferensi AI (Live Stream):</span>
                </label>
                <button
                  onClick={handleCopy}
                  className="text-xs font-mono text-slate-400 hover:text-white flex items-center space-x-1 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Tersalin!" : "Salin Output"}</span>
                </button>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/80 border border-purple-500/20 font-mono text-xs sm:text-sm text-slate-200 leading-relaxed overflow-x-auto min-h-[160px] whitespace-pre-line shadow-inner">
                {outputResult || (
                  <span className="text-slate-500 animate-pulse">Menunggu eksekusi prompt...</span>
                )}
                {isGenerating && <span className="inline-block w-2 h-4 bg-purple-400 animate-pulse ml-1"></span>}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
