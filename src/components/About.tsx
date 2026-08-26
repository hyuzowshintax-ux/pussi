"use client";

import React from "react";
import { IdCard, FileText } from "lucide-react";
import { PortfolioData } from "@/types/portfolio";

interface AboutProps {
  about: PortfolioData["about"];
  cvLink: string;
}

export const About: React.FC<AboutProps> = ({ about, cvLink }) => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400 dark:text-purple-400 light:text-purple-600">
            // Mengenal Saya
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Tentang Saya & Dedikasi Digital
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Bio Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              {about.bio.map((paragraph, idx) => (
                <p key={idx} className="text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed text-base">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-purple-700 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white font-semibold text-sm shadow-md shadow-purple-600/30 transition-all"
              >
                Mulai Kolaborasi
              </a>
              <a
                href={cvLink || "#"}
                className="px-6 py-3 rounded-xl bg-slate-800 dark:bg-slate-800 light:bg-slate-200 hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-800 font-semibold text-sm transition-all flex items-center space-x-2"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Details Grid */}
          <div className="lg:col-span-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 border border-white/10">
              <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 flex items-center space-x-2 pb-3 border-b border-slate-700/50 dark:border-slate-700/50 light:border-slate-200">
                <IdCard className="w-5 h-5 text-indigo-400" />
                <span>Informasi Tambahan</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {about.details.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-800/40 dark:bg-slate-800/40 light:bg-slate-100/70 border border-slate-700/50 dark:border-slate-700/50 light:border-slate-200"
                  >
                    <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                    <div>
                      <span className="text-xs font-semibold text-slate-400 dark:text-slate-400 light:text-slate-500 uppercase tracking-wider block">
                        {item.label}
                      </span>
                      <span className="text-sm font-medium text-white dark:text-white light:text-slate-900">
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
