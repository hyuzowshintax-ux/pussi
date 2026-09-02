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

  return (
    <section id="skills" className="py-24 bg-slate-900/30 dark:bg-slate-900/30 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400 dark:text-purple-400 light:text-purple-600">
            // Tech Stack & Alat
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Keahlian & Teknologi Unggulan
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 mx-auto rounded-full" />
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base">
            Penguasaan teknologi pengembangan web dan eksplorasi kecerdasan buatan (AI) yang terus saya pelajari dan kembangkan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((group, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 sm:p-8 transform transition duration-300 hover:shadow-2xl hover:border-purple-500/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-700/40 dark:border-slate-700/40 light:border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-purple-700 to-pink-500 flex items-center justify-center text-white shadow-md shadow-purple-600/30">
                    {getIcon(group.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
                      {group.title}
                    </h3>
                    {group.category === "AI" && (
                      <span className="text-[11px] font-mono font-semibold text-pink-400">
                        *Tahap Pembelajaran & Eksplorasi Dasar
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {group.items.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-2xl bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-100/80 border border-slate-700/40 dark:border-slate-700/40 light:border-slate-200 hover:border-purple-500/50 transition-all"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2.5">
                          {skill.iconUrl && (
                            <img
                              src={skill.iconUrl}
                              alt={skill.name}
                              className="w-5 h-5 object-contain"
                              onError={(e) => {
                                (e.target as HTMLElement).style.display = "none";
                              }}
                            />
                          )}
                          <span className="text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-purple-400 dark:text-purple-400 light:text-purple-600 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Bar */}
                      <div className="w-full h-1.5 bg-slate-700 dark:bg-slate-700 light:bg-slate-300 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-600 via-purple-700 to-pink-500 rounded-full transition-all duration-700"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
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
