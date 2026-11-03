"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { CheckCircle2, Terminal } from "lucide-react";

export default function ProfilePresentation() {
  const shouldReduceMotion = useReducedMotion();
  const [imageError, setImageError] = useState(false);

  // If user places a custom photo in /public/profile.jpg, it will use that, otherwise falls back to profile-placeholder.svg
  const imageSource = imageError ? "/profile-placeholder.svg" : "/profile-placeholder.svg";

  return (
    <div className="relative w-full max-w-md lg:max-w-lg mx-auto">
      {/* Decorative Subtle Background Composition Glow */}
      <div
        className="absolute -inset-4 bg-gradient-to-b from-[#B6F36B]/10 via-[#12151A]/40 to-transparent rounded-3xl blur-2xl -z-10 opacity-70 pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Portrait Card Container */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative rounded-2xl bg-[#12151A] border border-[#252A32] p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden group"
      >
        {/* Subtle Architectural Corner Marks */}
        <div className="absolute top-2.5 left-2.5 font-mono text-[10px] text-[#252A32] select-none pointer-events-none">
          +
        </div>
        <div className="absolute top-2.5 right-2.5 font-mono text-[10px] text-[#252A32] select-none pointer-events-none">
          +
        </div>
        <div className="absolute bottom-2.5 left-2.5 font-mono text-[10px] text-[#252A32] select-none pointer-events-none">
          +
        </div>
        <div className="absolute bottom-2.5 right-2.5 font-mono text-[10px] text-[#252A32] select-none pointer-events-none">
          +
        </div>

        {/* Aspect Ratio Container for Portrait */}
        <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#0B0D10] border border-[#252A32]/80">
          <Image
            src={imageSource}
            alt="Ajathan R - Software Engineer Portrait Placeholder"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
            onError={() => setImageError(true)}
          />

          {/* Subtle gradient vignette over the portrait */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#0B0D10]/90 via-transparent to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Minimalist In-frame Meta Overlay */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-[#9299A5] bg-[#0B0D10]/80 backdrop-blur-md px-3 py-2 rounded-lg border border-[#252A32]/80">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B6F36B] animate-pulse" />
              <span className="text-[#F5F5F5] font-sans font-medium text-xs">Ajathan R</span>
            </div>
            <span className="text-[11px] text-[#9299A5]">Tamil Nadu, IN</span>
          </div>
        </div>

        {/* Subtle Bottom Card Border Glow */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#B6F36B]/30 to-transparent" />
      </motion.div>

      {/* Floating Technology Label: Golang (Top Right / Offset) */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 20, y: -10 }}
        animate={
          shouldReduceMotion
            ? { opacity: 1, x: 0, y: 0 }
            : {
                opacity: 1,
                x: 0,
                y: [0, -6, 0],
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0.5 }
            : {
                delay: 0.3,
                duration: 0.6,
                y: {
                  repeat: Infinity,
                  duration: 4.5,
                  ease: "easeInOut",
                },
              }
        }
        className="absolute -top-5 -right-2 sm:-right-5 z-20 bg-[#12151A]/95 border border-[#252A32] backdrop-blur-md rounded-xl p-3 shadow-[0_12px_30px_rgba(0,0,0,0.5)] flex items-center gap-3 hover:border-[#B6F36B]/50 transition-colors"
      >
        <div className="w-10 h-10 rounded-lg bg-[#0B0D10] border border-[#252A32] flex items-center justify-center text-[#B6F36B]">
          {/* Go Logo SVG */}
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
            aria-hidden="true"
          >
            <path d="M1.811 11.045c-.053-.418-.08-.844-.08-1.275 0-4.636 3.766-8.402 8.402-8.402 3.013 0 5.66 1.589 7.151 3.967l-2.613 1.509c-.989-1.574-2.738-2.626-4.538-2.626-3.061 0-5.552 2.491-5.552 5.552 0 .425.048.84.14 1.238l-2.91 1.037zm18.378 1.91c.053.418.08.844.08 1.275 0 4.636-3.766 8.402-8.402 8.402-3.013 0-5.66-1.589-7.151-3.967l2.613-1.509c.989 1.574 2.738 2.626 4.538 2.626 3.061 0 5.552-2.491 5.552-5.552 0-.425-.048-.84-.14-1.238l2.91-1.037z" />
          </svg>
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-[#F5F5F5] tracking-wide">
              Golang Backend
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B6F36B]" />
          </div>
          <p className="text-[11px] font-mono text-[#9299A5]">
            Concurrency • APIs • Clean Arch
          </p>
        </div>
      </motion.div>

      {/* Decorative Engineering Metric Element: Backend System Health (Bottom Left / Offset) */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20, y: 15 }}
        animate={
          shouldReduceMotion
            ? { opacity: 1, x: 0, y: 0 }
            : {
                opacity: 1,
                x: 0,
                y: [0, 6, 0],
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0.5 }
            : {
                delay: 0.5,
                duration: 0.6,
                y: {
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                  delay: 0.5,
                },
              }
        }
        className="absolute -bottom-6 -left-2 sm:-left-6 z-20 bg-[#12151A]/95 border border-[#252A32] backdrop-blur-md rounded-xl p-3.5 shadow-[0_16px_36px_rgba(0,0,0,0.55)] hover:border-[#38404D] transition-colors max-w-[260px] sm:max-w-xs"
      >
        <div className="flex items-center justify-between gap-3 pb-2 mb-2 border-b border-[#252A32]/70 text-[11px] font-mono">
          <div className="flex items-center gap-1.5 text-[#B6F36B]">
            <Terminal className="w-3.5 h-3.5" />
            <span className="font-semibold">system_status</span>
          </div>
          <span className="text-[#9299A5] flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-[#B6F36B]" />
            Active
          </span>
        </div>

        <div className="space-y-1.5 font-mono text-[11px]">
          <div className="flex items-center justify-between text-[#9299A5]">
            <span>P99 Latency:</span>
            <span className="text-[#F5F5F5] font-semibold">&lt; 14ms</span>
          </div>
          <div className="flex items-center justify-between text-[#9299A5]">
            <span>Architecture:</span>
            <span className="text-[#B6F36B] font-medium">Distributed / Go</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
