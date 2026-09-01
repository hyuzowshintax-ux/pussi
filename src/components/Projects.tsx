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
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400 dark:text-purple-400 light:text-purple-600">
            // Portofolio Pilihan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Karya & Proyek Unggulan
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 mx-auto rounded-full" />
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base">
            Koleksi aplikasi mobile cerdas berbasis Artificial Intelligence dan Computer Vision.
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
                  ? "bg-gradient-to-r from-purple-600 via-purple-700 to-pink-500 text-white shadow-lg shadow-purple-600/30"
                  : "bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="glass-card rounded-2xl p-12 text-center max-w-xl mx-auto border border-dashed border-slate-700/60">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/15 text-purple-400 flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="w-5 h-5 rotate-45" />
            </div>
            <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 mb-2">
              Belum Ada Proyek
            </h3>
            <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600">
              Belum ada data proyek pada kategori ini. Anda dapat menambahkan proyek baru Anda di file <code className="text-purple-400 font-mono">src/lib/data.ts</code>.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden group transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
            >
              {/* Thumbnail */}
              <div className="relative h-52 overflow-hidden bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white backdrop-blur-md shadow-sm">
                    {project.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-purple-400 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-800 dark:bg-slate-800 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300 font-mono"
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
                    className="text-xs font-semibold text-purple-400 dark:text-purple-400 light:text-purple-600 hover:text-pink-400 transition-colors flex items-center space-x-1"
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
                      className="text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-pink-400 transition-colors"
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
