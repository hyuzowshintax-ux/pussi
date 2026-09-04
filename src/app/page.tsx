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
import { DynamicAtmosphereCanvas } from "@/components/DynamicAtmosphereCanvas";
import { Certificates } from "@/components/Certificates";
import { AiChatbot } from "@/components/AiChatbot";
import { ResumeModal } from "@/components/ResumeModal";
import { CommandPalette } from "@/components/CommandPalette";
import { AiPromptLab } from "@/components/AiPromptLab";
import { GuestbookSupport } from "@/components/GuestbookSupport";
import { HolographicTrophyShowcase } from "@/components/HolographicTrophyShowcase";
import { LkbbDrillSimulator } from "@/components/LkbbDrillSimulator";
import { SkillRadarMatrix } from "@/components/SkillRadarMatrix";
import { SecretTerminalGame } from "@/components/SecretTerminalGame";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { ZodiacCelestialCompendium } from "@/components/ZodiacCelestialCompendium";
import { CosmicCardShareGenerator } from "@/components/CosmicCardShareGenerator";
import { VisitorQuestBadge } from "@/components/VisitorQuestBadge";
import { GameProvider } from "@/context/GameContext";
import { CyberPlayerHud } from "@/components/CyberPlayerHud";

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);
  const [categoryModalOpen, setCategoryModalOpen] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<CategoryTab>("home");
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);

  const handleOpenCategory = (tab: CategoryTab) => {
    setActiveCategory(tab);
    setCategoryModalOpen(true);
  };

  useEffect(() => {
    setMounted(true);
    // Pastikan user langsung melihat layar utama profil saat pertama kali membuka link
    if (typeof window !== "undefined" && !window.location.hash) {
      window.scrollTo(0, 0);
    }

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
    <GameProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        {/* Interactive Cyber Game Player HUD (Health, Energy, Level & Stars) */}
        <CyberPlayerHud />

        {/* Interactive Living Atmosphere Canvas (Stardust, Constellations & Shooting Stars) */}
        <DynamicAtmosphereCanvas darkMode={darkMode} />

        {/* Interactive Celestial Zodiac Constellations & Astro-Philosophy Compendium */}
        <ZodiacCelestialCompendium />

        {/* Viral Holographic ID Card & Story Share Generator */}
        <CosmicCardShareGenerator />

        {/* Gamification Quest & Explorer Badge Tracker */}
        <VisitorQuestBadge />

      {/* Living Breathing Aurora Mesh Ribbons */}
      <div className="aurora-mesh-container">
        <div className="aurora-ribbon aurora-ribbon-1" />
        <div className="aurora-ribbon aurora-ribbon-2" />
        <div className="aurora-ribbon aurora-ribbon-3" />
      </div>

      {/* Elegant Wallpaper Grid Texture */}
      <div className="wallpaper-grid" />

      {/* Ambient Glowing Abstract Celestial Orbs */}
      <div className="ambient-glow ambient-glow-1" />
      <div className="ambient-glow ambient-glow-2" />
      <div className="ambient-glow ambient-glow-3" />
      <div className="ambient-glow ambient-glow-4" />
      <div className="ambient-glow ambient-glow-5" />
      <div className="ambient-glow ambient-glow-6" />

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

      {/* Secret Cyber Challenge Mini-Game Easter Egg */}
      <SecretTerminalGame />

      {/* Mobile Floating Bottom Dock Navigation */}
      <MobileBottomNav />

      {/* Footer */}
      <Footer profile={portfolioData.profile} />
    </div>
  </GameProvider>
  );
}
