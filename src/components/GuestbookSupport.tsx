"use client";

import React, { useState, useEffect } from "react";
import { MessageSquareHeart, Send, Heart, Flame, Sparkles, Rocket, ThumbsUp, ShieldCheck, User } from "lucide-react";

interface SupportMessage {
  id: string;
  name: string;
  role: string;
  message: string;
  time: string;
  reaction: string;
}

export const GuestbookSupport: React.FC = () => {
  const [messages, setMessages] = useState<SupportMessage[]>([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("Pengunjung Web");
  const [message, setMessage] = useState("");
  const [selectedReaction, setSelectedReaction] = useState("🔥");
  const [reactionCounts, setReactionCounts] = useState({
    "🔥": 128,
    "🚀": 94,
    "🧠": 112,
    "⚜️": 145,
    "❤️": 160
  });

  const initialPresetMessages: SupportMessage[] = [
    {
      id: "1",
      name: "Rekan Siswa SMAN 1 Kandangan",
      role: "Siswa & Teman Belajar",
      message: "Keren banget Samuel! Bangga punya Duta Intelegensia yang menguasai AI dan aktif memajukan CODASKA!",
      time: "Hari ini",
      reaction: "🔥"
    },
    {
      id: "2",
      name: "Kakak Pembina Pramuka & SAKA",
      role: "Gerakan Pramuka",
      message: "Tetap pertahankan jiwa kesatria Pramuka Garuda dan Penegak Bantara. Teruslah berinovasi untuk bangsa!",
      time: "Kemarin",
      reaction: "⚜️"
    },
    {
      id: "3",
      name: "Pleton CODASKA SMAN 1",
      role: "Anggota Tim LKBB",
      message: "Sukses untuk proyek ScoutPulse dan persiapan lomba LBB 2026! Satu komando satu jiwa!",
      time: "2 hari lalu",
      reaction: "🚀"
    }
  ];

  useEffect(() => {
    const saved = localStorage.getItem("samuel_guestbook_msgs");
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        setMessages(initialPresetMessages);
      }
    } else {
      setMessages(initialPresetMessages);
    }
  }, []);

  const handleSendSupport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newMsg: SupportMessage = {
      id: Date.now().toString(),
      name: name.trim(),
      role: role.trim() || "Pengunjung",
      message: message.trim(),
      time: "Baru saja",
      reaction: selectedReaction
    };

    const updated = [newMsg, ...messages];
    setMessages(updated);
    localStorage.setItem("samuel_guestbook_msgs", JSON.stringify(updated));

    setReactionCounts((prev) => ({
      ...prev,
      [selectedReaction as keyof typeof prev]: (prev[selectedReaction as keyof typeof prev] || 0) + 1
    }));

    setName("");
    setMessage("");
  };

  const handleTapReaction = (emoji: keyof typeof reactionCounts) => {
    setReactionCounts((prev) => ({
      ...prev,
      [emoji]: prev[emoji] + 1
    }));
  };

  return (
    <section id="guestbook" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-pink-400">
            // Papan Dukungan & Interaksi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Papan Dukungan & Pesan Semangat
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 mx-auto rounded-full" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Tinggalkan jejak semangat, sapaan hangat, atau pesan kolaborasi untuk Samuel B K.
          </p>
        </div>

        {/* Quick Emoji Reaction Burst Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(reactionCounts).map(([emoji, count]) => (
            <button
              key={emoji}
              onClick={() => handleTapReaction(emoji as keyof typeof reactionCounts)}
              className="px-4 py-2.5 rounded-2xl glass-card border border-purple-500/20 hover:border-pink-500/50 hover:scale-110 active:scale-95 transition-all flex items-center space-x-2 text-white shadow-lg"
            >
              <span className="text-lg">{emoji}</span>
              <span className="font-mono text-xs font-bold text-purple-300">+{count}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Send Message Form */}
          <div className="lg:col-span-5">
            <form
              onSubmit={handleSendSupport}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-purple-500/30 space-y-4 shadow-xl"
            >
              <h3 className="text-base font-bold text-white flex items-center space-x-2">
                <MessageSquareHeart className="w-5 h-5 text-pink-400" />
                <span>Kirim Pesan Semangat</span>
              </h3>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">Nama Anda:</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Budi Santoso / Alumni"
                  className="w-full bg-slate-900/80 border border-purple-500/30 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-pink-500 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">Profesi / Status:</label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="Contoh: Rekan Siswa, Developer, Pramuka"
                  className="w-full bg-slate-900/80 border border-purple-500/30 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-pink-500 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">Pilih Reaksi:</label>
                <div className="flex gap-2">
                  {["🔥", "🚀", "🧠", "⚜️", "❤️"].map((em) => (
                    <button
                      type="button"
                      key={em}
                      onClick={() => setSelectedReaction(em)}
                      className={`w-10 h-10 rounded-xl text-base flex items-center justify-center transition-all ${
                        selectedReaction === em
                          ? "bg-purple-600 border border-pink-400 scale-110 shadow"
                          : "bg-slate-800/80 hover:bg-slate-700"
                      }`}
                    >
                      {em}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">Pesan / Doa:</label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tuliskan ucapan semangat untuk Samuel..."
                  className="w-full bg-slate-900/80 border border-purple-500/30 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-pink-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 via-purple-700 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white font-semibold text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-lg shadow-purple-600/30 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Publikasikan Pesan</span>
              </button>
            </form>
          </div>

          {/* Messages Feed */}
          <div className="lg:col-span-7 space-y-4 max-h-[520px] overflow-y-auto pr-1">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="glass-card rounded-2xl p-4 sm:p-5 border border-purple-500/20 hover:border-pink-500/40 transition-all space-y-2 shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-600 text-white flex items-center justify-center font-bold text-xs">
                      {msg.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">{msg.name}</h4>
                      <span className="text-[11px] text-purple-300 font-medium">{msg.role}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{msg.reaction}</span>
                    <span className="text-[10px] font-mono text-slate-400">{msg.time}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-10">
                  {msg.message}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
