"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/lib/data";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Timeline } from "@/components/Timeline";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CategoryModal, CategoryTab } from "@/components/CategoryModal";
import { InteractiveClickFX } from "@/components/InteractiveClickFX";

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);
  const [categoryModalOpen, setCategoryModalOpen] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<CategoryTab>("home");

  const handleOpenCategory = (tab: CategoryTab) => {
    setActiveCategory(tab);
    setCategoryModalOpen(true);
  };

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode, mounted]);

  return (
    <div className="relative min-h-screen">
      {/* Elegant Wallpaper Grid Texture */}
      <div className="wallpaper-grid" />

      {/* Ambient Glowing Abstract Celestial Orbs */}
      <div className="ambient-glow ambient-glow-1" />
      <div className="ambient-glow ambient-glow-2" />
      <div className="ambient-glow ambient-glow-3" />
      <div className="ambient-glow ambient-glow-4" />
      <div className="ambient-glow ambient-glow-5" />
      <div className="ambient-glow ambient-glow-6" />

      {/* Navigation */}
      <Navbar
        profile={portfolioData.profile}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenCategory={handleOpenCategory}
      />

      {/* Global Interactive Click Ripple Opening FX */}
      <InteractiveClickFX />

      {/* Interactive Category Center Modal Box */}
      <CategoryModal
        isOpen={categoryModalOpen}
        activeTab={activeCategory}
        onClose={() => setCategoryModalOpen(false)}
        onSelectTab={(tab) => setActiveCategory(tab)}
        data={portfolioData}
      />

      {/* Main Content */}
      <main className="relative z-10 pt-20">
        <Hero profile={portfolioData.profile} />
        <Stats stats={portfolioData.stats} />
        <About about={portfolioData.about} cvLink={portfolioData.profile.cvLink} />
        <Skills skills={portfolioData.skills} />
        <Projects projects={portfolioData.projects} />
        <Timeline
          experience={portfolioData.timeline.experience}
          education={portfolioData.timeline.education}
        />
        <Testimonials testimonials={portfolioData.testimonials} />
        <Contact contact={portfolioData.contact} />
      </main>

      {/* Footer */}
      <Footer profile={portfolioData.profile} />
    </div>
  );
}
