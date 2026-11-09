"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
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
  Zap,
  Star
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

  const audioCtxRef = useRef<AudioContext | null>(null);

  // Web Audio API Synth Sound Generator for Gaming Feedback
  const playCyberSound = useCallback((type: "slide" | "select" | "start") => {
    if (!soundEnabled || typeof window === "undefined") return;
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
    <section id="projects" className="py-16 sm:py-24 bg-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            PROJECT SHOWCASE CONSOLE WRAPPER
            ========================================================================= */}
        <div 
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="glass-card rounded-3xl sm:rounded-[2.5rem] p-4 sm:p-8 lg:p-10 border border-slate-200 shadow-xl relative"
        >
          
          {/* Top Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-6 sm:mb-8 border-b border-slate-200 gap-4">
            
            {/* Title */}
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-md">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700">
                    ETALASE KARYA // SAMUEL B K
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                  Proyek & Karya Interaktif
                </h2>
              </div>
            </div>

            {/* Sound Toggle & Keyboard Cheat Hint */}
            <div className="flex items-center space-x-3 self-end lg:self-auto">
              <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600">
                <span>Gunakan Tombol</span>
                <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-300 text-emerald-700 font-bold">◄ A</kbd>
                <span>/</span>
                <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-300 text-emerald-700 font-bold">D ►</kbd>
              </div>

              <button
                onClick={() => setSoundEnabled((prev) => !prev)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center space-x-1.5 border transition-all ${
                  soundEnabled
                    ? "bg-emerald-50 border-emerald-300 text-emerald-700 shadow-sm"
                    : "bg-slate-100 border-slate-200 text-slate-500"
                }`}
                title={soundEnabled ? "Nonaktifkan Efek Suara" : "Aktifkan Efek Suara"}
              >
                {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-600" /> : <VolumeX className="w-4 h-4" />}
                <span className="hidden sm:inline">{soundEnabled ? "SFX: ON" : "SFX: OFF"}</span>
              </button>
            </div>

          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => {
                  setFilter(tab.value);
                  setCurrentSlide(0);
                  playCyberSound("select");
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  filter === tab.value
                    ? "bg-emerald-600 text-white font-bold shadow-sm border border-emerald-600"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* =========================================================================
              MAIN SLIDE SCREEN
              ========================================================================= */}
          {filteredProjects.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <Swords className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="text-xl font-bold text-slate-900">TIDAK ADA PROYEK PADA KATEGORI INI</h3>
              <p className="text-xs text-slate-500">Pilih kategori lainnya untuk melihat daftar proyek.</p>
            </div>
          ) : (
            <div className="space-y-8">
              
              {/* Active Project Slide Container */}
              <div 
                className={`transition-all duration-300 transform ${
                  isWarping ? "opacity-30 scale-[0.98] blur-sm" : "opacity-100 scale-100 blur-0"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Visual Screen */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-100 border border-slate-200 shadow-lg group">
                      <img
                        src={activeProject.image}
                        alt={activeProject.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                        <div className="flex items-center space-x-2">
                          <span className="px-3 py-1 text-xs font-bold rounded-lg bg-emerald-600 text-white shadow-md flex items-center space-x-1">
                            <Zap className="w-3.5 h-3.5 fill-white" />
                            <span>PROYEK 0{safeSlideIndex + 1}</span>
                          </span>
                          <span className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white/95 text-slate-800 border border-slate-200 shadow-sm">
                            {activeProject.categoryLabel}
                          </span>
                        </div>
                        {activeProject.featured && (
                          <span className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-amber-50 border border-amber-300 text-amber-800 flex items-center space-x-1 shadow-sm">
                            <Trophy className="w-3 h-3 text-amber-600" />
                            <span>UNGGULAN</span>
                          </span>
                        )}
                      </div>

                      {/* Bottom Live Target Status */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white z-20">
                        <div className="flex items-center space-x-2 bg-slate-900/80 px-2.5 py-1 rounded-md">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span>STATUS: ONLINE & TESTED</span>
                        </div>
                        <span className="bg-slate-900/80 px-2.5 py-1 rounded-md text-slate-200">
                          ID: PRJ-{activeProject.id}
                        </span>
                      </div>

                    </div>

                    {/* Slide Controls (Prev / Next) */}
                    <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-2xl bg-slate-50 border border-slate-200 gap-2">
                      
                      {/* Prev Button */}
                      <button
                        onClick={goToPrevSlide}
                        className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-[11px] sm:text-xs font-bold flex items-center space-x-1 sm:space-x-2 border border-slate-300 shadow-sm active:scale-95 transition-all group flex-shrink-0"
                        title="Slide Sebelumnya (Geser Kiri atau Tekan A)"
                      >
                        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                        <span>SEBELUMNYA <span className="hidden sm:inline">[A]</span></span>
                      </button>

                      {/* Dots Indicator */}
                      <div className="flex items-center space-x-1.5 sm:space-x-2 overflow-hidden justify-center flex-1">
                        {filteredProjects.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => jumpToSlide(idx)}
                            className={`transition-all rounded-full ${
                              safeSlideIndex === idx
                                ? "w-6 sm:w-8 h-2 sm:h-2.5 bg-emerald-600"
                                : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-slate-300 hover:bg-slate-400"
                            }`}
                            aria-label={`Pindah ke slide ${idx + 1}`}
                          />
                        ))}
                      </div>

                      {/* Next Button */}
                      <button
                        onClick={goToNextSlide}
                        className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] sm:text-xs font-bold flex items-center space-x-1 sm:space-x-2 shadow-sm active:scale-95 transition-all group flex-shrink-0"
                        title="Slide Berikutnya (Geser Kanan atau Tekan D)"
                      >
                        <span>BERIKUTNYA <span className="hidden sm:inline">[D]</span></span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>

                    </div>

                  </div>

                  {/* Right Column: Project Details, Features & Action Buttons */}
                  <div className="lg:col-span-6 space-y-5 sm:space-y-6">
                    
                    <div>
                      <div className="flex items-center space-x-2 text-xs text-emerald-600 font-bold uppercase tracking-widest mb-1.5">
                        <Cpu className="w-4 h-4" />
                        <span>// RINGKASAN PROYEK</span>
                      </div>
                      <h3 className="text-xl sm:text-3xl font-black text-slate-900 leading-tight mb-2 sm:mb-3">
                        {activeProject.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
                        {activeProject.fullDescription || activeProject.description}
                      </p>
                    </div>

                    {/* Key Achievements */}
                    {activeProject.highlights && (
                      <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                        <div className="flex items-center justify-between text-xs text-slate-700 font-bold">
                          <span className="flex items-center space-x-1.5 text-emerald-700">
                            <ShieldCheck className="w-4 h-4 text-emerald-600" />
                            <span>FITUR & PENCAPAIAN UTAMA:</span>
                          </span>
                          <span className="text-emerald-600 text-[11px]">SELESAI</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                          {activeProject.highlights.map((item, idx) => (
                            <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span className="leading-snug">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div className="space-y-2">
                      <p className="text-[11px] sm:text-xs text-slate-500 uppercase tracking-wider font-semibold">
                        TEKNOLOGI YANG DIGUNAKAN:
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {activeProject.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 sm:py-1 rounded-lg text-[11px] sm:text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                      
                      {/* Live Demo Button */}
                      <a
                        href={activeProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => playCyberSound("start")}
                        className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-emerald-600/20 flex items-center justify-center space-x-2 active:scale-95 transition-all"
                      >
                        <Play className="w-4 h-4 fill-white" />
                        <span>LIHAT DEMO LANGSUNG</span>
                      </a>

                      <div className="flex items-center gap-3">
                        {/* Modal Details Button */}
                        <button
                          onClick={() => {
                            playCyberSound("select");
                            setSelectedProject(activeProject);
                          }}
                          className="flex-1 sm:flex-initial px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold border border-slate-300 shadow-sm flex items-center justify-center space-x-2 active:scale-95 transition-all"
                        >
                          <ExternalLink className="w-4 h-4 text-emerald-600" />
                          <span>DETAIL PROYEK</span>
                        </button>

                        {/* Source Code Button */}
                        <a
                          href={activeProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => playCyberSound("select")}
                          className="p-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-300 shadow-sm flex items-center justify-center active:scale-95 transition-all"
                          title="Source Code Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>

                    </div>

                  </div>

                </div>
              </div>

              {/* Bottom Project Slide Strip */}
              <div className="pt-6 border-t border-slate-200">
                <div className="flex items-center justify-between mb-3 text-xs text-slate-500">
                  <span>PILIH PROYEK CEPAT:</span>
                  <span className="text-emerald-600 font-semibold">SLIDE {safeSlideIndex + 1} DARI {filteredProjects.length}</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {filteredProjects.map((proj, idx) => (
                    <button
                      key={proj.id}
                      onClick={() => jumpToSlide(idx)}
                      className={`p-3 rounded-xl text-left transition-all border flex flex-col justify-between ${
                        safeSlideIndex === idx
                          ? "bg-emerald-50 border-emerald-400 shadow-sm"
                          : "bg-slate-50 border-slate-200 text-slate-600 hover:border-emerald-300 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px] font-bold mb-1">
                        <span className={safeSlideIndex === idx ? "text-emerald-700" : "text-slate-500"}>
                          PROYEK 0{idx + 1}
                        </span>
                        {safeSlideIndex === idx && (
                          <span className="w-2 h-2 rounded-full bg-emerald-600" />
                        )}
                      </div>
                      <span className="text-xs font-sans font-bold text-slate-900 truncate">
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

