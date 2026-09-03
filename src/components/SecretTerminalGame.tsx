"use client";

import React, { useState } from "react";
import { Terminal, Sparkles, CheckCircle2, XCircle, Trophy, RefreshCcw, Gamepad2, X } from "lucide-react";

interface TriviaQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const SecretTerminalGame: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const questions: TriviaQuestion[] = [
    {
      question: "Tahun berapa Samuel B K resmi menyandang amanah sebagai Duta Intelegensia di SMAN 1 Kandangan?",
      options: ["2022 - 2023", "2023 - 2024", "2024 - 2025", "2025 - 2026"],
      correctAnswer: 3,
      explanation: "Tepat sekali! Samuel terpilih sebagai Duta Intelegensia SMAN 1 Kandangan periode 2025 - 2026."
    },
    {
      question: "Tingkatan tertinggi apakah yang diraih Samuel dalam kepanduan Pramuka Penggalang pada tahun 2023?",
      options: ["Pramuka Penegak Bantara", "Pramuka Garuda Penggalang", "Pramuka Siaga Tata", "Pramuka Penegak Laksana"],
      correctAnswer: 1,
      explanation: "Benar! Pramuka Garuda Penggalang diraih pada tahun 2023 setelah menuntaskan seluruh syarat keteladanan."
    },
    {
      question: "Apakah nama organisasi PBB / baris-berbaris yang aktif diikuti Samuel di SMAN 1 Kandangan sejak 2024?",
      options: ["PASKIBRAKA", "CODASKA", "SAKA Tarunabumi", "PKS"],
      correctAnswer: 1,
      explanation: "Luar biasa! Organisasi tersebut adalah CODASKA (LKBB SMAN 1 Kandangan)."
    }
  ];

  const handleSelectOption = (idx: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(idx);

    if (idx === questions[currentQuestionIdx].correctAnswer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestionIdx + 1 < questions.length) {
        setCurrentQuestionIdx((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        setIsCompleted(true);
      }
    }, 1200);
  };

  const handleRestart = () => {
    setCurrentQuestionIdx(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsCompleted(false);
  };

  return (
    <>
      {/* Floating Easter Egg Trigger Button */}
      <div className="fixed bottom-20 right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="w-11 h-11 rounded-2xl glass-card border border-emerald-500/30 hover:border-emerald-400 text-emerald-400 hover:text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all"
          title="Cyber Challenge Mini Game (Easter Egg)"
        >
          <Gamepad2 className="w-5 h-5 animate-pulse" />
        </button>
      </div>

      {/* Mini Game Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-cloud-enter">
          <div className="relative w-full max-w-lg glass-card rounded-3xl p-6 sm:p-8 border border-emerald-500/35 shadow-2xl shadow-emerald-950/40 space-y-6">
            
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Samuel Cyber Trivia Challenge</h3>
                <span className="text-[11px] font-mono text-emerald-300">Uji Pengetahuan Seputar Portofolio</span>
              </div>
            </div>

            {!isCompleted ? (
              <div className="space-y-4">
                {/* Progress Bar */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Pertanyaan {currentQuestionIdx + 1} dari {questions.length}</span>
                  <span className="text-emerald-400 font-bold">Skor: {score}</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div
                    style={{ width: `${((currentQuestionIdx + 1) / questions.length) * 100}%` }}
                    className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 transition-all"
                  ></div>
                </div>

                {/* Question Text */}
                <h4 className="text-sm sm:text-base font-bold text-white pt-2 leading-snug">
                  {questions[currentQuestionIdx].question}
                </h4>

                {/* Options */}
                <div className="space-y-2 pt-2">
                  {questions[currentQuestionIdx].options.map((opt, idx) => {
                    const isSelected = selectedAnswer === idx;
                    const isCorrect = idx === questions[currentQuestionIdx].correctAnswer;
                    let btnClass = "bg-slate-900/80 border-emerald-500/20 hover:border-emerald-400/50 text-slate-200";

                    if (selectedAnswer !== null) {
                      if (isCorrect) {
                        btnClass = "bg-emerald-600/30 border-emerald-500 text-emerald-300";
                      } else if (isSelected) {
                        btnClass = "bg-red-600/30 border-red-500 text-red-300";
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(idx)}
                        disabled={selectedAnswer !== null}
                        className={`w-full p-3.5 rounded-xl border text-xs sm:text-sm font-medium text-left flex items-center justify-between transition-all ${btnClass}`}
                      >
                        <span>{opt}</span>
                        {selectedAnswer !== null && isCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        )}
                        {selectedAnswer !== null && isSelected && !isCorrect && (
                          <XCircle className="w-4 h-4 text-red-400" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* Completed Screen */
              <div className="text-center space-y-4 py-4">
                <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-emerald-600 via-teal-400 to-amber-400 p-0.5 flex items-center justify-center shadow-xl">
                  <div className="w-full h-full rounded-3xl bg-slate-900 flex items-center justify-center text-amber-400">
                    <Trophy className="w-10 h-10" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="text-xl font-extrabold text-white">Tantangan Berhasil Selesai! 🎉</h4>
                  <p className="text-xs text-slate-300">
                    Anda berhasil menjawab <strong className="text-emerald-400">{score}</strong> dari <strong className="text-white">{questions.length}</strong> pertanyaan dengan tepat!
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-emerald-500/30 text-xs text-emerald-300 font-mono">
                  🎖️ Gelar Terbuka: <strong>"Samuel Elite Explorer Badge"</strong>
                </div>

                <button
                  onClick={handleRestart}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-xs font-semibold flex items-center justify-center space-x-2 mx-auto shadow transition-all"
                >
                  <RefreshCcw className="w-3.5 h-3.5" />
                  <span>Mainkan Lagi</span>
                </button>
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
};
