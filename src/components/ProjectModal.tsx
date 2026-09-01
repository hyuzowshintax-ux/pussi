"use client";

import React, { useEffect } from "react";
import { X, Check, ExternalLink, Github } from "lucide-react";
import { Project } from "@/types/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-all">
      <div className="glass-card rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl relative animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200 hover:bg-slate-700 text-white dark:text-white light:text-slate-800 flex items-center justify-center transition-all"
          aria-label="Tutup Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image */}
        <div className="relative h-64 sm:h-72 w-full bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          <div className="absolute bottom-4 left-6">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow">
              {project.categoryLabel}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-400 dark:text-purple-400 light:text-purple-600 mb-2">
              Tentang Proyek
            </h4>
            <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-sm sm:text-base leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {project.highlights && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-400 dark:text-purple-400 light:text-purple-600 mb-3">
                Fitur Utama & Keunggulan
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-sm text-slate-300 dark:text-slate-300 light:text-slate-600">
                    <Check className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-400 dark:text-purple-400 light:text-purple-600 mb-2">
              Teknologi yang Digunakan
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-slate-800 dark:bg-slate-800 light:bg-slate-200 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50 dark:border-slate-700/50 light:border-slate-200">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-purple-700 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white text-center font-bold text-sm shadow-md shadow-purple-600/30 transition-all flex items-center justify-center space-x-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Buka Live Demo</span>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 rounded-xl bg-slate-800 dark:bg-slate-800 light:bg-slate-200 hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-800 text-center font-bold text-sm transition-all flex items-center justify-center space-x-2"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
