"use client";

import React from "react";
import { Code2, Server, Wrench, Brain, Bot, Sparkles, Cpu } from "lucide-react";
import { SkillCategory } from "@/types/portfolio";

interface SkillsProps {
  skills: SkillCategory[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-5 h-5" />;
      case "Server":
        return <Server className="w-5 h-5" />;
      case "Wrench":
        return <Wrench className="w-5 h-5" />;
      case "Brain":
        return <Brain className="w-5 h-5" />;
      case "Bot":
        return <Bot className="w-5 h-5" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5" />;
      case "Cpu":
        return <Cpu className="w-5 h-5" />;
      default:
        return <Brain className="w-5 h-5" />;
    }
  };

  const getSkillDocUrl = (name: string) => {
    const map: Record<string, string> = {
      "Next.js": "https://nextjs.org",
      "React": "https://react.dev",
      "TypeScript": "https://www.typescriptlang.org",
      "Tailwind CSS": "https://tailwindcss.com",
      "HTML5 / CSS3": "https://developer.mozilla.org/en-US/docs/Web/HTML",
      "JavaScript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      "Prompt Engineering & LLM": "https://platform.openai.com/docs/guides/prompt-engineering",
      "Generative AI & Image Gen": "https://ai.google.dev",
      "Machine Learning Dasar": "https://scikit-learn.org",
      "Computer Vision & OCR": "https://opencv.org",
      "Speech & Whisper AI": "https://openai.com/research/whisper",
      "Deep Learning & Neural Net": "https://pytorch.org",
      "Node.js": "https://nodejs.org",
      "PostgreSQL": "https://www.postgresql.org",
      "RESTful API": "https://restfulapi.net",
      "Git & GitHub": "https://github.com",
      "VS Code": "https://code.visualstudio.com",
      "Figma": "https://www.figma.com",
    };
    return map[name] || `https://www.google.com/search?q=${encodeURIComponent(name + ' official documentation')}`;
  };

  return (
    <section id="skills" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            // Tech Stack & Keahlian (Klik untuk Buka Tab Baru)
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Keahlian & Teknologi Unggulan
          </h2>
          <div className="w-16 h-1 bg-emerald-600 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base">
            Penguasaan teknologi pengembangan web dan eksplorasi kecerdasan buatan (AI). Klik bidang keahlian mana pun untuk membuka dokumentasi resmi di tab baru.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((group, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 sm:p-8 transform transition duration-300 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-sm">
                    {getIcon(group.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {group.title}
                    </h3>
                    {group.category === "AI" && (
                      <span className="text-[11px] font-semibold text-emerald-600">
                        *Tahap Pembelajaran & Eksplorasi Dasar
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {group.items.map((skill, sIdx) => (
                    <a
                      key={sIdx}
                      href={getSkillDocUrl(skill.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all group/item block"
                      title={`Buka dokumentasi resmi ${skill.name} di tab baru`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2.5">
                          {skill.iconUrl && (
                            <img
                              src={skill.iconUrl}
                              alt={skill.name}
                              className="w-5 h-5 object-contain group-hover/item:scale-110 transition-transform"
                              onError={(e) => {
                                (e.target as HTMLElement).style.display = "none";
                              }}
                            />
                          )}
                          <span className="text-sm font-semibold text-slate-800 group-hover/item:text-emerald-700 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs text-emerald-600 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Bar */}
                      <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full transition-all duration-700"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
