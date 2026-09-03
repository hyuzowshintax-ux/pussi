"use client";

import React, { useState } from "react";
import { Award, ShieldCheck, CheckCircle2, ExternalLink, Sparkles, X } from "lucide-react";
import { Certificate } from "@/types/portfolio";

interface CertificatesProps {
  certificates?: Certificate[];
}

export const Certificates: React.FC<CertificatesProps> = ({ certificates = [] }) => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  if (!certificates || certificates.length === 0) return null;

  return (
    <section id="certificates" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
            // Ruang Apresiasi & Lisensi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Piagam, Sertifikat & Lencana Kehormatan
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 mx-auto rounded-full" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Dokumentasi rekam jejak pengakuan resmi atas kepemimpinan, kepanduan Garuda, nalar integritas, dan kedisiplinan organisasi.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="glass-card rounded-3xl p-6 border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 cursor-pointer group hover:-translate-y-1.5 flex flex-col justify-between space-y-5 shadow-xl shadow-emerald-950/20"
            >
              <div className="space-y-4">
                {/* Top Row: Year & Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    {cert.year}
                  </span>
                  <div className="flex items-center space-x-1 text-emerald-400 text-xs font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Terverifikasi</span>
                  </div>
                </div>

                {/* Badge Emblem Center */}
                <div className="flex justify-center py-2">
                  <div className="w-24 h-24 rounded-2xl bg-slate-900/90 p-2 border border-emerald-500/30 shadow-lg shadow-emerald-500/10 group-hover:scale-110 group-hover:border-emerald-400/60 transition-all duration-300">
                    <img
                      src={cert.badgeUrl}
                      alt={cert.title}
                      className="w-full h-full object-contain filter drop-shadow"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Certificate Meta */}
                <div className="text-center space-y-1">
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block">
                    {cert.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">{cert.issuer}</p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed text-center line-clamp-3">
                  {cert.description}
                </p>
              </div>

              {/* Action Preview */}
              <div className="pt-3 border-t border-emerald-500/15 flex items-center justify-between text-xs text-emerald-400 group-hover:text-teal-300 transition-colors">
                <span className="font-mono text-[11px]">ID: {cert.credentialId || "VERIFIED"}</span>
                <a
                  href={cert.badgeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="font-semibold flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/30 text-emerald-300 transition-colors"
                  title="Buka piagam resmi di tab baru"
                >
                  <span>Buka Tab Baru</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal Preview */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-cloud-enter">
          <div className="relative w-full max-w-lg glass-card rounded-3xl p-6 sm:p-8 border border-emerald-500/40 shadow-2xl shadow-emerald-950/40 space-y-6">
            
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-4">
              <div className="w-28 h-28 mx-auto rounded-3xl bg-slate-900/90 p-3 border-2 border-emerald-500/40 shadow-2xl shadow-emerald-500/20">
                <img
                  src={selectedCert.badgeUrl}
                  alt={selectedCert.title}
                  className="w-full h-full object-contain filter drop-shadow"
                />
              </div>

              <div className="space-y-1.5">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 inline-block">
                  {selectedCert.year} &bull; {selectedCert.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {selectedCert.title}
                </h3>
                <p className="text-sm font-semibold text-teal-300">{selectedCert.issuer}</p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-left p-4 rounded-2xl bg-slate-900/60 border border-emerald-500/20">
                {selectedCert.description}
              </p>

              <div className="flex items-center justify-between text-xs text-slate-400 font-mono pt-2">
                <span>Credential ID: <strong className="text-white">{selectedCert.credentialId || "VALIDATED"}</strong></span>
                <a
                  href={selectedCert.badgeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-semibold flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 transition-colors"
                >
                  <span>Buka Dokumen Asli</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
