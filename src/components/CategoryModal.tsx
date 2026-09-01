"use client";

import React, { useEffect, useState } from "react";
import { 
  X, 
  Home, 
  User, 
  Code2, 
  Layers, 
  Briefcase, 
  Mail, 
  ExternalLink, 
  Github, 
  Send, 
  Check, 
  Sparkles, 
  MessageSquare,
  Award,
  GraduationCap
} from "lucide-react";
import { PortfolioData, Project } from "@/types/portfolio";

export type CategoryTab = "home" | "about" | "skills" | "projects" | "experience" | "contact";

interface CategoryModalProps {
  isOpen: boolean;
  activeTab: CategoryTab;
  onClose: () => void;
  onSelectTab: (tab: CategoryTab) => void;
  data: PortfolioData;
}

export const CategoryModal: React.FC<CategoryModalProps> = ({
  isOpen,
  activeTab,
  onClose,
  onSelectTab,
  data
}) => {
  const [projectFilter, setProjectFilter] = useState<string>("all");
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const tabs: { id: CategoryTab; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: "home", label: "Beranda", icon: Home },
    { id: "about", label: "Tentang", icon: User },
    { id: "skills", label: "Keahlian", icon: Code2 },
    { id: "projects", label: "Proyek", icon: Layers },
    { id: "experience", label: "Pengalaman", icon: Briefcase },
    { id: "contact", label: "Kontak", icon: Mail },
  ];

  const filteredProjects = projectFilter === "all"
    ? data.projects
    : data.projects.filter(p => p.category === projectFilter);

  const getWhatsAppLink = (phoneStr: string) => {
    const cleanPhone = phoneStr.replace(/[^0-9]/g, "");
    const formatted = cleanPhone.startsWith("0") ? "62" + cleanPhone.slice(1) : cleanPhone;
    return `https://wa.me/${formatted}?text=Halo%20Samuel,%20saya%20tertarik%20dengan%20portofolio%20Anda!`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Centered Modal Container */}
      <div className="glass-card w-full max-w-4xl max-h-[88vh] rounded-3xl border border-white/15 shadow-2xl flex flex-col overflow-hidden relative animate-in zoom-in-95 duration-200">
        
        {/* Modal Top Header */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-slate-900/60 backdrop-blur-md">
          
          {/* Active Category Title */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center text-white shadow-md shadow-purple-600/30">
              {activeTab === "home" && <Home className="w-5 h-5" />}
              {activeTab === "about" && <User className="w-5 h-5" />}
              {activeTab === "skills" && <Code2 className="w-5 h-5" />}
              {activeTab === "projects" && <Layers className="w-5 h-5" />}
              {activeTab === "experience" && <Briefcase className="w-5 h-5" />}
              {activeTab === "contact" && <Mail className="w-5 h-5" />}
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-400">
                Kategori Terpilih
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white capitalize">
                {activeTab === "home" && "Beranda Profil"}
                {activeTab === "about" && "Tentang Saya"}
                {activeTab === "skills" && "Keahlian & Kemampuan"}
                {activeTab === "projects" && "Koleksi Proyek AI & Web"}
                {activeTab === "experience" && "Pengalaman & Prestasi"}
                {activeTab === "contact" && "Hubungi Saya"}
              </h3>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-700/60"
            aria-label="Tutup Box"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Tabs Quick Bar */}
        <div className="px-4 sm:px-6 py-2.5 bg-slate-950/40 border-b border-white/5 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-all flex-shrink-0 ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 via-purple-700 to-pink-500 text-white shadow-md shadow-purple-600/30"
                    : "bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1 space-y-6">

          {/* ================================================================
              1. BERANDA (HOME)
              ================================================================ */}
          {activeTab === "home" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-slate-900/50 border border-purple-500/20">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden bg-slate-800 border-2 border-purple-500/40 shadow-xl flex-shrink-0">
                  <img
                    src={data.profile.avatarUrl}
                    alt={data.profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left space-y-2 flex-1">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Duta Intelegensia & Pelajar Berprestasi</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {data.profile.name}
                  </h2>
                  <p className="text-sm sm:text-base text-purple-300 font-medium">
                    Saya seorang <span className="text-white font-bold">{data.profile.roles[0]}</span>
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {data.profile.tagline}
                  </p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => onSelectTab("projects")}
                  className="py-3 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-purple-500/20 text-white text-xs sm:text-sm font-semibold flex items-center justify-center space-x-2 transition-all"
                >
                  <Layers className="w-4 h-4 text-purple-400" />
                  <span>Lihat Proyek AI</span>
                </button>
                <button
                  onClick={() => onSelectTab("experience")}
                  className="py-3 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-purple-500/20 text-white text-xs sm:text-sm font-semibold flex items-center justify-center space-x-2 transition-all"
                >
                  <Award className="w-4 h-4 text-pink-400" />
                  <span>Lihat Prestasi</span>
                </button>
                <a
                  href={getWhatsAppLink(data.profile.phone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-600 text-white text-xs sm:text-sm font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-purple-600/30 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Hubungi via WhatsApp</span>
                </a>
              </div>
            </div>
          )}

          {/* ================================================================
              2. TENTANG (ABOUT)
              ================================================================ */}
          {activeTab === "about" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/50 border border-purple-500/20 space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400">
                  // Bio & Profil Pribadi
                </h4>
                {data.about.bio.map((paragraph, idx) => (
                  <p key={idx} className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Key Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.about.details.map((detail, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/40 border border-white/5">
                    <span className="text-xs text-slate-400 block mb-1">{detail.label}</span>
                    <span className="text-sm font-bold text-white">{detail.value}</span>
                  </div>
                ))}
                <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5">
                  <span className="text-xs text-slate-400 block mb-1">Sekolah</span>
                  <span className="text-sm font-bold text-white">SMAN 1 Kandangan, Kab. Kediri</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5">
                  <span className="text-xs text-slate-400 block mb-1">Amanah & Gelar</span>
                  <span className="text-sm font-bold text-white">Duta Intelegensia & Penegak Bantara</span>
                </div>
              </div>
            </div>
          )}

          {/* ================================================================
              3. KEAHLIAN (SKILLS)
              ================================================================ */}
          {activeTab === "skills" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.skills.map((cat, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-900/50 border border-purple-500/20 space-y-4">
                    <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-purple-400" />
                      <span>{cat.title}</span>
                    </h4>
                    <div className="space-y-3">
                      {cat.items.map((skill, sIdx) => (
                        <div key={sIdx} className="space-y-1">
                          <div className="flex justify-between text-xs font-semibold">
                            <span className="text-slate-300">{skill.name}</span>
                            <span className="text-purple-400 font-mono">{skill.level}%</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-500"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================================================================
              4. PROYEK (PROJECTS)
              ================================================================ */}
          {activeTab === "projects" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              
              {/* Category Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {[
                  { value: "all", label: "Semua Proyek" },
                  { value: "mobile", label: "Mobile Apps & AI" },
                  { value: "web", label: "Web App" },
                ].map(tab => (
                  <button
                    key={tab.value}
                    onClick={() => setProjectFilter(tab.value)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      projectFilter === tab.value
                        ? "bg-purple-600 text-white shadow"
                        : "bg-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredProjects.map((proj) => (
                  <div
                    key={proj.id}
                    className="rounded-2xl overflow-hidden bg-slate-900/60 border border-purple-500/20 hover:border-pink-500/40 transition-all flex flex-col group"
                  >
                    <div className="h-40 relative overflow-hidden bg-slate-800">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow">
                          {proj.categoryLabel}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <h4 className="text-base font-bold text-white group-hover:text-purple-400 transition-colors">
                          {proj.title}
                        </h4>
                        <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                          {proj.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-3">
                          {proj.tags.slice(0, 3).map((tag, tIdx) => (
                            <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/50">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                        <a
                          href={proj.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-purple-400 hover:text-pink-400 flex items-center space-x-1"
                        >
                          <span>Buka Proyek</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================================================================
              5. PENGALAMAN & PRESTASI (EXPERIENCE)
              ================================================================ */}
          {activeTab === "experience" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              
              {/* Experience List */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 flex items-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span>// Rekam Jejak Prestasi & Organisasi</span>
                </h4>

                <div className="space-y-3">
                  {data.timeline.experience.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-2xl bg-slate-900/50 border border-purple-500/20 hover:border-pink-500/40 transition-all space-y-2"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-purple-500/15 text-purple-400 border border-purple-500/30">
                          {item.period}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          {item.location}
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        {item.role}
                      </h4>
                      <p className="text-xs sm:text-sm text-purple-300 font-medium">
                        {item.company}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                      {item.skills && (
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {item.skills.map((s, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/50"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              {data.timeline.education.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-slate-800">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4" />
                    <span>// Riwayat Pendidikan</span>
                  </h4>
                  {data.timeline.education.map((edu, idx) => (
                    <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-slate-900/50 border border-cyan-500/20 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                          {edu.period}
                        </span>
                        <span className="text-xs text-slate-400">{edu.location}</span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-white">{edu.degree}</h4>
                      <p className="text-xs sm:text-sm text-cyan-300 font-medium">{edu.institution}</p>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{edu.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ================================================================
              6. KONTAK (CONTACT)
              ================================================================ */}
          {activeTab === "contact" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Email Card */}
                <a
                  href={`mailto:${data.contact.email}`}
                  className="p-4 rounded-2xl bg-slate-900/50 border border-purple-500/20 hover:border-purple-500/50 transition-all flex items-center space-x-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Email Resmi</span>
                    <span className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                      {data.contact.email}
                    </span>
                  </div>
                </a>

                {/* WhatsApp Direct */}
                <a
                  href={getWhatsAppLink(data.contact.phone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-900/50 border border-pink-500/20 hover:border-pink-500/50 transition-all flex items-center space-x-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">WhatsApp / Chat</span>
                    <span className="text-sm font-bold text-white group-hover:text-pink-300 transition-colors">
                      {data.contact.phone}
                    </span>
                  </div>
                </a>
              </div>

              {/* Form Message */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/50 border border-purple-500/20 space-y-4">
                <h4 className="text-sm font-bold text-white">
                  Kirim Pesan Cepat ke Samuel
                </h4>
                {formSubmitted ? (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-center space-x-2">
                    <Check className="w-4 h-4 flex-shrink-0" />
                    <span>Terima kasih! Pesan Anda telah tercatat dan siap diteruskan.</span>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setFormSubmitted(true);
                    }}
                    className="space-y-3"
                  >
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Nama Lengkap Anda"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <textarea
                        required
                        rows={3}
                        placeholder="Tulis pesan atau tawaran kolaborasi Anda di sini..."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-purple-700 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white text-xs sm:text-sm font-bold shadow-md shadow-purple-600/30 flex items-center justify-center space-x-2 transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>Kirim Pesan Sekarang</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
