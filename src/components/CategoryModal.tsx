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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-300">
      
      {/* Centered Modal Container */}
      <div className="glass-card w-full max-w-4xl max-h-[88vh] rounded-3xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden relative animate-opening-aperture bg-white">
        
        {/* Modal Top Header */}
        <div className="p-4 sm:p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50 relative z-10">
          
          {/* Active Category Title */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-600/25">
              {activeTab === "home" && <Home className="w-5 h-5" />}
              {activeTab === "about" && <User className="w-5 h-5" />}
              {activeTab === "skills" && <Code2 className="w-5 h-5" />}
              {activeTab === "projects" && <Layers className="w-5 h-5" />}
              {activeTab === "experience" && <Briefcase className="w-5 h-5" />}
              {activeTab === "contact" && <Mail className="w-5 h-5" />}
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                Kategori Terpilih
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 capitalize">
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
            className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all border border-slate-200"
            aria-label="Tutup Box"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Tabs Quick Bar */}
        <div className="px-4 sm:px-6 py-2.5 bg-white border-b border-slate-200 flex items-center gap-2 overflow-x-auto no-scrollbar relative z-10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-all flex-shrink-0 ${
                  isActive
                    ? "bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-600/25"
                    : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1 space-y-6 relative z-10 bg-white">

          {/* ================================================================
              1. BERANDA (HOME)
              ================================================================ */}
          {activeTab === "home" && (
            <div key="slide-home" className="space-y-6 animate-cloud-enter">
              <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden bg-white border-2 border-emerald-500/40 shadow-md flex-shrink-0">
                  <img
                    src={data.profile.avatarUrl}
                    alt={data.profile.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="text-left space-y-2 flex-1">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Duta Intelegensia & Pelajar Berprestasi</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {data.profile.name}
                  </h2>
                  <p className="text-sm sm:text-base text-emerald-700 font-medium">
                    Saya seorang <span className="text-slate-900 font-bold">{data.profile.roles[0]}</span>
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {data.profile.tagline}
                  </p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => onSelectTab("projects")}
                  className="py-3 px-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold flex items-center justify-center space-x-2 transition-all shadow-sm"
                >
                  <Layers className="w-4 h-4 text-emerald-600" />
                  <span>Lihat Proyek AI</span>
                </button>
                <button
                  onClick={() => onSelectTab("experience")}
                  className="py-3 px-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold flex items-center justify-center space-x-2 transition-all shadow-sm"
                >
                  <Award className="w-4 h-4 text-teal-600" />
                  <span>Lihat Prestasi</span>
                </button>
                <a
                  href={getWhatsAppLink(data.profile.phone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-xs sm:text-sm font-semibold flex items-center justify-center space-x-2 shadow-md shadow-emerald-600/25 transition-all"
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
            <div key="slide-about" className="space-y-6 animate-cloud-enter">
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  // Bio & Profil Pribadi
                </h4>
                {data.about.bio.map((paragraph, idx) => (
                  <p key={idx} className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Key Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.about.details.map((detail, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs text-slate-500 block mb-1">{detail.label}</span>
                    <span className="text-sm font-bold text-slate-900">{detail.value}</span>
                  </div>
                ))}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs text-slate-500 block mb-1">Sekolah</span>
                  <span className="text-sm font-bold text-slate-900">SMAN 1 Kandangan, Kab. Kediri</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs text-slate-500 block mb-1">Amanah & Gelar</span>
                  <span className="text-sm font-bold text-slate-900">Duta Intelegensia & Penegak Bantara</span>
                </div>
              </div>
            </div>
          )}

          {/* ================================================================
              3. KEAHLIAN (SKILLS)
              ================================================================ */}
          {activeTab === "skills" && (
            <div key="slide-skills" className="space-y-6 animate-cloud-enter">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.skills.map((cat, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm">
                    <h4 className="text-sm font-bold text-slate-900 flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-600" />
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
                            className="block space-y-1 p-2 rounded-xl hover:bg-white transition-all group/sk"
                            title={`Buka info ${skill.name} di tab baru`}
                          >
                            <div className="flex justify-between text-xs font-semibold">
                              <span className="text-slate-700 group-hover/sk:text-emerald-700 transition-colors flex items-center space-x-1">
                                <span>{skill.name}</span>
                                <ExternalLink className="w-3 h-3 opacity-60" />
                              </span>
                              <span className="text-emerald-700">{skill.level}%</span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 transition-all duration-700 ease-out"
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
              4. PROYEK (PROJECTS)
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
                        ? "bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-md shadow-emerald-600/25"
                        : "bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Projects Grid */}
              {filteredProjects.length === 0 ? (
                <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    Proyek Sedang Disiapkan
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Daftar proyek telah dikosongkan sementara dan siap diperbarui dengan karya serta portofolio baru Anda.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredProjects.map((proj) => (
                    <div
                      key={proj.id}
                      className="rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-emerald-400 transition-all flex flex-col group shadow-sm"
                    >
                      <div className="h-40 relative overflow-hidden bg-slate-100">
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
                          <h4 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                            {proj.title}
                          </h4>
                          <p className="text-xs text-slate-600 line-clamp-2 mt-1">
                            {proj.description}
                          </p>
                          <div className="flex flex-wrap gap-1 mt-3">
                            {proj.tags.slice(0, 3).map((tag, tIdx) => (
                              <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                          <a
                            href={proj.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-emerald-700 hover:text-teal-600 flex items-center space-x-1"
                          >
                            <span>Buka Proyek</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-500 hover:text-slate-900"
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
              5. PENGALAMAN & PRESTASI (EXPERIENCE)
              ================================================================ */}
          {activeTab === "experience" && (
            <div key="slide-experience" className="space-y-6 animate-cloud-enter">
              
              {/* Experience List */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span>// Rekam Jejak Prestasi & Organisasi</span>
                </h4>

                <div className="space-y-3">
                  {data.timeline.experience.map((item, idx) => {
                    const role = item.role || "";
                    const company = item.company || "";
                    let itemUrl = "#";
                    if (role.includes("Duta Intelegensia") || company.includes("Kandangan")) {
                      itemUrl = "https://sman1kandangan.sch.id";
                    } else if (role.includes("Pramuka")) {
                      itemUrl = "https://pramuka.or.id";
                    } else if (role.includes("Paskibra") || role.includes("LBB") || role.includes("CODASKA")) {
                      itemUrl = "https://kedirikab.go.id";
                    } else {
                      itemUrl = `https://www.google.com/search?q=${encodeURIComponent(`${role} ${company}`.trim() || "SMAN 1 Kandangan")}`;
                    }

                    return (
                      <a
                        key={idx}
                        href={itemUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:bg-white transition-all shadow-sm flex flex-col sm:flex-row items-start gap-4 group/exp block"
                        title={`Buka info ${role} di tab baru`}
                      >
                        {item.logoUrl && (
                          <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-2xl bg-white p-1 border border-slate-200 shadow-sm group-hover/exp:scale-105 transition-transform">
                            <img
                              src={item.logoUrl}
                              alt={role}
                              className="w-full h-full object-contain"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0 space-y-1.5">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                              {item.period}
                            </span>
                            <span className="text-xs text-emerald-700 font-medium flex items-center space-x-1">
                              <span>Tab Baru</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </span>
                          </div>
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover/exp:text-emerald-700 transition-colors">
                            {role}
                          </h4>
                          <p className="text-xs sm:text-sm text-emerald-700 font-medium">
                            {company}
                          </p>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {item.description}
                          </p>
                          {item.skills && (
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {item.skills.map((s, sIdx) => (
                                <span
                                  key={sIdx}
                                  className="text-[11px] px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200"
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
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-teal-700 flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4" />
                    <span>// Riwayat Pendidikan</span>
                  </h4>
                  <div className="space-y-3">
                    {data.timeline.education.map((edu, idx) => {
                      const inst = edu.institution || "";
                      const eduUrl = inst.includes("Kandangan") ? "https://sman1kandangan.sch.id" : `https://www.google.com/search?q=${encodeURIComponent(inst || "SMAN 1 Kandangan")}`;
                      return (
                        <a
                          key={idx}
                          href={eduUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-400 hover:bg-white transition-all shadow-sm flex flex-col sm:flex-row items-start gap-4 group/edu block"
                          title={`Buka info ${inst} di tab baru`}
                        >
                          {edu.logoUrl && (
                            <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-2xl bg-white p-1 border border-slate-200 shadow-sm group-hover/edu:scale-105 transition-transform">
                              <img
                                src={edu.logoUrl}
                                alt={edu.institution}
                                className="w-full h-full object-contain"
                                loading="lazy"
                              />
                            </div>
                          )}
                          <div className="flex-1 min-w-0 space-y-1.5">
                            <div className="flex items-center justify-between">
                              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-50 text-teal-700 border border-teal-200">
                                {edu.period}
                              </span>
                              <span className="text-xs text-teal-700 font-medium flex items-center space-x-1">
                                <span>Tab Baru</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </span>
                            </div>
                            <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover/edu:text-teal-700 transition-colors">{edu.degree}</h4>
                            <p className="text-xs sm:text-sm text-teal-700 font-medium">{edu.institution}</p>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{edu.description}</p>
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
              6. KONTAK (CONTACT)
              ================================================================ */}
          {activeTab === "contact" && (
            <div key="slide-contact" className="space-y-6 animate-cloud-enter">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Email Card */}
                <a
                  href={`mailto:${data.contact.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:bg-white transition-all flex items-center space-x-3 group shadow-sm"
                  title="Kirim email di tab baru"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:scale-105 transition-transform border border-emerald-200">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Email Resmi (Tab Baru)</span>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {data.contact.email}
                    </span>
                  </div>
                </a>

                {/* WhatsApp Direct */}
                <a
                  href={getWhatsAppLink(data.contact.phone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:bg-white transition-all flex items-center space-x-3 group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:scale-105 transition-transform border border-emerald-200">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">WhatsApp / Chat</span>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {data.contact.phone}
                    </span>
                  </div>
                </a>
              </div>

              {/* Form Message */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm">
                <h4 className="text-sm font-bold text-slate-900">
                  Kirim Pesan Cepat ke Samuel
                </h4>
                {formSubmitted ? (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center space-x-2">
                    <Check className="w-4 h-4 flex-shrink-0 text-emerald-600" />
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
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <textarea
                        required
                        rows={3}
                        placeholder="Tulis pesan atau tawaran kolaborasi Anda di sini..."
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/25 flex items-center justify-center space-x-2 transition-all"
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
