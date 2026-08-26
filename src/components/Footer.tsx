"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { Profile } from "@/types/portfolio";

interface FooterProps {
  profile: Profile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-950 dark:bg-slate-950 light:bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-center md:text-left">
            <p className="text-sm font-medium text-slate-400 dark:text-slate-400 light:text-slate-600">
              &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Dibangun dengan Next.js 14, TypeScript, Tailwind CSS, & Performa Tinggi.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white hover:bg-pink-600 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white hover:bg-pink-600 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white hover:bg-pink-600 transition-all"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white hover:bg-pink-600 transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white hover:bg-pink-600 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>

      {/* Floating Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 w-11 h-11 rounded-full bg-gradient-to-tr from-purple-600 via-purple-700 to-pink-500 text-white shadow-xl shadow-purple-600/40 flex items-center justify-center hover:scale-110 transition-all duration-300"
          aria-label="Kembali ke atas"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};
