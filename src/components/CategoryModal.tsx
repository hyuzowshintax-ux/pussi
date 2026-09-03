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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-xl animate-in fade-in duration-300">
      
      {/* Centered Modal Container with Opening Aperture */}
      <div className="glass-card w-full max-w-4xl max-h-[88vh] rounded-3xl border border-white/20 shadow-2xl flex flex-col overflow-hidden relative animate-opening-aperture">
        
        {/* Cinematic Opening Radiant Light Beam Sweep */}
        <div key={`beam-${activeTab}`} className="opening-shine-overlay animate-beam-sweep" />

        {/* Cinematic Opening Glow Pulse */}
        <div key={`glow-${activeTab}`} className="pointer-events-none absolute inset-0 rounded-3xl animate-opening-glow z-10" />

        {/* Soft Dreamy Cloud Mist Sweep on Slide Transition */}
        <div 
          key={`cloud-mist-${activeTab}`} 
          className="pointer-events-none absolute -top-12 inset-x-0 h-44 bg-gradient-to-b from-emerald-500/25 via-teal-500/20 to-transparent rounded-full animate-cloud-mist z-20" 
        />

        {/* Modal Top Header */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-slate-900/60 backdrop-blur-md relative z-10">
          
          {/* Active Category Title */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white shadow-md shadow-emerald-600/30">
              {activeTab === "home" && <Home className="w-5 h-5" />}
              {activeTab === "about" && <User className="w-5 h-5" />}
              {activeTab === "skills" && <Code2 className="w-5 h-5" />}
              {activeTab === "projects" && <Layers className="w-5 h-5" />}
              {activeTab === "experience" && <Briefcase className="w-5 h-5" />}
              {activeTab === "contact" && <Mail className="w-5 h-5" />}
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400">
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
        <div className="px-4 sm:px-6 py-2.5 bg-slate-950/40 border-b border-white/5 flex items-center gap-2 overflow-x-auto no-scrollbar relative z-10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-all flex-shrink-0 ${
                  isActive
                    ? "bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-600/30"
                    : "bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Scrollable Body with Cloud Transition */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1 space-y-6 relative z-10">

          {/* ================================================================
              1. BERANDA (HOME) - Animasi Transisi Awan
              ================================================================ */}
          {activeTab === "home" && (
            <div key="slide-home" className="space-y-6 animate-cloud-enter">
              <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-slate-900/50 border border-emerald-500/20 shadow-lg">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden bg-slate-800 border-2 border-emerald-500/40 shadow-xl flex-shrink-0 animate-cloud-float">
                  <img
                    src={data.profile.avatarUrl}
                    alt={data.profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left space-y-2 flex-1">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Duta Intelegensia & Pelajar Berprestasi</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {data.profile.name}
                  </h2>
                  <p className="text-sm sm:text-base text-emerald-300 font-medium">
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
                  className="py-3 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-emerald-500/20 text-white text-xs sm:text-sm font-semibold flex items-center justify-center space-x-2 transition-all shadow-sm"
                >
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <span>Lihat Proyek AI</span>
                </button>
                <button
                  onClick={() => onSelectTab("experience")}
                  className="py-3 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-emerald-500/20 text-white text-xs sm:text-sm font-semibold flex items-center justify-center space-x-2 transition-all shadow-sm"
                >
                  <Award className="w-4 h-4 text-teal-400" />
                  <span>Lihat Prestasi</span>
                </button>
                <a
                  href={getWhatsAppLink(data.profile.phone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-xs sm:text-sm font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-emerald-600/30 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Hubungi via WhatsApp</span>
                </a>
              </div>
            </div>
          )}

          {/* ================================================================
              2. TENTANG (ABOUT) - Animasi Transisi Awan
              ================================================================ */}
          {activeTab === "about" && (
            <div key="slide-about" className="space-y-6 animate-cloud-enter">
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/50 border border-emerald-500/20 space-y-4 shadow-lg">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
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
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/40 border border-emerald-500/10">
                    <span className="text-xs text-slate-400 block mb-1 font-mono">{detail.label}</span>
                    <span className="text-sm font-bold text-white">{detail.value}</span>
                  </div>
                ))}
                <div className="p-4 rounded-xl bg-slate-900/40 border border-emerald-500/10">
                  <span className="text-xs text-slate-400 block mb-1 font-mono">Sekolah</span>
                  <span className="text-sm font-bold text-white">SMAN 1 Kandangan, Kab. Kediri</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/40 border border-emerald-500/10">
                  <span className="text-xs text-slate-400 block mb-1 font-mono">Amanah & Gelar</span>
                  <span className="text-sm font-bold text-white">Duta Intelegensia & Penegak Bantara</span>
                </div>
              </div>
            </div>
          )}

          {/* ================================================================
              3. KEAHLIAN (SKILLS) - Animasi Transisi Awan
              ================================================================ */}
          {activeTab === "skills" && (
            <div key="slide-skills" className="space-y-6 animate-cloud-enter">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.skills.map((cat, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-900/50 border border-emerald-500/20 space-y-4 shadow-lg">
                    <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>{cat.title}</span>
                    </h4>
                    <div className="space-y-3">
                      {cat.items.map((skill, sIdx) => {
                        const skillMap: Record<string, string> = {
                          "Next.js": "https://nextjs.org",
                          "React": "https://react.dev",
                          "TypeScript": "https://www.typescriptlang.org",
                          "Tailwind CSS": "https://tailwindcss.com",
                          "HTML5 / CSS3": "https://developer.mozilla.org/en-US/docs/Web/HTML",
                          "JavaScript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                          "Prompt Engineering & LLM": "https://platform.openai.com/docs/guides/prompt-engineering",
                          "Generative AI & Image Gen": "https://ai.google.dev",
                          "Machine Learning Dasar": "https://scikit-learn.org",
                          "Computer Vision & OCR": "https://opencv.org",
                          "Speech & Whisper AI": "https://openai.com/research/whisper",
                          "Deep Learning & Neural Net": "https://pytorch.org",
                          "Node.js": "https://nodejs.org",
                          "PostgreSQL": "https://www.postgresql.org",
                          "RESTful API": "https://restfulapi.net",
                          "Git & GitHub": "https://github.com",
                          "VS Code": "https://code.visualstudio.com",
                          "Figma": "https://www.figma.com",
                        };
                        const url = skillMap[skill.name] || `https://www.google.com/search?q=${encodeURIComponent(skill.name + ' docs')}`;

                        return (
                          <a
                            key={sIdx}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block space-y-1 p-2 rounded-xl hover:bg-slate-800/80 transition-all group/sk"
                            title={`Buka info ${skill.name} di tab baru`}
                          >
                            <div className="flex justify-between text-xs font-semibold">
                              <span className="text-slate-300 group-hover/sk:text-emerald-300 transition-colors flex items-center space-x-1">
                                <span>{skill.name}</span>
                                <ExternalLink className="w-3 h-3 opacity-60" />
                              </span>
                              <span className="text-emerald-400 font-mono">{skill.level}%</span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-teal-400 transition-all duration-700 ease-out"
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================================================================
              4. PROYEK (PROJECTS) - Animasi Transisi Awan
              ================================================================ */}
          {activeTab === "projects" && (
            <div key="slide-projects" className="space-y-6 animate-cloud-enter">
              
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
                        ? "bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-md shadow-emerald-600/30"
                        : "bg-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Projects Grid */}
              {filteredProjects.length === 0 ? (
                <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/50 border border-emerald-500/20 text-center space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Proyek Sedang Disiapkan
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Daftar proyek telah dikosongkan sementara dan siap diperbarui dengan karya serta portofolio baru Anda.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredProjects.map((proj) => (
                    <div
                      key={proj.id}
                      className="rounded-2xl overflow-hidden bg-slate-900/60 border border-emerald-500/20 hover:border-emerald-400/40 transition-all flex flex-col group shadow-lg"
                    >
                      <div className="h-40 relative overflow-hidden bg-slate-800">
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-2 left-2">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow">
                            {proj.categoryLabel}
                          </span>
                        </div>
                      </div>

                      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                        <div>
                          <h4 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
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
                            className="text-xs font-semibold text-emerald-400 hover:text-teal-300 flex items-center space-x-1"
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
              )}
            </div>
          )}

          {/* ================================================================
              5. PENGALAMAN & PRESTASI (EXPERIENCE) - Animasi Transisi Awan
              ================================================================ */}
          {activeTab === "experience" && (
            <div key="slide-experience" className="space-y-6 animate-cloud-enter">
              
              {/* Experience List */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span>// Rekam Jejak Prestasi & Organisasi</span>
                </h4>

                <div className="space-y-3">
                  {data.timeline.experience.map((item, idx) => {
                    let itemUrl = "#";
                    if (item.role.includes("Duta Intelegensia") || item.company.includes("Kandangan")) {
                      itemUrl = "https://sman1kandangan.sch.id";
                    } else if (item.role.includes("Pramuka")) {
                      itemUrl = "https://pramuka.or.id";
                    } else if (item.role.includes("Paskibra") || item.role.includes("LBB")) {
                      itemUrl = "https://kedirikab.go.id";
                    } else {
                      itemUrl = `https://www.google.com/search?q=${encodeURIComponent(item.role + " " + item.company)}`;
                    }

                    return (
                      <a
                        key={idx}
                        href={itemUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-emerald-500/20 hover:border-emerald-400 hover:bg-slate-900/80 transition-all shadow-lg flex flex-col sm:flex-row items-start gap-4 group/exp block"
                        title={`Buka info ${item.role} di tab baru`}
                      >
                        {item.logoUrl && (
                          <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-2xl bg-slate-900/90 p-1 border border-emerald-500/30 shadow-md group-hover/exp:scale-105 transition-transform">
                            <img
                              src={item.logoUrl}
                              alt={item.role}
                              className="w-full h-full object-contain filter drop-shadow"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0 space-y-1.5">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                              {item.period}
                            </span>
                            <span className="text-xs text-emerald-400 flex items-center space-x-1 font-mono">
                              <span>Tab Baru</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </span>
                          </div>
                          <h4 className="text-base sm:text-lg font-bold text-white group-hover/exp:text-emerald-300 transition-colors">
                            {item.role}
                          </h4>
                          <p className="text-xs sm:text-sm text-emerald-300 font-medium">
                            {item.company}
                          </p>
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            {item.description}
                          </p>
                          {item.skills && (
                            <div className="flex flex-wrap gap-1.5 pt-1">
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
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Education */}
              {data.timeline.education.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-slate-800">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4" />
                    <span>// Riwayat Pendidikan</span>
                  </h4>
                  <div className="space-y-3">
                    {data.timeline.education.map((edu, idx) => {
                      const eduUrl = edu.institution.includes("Kandangan") ? "https://sman1kandangan.sch.id" : `https://www.google.com/search?q=${encodeURIComponent(edu.institution)}`;
                      return (
                        <a
                          key={idx}
                          href={eduUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-teal-500/20 hover:border-teal-400 hover:bg-slate-900/80 transition-all shadow-lg flex flex-col sm:flex-row items-start gap-4 group/edu block"
                          title={`Buka info ${edu.institution} di tab baru`}
                        >
                          {edu.logoUrl && (
                            <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-2xl bg-slate-900/90 p-1 border border-teal-500/30 shadow-md group-hover/edu:scale-105 transition-transform">
                              <img
                                src={edu.logoUrl}
                                alt={edu.institution}
                                className="w-full h-full object-contain filter drop-shadow"
                                loading="lazy"
                              />
                            </div>
                          )}
                          <div className="flex-1 min-w-0 space-y-1.5">
                            <div className="flex items-center justify-between">
                              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-teal-500/15 text-teal-400 border border-teal-500/30">
                                {edu.period}
                              </span>
                              <span className="text-xs text-teal-400 flex items-center space-x-1 font-mono">
                                <span>Tab Baru</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </span>
                            </div>
                            <h4 className="text-base sm:text-lg font-bold text-white group-hover/edu:text-teal-300 transition-colors">{edu.degree}</h4>
                            <p className="text-xs sm:text-sm text-teal-300 font-medium">{edu.institution}</p>
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{edu.description}</p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ================================================================
              6. KONTAK (CONTACT) - Animasi Transisi Awan
              ================================================================ */}
          {activeTab === "contact" && (
            <div key="slide-contact" className="space-y-6 animate-cloud-enter">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Email Card */}
                <a
                  href={`mailto:${data.contact.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-900/50 border border-emerald-500/20 hover:border-emerald-500/50 transition-all flex items-center space-x-3 group shadow-lg"
                  title="Kirim email di tab baru"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-105 transition-transform border border-emerald-500/30">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Email Resmi (Tab Baru)</span>
                    <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {data.contact.email}
                    </span>
                  </div>
                </a>

                {/* WhatsApp Direct */}
                <a
                  href={getWhatsAppLink(data.contact.phone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-900/50 border border-emerald-500/20 hover:border-emerald-500/50 transition-all flex items-center space-x-3 group shadow-lg"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-105 transition-transform border border-emerald-500/30">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">WhatsApp / Chat</span>
                    <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {data.contact.phone}
                    </span>
                  </div>
                </a>
              </div>

              {/* Form Message */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/50 border border-emerald-500/20 space-y-4 shadow-lg">
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
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-emerald-500/25 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                    <div>
                      <textarea
                        required
                        rows={3}
                        placeholder="Tulis pesan atau tawaran kolaborasi Anda di sini..."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-emerald-500/25 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/30 flex items-center justify-center space-x-2 transition-all"
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
