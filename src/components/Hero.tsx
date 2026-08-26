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
    <section id="home" className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-pink-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-pink-300 dark:text-pink-300 light:text-pink-600">
                {profile.status}
              </span>
            </div>

            {/* Heading & Role */}
            <div className="space-y-2">
              <p className="text-lg sm:text-xl font-medium text-slate-400 dark:text-slate-400 light:text-slate-600">
                Halo, Nama saya
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-tight">
                {profile.name}
              </h1>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold pt-2 flex items-center justify-center lg:justify-start">
                <span className="text-slate-300 dark:text-slate-300 light:text-slate-700 mr-2.5">Saya seorang</span>
                <span className="gradient-text typing-cursor min-h-[40px]">{text}</span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {profile.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-purple-700 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white font-semibold shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:-translate-y-0.5 transition-all flex items-center space-x-2"
              >
                <span>Lihat Karya Saya</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-xl bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200 hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-800 font-semibold border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300 hover:-translate-y-0.5 transition-all flex items-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 text-purple-400" />
                <span>Hubungi Saya</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200/80">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">Temukan saya di</p>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white hover:bg-pink-600 transition-all transform hover:-translate-y-1 shadow-sm"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white hover:bg-pink-600 transition-all transform hover:-translate-y-1 shadow-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={profile.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white hover:bg-pink-600 transition-all transform hover:-translate-y-1 shadow-sm"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={profile.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white hover:bg-pink-600 transition-all transform hover:-translate-y-1 shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white hover:bg-pink-600 transition-all transform hover:-translate-y-1 shadow-sm"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Avatar Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-84 lg:w-96">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 opacity-30 blur-xl animate-pulse-slow" />
              
              <div className="glass-card rounded-3xl p-4 sm:p-5 relative border border-white/10 shadow-2xl">
                <div className="aspect-square rounded-2xl overflow-hidden bg-slate-800 relative group">
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
