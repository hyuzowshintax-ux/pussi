"use client";

import React from "react";
import { Star } from "lucide-react";
import { Testimonial } from "@/types/portfolio";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 dark:text-indigo-400 light:text-indigo-600">
            // Rekomendasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Apa Kata Klien & Rekan Tim
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transition-all"
            >
              <div>
                <div className="flex items-center space-x-1 text-amber-400 mb-4">
                  {Array.from({ length: item.rating }).map((_, rIdx) => (
                    <Star key={rIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-sm leading-relaxed italic mb-6">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              <div className="flex items-center space-x-3 pt-4 border-t border-slate-700/40 dark:border-slate-700/40 light:border-slate-200">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-indigo-500/30"
                />
                <div>
                  <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
