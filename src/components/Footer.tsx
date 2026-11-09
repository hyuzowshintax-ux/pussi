"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Instagram } from "lucide-react";
import { Profile } from "@/types/portfolio";

interface FooterProps {
  profile: Profile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const whatsappNumber = profile.phone.replace(/[^0-9]/g, "").replace(/^0/, "62");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Halo Samuel, saya tertarik dengan portofolio Anda!")}`;

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
    <footer className="py-10 border-t border-slate-200 bg-slate-100 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-slate-700">
              &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Dibangun dengan Next.js 14, TypeScript, Tailwind CSS, & Performa Tinggi.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href={profile.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white text-slate-700 hover:text-white hover:bg-emerald-600 transition-all border border-slate-200 shadow-sm"
              aria-label="Instagram"
              title="Buka Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white text-slate-700 hover:text-white hover:bg-emerald-600 transition-all border border-slate-200 shadow-sm"
              aria-label="WhatsApp"
              title="Hubungi via WhatsApp"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.52 3.48A11.82 11.82 0 0 0 12.07 0C5.53 0 .2 5.32.2 11.86c0 2.09.55 4.13 1.59 5.93L0 24l6.37-1.67a11.84 11.84 0 0 0 5.7 1.45h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.42-8.44ZM12.08 21.78h-.01a9.86 9.86 0 0 1-5.02-1.38l-.36-.21-3.78.99 1.01-3.68-.24-.38a9.84 9.84 0 0 1-1.51-5.26c0-5.44 4.43-9.86 9.88-9.86 2.64 0 5.12 1.03 6.98 2.89a9.81 9.81 0 0 1 2.89 6.98c0 5.44-4.43 9.91-9.84 9.91Zm5.41-7.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
              </svg>
            </a>
          </div>

        </div>
      </div>

      {/* Floating Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 w-11 h-11 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-600/25 flex items-center justify-center hover:scale-110 transition-all duration-300"
          aria-label="Kembali ke atas"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};
