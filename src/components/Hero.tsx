"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, MessageSquare, Instagram } from "lucide-react";
import { Profile } from "@/types/portfolio";

interface HeroProps {
  profile: Profile;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const whatsappNumber = profile.phone.replace(/[^0-9]/g, "").replace(/^0/, "62");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Halo Samuel, saya tertarik dengan portofolio Anda!")}`;

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
    <section id="home" className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-12 sm:py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Avatar Card on Mobile */}
          <div className="lg:hidden flex justify-center order-1">
            <div className="relative w-40 h-40 sm:w-56 sm:h-56">
              <div className="glass-card rounded-3xl p-2.5 relative border border-slate-200 shadow-lg w-full h-full">
                <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 w-full h-full relative">
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Left Column: Intro */}
          <div className="lg:col-span-7 text-left space-y-5 sm:space-y-6 order-2 lg:order-1">
            
            {/* Status Pill */}
            <div className="flex items-center justify-start gap-3 flex-wrap">
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold text-emerald-800">
                  {profile.status}
                </span>
              </div>
            </div>

            {/* Heading & Role */}
            <div className="space-y-2">
              <p className="text-base sm:text-lg font-medium text-slate-500">
                Halo, Nama saya
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
                {profile.name}
              </h1>
              <div className="text-xl sm:text-3xl lg:text-4xl font-bold pt-1 flex flex-wrap items-center justify-start gap-1 sm:gap-2">
                <span className="text-slate-700">Saya seorang</span>
                <span className="gradient-text typing-cursor min-h-[36px] sm:min-h-[44px]">{text}</span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl leading-relaxed">
              {profile.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="#projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md shadow-emerald-600/20 flex items-center justify-center space-x-2 active:scale-95 transition-all"
              >
                <span>Lihat Karya & Proyek</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 shadow-sm flex items-center justify-center space-x-2 active:scale-95 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Hubungi Saya</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-5 border-t border-slate-200">
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">// Media Sosial & Tautan Resmi</p>
              <div className="flex items-center justify-start gap-2.5 sm:gap-3 flex-wrap">
                <a
                  href={profile.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 h-11 sm:h-10 rounded-xl flex items-center space-x-2 bg-white text-slate-700 hover:text-white hover:bg-emerald-600 transition-all shadow-sm border border-slate-200 text-xs sm:text-sm font-semibold active:scale-95"
                  aria-label="Instagram"
                  title="Buka Instagram"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 h-11 sm:h-10 rounded-xl flex items-center space-x-2 bg-emerald-50 text-emerald-700 hover:text-white hover:bg-emerald-600 transition-all shadow-sm border border-emerald-200 text-xs sm:text-sm font-semibold active:scale-95"
                  aria-label="WhatsApp"
                  title="Hubungi via WhatsApp"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.52 3.48A11.82 11.82 0 0 0 12.07 0C5.53 0 .2 5.32.2 11.86c0 2.09.55 4.13 1.59 5.93L0 24l6.37-1.67a11.84 11.84 0 0 0 5.7 1.45h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.42-8.44ZM12.08 21.78h-.01a9.86 9.86 0 0 1-5.02-1.38l-.36-.21-3.78.99 1.01-3.68-.24-.38a9.84 9.84 0 0 1-1.51-5.26c0-5.44 4.43-9.86 9.88-9.86 2.64 0 5.12 1.03 6.98 2.89a9.81 9.81 0 0 1 2.89 6.98c0 5.44-4.43 9.91-9.84 9.91Zm5.41-7.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Avatar Card for Desktop */}
          <div className="hidden lg:flex lg:col-span-5 justify-center order-2">
            <div className="relative w-72 sm:w-84 lg:w-96">
              <div className="glass-card rounded-3xl p-4 sm:p-5 relative border border-slate-200 shadow-xl">
                <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 relative group">
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
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
