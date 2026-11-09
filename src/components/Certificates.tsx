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
    <section id="certificates" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            // Ruang Apresiasi & Lisensi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Piagam, Sertifikat & Lencana Kehormatan
          </h2>
          <div className="w-16 h-1 bg-emerald-600 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Dokumentasi rekam jejak pengakuan resmi atas kepemimpinan, kepanduan Garuda, nalar integritas, dan kedisiplinan organisasi.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="glass-card rounded-3xl p-6 border border-slate-200 transition-all duration-300 cursor-pointer group hover:-translate-y-1.5 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                {/* Top Row: Year & Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {cert.year}
                  </span>
                  <div className="flex items-center space-x-1 text-emerald-600 text-xs font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Terverifikasi</span>
                  </div>
                </div>

                {/* Badge Emblem Center */}
                <div className="flex justify-center py-2">
                  <div className="w-24 h-24 rounded-2xl bg-slate-50 p-2 border border-slate-200 shadow-sm group-hover:scale-110 group-hover:border-emerald-400 transition-all duration-300">
                    <img
                      src={cert.badgeUrl}
                      alt={cert.title}
                      className="w-full h-full object-contain filter drop-shadow-sm"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Certificate Meta */}
                <div className="text-center space-y-1">
                  <span className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider block">
                    {cert.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">{cert.issuer}</p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed text-center line-clamp-3">
                  {cert.description}
                </p>
              </div>

              {/* Action Preview */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="text-[11px]">ID: {cert.credentialId || "VERIFIED"}</span>
                <a
                  href={cert.badgeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="font-semibold flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-colors"
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
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 animate-cloud-enter">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl space-y-6">
            
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-4">
              <div className="w-28 h-28 mx-auto rounded-3xl bg-slate-50 p-3 border-2 border-slate-200 shadow-md">
                <img
                  src={selectedCert.badgeUrl}
                  alt={selectedCert.title}
                  className="w-full h-full object-contain filter drop-shadow-sm"
                />
              </div>

              <div className="space-y-1.5">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 inline-block">
                  {selectedCert.year} &bull; {selectedCert.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {selectedCert.title}
                </h3>
                <p className="text-sm font-semibold text-teal-700">{selectedCert.issuer}</p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-left p-4 rounded-2xl bg-slate-50 border border-slate-200">
                {selectedCert.description}
              </p>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-2">
                <span>Credential ID: <strong className="text-slate-900">{selectedCert.credentialId || "VALIDATED"}</strong></span>
                <a
                  href={selectedCert.badgeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 font-semibold flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
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
