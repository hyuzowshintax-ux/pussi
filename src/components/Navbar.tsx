"use client";

import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, FileText, Code } from "lucide-react";
import { Profile } from "@/types/portfolio";
import { AudioAmbience } from "@/components/AudioAmbience";

interface NavbarProps {
  profile: Profile;
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenCategory: (tab: "home" | "about" | "skills" | "projects" | "experience" | "contact") => void;
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ profile, darkMode, setDarkMode, onOpenCategory, onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", id: "home" },
    { name: "Tentang", id: "about" },
    { name: "Keahlian", id: "skills" },
    { name: "Proyek", id: "projects" },
    { name: "Pengalaman", id: "experience" },
    { name: "Kontak", id: "contact" },
  ] as const;

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-nav shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo - Scroll to Top Home Profile */}
          <button onClick={() => handleNavClick("home")} className="flex items-center space-x-2.5 group text-left" title="Kembali ke Layar Utama">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-emerald-600/30 group-hover:scale-105 transition-transform">
              <Code className="w-5 h-5" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 group-hover:text-emerald-400 transition-colors">
              {profile.name.split(" ")[0]}<span className="text-emerald-400">.</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-medium transition-colors relative py-1 flex items-center space-x-1.5 ${
                  activeSection === link.id
                    ? "text-emerald-400 font-semibold"
                    : "text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-emerald-400"
                }`}
              >
                <span>{link.name}</span>
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 rounded-full shadow-sm shadow-emerald-500/50" />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Cosmic Ambient Lo-Fi Synth Toggle */}
            <AudioAmbience />

            {/* Dark / Light Toggle */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="w-10 h-10 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-200 border border-emerald-500/20 dark:border-emerald-500/20 light:border-slate-300 flex items-center justify-center hover:bg-slate-800 transition-all text-amber-400"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>

            {/* Resume Generator Modal Trigger */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-emerald-600/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5 transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>Resume / CV</span>
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center space-x-3 md:hidden">
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="w-9 h-9 rounded-lg bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-200 border border-emerald-500/20 dark:border-emerald-500/20 light:border-slate-300 flex items-center justify-center text-amber-400"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-lg bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-200 flex items-center justify-center text-slate-200 dark:text-slate-200 light:text-slate-800 border border-emerald-500/20"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-t border-emerald-500/20 px-6 py-5">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left text-sm font-medium text-slate-200 dark:text-slate-200 light:text-slate-800 hover:text-emerald-400 transition-colors py-2 flex items-center justify-between border-b border-white/5"
              >
                <span>{link.name}</span>
                <span className="text-xs text-emerald-400 font-mono">Lihat ➔</span>
              </button>
            ))}
            <div className="pt-3 border-t border-slate-800">
              <button
                onClick={() => {
                  onOpenResume?.();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white font-semibold text-sm shadow-md shadow-emerald-600/30"
              >
                <FileText className="w-4 h-4" />
                <span>Buka / Unduh CV Resmi</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
