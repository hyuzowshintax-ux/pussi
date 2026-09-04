"use client";

import React, { useState } from "react";
import { useGame } from "@/context/GameContext";
import { 
  Gamepad2, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Trophy, 
  Star, 
  Sparkles, 
  RotateCcw, 
  ChevronRight, 
  X, 
  Flame, 
  Award,
  Zap,
  Volume2
} from "lucide-react";

interface QuizQuestion {
  id: number;
  category: string;
  categoryBadge: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    category: "Identitas Pemilik Portofolio",
    categoryBadge: "PROFIL PORTOFOLIO",
    question: "Siapakah pemilik dan pengembang utama dari website portofolio interaktif Cyber Arcade ini?",
    options: [
      "Samuel B K",
      "Alex Pratama",
      "Dimas Aditya",
      "Rizky Ramadhan"
    ],
    correctIndex: 0,
    explanation: "Website ini adalah portofolio interaktif resmi karya Samuel B K — Pelajar, Duta Intelegensia SMAN 1 Kandangan, dan AI Design Engineer."
  },
  {
    id: 2,
    category: "Almamater & Duta Intelegensia",
    categoryBadge: "DUTA INTELEGENSIA",
    question: "Di sekolah manakah Samuel B K terpilih dan mengabdi sebagai Duta Intelegensia periode 2025–2026?",
    options: [
      "SMAN 1 Kediri",
      "SMAN 1 Kandangan (SMANSAKA)",
      "SMAN 2 Pare",
      "SMAN 1 Surabaya"
    ],
    correctIndex: 1,
    explanation: "Samuel B K mengemban amanah sebagai Duta Intelegensia di SMAN 1 Kandangan (SMANSAKA), Kediri, Jawa Timur."
  },
  {
    id: 3,
    category: "Panggung Proyek Arcade Stage 01",
    categoryBadge: "KARYA UNGGULAN",
    question: "Pada etalase panggung arcade proyek (Stage 01), aplikasi apa yang ditampilkan sebagai asisten belajar cerdas siswa?",
    options: [
      "Intelegensia AI",
      "Crypto Trading Bot",
      "Music Player X",
      "Weather Radar App"
    ],
    correctIndex: 0,
    explanation: "Intelegensia AI adalah proyek unggulan pertama Samuel untuk membantu siswa membedah soal dan materi belajar sekolah."
  },
  {
    id: 4,
    category: "Simulator Taktis CODASKA",
    categoryBadge: "CODASKA KANDANGAN",
    question: "Berapakah jumlah total personil pasukan yang disimulasikan dalam fitur Simulator Formasi LKBB CODASKA di portofolio ini?",
    options: [
      "8 Pasukan",
      "12 Pasukan",
      "16 Pasukan (Termasuk Danton)",
      "24 Pasukan"
    ],
    correctIndex: 2,
    explanation: "Simulator CODASKA di portofolio ini menampilkan pergerakan taktis 16 personil pleton dalam 4 variasi formasi."
  },
  {
    id: 5,
    category: "Formasi Khas PBB CODASKA",
    categoryBadge: "VARIASI FORMASI",
    question: "Salah satu formasi variasi kebanggaan yang dapat diuji pada Simulator LKBB portofolio ini dengan simbol lambang elang adalah...?",
    options: [
      "Sayap Garuda CODASKA 🦅",
      "Benteng Kura-Kura",
      "Naga Laut",
      "Barisan Persegi"
    ],
    correctIndex: 0,
    explanation: "Formasi Sayap Garuda CODASKA 🦅 adalah formasi variasi andalan yang menempatkan Danton di kepala dan personil di kedua sayap serta ekor."
  },
  {
    id: 6,
    category: "Sistem Game & Pengumpulan Bintang",
    categoryBadge: "GAME RPG HUD",
    question: "Fitur game apakah yang melayang di pojok layar portofolio untuk memantau Level Player, HP, MP, dan Star Coins yang kamu kumpulkan?",
    options: [
      "Cyber Player HUD Bar",
      "Pop-up Iklan Banner",
      "Widget Stopwatch",
      "Kalkulator Nilai"
    ],
    correctIndex: 0,
    explanation: "Cyber Player HUD di pojok layar menampilkan Level P1 (Samuel), Status HP/MP, XP Bar, dan jumlah Bintang Emas (⭐) yang berhasil kamu klaim."
  },
  {
    id: 7,
    category: "Navigasi Gamepad Proyek",
    categoryBadge: "ARCADE CONTROLLER",
    question: "Pada konsol Cyber Arcade Proyek portofolio ini, tombol keyboard apa yang dapat ditekan untuk melompat ke stage misi berikutnya?",
    options: [
      "Tombol [D] atau Panah Kanan",
      "Tombol [Z]",
      "Tombol Spasi",
      "Tombol [Esc]"
    ],
    correctIndex: 0,
    explanation: "Pengunjung dapat menekan tombol [A] (Prev) dan [D] (Next) atau tombol panah keyboard untuk berpindah stage proyek layaknya bermain game konsol!"
  },
  {
    id: 8,
    category: "Generator Kartu Hologram Medsos",
    categoryBadge: "VIRAL SHARE CARD",
    question: "Fitur interaktif di pojok layar yang memungkinkan pengunjung membuat kartu pas hologram untuk dibagikan ke Instagram Story & WhatsApp adalah...?",
    options: [
      "Generator Kartu Hologram (Cosmic ID)",
      "Form Cetak KTP",
      "Pembuat Tiket Konser",
      "Scanner Barcode Belanja"
    ],
    correctIndex: 0,
    explanation: "Generator Kartu Hologram memungkinkan pengunjung mengetik nama, memilih zodiak/archetype, dan mengunduh kartu gambar HD beresolusi 1080x1400."
  },
  {
    id: 9,
    category: "Shortcut Pencarian Cepat",
    categoryBadge: "SPOTLIGHT PALETTE",
    question: "Kombinasi tombol pintas keyboard apakah yang dapat ditekan untuk membuka Spotlight Command Palette pencarian instan di portofolio ini?",
    options: [
      "Ctrl + K (atau Cmd + K)",
      "Alt + F4",
      "Shift + Delete",
      "Ctrl + Z"
    ],
    correctIndex: 0,
    explanation: "Menekan tombol Ctrl + K membuka Command Palette instan untuk berpindah kategori, melihat resume, dan beralih tema secara cepat."
  },
  {
    id: 10,
    category: "Asisten AI Portofolio",
    categoryBadge: "CHATBOT CERDAS",
    question: "Fitur cerdas apakah yang melayang di pojok kanan bawah portofolio yang siap menjawab segala pertanyaan pengunjung tentang Samuel secara interaktif?",
    options: [
      "Tanya Samuel AI Chatbot",
      "Auto-Translate Tool",
      "Radio Streaming",
      "Formulir Survey"
    ],
    correctIndex: 0,
    explanation: "Widget Tanya Samuel AI adalah chatbot cerdas yang dapat menjawab pertanyaan seputar CODASKA, riwayat sekolah, kontak WhatsApp, dan keahlian teknologi Samuel."
  }
];

