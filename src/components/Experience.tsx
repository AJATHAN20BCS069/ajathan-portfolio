"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  Server,
  Database,
  Radio,
  Layers,
  CheckCircle2,
} from "lucide-react";

interface ResponsibilityArea {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  items: string[];
}

const responsibilities: ResponsibilityArea[] = [
  {
    id: "backend",
    title: "Backend Engineering",
    icon: Server,
    tag: "Core Go Services",
    items: [
      "Developing backend services using Golang.",
      "Building and maintaining REST APIs.",
      "Implementing business logic and validation.",
      "Working with Gin, GORM and structured backend architectures.",
    ],
  },
  {
    id: "database",
    title: "Database Engineering",
    icon: Database,
    tag: "Data Layer",
    items: [
      "Designing and modifying database schemas.",
      "Writing and optimizing SQL and MongoDB queries.",
      "Working with PostgreSQL, MySQL and MongoDB.",
      "Handling data consistency and database operations.",
    ],
  },
  {
    id: "realtime",
    title: "Real-Time Systems & Tracking",
    icon: Radio,
    tag: "Telemetry & Events",
    items: [
      "Working on real-time truck tracking and monitoring solutions.",
      "Implementing geofence-related business logic.",
      "Processing location and device events.",
      "Handling trip status transitions and event validation.",
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise Application Development",
    icon: Layers,
    tag: "Workflow & Mapping",
    items: [
      "Working on asset management workflows.",
      "Developing asset creation and mapping functionality.",
      "Implementing bulk operations.",
      "Integrating backend services with frontend and mobile applications.",
    ],
  },
];

interface EngineeringContribution {
  id: string;
  number: string;
  title: string;
  domain: string;
  description: string;
  highlights: string[];
}

const contributions: EngineeringContribution[] = [
  {
    id: "asset-architecture",
    number: "01",
    title: "Asset Architecture Modernization",
    domain: "Domain Modeling / Refactoring",
    description:
      "Worked on refactoring a traditional lock-based model into a unified asset architecture supporting multiple asset types, including SLAM, Keypad and Lock.",
    highlights: ["Unified Asset Schema", "Polymorphic Device Support", "Backward Compatibility"],
  },
  {
    id: "geofence-processing",
    number: "02",
    title: "Real-Time Geofence Processing",
    domain: "Spatial Telemetry & Streams",
    description:
      "Worked on geofence-related event processing, location status transitions and tracking workflows.",
    highlights: ["State Transition Engine", "Spatial Boundary Checks", "Trip Workflow Lifecycle"],
  },
  {
    id: "event-authorization",
    number: "03",
    title: "Event Authorization Validation",
    domain: "Security Logic & Compliance",
    description:
      "Worked on classifying device lock and shackle events as authorized or unauthorized using geofence and location status information.",
    highlights: ["Lock & Shackle Telemetry", "Rule-Based Authorization", "Audit Event Classification"],
  },
  {
    id: "database-optimization",
    number: "04",
    title: "Database Optimization",
    domain: "Query Performance & Data Integrity",
    description:
      "Worked on improving database queries, preventing duplicate geofence logs and optimizing data retrieval.",
    highlights: ["Deduplication Logic", "Index & Query Refinement", "Efficient Log Retrieval"],
  },
];

const techStackGroups = [
  {
    category: "Backend",
    skills: ["Golang", "Gin", "GORM", "Node.js", "NestJS"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "JavaScript"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Docker", "Git", "GitHub", "Postman"],
  },
];

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
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
      id="experience"
      className="relative py-20 sm:py-28 lg:py-32 border-t border-[#252A32] bg-[#0B0D10] overflow-hidden scroll-mt-20"
    >
      {/* Background Ambience */}
      <div
        className="absolute inset-0 engineering-dots opacity-20 pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-0 w-[500px] h-[300px] bg-[#B6F36B]/5 blur-[140px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px" }}
          className="mb-14 sm:mb-20"
        >
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-[#B6F36B] bg-[#B6F36B]/10 border border-[#B6F36B]/30 tracking-wider">
              02 / EXPERIENCE
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#F5F5F5] bg-[#12151A] border border-[#252A32]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B6F36B]" />
              3 Years of Professional Experience
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F5] mb-5 leading-tight"
          >
            Building software.{" "}
            <span className="text-[#B6F36B]">Solving engineering challenges.</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-[#9299A5] max-w-3xl leading-relaxed"
          >
            My professional journey has been focused on developing backend applications, designing
            APIs, working with databases and building solutions for real-world business requirements.
          </motion.p>
        </motion.div>

        {/* Career Timeline & Primary Company Spotlight */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px" }}
          className="mb-16 sm:mb-20"
        >
          {/* Timeline Track & Cards */}
          <div className="relative border-l-2 border-[#252A32] ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
            {/* Timeline Node 1: Present / Sterna Security Devices */}
            <motion.div variants={itemVariants} className="relative">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#0B0D10] border-2 border-[#B6F36B] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B6F36B] animate-pulse" />
              </div>

              {/* Main Role Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#12151A] border border-[#252A32] shadow-[0_12px_40px_rgba(0,0,0,0.45)] hover:border-[#38404D] transition-all">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#252A32]/80 mb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-[#B6F36B] bg-[#B6F36B]/15 border border-[#B6F36B]/30 font-medium">
                        Current Role
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-[#9299A5] bg-[#0B0D10] border border-[#252A32]">
                        Full-time
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] tracking-tight">
                      Junior Software Developer
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#9299A5] mt-1.5 font-medium">
                      <div className="flex items-center gap-1.5 text-[#F5F5F5]">
                        <Briefcase className="w-4 h-4 text-[#B6F36B]" />
                        <span>Sterna Security Devices Private Limited</span>
                      </div>
                      <span className="hidden sm:inline text-[#252A32]">•</span>
                      <div className="flex items-center gap-1.5 font-mono text-xs text-[#9299A5]">
                        <MapPin className="w-3.5 h-3.5 text-[#B6F36B]" />
                        <span>Tamil Nadu, India</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex lg:flex-col lg:items-end justify-between items-center text-xs font-mono text-[#9299A5] bg-[#0B0D10] p-3 rounded-xl border border-[#252A32]">
                    <div className="flex items-center gap-1.5 text-[#F5F5F5]">
                      <Calendar className="w-3.5 h-3.5 text-[#B6F36B]" />
                      <span>Feb 2024 – Present</span>
                    </div>
                    <span className="text-[#B6F36B] font-semibold mt-1">Backend Focus</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#9299A5] leading-relaxed mb-6 font-normal">
                  Contributing to the development of enterprise software solutions, primarily focusing on
                  backend engineering, API development, database operations and system integrations.
                </p>

                {/* Key Focus Highlights */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#252A32]/60 font-mono text-xs">
                  <div className="p-2.5 rounded-lg bg-[#0B0D10]/70 border border-[#252A32]/60">
                    <span className="text-[#9299A5] block text-[10px] uppercase">Primary Tech</span>
                    <span className="text-[#B6F36B] font-semibold">Golang Engine</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#0B0D10]/70 border border-[#252A32]/60">
                    <span className="text-[#9299A5] block text-[10px] uppercase">APIs</span>
                    <span className="text-[#F5F5F5] font-semibold">REST & Gin</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#0B0D10]/70 border border-[#252A32]/60">
                    <span className="text-[#9299A5] block text-[10px] uppercase">Data Systems</span>
                    <span className="text-[#F5F5F5] font-semibold">PostgreSQL & Mongo</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#0B0D10]/70 border border-[#252A32]/60">
                    <span className="text-[#9299A5] block text-[10px] uppercase">Domains</span>
                    <span className="text-[#B6F36B] font-semibold">Real-Time Telemetry</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Timeline Node 2: Milestone Start */}
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#0B0D10] border-2 border-[#38404D] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38404D]" />
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#12151A]/60 border border-[#252A32] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-mono text-[#B6F36B]">Career Milestone</span>
                  <p className="text-sm font-semibold text-[#F5F5F5] mt-0.5">
                    Started professional software development career at Sterna Security Devices Private Limited
                  </p>
                </div>
                <span className="text-xs font-mono text-[#9299A5] whitespace-nowrap">
                  February 2024
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Technical Responsibilities Grid */}
        <div className="mb-20 sm:mb-24">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#B6F36B]">
                Core Competencies
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] mt-1">
                Technical Responsibilities
              </h3>
            </div>
            <p className="text-xs font-mono text-[#9299A5] hidden sm:block">
              Engineered across backend, databases & telemetry
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "120px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {responsibilities.map((resp) => {
              const Icon = resp.icon;
              return (
                <motion.div
                  key={resp.id}
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                  className="p-6 rounded-2xl bg-[#12151A] border border-[#252A32] hover:border-[#38404D] transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#0B0D10] border border-[#252A32] flex items-center justify-center text-[#B6F36B]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono text-[#9299A5] bg-[#0B0D10] px-2.5 py-1 rounded-md border border-[#252A32]">
                        {resp.tag}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-[#F5F5F5] mb-4">
                      {resp.title}
                    </h4>

                    <ul className="space-y-2.5">
                      {resp.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#9299A5] leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#B6F36B] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Selected Engineering Contributions Subsection */}
        <div className="mb-20 sm:mb-24">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B6F36B]">
              Real-World Problem Solving
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] mt-1">
              Some problems I&apos;ve worked on.
            </h3>
            <p className="text-sm text-[#9299A5] mt-1">
              Engineering contributions and technical workflows built in production systems.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "120px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-5"
          >
            {contributions.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -3 }}
                className="group p-6 sm:p-7 rounded-2xl bg-[#12151A] border border-[#252A32] hover:border-[#B6F36B]/50 transition-all duration-200 relative overflow-hidden"
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="font-mono text-xs font-bold text-[#B6F36B] px-2 py-0.5 rounded bg-[#B6F36B]/10 border border-[#B6F36B]/20">
                    {item.number}
                  </span>
                  <span className="text-xs font-mono text-[#9299A5]">
                    {item.domain}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-[#F5F5F5] group-hover:text-white transition-colors mb-2.5">
                  {item.title}
                </h4>

                <p className="text-sm text-[#9299A5] leading-relaxed mb-5">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-[#252A32]/70">
                  {item.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono text-[#F5F5F5]/80 bg-[#0B0D10] px-2.5 py-1 rounded-md border border-[#252A32]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Technology Stack Used Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "120px" }}
          className="p-6 sm:p-8 rounded-2xl bg-[#12151A] border border-[#252A32]"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#252A32] mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#B6F36B]">
                Technologies In Production
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F5] mt-1">
                Technology Stack Used
              </h3>
            </div>
            <p className="text-xs font-mono text-[#9299A5]">
              Daily tools & frameworks used in professional engineering
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStackGroups.map((group) => (
              <div key={group.category} className="space-y-3">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#B6F36B] block">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-[#F5F5F5] bg-[#0B0D10] border border-[#252A32] hover:border-[#38404D] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
