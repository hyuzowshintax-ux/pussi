"use client";

import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { TimelineItem } from "@/types/portfolio";

interface TimelineProps {
  experience: TimelineItem[];
  education: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ experience, education }) => {
  const hasExp = experience && experience.length > 0;
  const hasEdu = education && education.length > 0;

  if (!hasExp && !hasEdu) return null;

  return (
    <section id="experience" className="py-24 bg-slate-900/30 dark:bg-slate-900/30 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 dark:text-indigo-400 light:text-indigo-600">
            // Rekam Jejak
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Pengalaman Kerja & Pendidikan
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Experience */}
          {hasExp && (
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900">
                  Pengalaman Kerja
                </h3>
              </div>
              
              <div className="space-y-4">
                {experience.map((item, idx) => (
                  <div key={idx} className="relative pl-8 pb-6 border-l-2 border-indigo-500/30 last:border-l-0 last:pb-0 group">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-slate-900 dark:border-slate-900 light:border-white group-hover:scale-125 transition-transform" />
                    <div className="glass-card rounded-xl p-5 ml-2 hover:border-indigo-500/40 transition-all">
                      <span className="inline-block px-2.5 py-0.5 text-xs font-semibold font-mono rounded bg-indigo-500/10 text-indigo-400 dark:text-indigo-400 light:text-indigo-600 mb-2">
                        {item.period}
                      </span>
                      <h4 className="text-lg font-bold text-white dark:text-white light:text-slate-900">
                        {item.role}
                      </h4>
                      <p className="text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-2">
                        {item.company} &bull; <span className="text-slate-400 dark:text-slate-400 light:text-slate-500">{item.location}</span>
                      </p>
                      <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm leading-relaxed mb-3">
                        {item.description}
                      </p>
                      {item.skills && (
                        <div className="flex flex-wrap gap-1.5">
                          {item.skills.map((s, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {hasEdu && (
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900">
                  Pendidikan & Sertifikasi
                </h3>
              </div>

              <div className="space-y-4">
                {education.map((item, idx) => (
                  <div key={idx} className="relative pl-8 pb-6 border-l-2 border-cyan-500/30 last:border-l-0 last:pb-0 group">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900 dark:border-slate-900 light:border-white group-hover:scale-125 transition-transform" />
                    <div className="glass-card rounded-xl p-5 ml-2 hover:border-cyan-500/40 transition-all">
                      <span className="inline-block px-2.5 py-0.5 text-xs font-semibold font-mono rounded bg-cyan-500/10 text-cyan-400 dark:text-cyan-400 light:text-cyan-600 mb-2">
                        {item.period}
                      </span>
                      <h4 className="text-lg font-bold text-white dark:text-white light:text-slate-900">
                        {item.degree}
                      </h4>
                      <p className="text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-2">
                        {item.institution} &bull; <span className="text-slate-400 dark:text-slate-400 light:text-slate-500">{item.location}</span>
                      </p>
                      <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
