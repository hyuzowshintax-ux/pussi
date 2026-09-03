"use client";

import React from "react";
import { IdCard, FileText } from "lucide-react";
import { PortfolioData } from "@/types/portfolio";

interface AboutProps {
  about: PortfolioData["about"];
  cvLink: string;
  onOpenResume?: () => void;
}

export const About: React.FC<AboutProps> = ({ about, cvLink, onOpenResume }) => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 dark:text-emerald-400 light:text-emerald-600">
            // Mengenal Saya
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Tentang Saya & Dedikasi Digital
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 mx-auto rounded-full" />
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
                href="https://wa.me/628133726102?text=Halo%20Samuel,%20saya%20tertarik%20untuk%20berkolaborasi%20dengan%20Anda!"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-semibold text-sm shadow-md shadow-emerald-600/30 transition-all flex items-center space-x-2"
                title="Buka Chat WhatsApp Kolaborasi di Tab Baru"
              >
                <span>Mulai Kolaborasi (WhatsApp)</span>
              </a>
              <button
                onClick={onOpenResume}
                className="px-6 py-3 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-200 hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-800 font-semibold text-sm transition-all flex items-center space-x-2 shadow border border-emerald-500/25"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Lihat & Download Resume (PDF)</span>
              </button>
            </div>
          </div>

          {/* Details Grid */}
          <div className="lg:col-span-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 border border-emerald-500/25">
              <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 flex items-center space-x-2 pb-3 border-b border-slate-700/50 dark:border-slate-700/50 light:border-slate-200">
                <IdCard className="w-5 h-5 text-emerald-400" />
                <span>Informasi Pribadi & Domisili (Klik untuk Tab Baru)</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {about.details.map((item, idx) => {
                  let linkUrl = "#";
                  if (item.label.toLowerCase().includes("domisili") || item.value.toLowerCase().includes("kediri")) {
                    linkUrl = "https://maps.google.com/?q=Kediri,+Jawa+Timur,+Indonesia";
                  } else if (item.label.toLowerCase().includes("status") || item.value.toLowerCase().includes("engineer")) {
                    linkUrl = "https://github.com/hyuzowshintax-ux";
                  } else if (item.label.toLowerCase().includes("pendidikan") || item.value.toLowerCase().includes("kandangan")) {
                    linkUrl = "https://sman1kandangan.sch.id";
                  } else {
                    linkUrl = `https://www.google.com/search?q=${encodeURIComponent(item.label + ' ' + item.value)}`;
                  }

                  return (
                    <a
                      key={idx}
                      href={linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100/80 border border-emerald-500/20 dark:border-emerald-500/20 light:border-slate-200 hover:border-emerald-400 hover:bg-slate-900/90 transition-all group/item block"
                      title={`Buka info ${item.label} di tab baru`}
                    >
                      <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                      <div>
                        <span className="text-xs font-semibold text-slate-400 dark:text-slate-400 light:text-slate-500 uppercase tracking-wider block font-mono">
                          {item.label}
                        </span>
                        <span className="text-sm font-medium text-white dark:text-white light:text-slate-900 group-hover/item:text-emerald-300 transition-colors">
                          {item.value}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
