"use client";

import React, { useState, useEffect } from "react";
import { Keyboard, X } from "lucide-react";

interface ShortcutGroup {
  category: string;
  categoryBadge: string;
  items: {
    keys: string[];
    label: string;
    description: string;
    action: () => void;
  }[];
}

interface KeyboardShortcutsGuideProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export const KeyboardShortcutsGuide: React.FC<KeyboardShortcutsGuideProps> = ({
  setDarkMode
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeKeyHit, setActiveKeyHit] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const shortcutGroups: ShortcutGroup[] = [
    {
      category: "Navigasi Cepat Antar Halaman",
      categoryBadge: "FAST JUMP",
      items: [
        {
          keys: ["1", "H"],
          label: "Beranda / Profil Utama",
          description: "Melompat langsung ke panggung utama & kartu avatar",
          action: () => scrollToSection("home")
        },
        {
          keys: ["2", "P"],
          label: "Etalase Proyek",
          description: "Melihat etalase karya dan stage proyek",
          action: () => scrollToSection("projects")
        },
        {
          keys: ["3", "L"],
          label: "Simulator LKBB CODASKA",
          description: "Membuka simulasi taktis baris-berbaris 16 personil",
          action: () => scrollToSection("lkbb-simulator")
        },
        {
          keys: ["4", "S"],
          label: "Matriks Keahlian & Radar",
          description: "Melihat grafik kemampuan AI, Web & Desain",
          action: () => scrollToSection("skills")
        },
        {
          keys: ["5", "E"],
          label: "Rekam Jejak & Prestasi",
          description: "Menelusuri pengalaman Duta Intelegensia & Pramuka",
          action: () => scrollToSection("experience")
        },
        {
          keys: ["6", "C"],
          label: "Hubungi Kontak",
          description: "Menuju formulir pesan & kontak WhatsApp",
          action: () => scrollToSection("contact")
        }
      ]
    },
    {
      category: "Pintasan Sistem & Kontrol",
      categoryBadge: "SYSTEM UTILS",
      items: [
        {
          keys: ["A", "D"],
          label: "Geser Slide Proyek (Prev / Next)",
          description: "Mengganti slide proyek saat berada di bagian Proyek",
          action: () => scrollToSection("projects")
        },
        {
          keys: ["?"],
          label: "Buka / Tutup Daftar Shortcut",
          description: "Menampilkan panduan tombol pintas ini",
          action: () => setIsOpen((prev) => !prev)
        },
        {
          keys: ["Esc"],
          label: "Tutup Jendela / Modal",
          description: "Menutup jendela aktif yang sedang terbuka",
          action: () => setIsOpen(false)
        }
      ]
    }
  ];

  // Global Keyboard Event Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is currently typing in input or textarea
      const target = e.target as HTMLElement;
      if (["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName) || target.isContentEditable) {
        return;
      }

      const key = e.key.toUpperCase();

      // Toggle Shortcut Guide: ? or Shift + /
      if (e.key === "?" || (e.shiftKey && e.key === "/")) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        setActiveKeyHit("?");
        setTimeout(() => setActiveKeyHit(null), 1000);
        return;
      }

      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        return;
      }

      // Check numeric shortcuts: 1, 2, 3, 4, 5, 6
      if (e.key === "1" || key === "H") {
        e.preventDefault();
        scrollToSection("home");
        setActiveKeyHit(e.key);
      } else if (e.key === "2" || key === "P") {
        e.preventDefault();
        scrollToSection("projects");
        setActiveKeyHit(e.key);
      } else if (e.key === "3" || key === "L") {
        e.preventDefault();
        scrollToSection("lkbb-simulator");
        setActiveKeyHit(e.key);
      } else if (e.key === "4" || key === "S") {
        e.preventDefault();
        scrollToSection("skills");
        setActiveKeyHit(e.key);
      } else if (e.key === "5" || key === "E") {
        e.preventDefault();
        scrollToSection("experience");
        setActiveKeyHit(e.key);
      } else if (e.key === "6" || key === "C") {
        e.preventDefault();
        scrollToSection("contact");
        setActiveKeyHit(e.key);
      }

      if (activeKeyHit) {
        setTimeout(() => setActiveKeyHit(null), 1000);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setDarkMode, activeKeyHit]);

  return (
    <>
      {/* Floating Shortcut Quick-Trigger Pill on Bottom-Right */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 hidden min-[500px]:block">
        <button
          onClick={() => {
            setIsOpen(true);
          }}
          className="group flex items-center space-x-2 px-3.5 py-2 rounded-full glass-card bg-slate-50 border border-slate-200 hover:border-emerald-500 text-slate-700 hover:text-emerald-700 text-xs font-semibold shadow-md transition-all duration-300 active:scale-95"
          title="Buka Daftar Pintasan Keyboard (Tekan '?')"
        >
          <Keyboard className="w-3.5 h-3.5 text-emerald-600 group-hover:rotate-12 transition-transform" />
          <span className="text-[11px] font-semibold text-slate-700 group-hover:text-emerald-700">
            [ ? ] SHORTCUTS
          </span>
        </button>
      </div>

      {/* Main Keyboard Shortcuts Cheatsheet Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-cloud-enter overflow-y-auto">
          <div className="relative w-full max-w-3xl glass-card bg-slate-50 rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] my-auto font-sans">
            
            {/* Header */}
            <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-cyan-500 flex items-center justify-center text-white shadow-md font-bold">
                  <Keyboard className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">
                      // HOTKEY COMMAND MATRIX
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                    Pintasan Keyboard Cepat
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors border border-slate-200"
                aria-label="Tutup Panduan Shortcut"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Hint Bar */}
            <div className="px-4 sm:px-6 py-2.5 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <span>💡 Tekan tombol di keyboard atau klik kartu untuk langsung mengeksekusi aksi!</span>
              <span className="text-emerald-700 font-bold hidden sm:inline">PINTASAN AKTIF</span>
            </div>

            {/* Modal Body with Shortcut Groups */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 bg-slate-50">
              {shortcutGroups.map((group, gIdx) => (
                <div key={gIdx} className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {group.categoryBadge}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      {group.category}
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {group.items.map((item, iIdx) => (
                      <button
                        key={iIdx}
                        onClick={() => {
                          item.action();
                          setIsOpen(false);
                        }}
                        className="p-3 rounded-2xl bg-slate-50 hover:bg-emerald-50/60 border border-slate-200 hover:border-emerald-400 transition-all text-left flex items-start justify-between group active:scale-[0.99]"
                      >
                        <div className="space-y-0.5">
                          <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                            {item.label}
                          </div>
                          <div className="text-[10px] text-slate-600">
                            {item.description}
                          </div>
                        </div>

                        {/* Keycap Badge Visual */}
                        <div className="flex items-center space-x-1 flex-shrink-0 ml-2">
                          {item.keys.map((k, kIdx) => (
                            <kbd
                              key={kIdx}
                              className="px-2 py-1 rounded-lg bg-white border border-slate-300 text-emerald-700 font-bold text-xs shadow-sm min-w-[24px] text-center"
                            >
                              {k}
                            </kbd>
                          ))}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 text-center text-[11px] text-slate-600">
              <span>Tekan <kbd className="px-1.5 py-0.5 rounded bg-white text-emerald-700 font-semibold border border-slate-300">Esc</kbd> kapan saja untuk menutup jendela.</span>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
