"use client";

import React from "react";
import { X, Printer, Download, Mail, Phone, MapPin, Award, GraduationCap, Briefcase, Cpu, ShieldCheck } from "lucide-react";
import { PortfolioData } from "@/types/portfolio";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-cloud-enter">
      <div className="relative w-full max-w-3xl glass-card rounded-3xl border border-emerald-500/30 shadow-2xl shadow-emerald-950/50 my-auto overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="p-4 sm:p-5 bg-slate-900/90 border-b border-emerald-500/20 flex items-center justify-between no-print">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
            <h3 className="text-sm sm:text-base font-bold text-white">Curriculum Vitae / Resume Resmi</h3>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-xs font-semibold flex items-center space-x-1.5 shadow transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / Simpan PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-6 sm:p-10 space-y-8 max-h-[80vh] overflow-y-auto print:max-h-none print:p-0 text-slate-200">
          
          {/* Header Profile */}
          <div className="border-b border-emerald-500/20 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">{data.profile.name}</h1>
                <p className="text-sm font-semibold text-emerald-400">
                  Duta Intelegensia &bull; AI Design Engineer &bull; Pramuka Penegak Bantara
                </p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 self-start sm:self-center">
                {data.profile.status}
              </span>
            </div>

            <div className="flex flex-wrap gap-4 text-xs text-slate-300 pt-1">
              <span className="flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{data.profile.location}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>{data.profile.email}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{data.profile.phone}</span>
              </span>
            </div>
          </div>

          {/* Ringkasan Profil */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4" />
              <span>// Ringkasan Eksekutif</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {data.profile.tagline} {data.about.bio.join(" ")}
            </p>
          </div>

          {/* Riwayat Prestasi & Organisasi */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center space-x-2">
              <Award className="w-4 h-4" />
              <span>// Prestasi, Kepemimpinan & Organisasi</span>
            </h3>
            <div className="space-y-3">
              {data.timeline.experience.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-emerald-500/20 space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <strong className="text-white text-sm">{item.role}</strong>
                    <span className="font-mono text-emerald-300 font-semibold">{item.period}</span>
                  </div>
                  <p className="text-xs text-emerald-300 font-medium">{item.company} &bull; {item.location}</p>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Riwayat Pendidikan */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 flex items-center space-x-2">
              <GraduationCap className="w-4 h-4" />
              <span>// Riwayat Pendidikan</span>
            </h3>
            <div className="space-y-3">
              {data.timeline.education.map((edu, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-teal-500/20 space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <strong className="text-white text-sm">{edu.institution}</strong>
                    <span className="font-mono text-teal-300 font-semibold">{edu.period}</span>
                  </div>
                  <p className="text-xs text-teal-300 font-medium">{edu.degree} &bull; {edu.location}</p>
                  <p className="text-xs text-slate-300 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Keahlian & Teknologi */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center space-x-2">
              <Cpu className="w-4 h-4" />
              <span>// Keahlian AI, Teknologi & Pengembangan Web</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.skills.map((cat, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-700/50 space-y-2">
                  <h4 className="text-xs font-bold text-white uppercase">{cat.title}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((skill, sIdx) => (
                      <span key={sIdx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {skill.name} ({skill.level}%)
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
