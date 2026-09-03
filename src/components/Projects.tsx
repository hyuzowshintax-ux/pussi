"use client";

import React, { useState, useEffect, useCallback } from "react";
import { 
  ArrowRight, 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  Gamepad2, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  CheckCircle2, 
  Swords, 
  Cpu, 
  Play, 
  ShieldCheck, 
  Trophy,
  Zap
} from "lucide-react";
import { Project } from "@/types/portfolio";
import { ProjectModal } from "./ProjectModal";

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [filter, setFilter] = useState<string>("all");
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isWarping, setIsWarping] = useState<boolean>(false);

  const filterTabs = [
    { label: "Semua Misi (All)", value: "all" },
    { label: "AI & Web Apps", value: "web" },
    { label: "UI/UX & Design", value: "uiux" },
    { label: "Security & Backend", value: "backend" },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  const safeSlideIndex = Math.min(currentSlide, Math.max(0, filteredProjects.length - 1));
  const activeProject = filteredProjects[safeSlideIndex] || filteredProjects[0];

  // Web Audio API Synth Sound Generator for Gaming Feedback
  const playCyberSound = useCallback((type: "slide" | "select" | "start") => {
    if (!soundEnabled || typeof window === "undefined") return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;
      if (type === "slide") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc.start(now);
        osc.stop(now + 0.12);
      } else if (type === "select") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.setValueAtTime(900, now + 0.06);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        osc.start(now);
        osc.stop(now + 0.15);
      } else if (type === "start") {
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.exponentialRampToValueAtTime(1200, now + 0.25);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      }
    } catch {
      // Audio context fallback
    }
  }, [soundEnabled]);

  const goToNextSlide = useCallback(() => {
    if (filteredProjects.length === 0) return;
    setIsWarping(true);
    playCyberSound("slide");
    setCurrentSlide((prev) => (prev + 1) % filteredProjects.length);
    setTimeout(() => setIsWarping(false), 260);
  }, [filteredProjects.length, playCyberSound]);

  const goToPrevSlide = useCallback(() => {
    if (filteredProjects.length === 0) return;
    setIsWarping(true);
    playCyberSound("slide");
    setCurrentSlide((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
    setTimeout(() => setIsWarping(false), 260);
  }, [filteredProjects.length, playCyberSound]);

  const jumpToSlide = (index: number) => {
    if (index === safeSlideIndex) return;
    setIsWarping(true);
    playCyberSound("select");
    setCurrentSlide(index);
    setTimeout(() => setIsWarping(false), 260);
  };

  // Keyboard Gamepad Navigation (ArrowLeft, ArrowRight, A, D)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === "ArrowRight" || e.key.toLowerCase() === "d") {
        goToNextSlide();
      } else if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a") {
        goToPrevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNextSlide, goToPrevSlide]);

  // Touch Swipe Handling for Mobile Devices
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 40;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      goToNextSlide();
    } else if (distance < -minSwipeDistance) {
      goToPrevSlide();
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            GAMING ARCADE CONSOLE WRAPPER
            ========================================================================= */}
        <div 
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="glass-card rounded-3xl sm:rounded-[2.5rem] p-4 sm:p-8 lg:p-10 border border-emerald-500/30 shadow-[0_20px_60px_-15px_rgba(16,185,129,0.3)] relative backdrop-blur-2xl"
        >
          
          {/* Top Cyber Console Header HUD */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-6 sm:mb-8 border-b border-emerald-500/20 gap-4">
            
            {/* Title & Player HUD */}
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-cyan-400 flex items-center justify-center text-slate-950 shadow-lg shadow-emerald-500/40 animate-pulse">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                    MISSION STAGE SELECT // P1: SAMUEL
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white dark:text-white light:text-slate-900 tracking-tight mt-1">
                  Proyek & Karya Interaktif
                </h2>
              </div>
            </div>

            {/* Sound Toggle & Keyboard Cheat Hint */}
            <div className="flex items-center space-x-3 self-end lg:self-auto">
              <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-emerald-500/20 text-[11px] font-mono text-slate-300">
                <span>Gunakan Tombol</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-emerald-500/40 text-emerald-400 font-bold">◄ A</kbd>
                <span>/</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-emerald-500/40 text-emerald-400 font-bold">D ►</kbd>
              </div>

              <button
                onClick={() => setSoundEnabled((prev) => !prev)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold flex items-center space-x-1.5 border transition-all ${
                  soundEnabled
                    ? "bg-emerald-500/20 border-emerald-400/40 text-emerald-300 shadow-sm"
                    : "bg-slate-900/80 border-slate-700 text-slate-400"
                }`}
                title={soundEnabled ? "Nonaktifkan Efek Suara Game" : "Aktifkan Efek Suara Game"}
              >
                {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4" />}
                <span className="hidden sm:inline">{soundEnabled ? "SFX: ON" : "SFX: OFF"}</span>
              </button>
            </div>

          </div>

          {/* Mission Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => {
                  setFilter(tab.value);
                  setCurrentSlide(0);
                  playCyberSound("select");
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                  filter === tab.value
                    ? "bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 text-slate-950 font-bold shadow-md shadow-emerald-500/30 border border-emerald-300"
                    : "bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-white/10 hover:border-emerald-500/30"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* =========================================================================
              MAIN SLIDE SCREEN (HOLOGRAPHIC GAME STAGE)
              ========================================================================= */}
          {filteredProjects.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-slate-900/60 border border-emerald-500/20 space-y-3">
              <Swords className="w-10 h-10 text-emerald-400 mx-auto" />
              <h3 className="text-xl font-bold text-white font-mono">STAGE LOCKED // TIDAK ADA MISI</h3>
              <p className="text-xs text-slate-400">Pilih kategori misi lainnya untuk membuka panggung proyek.</p>
            </div>
          ) : (
            <div className="space-y-8">
              
              {/* Active Level Quest Container */}
              <div 
                className={`transition-all duration-300 transform ${
                  isWarping ? "opacity-30 scale-[0.98] blur-sm" : "opacity-100 scale-100 blur-0"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Visual Holo-Screen */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-950 border-2 border-emerald-500/40 shadow-2xl group">
                      
                      {/* Scanline CRT overlay */}
                      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,24,27,0)_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px] z-10 opacity-30" />
                      
                      <img
                        src={activeProject.image}
                        alt={activeProject.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                      
                      {/* Top HUD Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                        <div className="flex items-center space-x-2">
                          <span className="px-3 py-1 text-xs font-mono font-bold rounded-lg bg-emerald-500 text-slate-950 shadow-md flex items-center space-x-1">
                            <Zap className="w-3.5 h-3.5 fill-slate-950" />
                            <span>LEVEL 0{safeSlideIndex + 1}</span>
                          </span>
                          <span className="px-2.5 py-1 text-xs font-mono font-semibold rounded-lg bg-slate-900/90 text-emerald-300 border border-emerald-500/40">
                            {activeProject.categoryLabel}
                          </span>
                        </div>
                        {activeProject.featured && (
                          <span className="px-2.5 py-1 text-[11px] font-mono font-bold rounded-lg bg-amber-500/20 border border-amber-400 text-amber-300 flex items-center space-x-1">
                            <Trophy className="w-3 h-3 text-amber-400" />
                            <span>BOSS QUEST</span>
                          </span>
                        )}
                      </div>

                      {/* Bottom Live Target Status */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-emerald-400 z-20">
                        <div className="flex items-center space-x-2 bg-slate-950/80 px-2.5 py-1 rounded-md border border-emerald-500/30">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span>STATUS: ONLINE & TESTED</span>
                        </div>
                        <span className="bg-slate-950/80 px-2.5 py-1 rounded-md border border-white/10 text-slate-300">
                          CODE: PRJ-{activeProject.id}
                        </span>
                      </div>

                    </div>

                    {/* Cyber Gamepad Controls (Prev / Next & Level Status) */}
                    <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-2xl bg-slate-900/85 border border-emerald-500/20 gap-2">
                      
                      {/* Prev Button */}
                      <button
                        onClick={goToPrevSlide}
                        className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 hover:from-emerald-600 hover:to-teal-600 text-white text-[11px] sm:text-xs font-mono font-bold flex items-center space-x-1 sm:space-x-2 border border-emerald-500/30 shadow active:scale-95 transition-all group flex-shrink-0"
                        title="Slide Sebelumnya (Geser Kiri atau Tekan A)"
                      >
                        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                        <span>PREV <span className="hidden sm:inline">STAGE [A]</span></span>
                      </button>

                      {/* Level Dots Indicator */}
                      <div className="flex items-center space-x-1.5 sm:space-x-2 overflow-hidden justify-center flex-1">
                        {filteredProjects.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => jumpToSlide(idx)}
                            className={`transition-all rounded-full ${
                              safeSlideIndex === idx
                                ? "w-6 sm:w-8 h-2 sm:h-2.5 bg-gradient-to-r from-emerald-400 to-teal-300 shadow-[0_0_12px_#34d399]"
                                : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-slate-700 hover:bg-slate-500"
                            }`}
                            aria-label={`Pindah ke slide ${idx + 1}`}
                          />
                        ))}
                      </div>

                      {/* Next Button */}
                      <button
                        onClick={goToNextSlide}
                        className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-slate-950 text-[11px] sm:text-xs font-mono font-black flex items-center space-x-1 sm:space-x-2 shadow-lg shadow-emerald-500/30 active:scale-95 transition-all group flex-shrink-0"
                        title="Slide Berikutnya (Geser Kanan atau Tekan D)"
                      >
                        <span>NEXT <span className="hidden sm:inline">STAGE [D]</span></span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>

                    </div>

                  </div>

                  {/* Right Column: Mission Intel, Features & Action Buttons */}
                  <div className="lg:col-span-6 space-y-5 sm:space-y-6">
                    
                    <div>
                      <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest mb-1.5">
                        <Cpu className="w-4 h-4" />
                        <span>// MISSION BRIEFING DATA</span>
                      </div>
                      <h3 className="text-xl sm:text-3xl font-black text-white dark:text-white light:text-slate-900 leading-tight mb-2 sm:mb-3">
                        {activeProject.title}
                      </h3>
                      <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-xs sm:text-base leading-relaxed">
                        {activeProject.fullDescription || activeProject.description}
                      </p>
                    </div>

                    {/* Quest Objectives & Key Achievements */}
                    {activeProject.highlights && (
                      <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/60 border border-emerald-500/20 space-y-2">
                        <div className="flex items-center justify-between text-xs font-mono text-slate-300 font-bold">
                          <span className="flex items-center space-x-1.5 text-emerald-300">
                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                            <span>QUEST OBJECTIVES UNLOCKED:</span>
                          </span>
                          <span className="text-emerald-400 text-[11px]">100% COMPLETE</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                          {activeProject.highlights.map((item, idx) => (
                            <div key={idx} className="flex items-start space-x-2 text-xs text-slate-200">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                              <span className="leading-snug">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Loot & Tech Inventory */}
                    <div className="space-y-2">
                      <p className="text-[11px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                        LOOT & TECH ARTIFACTS:
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {activeProject.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 sm:py-1 rounded-lg text-[11px] sm:text-xs font-mono bg-slate-900 text-emerald-300 border border-emerald-500/30 shadow-sm"
                          >
                            +{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Mission Launch Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                      
                      {/* Launch Live Mission Button */}
                      <a
                        href={activeProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => playCyberSound("start")}
                        className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 hover:from-emerald-400 hover:to-cyan-300 text-slate-950 font-black text-xs sm:text-sm font-mono tracking-wide shadow-xl shadow-emerald-500/40 hover:shadow-emerald-500/60 flex items-center justify-center space-x-2 active:scale-95 transition-all"
                      >
                        <Play className="w-4 h-4 fill-slate-950" />
                        <span>START MISSION (LIVE DEMO)</span>
                      </a>

                      <div className="flex items-center gap-3">
                        {/* Modal Intel Briefing Button */}
                        <button
                          onClick={() => {
                            playCyberSound("select");
                            setSelectedProject(activeProject);
                          }}
                          className="flex-1 sm:flex-initial px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-mono text-xs sm:text-sm font-bold border border-emerald-500/30 flex items-center justify-center space-x-2 active:scale-95 transition-all"
                        >
                          <ExternalLink className="w-4 h-4 text-emerald-400" />
                          <span>INTEL BRIEFING</span>
                        </button>

                        {/* Source Code Button */}
                        <a
                          href={activeProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => playCyberSound("select")}
                          className="p-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-emerald-500/30 flex items-center justify-center active:scale-95 transition-all"
                          title="Source Code Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>

                    </div>

                  </div>

                </div>
              </div>

              {/* Bottom Level Select Slide Strip (Mini Quick-Access Nodes) */}
              <div className="pt-6 border-t border-emerald-500/15">
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400">
                  <span>QUICK STAGE WARP:</span>
                  <span className="text-emerald-400">STAGE {safeSlideIndex + 1} OF {filteredProjects.length}</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {filteredProjects.map((proj, idx) => (
                    <button
                      key={proj.id}
                      onClick={() => jumpToSlide(idx)}
                      className={`p-3 rounded-xl text-left font-mono transition-all border flex flex-col justify-between ${
                        safeSlideIndex === idx
                          ? "bg-gradient-to-r from-emerald-600/30 to-teal-500/20 border-emerald-400 shadow-lg shadow-emerald-500/20"
                          : "bg-slate-900/60 border-white/5 text-slate-400 hover:border-emerald-500/40 hover:text-slate-200"
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px] font-bold mb-1">
                        <span className={safeSlideIndex === idx ? "text-emerald-300" : "text-slate-500"}>
                          STAGE 0{idx + 1}
                        </span>
                        {safeSlideIndex === idx && (
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        )}
                      </div>
                      <span className="text-xs font-sans font-bold text-white truncate">
                        {proj.title.split("–")[0].trim()}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

      </div>

      {/* Full Modal Popup Details */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

