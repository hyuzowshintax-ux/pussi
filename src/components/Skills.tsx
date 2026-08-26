"use client";

import React from "react";
import { Code2, Server, Wrench } from "lucide-react";
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
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-slate-900/30 dark:bg-slate-900/30 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 dark:text-indigo-400 light:text-indigo-600">
            // Tech Stack & Alat
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Keahlian & Teknologi Unggulan
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full" />
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base">
            Perangkat lunak dan teknologi modern yang saya kuasai untuk membangun aplikasi berstandar industri.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skills.map((group, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 lg:p-8 transform transition duration-300 hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-700/40 dark:border-slate-700/40 light:border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-md">
                    {getIcon(group.iconName)}
                  </div>
                  <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
                    {group.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {group.items.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-100/80 border border-slate-700/40 dark:border-slate-700/40 light:border-slate-200 hover:border-indigo-500/50 transition-all"
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
                        <span className="text-xs font-mono text-indigo-400 dark:text-indigo-400 light:text-indigo-600 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Bar */}
                      <div className="w-full h-1.5 bg-slate-700 dark:bg-slate-700 light:bg-slate-300 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
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