export const CyberQuizGame: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const { gainXp, collectStar, playGameSfx } = useGame();

  const currentQ = quizQuestions[currentIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;

    setSelectedOption(index);
    setIsAnswered(true);

    const isCorrect = index === currentQ.correctIndex;

    if (isCorrect) {
      playGameSfx("coin");
      setScore((prev) => prev + 1);
      setStreak((prev) => prev + 1);
      gainXp(50, `Jawaban Benar Soal #${currentIndex + 1}!`);
    } else {
      playGameSfx("laser");
      setStreak(0);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      playGameSfx("powerup");
    } else {
      // Game Finish
      setIsGameOver(true);
      playGameSfx("levelup");
      
      // If score >= 7, award special Quiz Champion Stars!
      if (score >= 6) {
        collectStar("star-quiz-champion", 250, "Quiz Grandmaster Champion!");
      }
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setStreak(0);
    setIsGameOver(false);
    playGameSfx("powerup");
  };

  return (
    <>
      {/* Floating Cyber Quiz Launcher Badge */}
      <div className="fixed top-36 left-4 sm:left-6 z-30 pointer-events-auto">
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center space-x-2 px-3.5 py-2 rounded-full glass-card border border-amber-500/40 hover:border-amber-400 bg-slate-950/85 hover:bg-slate-900 text-slate-200 hover:text-white text-xs font-mono font-semibold shadow-xl shadow-amber-950/40 transition-all duration-300 backdrop-blur-md active:scale-95 animate-pulse"
          title="Buka Game Kuis 10 Pertanyaan Cerdas"
        >
          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-400 via-orange-400 to-emerald-400 flex items-center justify-center text-slate-950 text-[11px] font-black shadow-sm">
            🎮
          </div>
          <span className="hidden sm:inline text-[11px] text-amber-300 group-hover:text-white transition-colors">
            Game Kuis Intelegensia (10 Soal)
          </span>
          <span className="sm:hidden text-[11px] text-amber-300">
            Kuis 10 Soal
          </span>
        </button>
      </div>

      {/* Main Cyber Quiz Game Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-cloud-enter overflow-y-auto">
          <div className="relative w-full max-w-2xl glass-card rounded-3xl border-2 border-amber-500/40 shadow-2xl shadow-amber-950/60 overflow-hidden flex flex-col max-h-[92vh] my-auto bg-slate-950/95 font-sans">
            
            {/* Top Arcade HUD Header */}
            <div className="p-4 sm:p-5 bg-slate-900/90 border-b border-amber-500/25 flex items-center justify-between backdrop-blur-md">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-400 via-emerald-400 to-teal-400 flex items-center justify-center text-slate-950 shadow-md font-bold">
                  <Gamepad2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400">
                      // CYBER INTELLIGENCE TRIVIA GAME
                    </span>
                    {streak > 1 && (
                      <span className="px-2 py-0.2 rounded-full bg-orange-500/20 text-orange-300 text-[10px] font-mono font-black flex items-center space-x-0.5 animate-bounce">
                        <Flame className="w-3 h-3 text-orange-400 fill-orange-400" />
                        <span>{streak}X COMBO!</span>
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                    Tantangan Kuis 10 Misi Intelektual
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-amber-500/20"
                aria-label="Tutup Game Kuis"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Progress Stage Bar */}
            <div className="px-4 sm:px-6 py-2.5 bg-slate-900/60 border-b border-white/5 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">
                SOAL <strong className="text-amber-400">{currentIndex + 1}</strong> DARI <strong>{quizQuestions.length}</strong>
              </span>
              <div className="flex items-center space-x-3">
                <span className="text-emerald-400 font-bold">
                  SKOR: {score * 10} PTS
                </span>
                <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full transition-all duration-300"
                    style={{ width: `${((currentIndex + 1) / quizQuestions.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Game Screen Content */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1">
              {!isGameOver ? (
                <>
                  {/* Category Pill & Question */}
                  <div className="space-y-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      {currentQ.categoryBadge}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
                      {currentQ.question}
                    </h4>
                  </div>

                  {/* 4 Multiple Choice Options */}
                  <div className="space-y-2.5">
                    {currentQ.options.map((option, idx) => {
                      const isSelected = selectedOption === idx;
                      const isCorrectAnswer = idx === currentQ.correctIndex;

                      let btnStyle = "bg-slate-900/70 border-white/10 hover:border-amber-400/50 hover:bg-slate-900 text-slate-200";

                      if (isAnswered) {
                        if (isCorrectAnswer) {
                          btnStyle = "bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-lg shadow-emerald-500/20 font-bold";
                        } else if (isSelected && !isCorrectAnswer) {
                          btnStyle = "bg-rose-500/20 border-rose-400 text-rose-300 font-bold";
                        } else {
                          btnStyle = "bg-slate-900/40 border-white/5 text-slate-500 opacity-60";
                        }
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => handleSelectOption(idx)}
                          disabled={isAnswered}
                          className={`w-full p-3 sm:p-3.5 rounded-2xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between group active:scale-[0.99] ${btnStyle}`}
                        >
                          <div className="flex items-center space-x-3">
                            <span className="w-6 h-6 rounded-lg bg-slate-950 flex items-center justify-center text-xs font-mono font-bold text-slate-400 group-hover:text-amber-300 border border-white/10">
                              {String.fromCharCode(65 + idx)}
                            </span>
                            <span className="leading-snug">{option}</span>
                          </div>

                          {isAnswered && isCorrectAnswer && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 ml-2" />
                          )}
                          {isAnswered && isSelected && !isCorrectAnswer && (
                            <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0 ml-2" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Answer Explanation Box */}
                  {isAnswered && (
                    <div className={`p-3.5 sm:p-4 rounded-2xl border text-xs leading-relaxed space-y-1 animate-cloud-enter ${
                      selectedOption === currentQ.correctIndex
                        ? "bg-emerald-950/40 border-emerald-500/30 text-emerald-200"
                        : "bg-slate-900 border-amber-500/30 text-slate-300"
                    }`}>
                      <div className="font-mono font-bold uppercase text-[11px] flex items-center space-x-1 text-amber-300">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>// PENJELASAN FAKTA INTELEKTUAL:</span>
                      </div>
                      <p>{currentQ.explanation}</p>
                    </div>
                  )}

                  {/* Next Question CTA Button */}
                  {isAnswered && (
                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={handleNextQuestion}
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-emerald-400 to-teal-400 hover:from-amber-400 hover:to-teal-300 text-slate-950 font-mono font-black text-xs sm:text-sm shadow-xl shadow-amber-500/30 flex items-center space-x-2 active:scale-95 transition-all"
                      >
                        <span>{currentIndex < quizQuestions.length - 1 ? "LANJUT SOAL BERIKUTNYA" : "LIHAT HASIL AKHIR"}</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </>
              ) : (
                /* Game Over Victory / Summary Screen */
                <div className="text-center py-6 space-y-5 animate-cloud-enter">
                  <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-400 via-emerald-400 to-teal-400 p-1 flex items-center justify-center shadow-2xl shadow-amber-500/40">
                    <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center text-4xl">
                      {score >= 8 ? "🏆" : score >= 5 ? "⭐" : "🎮"}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
                      // MISSION COMPLETE
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white">
                      {score >= 8 ? "CYBER INTELLECT GRANDMASTER!" : score >= 5 ? "TAKTIS & BERWAWASAN TINGGI!" : "TERUS TINGKATKAN WAWASANMU!"}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                      Kamu berhasil menjawab <strong className="text-emerald-400">{score} dari 10 soal</strong> dengan benar!
                    </p>
                  </div>

                  {/* Score Stats Badge */}
                  <div className="p-4 rounded-2xl bg-slate-900 border border-amber-500/30 max-w-sm mx-auto grid grid-cols-2 gap-3 text-center font-mono">
                    <div className="p-2 rounded-xl bg-slate-950 border border-white/5">
                      <div className="text-[10px] text-slate-400">TOTAL SKOR</div>
                      <div className="text-xl font-bold text-amber-400">{score * 10} / 100</div>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-950 border border-white/5">
                      <div className="text-[10px] text-slate-400">EXP DIPEROLEH</div>
                      <div className="text-xl font-bold text-emerald-400">+{score * 50} XP</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={handleRestart}
                      className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-emerald-400 text-slate-950 font-mono font-bold text-xs sm:text-sm shadow-lg flex items-center space-x-2 active:scale-95 transition-all"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Mainkan Lagi</span>
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-mono text-xs sm:text-sm border border-white/10 transition-all"
                    >
                      Tutup Kuis
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  );
};
