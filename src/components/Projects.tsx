"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowLeft, Github, ExternalLink, Sparkles, LayoutGrid, Layers, CheckCircle2 } from "lucide-react";
import { Project } from "@/types/portfolio";
import { ProjectModal } from "./ProjectModal";

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [filter, setFilter] = useState<string>("all");
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<"tab" | "grid">("tab");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { label: "Semua Proyek", value: "all" },
    { label: "AI & Web Apps", value: "web" },
    { label: "UI/UX Design", value: "uiux" },
    { label: "Backend & Keamanan", value: "backend" },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  // Ensure active index is within bounds of filtered projects
  const safeActiveIndex = Math.min(activeProjectIndex, Math.max(0, filteredProjects.length - 1));
  const activeProject = filteredProjects[safeActiveIndex] || filteredProjects[0];

  const handleNext = () => {
    if (filteredProjects.length === 0) return;
    setActiveProjectIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    if (filteredProjects.length === 0) return;
    setActiveProjectIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & View Mode Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-emerald-500/15 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>// ETALASE PORTOFOLIO TERPILIH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
              Karya & Proyek Inovasi
            </h2>
            <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              Jelajahi inovasi cerdas bertenaga AI, simulator kepramukaan LKBB, dan antarmuka web modern secara interaktif.
            </p>
          </div>

          {/* View Mode Toggle (Tab vs Grid) */}
          <div className="flex items-center space-x-2 bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-200 p-1.5 rounded-2xl border border-emerald-500/20 shadow-md self-start md:self-auto">
            <button
              onClick={() => setViewMode("tab")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center space-x-2 transition-all ${
                viewMode === "tab"
                  ? "bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-md shadow-emerald-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Mode Tab (Kompak)</span>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center space-x-2 transition-all ${
                viewMode === "grid"
                  ? "bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-md shadow-emerald-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Mode Grid</span>
            </button>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-start sm:justify-center gap-2 sm:gap-3 mb-8">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => {
                setFilter(tab.value);
                setActiveProjectIndex(0);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === tab.value
                  ? "bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-600/30 border border-emerald-400/30"
                  : "bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white border border-emerald-500/15"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* =========================================================================
            MODE 1: TABBED SHOWCASE STAGE (DEFAULT, COMPACT & NO DOWNWARD SPRAWL)
            ========================================================================= */}
        {viewMode === "tab" && (
          filteredProjects.length === 0 ? (
            <div className="glass-card rounded-3xl p-10 text-center max-w-xl mx-auto border border-emerald-500/20 shadow-xl space-y-4">
              <ExternalLink className="w-8 h-8 text-emerald-400 mx-auto" />
              <h3 className="text-xl font-bold text-white">Proyek Belum Tersedia</h3>
              <p className="text-sm text-slate-300">Silakan pilih kategori lainnya.</p>
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* Horizontal Project Navigation Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {filteredProjects.map((proj, idx) => (
                  <button
                    key={proj.id}
                    onClick={() => setActiveProjectIndex(idx)}
                    className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2.5 border ${
                      safeActiveIndex === idx
                        ? "bg-gradient-to-r from-emerald-600/30 to-teal-500/30 border-emerald-400 text-white shadow-lg shadow-emerald-600/20"
                        : "bg-slate-900/70 border-white/5 text-slate-400 hover:text-slate-200 hover:border-emerald-500/30"
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                      safeActiveIndex === idx ? "bg-emerald-400 text-slate-950" : "bg-slate-800 text-slate-400"
                    }`}>
                      0{idx + 1}
                    </span>
                    <span className="truncate max-w-[180px] sm:max-w-[240px]">{proj.title.split("–")[0].trim()}</span>
                  </button>
                ))}
              </div>

              {/* Main Active Project Stage (Master-Detail Console) */}
              {activeProject && (
                <div className="glass-card rounded-3xl p-6 sm:p-8 border border-emerald-500/25 shadow-2xl relative overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                  
                  {/* Subtle Top Decorative Glow */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Left: Image & Visual Showcase Card */}
                    <div className="lg:col-span-6 space-y-4">
                      <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-950 border border-emerald-500/20 group">
                        <img
                          src={activeProject.image}
                          alt={activeProject.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                        
                        {/* Top Category Badge */}
                        <div className="absolute top-4 left-4 flex items-center space-x-2">
                          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-md border border-emerald-400/30">
                            {activeProject.categoryLabel}
                          </span>
                          {activeProject.featured && (
                            <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 font-mono">
                              ⭐ Terpilih
                            </span>
                          )}
                        </div>

                        {/* Bottom Overlay Info */}
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300 font-mono">
                          <span>Status: Siap Diuji</span>
                          <span>ID: PROJ-0{activeProject.id}</span>
                        </div>
                      </div>

                      {/* Arrow Navigation Control Pill */}
                      <div className="flex items-center justify-between pt-2">
                        <button
                          onClick={handlePrev}
                          className="px-4 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold flex items-center space-x-2 border border-white/10 transition-all"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>Sebelumnya</span>
                        </button>
                        <span className="text-xs font-mono text-emerald-400">
                          {safeActiveIndex + 1} / {filteredProjects.length} Proyek
                        </span>
                        <button
                          onClick={handleNext}
                          className="px-4 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold flex items-center space-x-2 border border-white/10 transition-all"
                        >
                          <span>Berikutnya</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Right: Detailed Description & Features */}
                    <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
                      <div>
                        <div className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider mb-2">
                          // Rincian Inovasi Karya
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-900 leading-tight mb-3">
                          {activeProject.title}
                        </h3>
                        <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                          {activeProject.fullDescription || activeProject.description}
                        </p>

                        {/* Highlights List */}
                        {activeProject.highlights && (
                          <div className="space-y-2.5 mb-6">
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                              Fitur & Keunggulan Utama:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {activeProject.highlights.map((item, idx) => (
                                <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-200 dark:text-slate-200 light:text-slate-700">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Tech Stack Pills */}
                        <div className="space-y-2 mb-6">
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                            Teknologi yang Digunakan:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {activeProject.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-200 text-emerald-300 dark:text-emerald-300 light:text-slate-800 border border-emerald-500/25 shadow-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-700/40">
                        <button
                          onClick={() => setSelectedProject(activeProject)}
                          className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-emerald-600/30 flex items-center space-x-2 transition-all"
                        >
                          <span>Buka Modal Lengkap</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                        <a
                          href={activeProject.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-3 rounded-xl bg-slate-800 dark:bg-slate-800 light:bg-slate-200 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold flex items-center space-x-2 border border-slate-700 transition-all"
                        >
                          <ExternalLink className="w-4 h-4 text-emerald-400" />
                          <span>Live Preview</span>
                        </a>
                        <a
                          href={activeProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-emerald-500/20 transition-all"
                          title="Source Code"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>

                    </div>

                  </div>
                </div>
              )}

            </div>
          )
        )}

        {/* =========================================================================
            MODE 2: GRID VIEW (ALTERNATIF JIKA INGIN MELIHAT SEMUA)
            ========================================================================= */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-card rounded-2xl overflow-hidden group transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col border border-emerald-500/20 hover:border-emerald-500/50"
              >
                {/* Thumbnail */}
                <div className="relative h-52 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent opacity-85" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white backdrop-blur-md shadow-sm border border-emerald-400/30">
                      {project.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-emerald-400 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-xs sm:text-sm mb-4 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-emerald-500/20 dark:border-emerald-500/20 light:border-slate-300 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/40 dark:border-slate-700/40 light:border-slate-200">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-emerald-400 dark:text-emerald-400 light:text-emerald-600 hover:text-teal-300 transition-colors flex items-center space-x-1 font-mono"
                    >
                      <span>Lihat Detail</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </button>
                    
                    <div className="flex items-center space-x-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 text-base transition-colors"
                        title="Source Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-emerald-400 transition-colors"
                        title="Live Preview"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Modal Popup */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

