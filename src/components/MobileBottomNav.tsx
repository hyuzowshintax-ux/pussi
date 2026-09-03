"use client";

import React, { useState, useEffect } from "react";
import { Home, User, Code2, Layers, Briefcase, Mail } from "lucide-react";

export const MobileBottomNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Detect active section
      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 250;

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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Beranda", icon: Home },
    { id: "about", label: "Profil", icon: User },
    { id: "skills", label: "Keahlian", icon: Code2 },
    { id: "projects", label: "Proyek", icon: Layers },
    { id: "experience", label: "Jejak", icon: Briefcase },
    { id: "contact", label: "Kontak", icon: Mail },
  ];

  const scrollTo = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-3 inset-x-3 z-40 md:hidden transition-all duration-300">
      <nav className="glass-card rounded-2xl p-1.5 border border-emerald-500/30 shadow-[0_10px_30px_-5px_rgba(16,185,129,0.4)] backdrop-blur-2xl bg-slate-950/90 flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`flex-1 py-1.5 px-1 rounded-xl flex flex-col items-center justify-center transition-all duration-200 relative ${
                isActive
                  ? "text-emerald-300 font-bold"
                  : "text-slate-400 hover:text-slate-200"
              }`}
              aria-label={item.label}
            >
              {isActive && (
                <span className="absolute inset-0 bg-emerald-500/20 rounded-xl border border-emerald-500/40 -z-10 animate-fade-in" />
              )}
              <Icon className={`w-4 h-4 mb-0.5 ${isActive ? "text-emerald-400 scale-110" : "opacity-80"}`} />
              <span className="text-[10px] font-mono tracking-tight leading-none">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
