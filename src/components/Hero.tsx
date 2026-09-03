"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, MessageSquare, Github, Linkedin, Twitter, Instagram, Mail, Sparkles } from "lucide-react";
import { Profile } from "@/types/portfolio";

interface HeroProps {
  profile: Profile;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = profile.roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % profile.roles.length);
      } else {
        timeout = setTimeout(() => {
          setText(currentRole.substring(0, text.length - 1));
        }, 50);
      }
    } else {
      if (text === currentRole) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else {
        timeout = setTimeout(() => {
          setText(currentRole.substring(0, text.length + 1));
        }, 100);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex, profile.roles]);

  return (
    <section id="home" className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-12 sm:py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Avatar Card on Mobile (placed ergonomically) */}
          <div className="lg:hidden flex justify-center order-1">
            <div className="relative w-40 h-40 sm:w-56 sm:h-56">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 opacity-30 blur-lg animate-pulse" />
              <div className="glass-card rounded-3xl p-2.5 relative border border-emerald-500/40 shadow-xl w-full h-full">
                <div className="aspect-square rounded-2xl overflow-hidden bg-slate-900 w-full h-full relative">
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Left Column: Intro */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5 sm:space-y-6 order-2 lg:order-1">
            
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-emerald-300 dark:text-emerald-300 light:text-emerald-700 font-mono">
                {profile.status}
              </span>
            </div>

            {/* Heading & Role */}
            <div className="space-y-2">
              <p className="text-base sm:text-lg font-medium text-slate-400 dark:text-slate-400 light:text-slate-600">
                Halo, Nama saya
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-tight">
                {profile.name}
              </h1>
              <div className="text-xl sm:text-3xl lg:text-4xl font-bold pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-1 sm:gap-2">
                <span className="text-slate-300 dark:text-slate-300 light:text-slate-700">Saya seorang</span>
                <span className="gradient-text typing-cursor min-h-[36px] sm:min-h-[44px]">{text}</span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-1 sm:px-0">
              {profile.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="#projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-semibold text-sm shadow-lg shadow-emerald-600/30 hover:shadow-emerald-500/50 flex items-center justify-center space-x-2 active:scale-95 transition-all"
              >
                <span>Lihat Karya & Proyek</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-200 hover:bg-slate-800 text-slate-200 dark:text-slate-200 light:text-slate-800 font-semibold text-sm border border-emerald-500/25 flex items-center justify-center space-x-2 active:scale-95 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Hubungi Saya</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-5 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200/80">
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 font-mono">// Media Sosial & Tautan Resmi</p>
              <div className="flex items-center justify-center lg:justify-start gap-2.5 sm:gap-3 flex-wrap">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-slate-900/80 text-slate-300 hover:text-white hover:bg-emerald-600 transition-all shadow-sm border border-emerald-500/20 active:scale-95"
                  aria-label="GitHub"
                  title="Buka profil GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-slate-900/80 text-slate-300 hover:text-white hover:bg-emerald-600 transition-all shadow-sm border border-emerald-500/20 active:scale-95"
                  aria-label="LinkedIn"
                  title="Buka profil LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={profile.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-slate-900/80 text-slate-300 hover:text-white hover:bg-emerald-600 transition-all shadow-sm border border-emerald-500/20 active:scale-95"
                  aria-label="Twitter"
                  title="Buka Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={profile.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-slate-900/80 text-slate-300 hover:text-white hover:bg-emerald-600 transition-all shadow-sm border border-emerald-500/20 active:scale-95"
                  aria-label="Instagram"
                  title="Buka Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-slate-900/80 text-slate-300 hover:text-white hover:bg-emerald-600 transition-all shadow-sm border border-emerald-500/20 active:scale-95"
                  aria-label="Email"
                  title="Kirim email di tab baru"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Avatar Card for Desktop */}
          <div className="hidden lg:flex lg:col-span-5 justify-center order-2">
            <div className="relative w-72 sm:w-84 lg:w-96">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-400 to-green-600 opacity-25 blur-xl animate-pulse" />
              
              <div className="glass-card rounded-3xl p-4 sm:p-5 relative border border-emerald-500/30 shadow-2xl">
                <div className="aspect-square rounded-2xl overflow-hidden bg-slate-900 relative group">
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
