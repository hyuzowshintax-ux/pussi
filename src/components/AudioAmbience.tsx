"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Sparkles, Music } from "lucide-react";

export const AudioAmbience: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);
  const chordIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const chords = [
    // Soft Lo-Fi Cosmic Chord Frequencies in Hz
    [220.00, 261.63, 329.63, 392.00], // A minor 7 (A3, C4, E4, G4)
    [174.61, 220.00, 261.63, 329.63], // F major 7 (F3, A3, C4, E4)
    [130.81, 164.81, 196.00, 246.94], // C major 7 (C3, E3, G3, B3)
    [196.00, 246.94, 293.66, 349.23], // G dominant 7 (G3, B3, D4, F4)
  ];

  const stopAudio = () => {
    if (chordIntervalRef.current) {
      clearInterval(chordIntervalRef.current);
      chordIntervalRef.current = null;
    }

    oscillatorsRef.current.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch (e) {
        // Ignore already stopped
      }
    });
    oscillatorsRef.current = [];

    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.2);
    }

    setIsPlaying(false);
  };

  const playChord = (chordFreqs: number[]) => {
    if (!audioCtxRef.current || !gainNodeRef.current) return;
    const ctx = audioCtxRef.current;

    // Stop old oscillators
    oscillatorsRef.current.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch (e) {}
    });
    oscillatorsRef.current = [];

    // Create warm sine/triangle blend oscillators for each note
    chordFreqs.forEach((freq) => {
      const osc = ctx.createOscillator();
      const noteGain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      noteGain.gain.setValueAtTime(0, ctx.currentTime);
      noteGain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 1.2);
      noteGain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 3.8);

      osc.connect(noteGain);
      noteGain.connect(gainNodeRef.current!);

      osc.start();
      oscillatorsRef.current.push(osc);
    });
  };

  const startAudio = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.35, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      let currentChordIdx = 0;
      playChord(chords[currentChordIdx]);

      chordIntervalRef.current = setInterval(() => {
        currentChordIdx = (currentChordIdx + 1) % chords.length;
        playChord(chords[currentChordIdx]);
      }, 4200);

      setIsPlaying(true);
    } catch (e) {
      console.error("Audio error:", e);
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  return (
    <button
      onClick={toggleAudio}
      className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center space-x-2 transition-all border ${
        isPlaying
          ? "bg-purple-600/30 text-pink-300 border-pink-500/50 shadow-lg shadow-purple-600/20"
          : "bg-slate-800/80 hover:bg-slate-700 text-slate-300 border-slate-700/60"
      }`}
      title={isPlaying ? "Matikan Musik Lo-Fi Ambient" : "Nyalakan Musik Lo-Fi Ambient"}
      aria-label="Toggle Audio Ambience"
    >
      {isPlaying ? (
        <>
          <div className="flex items-end space-x-0.5 h-3.5">
            <span className="w-0.5 bg-pink-400 rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-full"></span>
            <span className="w-0.5 bg-purple-400 rounded-full animate-[pulse_0.9s_ease-in-out_infinite] h-2"></span>
            <span className="w-0.5 bg-cyan-400 rounded-full animate-[pulse_0.7s_ease-in-out_infinite] h-3"></span>
            <span className="w-0.5 bg-amber-400 rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-1.5"></span>
          </div>
          <span className="hidden sm:inline font-mono">Lo-Fi ON</span>
        </>
      ) : (
        <>
          <VolumeX className="w-4 h-4 text-slate-400" />
          <span className="hidden sm:inline font-mono text-slate-400">Lo-Fi</span>
        </>
      )}
    </button>
  );
};
