"use client";

import React, { useState } from "react";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Project } from "@/types/portfolio";
import { ProjectModal } from "./ProjectModal";

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { label: "Semua Proyek", value: "all" },
    { label: "Web Application", value: "web" },
    { label: "Mobile Apps", value: "mobile" },
    { label: "UI/UX Design", value: "uiux" },
    { label: "Backend & API", value: "backend" },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 dark:text-emerald-400 light:text-emerald-600">
            // Portofolio Pilihan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Karya & Proyek Unggulan
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 mx-auto rounded-full" />
          <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-sm sm:text-base">
            Koleksi aplikasi cerdas bertenaga AI, simulator kepramukaan LKBB, dan antarmuka web modern.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
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

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="glass-card rounded-3xl p-10 sm:p-12 text-center max-w-xl mx-auto border border-emerald-500/20 shadow-xl space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mx-auto shadow-md">
              <ExternalLink className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
              Proyek Sedang Disiapkan
            </h3>
            <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
              Daftar karya dan inovasi terbaru sedang dalam proses finalisasi dan segera hadir.
            </p>
          </div>
        ) : (
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
