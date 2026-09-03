"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, Command, ArrowRight, Sparkles, FolderGit2, Award, FileText, Bot, Moon, Sun, Music, Send } from "lucide-react";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigasi" | "Fitur AI" | "Aksi Cepat" | "Prestasi";
  icon: React.ReactNode;
  action: () => void;
  shortcut?: string;
}

interface CommandPaletteProps {
  onOpenCategory: (tab: "home" | "about" | "skills" | "projects" | "experience" | "contact") => void;
  onOpenResume: () => void;
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  onOpenCategory,
  onOpenResume,
  darkMode,
  setDarkMode
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "/" && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setIsOpen(true);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  const items: CommandItem[] = [
    {
      id: "nav-projects",
      title: "Buka Proyek Unggulan (Intelegensia AI, ScoutPulse, dsb)",
      category: "Navigasi",
      icon: <FolderGit2 className="w-4 h-4 text-purple-400" />,
      action: () => {
        onOpenCategory("projects");
        setIsOpen(false);
      },
      shortcut: "P"
    },
    {
      id: "nav-exp",
      title: "Lihat Rekam Jejak Duta Intelegensia & Pramuka Bantara",
      category: "Prestasi",
      icon: <Award className="w-4 h-4 text-pink-400" />,
      action: () => {
        onOpenCategory("experience");
        setIsOpen(false);
      },
      shortcut: "E"
    },
    {
      id: "nav-skills",
      title: "Eksplorasi Keahlian AI & Pemrograman Web",
      category: "Navigasi",
      icon: <Sparkles className="w-4 h-4 text-cyan-400" />,
      action: () => {
        onOpenCategory("skills");
        setIsOpen(false);
      },
      shortcut: "S"
    },
    {
      id: "open-resume",
      title: "Buka & Cetak Curriculum Vitae (Resume PDF)",
      category: "Aksi Cepat",
      icon: <FileText className="w-4 h-4 text-amber-400" />,
      action: () => {
        onOpenResume();
        setIsOpen(false);
      },
      shortcut: "CV"
    },
    {
      id: "toggle-theme",
      title: darkMode ? "Ganti ke Mode Terang (Light Mode)" : "Ganti ke Mode Gelap (Dark Mode)",
      category: "Aksi Cepat",
      icon: darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-purple-400" />,
      action: () => {
        setDarkMode((prev) => !prev);
        setIsOpen(false);
      },
      shortcut: "T"
    },
    {
      id: "contact-wa",
      title: "Hubungi Samuel Langsung via WhatsApp",
      category: "Aksi Cepat",
      icon: <Send className="w-4 h-4 text-emerald-400" />,
      action: () => {
        window.open("https://wa.me/628133726102", "_blank");
        setIsOpen(false);
      },
      shortcut: "WA"
    }
  ];

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDownList = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
      e.preventDefault();
      filteredItems[selectedIndex].action();
    }
  };

  return (
    <>
      {/* Floating Shortcut Quick Trigger Pill (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:block">
        <button
          onClick={() => setIsOpen(true)}
          className="px-3.5 py-2 rounded-2xl glass-card border border-emerald-500/25 hover:border-emerald-400 text-slate-300 hover:text-white flex items-center space-x-2 text-xs font-mono shadow-lg hover:scale-105 transition-all"
          title="Buka Menu Perintah Cepat (Ctrl + K)"
        >
          <Search className="w-3.5 h-3.5 text-emerald-400" />
          <span>Cari / Menu Cepat</span>
          <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-emerald-300 border border-emerald-500/30">
            Ctrl K
          </kbd>
        </button>
      </div>

      {/* Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-start justify-center pt-[12vh] p-4 animate-cloud-enter">
          <div className="relative w-full max-w-xl glass-card rounded-3xl border border-emerald-500/30 shadow-2xl shadow-emerald-950/50 overflow-hidden">
            
            {/* Search Input Bar */}
            <div className="p-4 border-b border-emerald-500/20 flex items-center space-x-3 bg-slate-900/90">
              <Search className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDownList}
                placeholder="Ketik perintah atau cari (contoh: Proyek, AI, CV, Prestasi)..."
                className="w-full bg-transparent border-none text-white text-sm focus:outline-none placeholder-slate-400 font-sans"
              />
              <kbd className="hidden sm:inline px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-400 border border-slate-700">
                ESC
              </kbd>
            </div>

            {/* Results List */}
            <div className="p-2 max-h-[340px] overflow-y-auto space-y-1">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={item.action}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full p-3 rounded-2xl flex items-center justify-between text-left transition-all ${
                      selectedIndex === idx
                        ? "bg-gradient-to-r from-emerald-600/30 via-teal-600/20 to-transparent border border-emerald-500/40 text-white"
                        : "hover:bg-slate-800/50 text-slate-300"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-xl bg-slate-900/80 flex items-center justify-center border border-emerald-500/20 text-emerald-400">
                        {item.icon}
                      </div>
                      <div>
                        <span className="text-xs font-semibold block">{item.title}</span>
                        <span className="text-[10px] font-mono text-emerald-300/80 uppercase">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      {item.shortcut && (
                        <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-400 border border-slate-700">
                          {item.shortcut}
                        </kbd>
                      )}
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                  </button>
                ))
              ) : (
                <div className="p-8 text-center text-slate-400 text-xs">
                  Tidak ditemukan hasil untuk "{query}". Coba kata kunci lain.
                </div>
              )}
            </div>

            {/* Footer Tip */}
            <div className="p-3 bg-slate-950/70 border-t border-emerald-500/15 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>Gunakan tombol panah <strong>↑ ↓</strong> untuk navigasi, <strong>Enter</strong> untuk memilih</span>
              <span className="text-emerald-400 font-semibold">Samuel Command Palette</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
