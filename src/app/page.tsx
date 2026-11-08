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
import { Certificates } from "@/components/Certificates";
import { AiChatbot } from "@/components/AiChatbot";
import { ResumeModal } from "@/components/ResumeModal";
import { CommandPalette } from "@/components/CommandPalette";
import { AiPromptLab } from "@/components/AiPromptLab";
import { GuestbookSupport } from "@/components/GuestbookSupport";
import { HolographicTrophyShowcase } from "@/components/HolographicTrophyShowcase";
import { LkbbDrillSimulator } from "@/components/LkbbDrillSimulator";
import { SkillRadarMatrix } from "@/components/SkillRadarMatrix";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { ZodiacCelestialCompendium } from "@/components/ZodiacCelestialCompendium";
import { CosmicCardShareGenerator } from "@/components/CosmicCardShareGenerator";
import { KeyboardShortcutsGuide } from "@/components/KeyboardShortcutsGuide";

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [categoryModalOpen, setCategoryModalOpen] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<CategoryTab>("home");
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);

  const handleOpenCategory = (tab: CategoryTab) => {
    setActiveCategory(tab);
    setCategoryModalOpen(true);
  };

  useEffect(() => {
    // Pastikan user langsung melihat layar utama profil dengan background putih polos
    if (typeof window !== "undefined" && !window.location.hash) {
      window.scrollTo(0, 0);
    }
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    localStorage.setItem("theme", "light");
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-slate-900">
      {/* Interactive Celestial Zodiac Constellations & Astro-Philosophy Compendium */}
      <ZodiacCelestialCompendium />

      {/* Viral Holographic ID Card & Story Share Generator */}
      <CosmicCardShareGenerator />

      {/* Global Keyboard Shortcuts Cheatsheet & Hotkey Engine */}
      <KeyboardShortcutsGuide darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Quick Navigation Spotlight Command Palette (Ctrl + K) */}
      <CommandPalette
        onOpenCategory={handleOpenCategory}
        onOpenResume={() => setResumeModalOpen(true)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Navigation */}
      <Navbar
        profile={portfolioData.profile}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenCategory={handleOpenCategory}
        onOpenResume={() => setResumeModalOpen(true)}
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

      {/* Interactive Printable CV / Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        data={portfolioData}
      />

      {/* Main Content */}
      <main className="relative z-10 pt-20">
        <Hero profile={portfolioData.profile} />
        <Stats stats={portfolioData.stats} />
        <About
          about={portfolioData.about}
          cvLink={portfolioData.profile.cvLink}
          onOpenResume={() => setResumeModalOpen(true)}
        />
        <Skills skills={portfolioData.skills} />
        
        {/* Interactive Hexagonal Skill Radar & Roadmap Matrix */}
        <SkillRadarMatrix />

        <Projects projects={portfolioData.projects} />
        
        {/* Interactive AI Prompt & Simulation Lab */}
        <AiPromptLab />

        {/* 3D Holographic Vault & Trophy Showcase */}
        <HolographicTrophyShowcase />

        {/* CODASKA 2D Marching Drill Simulator */}
        <LkbbDrillSimulator />

        <Timeline
          experience={portfolioData.timeline.experience}
          education={portfolioData.timeline.education}
        />
        <Certificates certificates={portfolioData.certificates} />
        
        {/* Papan Dukungan & Pesan Semangat */}
        <GuestbookSupport />

        <Testimonials testimonials={portfolioData.testimonials} />
        <Contact contact={portfolioData.contact} />
      </main>

      {/* Intelligent Interactive AI Chatbot Assistant */}
      <AiChatbot data={portfolioData} />

      {/* Mobile Floating Bottom Dock Navigation */}
      <MobileBottomNav />

      {/* Footer */}
      <Footer profile={portfolioData.profile} />
    </div>
  );
}
