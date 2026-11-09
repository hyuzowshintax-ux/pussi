"use client";

import React from "react";
import { Briefcase, GraduationCap, ExternalLink } from "lucide-react";
import { TimelineItem } from "@/types/portfolio";

interface TimelineProps {
  experience: TimelineItem[];
  education: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ experience, education }) => {
  const hasExp = experience && experience.length > 0;
  const hasEdu = education && education.length > 0;

  if (!hasExp && !hasEdu) return null;

  const getTimelineItemUrl = (roleOrDegree?: string, companyOrInstitution?: string) => {
    const role = roleOrDegree || "";
    const company = companyOrInstitution || "";
    if (role.includes("Duta Intelegensia") || company.includes("Kandangan")) {
      return "https://sman1kandangan.sch.id";
    }
    if (role.includes("Pramuka")) {
      return "https://pramuka.or.id";
    }
    if (role.includes("Paskibra") || role.includes("LBB") || role.includes("CODASKA")) {
      return "https://kedirikab.go.id";
    }
    return `https://www.google.com/search?q=${encodeURIComponent(`${role} ${company}`.trim() || "SMAN 1 Kandangan")}`;
  };

  return (
    <section id="experience" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            // Rekam Jejak Resmi (Klik untuk Buka Tab Baru)
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pengalaman, Kepemimpinan & Pendidikan
          </h2>
          <div className="w-16 h-1 bg-emerald-600 rounded-full" />
        </div>

        <div className={`grid grid-cols-1 ${hasExp && hasEdu ? "lg:grid-cols-2 gap-12" : "max-w-3xl mx-auto"}`}>
          
          {/* Experience */}
          {hasExp && (
            <div className="w-full">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-sm border border-emerald-200">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Pengalaman & Prestasi
                </h3>
              </div>
              
              <div className="space-y-4">
                {experience.map((item, idx) => (
                  <div key={idx} className="relative pl-5 sm:pl-8 pb-6 border-l-2 border-emerald-200 last:border-l-0 last:pb-0 group">
                    <div className="absolute -left-[7px] sm:-left-[9px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-600 border-2 sm:border-4 border-white group-hover:scale-125 transition-transform shadow" />
                    <a
                      href={getTimelineItemUrl(item.role, item.company)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card rounded-2xl p-4 sm:p-5 ml-1 sm:ml-2 hover:border-emerald-400 hover:bg-slate-50/70 transition-all flex flex-col sm:flex-row items-start gap-3.5 sm:gap-4 block group/card"
                      title={`Buka informasi resmi ${item.role} di tab baru`}
                    >
                      
                      {/* Official Badge Emblem Image */}
                      {item.logoUrl && (
                        <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 rounded-xl sm:rounded-2xl bg-slate-50 p-1 sm:p-1.5 border border-slate-200 shadow-sm group-hover/card:scale-105 group-hover/card:border-emerald-400 transition-all duration-300">
                          <img
                            src={item.logoUrl}
                            alt={item.role}
                            className="w-full h-full object-contain filter drop-shadow-sm"
                            loading="lazy"
                          />
                        </div>
                      )}

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="inline-block px-2 sm:px-2.5 py-0.5 text-[11px] sm:text-xs font-semibold rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                            {item.period}
                          </span>
                          <span className="text-[11px] sm:text-xs text-emerald-600 flex items-center space-x-1 font-medium">
                            <span>Tab Baru</span>
                            <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          </span>
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover/card:text-emerald-700 transition-colors">
                          {item.role}
                        </h4>
                        <p className="text-xs sm:text-sm font-medium text-slate-700 mb-2">
                          {item.company} &bull; <span className="text-slate-500">{item.location}</span>
                        </p>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
                          {item.description}
                        </p>
                        {item.skills && (
                          <div className="flex flex-wrap gap-1.5">
                            {item.skills.map((s, sIdx) => (
                              <span
                                key={sIdx}
                                className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {hasEdu && (
            <div>
              <div className="flex items-center space-x-3 mb-6 sm:mb-8">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center border border-teal-200">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Pendidikan & Riwayat Sekolah
                </h3>
              </div>

              <div className="space-y-4">
                {education.map((item, idx) => (
                  <div key={idx} className="relative pl-5 sm:pl-8 pb-6 border-l-2 border-teal-200 last:border-l-0 last:pb-0 group">
                    <div className="absolute -left-[7px] sm:-left-[9px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-teal-600 border-2 sm:border-4 border-white group-hover:scale-125 transition-transform shadow" />
                    <a
                      href={getTimelineItemUrl(item.degree, item.institution)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card rounded-2xl p-4 sm:p-5 ml-1 sm:ml-2 hover:border-teal-400 hover:bg-slate-50/70 transition-all flex flex-col sm:flex-row items-start gap-3.5 sm:gap-4 block group/card"
                      title={`Buka informasi resmi ${item.institution} di tab baru`}
                    >
                      
                      {/* Official Education Badge Emblem Image */}
                      {item.logoUrl && (
                        <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 rounded-xl sm:rounded-2xl bg-slate-50 p-1 sm:p-1.5 border border-slate-200 shadow-sm group-hover/card:scale-105 group-hover/card:border-teal-400 transition-all duration-300">
                          <img
                            src={item.logoUrl}
                            alt={item.institution}
                            className="w-full h-full object-contain filter drop-shadow-sm"
                            loading="lazy"
                          />
                        </div>
                      )}

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="inline-block px-2 sm:px-2.5 py-0.5 text-[11px] sm:text-xs font-semibold rounded-md bg-teal-50 text-teal-700 border border-teal-200">
                            {item.period}
                          </span>
                          <span className="text-[11px] sm:text-xs text-teal-600 flex items-center space-x-1 font-medium">
                            <span>Tab Baru</span>
                            <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          </span>
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover/card:text-teal-700 transition-colors">
                          {item.degree}
                        </h4>
                        <p className="text-xs sm:text-sm font-medium text-slate-700 mb-2">
                          {item.institution} &bull; <span className="text-slate-500">{item.location}</span>
                        </p>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                    </a>
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
