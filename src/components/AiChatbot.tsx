"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles, Bot, User, Check, ExternalLink } from "lucide-react";
import { PortfolioData } from "@/types/portfolio";

interface AiChatbotProps {
  data: PortfolioData;
}

interface ChatMessage {
  id: string;
  sender: "ai" | "user";
  text: string;
  time: string;
  quickAction?: { label: string; url: string };
}

export const AiChatbot: React.FC<AiChatbotProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
  };

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      sender: "ai",
      text: `Halo! 👋 Saya Samuel AI Assistant. Ada yang ingin Anda tanyakan seputar portofolio, prestasi Duta Intelegensia, keahlian AI, atau proyek saya?`,
      time: getCurrentTime()
    }
  ]);

  const quickPrompts = [
    "Siapa Samuel?",
    "Prestasi Duta Intelegensia",
    "Keahlian AI apa saja?",
    "Proyek unggulan",
    "Kontak WhatsApp"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const generateAnswer = (userQuery: string): { text: string; action?: { label: string; url: string } } => {
    const q = userQuery.toLowerCase();

    if (q.includes("siapa") || q.includes("tentang") || q.includes("profil") || q.includes("bio")) {
      return {
        text: `Samuel B K adalah seorang pelajar di SMAN 1 Kandangan (Kediri, Jawa Timur) yang berfokus pada eksplorasi AI Design Engineer, pemrograman web modern, serta aktif dalam kepemimpinan Pramuka Penegak Bantara, Saka Bhayangkara, dan CODASKA.`
      };
    }

    if (q.includes("intelegensia") || q.includes("duta") || q.includes("prestasi") || q.includes("sekolah")) {
      return {
        text: `Samuel terpilih sebagai Duta Intelegensia di SMAN 1 Kandangan (2025 - 2026). Selain itu, Samuel juga meraih predikat Pramuka Garuda Penggalang (2023), anggota Paskibra Kec. Kandangan (2024), dan kontingen LBB Kab. Kediri (2026)!`
      };
    }

    if (q.includes("ai") || q.includes("keahlian") || q.includes("skill") || q.includes("teknologi")) {
      return {
        text: `Di bidang AI, Samuel sedang aktif mengeksplorasi Generative AI (48%), Prompt Engineering & LLM (45%), Machine Learning dasar (40%), Computer Vision (35%), dan Deep Learning (25%). Di web development, menguasai Next.js, React, Tailwind CSS, TypeScript, dan Node.js.`
      };
    }

    if (q.includes("proyek") || q.includes("project") || q.includes("karya") || q.includes("aplikasi")) {
      return {
        text: `Beberapa proyek pilihan Samuel meliputi:
1. Intelegensia AI (Asisten Belajar & Kuis Pintar Siswa)
2. ScoutPulse & CODASKA LKBB Visualizer (Simulasi Formasi PBB)
3. AuraDesign AI (Studio Prompt & Mockup UI)
4. Kamtibmas Guard (Portal Tanggap Disiplin & Edukasi Siswa)`
      };
    }

    if (q.includes("kontak") || q.includes("wa") || q.includes("whatsapp") || q.includes("email") || q.includes("hubungi")) {
      return {
        text: `Anda bisa langsung menghubungi Samuel melalui WhatsApp di 08133726102 atau email ke hyuzowshintax@gmail.com.`,
        action: {
          label: "Buka Chat WhatsApp",
          url: "https://wa.me/628133726102?text=Halo%20Samuel,%20saya%20tertarik%20dengan%20portofolio%20Anda!"
        }
      };
    }

    if (q.includes("pramuka") || q.includes("garuda") || q.includes("bantara") || q.includes("bhayangkara")) {
      return {
        text: `Samuel berdedikasi tinggi dalam kepramukaan: Meraih Pramuka Garuda Penggalang tahun 2023, dan saat ini aktif sebagai Pramuka Penegak Bantara di SMAN 1 Kandangan serta mendalami ilmu kamtibmas di SAKA Bhayangkara sejak 2024.`
      };
    }

    if (q.includes("codaska") || q.includes("paskibra") || q.includes("lbb") || q.includes("baris")) {
      return {
        text: `CODASKA merupakan singkatan dari Comando Garuda SMANSAKA (SMAN 1 Kandangan). Ini adalah organisasi dan pleton baris-berbaris (LKBB & Paskibra) kebanggaan SMAN 1 Kandangan. Samuel aktif di CODASKA sejak 2024, bertugas sebagai Paskibra Kec. Kandangan (2024), dan mewakili kontingen LBB Kabupaten Kediri (2026).`
      };
    }

    return {
      text: `Terima kasih atas pertanyaannya! Samuel siap berkolaborasi untuk proyek teknologi web, desain antarmuka, dan eksplorasi AI. Ingin terhubung langsung?`,
      action: {
        label: "Kirim Pesan WhatsApp",
        url: "https://wa.me/628133726102"
      }
    };
  };

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text,
      time: getCurrentTime()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");
    setIsTyping(true);

    setTimeout(() => {
      const response = generateAnswer(text);
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: response.text,
        time: getCurrentTime(),
        quickAction: response.action
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 750);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center space-x-3 px-4 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white shadow-2xl shadow-emerald-600/40 hover:shadow-emerald-500/60 hover:scale-105 transition-all duration-300 border border-emerald-400/30 animate-opening-pop"
            aria-label="Buka AI Assistant"
          >
            {/* Pulsing indicator */}
            <span className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-slate-900"></span>
            </span>
            <Bot className="w-5 h-5 text-emerald-100 group-hover:rotate-12 transition-transform" />
            <span className="text-xs sm:text-sm font-bold tracking-wide">
              Tanya Samuel AI
            </span>
          </button>
        )}
      </div>

      {/* Chat Drawer Box */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] h-[540px] max-h-[85vh] glass-card rounded-3xl border border-emerald-500/30 shadow-2xl shadow-emerald-950/40 flex flex-col overflow-hidden animate-opening-aperture">
          
          {/* Header */}
          <div className="p-4 bg-slate-900/90 border-b border-emerald-500/20 flex items-center justify-between backdrop-blur-md">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white shadow-md shadow-emerald-600/30">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-900"></div>
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <h4 className="text-sm font-bold text-white">Samuel AI Assistant</h4>
                  <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Online
                  </span>
                </div>
                <p className="text-[11px] text-emerald-300/80 font-mono">Duta Intelegensia & AI Explorer</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start gap-2.5 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                <div
                  className={`w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0 text-xs ${
                    msg.sender === "user"
                      ? "bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow"
                      : "bg-slate-800 border border-emerald-500/30 text-emerald-300"
                  }`}
                >
                  {msg.sender === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                </div>

                <div
                  className={`max-w-[78%] rounded-2xl p-3 shadow-md space-y-2 ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-tr-none"
                      : "bg-slate-900/90 text-slate-200 border border-emerald-500/20 rounded-tl-none leading-relaxed"
                  }`}
                >
                  <p className="whitespace-pre-line text-xs sm:text-[13px]">{msg.text}</p>
                  
                  {msg.quickAction && (
                    <a
                      href={msg.quickAction.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow transition-all"
                    >
                      <span>{msg.quickAction.label}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <span className="block text-[10px] text-slate-400/80 text-right">{msg.time}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center space-x-2 text-slate-400 text-xs pl-9">
                <span className="flex space-x-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce delay-150"></span>
                  <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full animate-bounce delay-300"></span>
                </span>
                <span>Samuel AI sedang mengetik...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-2 bg-slate-950/40 border-t border-emerald-500/10 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSend(prompt)}
                className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-800/80 hover:bg-emerald-900/40 hover:text-emerald-300 text-slate-300 border border-emerald-500/20 transition-all flex-shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-slate-900/90 border-t border-emerald-500/20 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Tanya sesuatu tentang Samuel..."
              className="flex-1 bg-slate-800/80 border border-emerald-500/30 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 transition-colors"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="p-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:from-emerald-500 hover:to-teal-400 transition-all shadow"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
