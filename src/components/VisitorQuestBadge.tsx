"use client";

import React, { useState, useEffect } from "react";
import { Trophy, Award, CheckCircle2, Sparkles, X, Star, Shield, Play, Bot, BookOpen } from "lucide-react";

export const VisitorQuestBadge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quests, setQuests] = useState({
    zodiac: false,
    arcade: false,
    lkbb: false,
    ai: false,
    timeline: false,
  });
  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState("");

  useEffect(() => {
    // Listen to various scroll and click events to unlock quests naturally
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      if (scrollPos > 400 && !quests.timeline) {
        setQuests((prev) => ({ ...prev, timeline: true }));
      }
      if (scrollPos > 1200 && !quests.arcade) {
        setQuests((prev) => ({ ...prev, arcade: true }));
      }
      if (scrollPos > 2400 && !quests.lkbb) {
        setQuests((prev) => ({ ...prev, lkbb: true }));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [quests]);

  const questList = [
    { id: "timeline", title: "Menelusuri Riwayat Prestasi", desc: "Membaca rekam jejak Duta Intelegensia & Pramuka Bantara", icon: BookOpen, completed: quests.timeline },
    { id: "arcade", title: "Misi Cyber Arcade Stage", desc: "Mengeksplorasi etalase karya & proyek interaktif", icon: Play, completed: quests.arcade },
    { id: "lkbb", title: "Komandan Formasi CODASKA", desc: "Melihat simulator baris-berbaris 16 personil pleton", icon: Shield, completed: quests.lkbb },
    { id: "zodiac", title: "Penjelajah Rasi Bintang Zodiak", desc: "Membuka kompendium 12 zodiak & filosofi kosmik", icon: Star, completed: quests.zodiac },
    { id: "ai", title: "Koneksi Neural AI Assistant", desc: "Menyapa asisten cerdas Samuel AI", icon: Bot, completed: quests.ai },
  ];

  const completedCount = Object.values(quests).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / questList.length) * 100);

  return (
    <>
      {/* Floating Quest Tracker Pill on Bottom-Left */}
      <div className="fixed bottom-20 sm:bottom-6 left-3.5 sm:left-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center space-x-2.5 px-3.5 py-2 rounded-full glass-card border border-emerald-500/30 hover:border-emerald-400 bg-slate-950/85 hover:bg-slate-900 text-white text-xs font-mono font-semibold shadow-xl shadow-emerald-950/40 transition-all duration-300 backdrop-blur-md active:scale-95"
          title="Lihat Progres Penjelajahan Web"
        >
          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-400 via-emerald-400 to-teal-400 flex items-center justify-center text-slate-950 text-[10px] font-black">
            <Trophy className="w-3 h-3" />
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="text-[11px] text-emerald-300 font-bold">
              QUEST: {progressPercent}%
            </span>
            <div className="w-12 h-1.5 bg-slate-800 rounded-full overflow-hidden hidden sm:block">
              <div className="h-full bg-gradient-to-r from-amber-400 to-emerald-400" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>
        </button>
      </div>

      {/* Quest Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-cloud-enter">
          <div className="relative w-full max-w-md glass-card rounded-3xl p-5 sm:p-6 border border-emerald-500/40 shadow-2xl shadow-emerald-950/50 space-y-4 bg-slate-950/95">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-400 to-emerald-400 flex items-center justify-center text-slate-950 shadow-md">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Misi Penjelajah Portofolio</h4>
                  <p className="text-[11px] font-mono text-emerald-300">Level Penjelajah: {progressPercent}% Selesai</p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quest Items List */}
            <div className="space-y-2 max-h-[340px] overflow-y-auto pr-1">
              {questList.map((q) => {
                const Icon = q.icon;
                return (
                  <div
                    key={q.id}
                    className={`p-3 rounded-2xl border transition-all flex items-start justify-between gap-3 ${
                      q.completed
                        ? "bg-emerald-500/10 border-emerald-500/30 text-white"
                        : "bg-slate-900/60 border-white/5 text-slate-400"
                    }`}
                  >
                    <div className="flex items-start space-x-2.5">
                      <div className={`p-1.5 rounded-lg ${q.completed ? "bg-emerald-500/20 text-emerald-400" : "bg-slate-800 text-slate-500"}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className={`text-xs font-bold ${q.completed ? "text-white" : "text-slate-300"}`}>{q.title}</div>
                        <div className="text-[10px] text-slate-400">{q.desc}</div>
                      </div>
                    </div>

                    <div className="flex-shrink-0 mt-0.5">
                      {q.completed ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <span className="text-[10px] font-mono text-slate-500">Belum</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Achievement Footer Reward */}
            <div className="p-3 rounded-2xl bg-slate-900 border border-emerald-500/20 text-center space-y-1">
              <span className="text-[11px] font-mono text-emerald-300 font-bold">
                {progressPercent === 100 ? "🎉 SELURUH MISI TERBUKA!" : "Terus jelajahi halaman untuk membuka semua badge!"}
              </span>
              <p className="text-[10px] text-slate-400">
                Terima kasih telah mengunjungi dan mengapresiasi portofolio karya Samuel B K.
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
