"use client";

import React from "react";
import { Briefcase, CheckCircle2, Users, Award } from "lucide-react";
import { StatItem } from "@/types/portfolio";

interface StatsProps {
  stats: StatItem[];
}

export const Stats: React.FC<StatsProps> = ({ stats }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Briefcase":
        return <Briefcase className="w-6 h-6" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-6 h-6" />;
      case "Users":
        return <Users className="w-6 h-6" />;
      case "Award":
        return <Award className="w-6 h-6" />;
      default:
        return <CheckCircle2 className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-12 border-y border-slate-800/80 dark:border-slate-800/80 light:border-slate-200/80 bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 text-center transform transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400 dark:text-purple-400 light:text-purple-600">
                {getIcon(stat.iconName)}
              </div>
              <div className="text-3xl font-extrabold text-white dark:text-white light:text-slate-900 mb-1 tracking-tight gradient-text">
                {stat.number}
              </div>
              <div className="text-xs font-medium text-slate-400 dark:text-slate-400 light:text-slate-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
