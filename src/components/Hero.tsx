"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowDown, FileDown, Mail, MapPin } from "lucide-react";
import ProfilePresentation from "./ProfilePresentation";
import TechStackStrip from "./TechStackStrip";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden"
    >
      {/* Background Ambience & Engineering Accents */}
      <div
        className="absolute inset-0 engineering-grid opacity-25 pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#B6F36B]/5 blur-[120px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Content & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center order-1"
          >
            {/* Availability Indicator & Intro Label */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-[#F5F5F5] bg-[#12151A] border border-[#252A32] shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B6F36B] animate-pulse" />
                HELLO, I&apos;M AJATHAN
              </span>

              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#B6F36B] bg-[#B6F36B]/10 border border-[#B6F36B]/25">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B6F36B]" />
                Open to exciting opportunities
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#F5F5F5] leading-[1.12] sm:leading-[1.15] mb-6"
            >
              Building{" "}
              <span className="text-[#B6F36B] relative inline-block">
                scalable systems
              </span>
              .<br className="hidden sm:inline" />
              {" "}Solving{" "}
              <span className="text-[#B6F36B] relative inline-block">
                real-world problems
              </span>
              .
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#9299A5] leading-relaxed max-w-2xl mb-8 font-normal"
            >
              I&apos;m a Software Engineer specializing in Golang and backend development.
              I enjoy designing reliable APIs, working with databases, and building
              software that solves real-world problems.
            </motion.p>

            {/* Meta tags: Experience & Location */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#9299A5] mb-8 pb-2"
            >
              <div className="flex items-center gap-1.5">
                <span className="text-[#B6F36B] font-semibold">2+ Years</span>
                <span>Experience</span>
              </div>
              <span className="text-[#252A32]">/</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B6F36B]" />
                <span>Tamil Nadu, India</span>
              </div>
              <span className="text-[#252A32]">/</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[#F5F5F5]">Backend Developer</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-8"
            >
              {/* Primary CTA: Explore My Work */}
              <motion.a
                href="#projects"
                onClick={handleScrollToProjects}
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-[#0B0D10] bg-[#B6F36B] hover:bg-[#A3E454] transition-all duration-200 shadow-[0_4px_24px_rgba(182,243,107,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </motion.a>

              {/* Secondary CTA: Download Resume */}
              <motion.a
                href="/resume.pdf"
                download="Ajathan_R_Resume.pdf"
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm text-[#F5F5F5] bg-[#12151A] border border-[#252A32] hover:border-[#B6F36B]/50 hover:bg-[#151921] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6F36B]"
              >
                <FileDown className="w-4 h-4 text-[#B6F36B] transition-transform group-hover:-translate-y-0.5" />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 pt-2"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-[#9299A5] mr-2">
                Connect:
              </span>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile (Ajathan R)"
                className="group inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#12151A] border border-[#252A32] text-[#9299A5] hover:text-[#B6F36B] hover:border-[#B6F36B]/50 hover:bg-[#151921] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6F36B]"
              >
                <GithubIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile (Ajathan R)"
                className="group inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#12151A] border border-[#252A32] text-[#9299A5] hover:text-[#B6F36B] hover:border-[#B6F36B]/50 hover:bg-[#151921] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6F36B]"
              >
                <LinkedinIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
              </a>

              {/* Email */}
              <a
                href="mailto:contact@ajathan.dev"
                aria-label="Send Email to Ajathan R"
                className="group inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#12151A] border border-[#252A32] text-[#9299A5] hover:text-[#B6F36B] hover:border-[#B6F36B]/50 hover:bg-[#151921] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6F36B]"
              >
                <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Presentation */}
          <div className="lg:col-span-5 order-2 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <ProfilePresentation />
          </div>
        </div>

        {/* Bottom Technology Stack Strip */}
        <TechStackStrip />
      </div>
    </section>
  );
}
