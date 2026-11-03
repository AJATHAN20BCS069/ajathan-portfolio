"use client";

import { motion } from "framer-motion";

interface TechItem {
  name: string;
  category: string;
  badge?: string;
  icon: (props: { className?: string }) => React.JSX.Element;
}

const technologies: TechItem[] = [
  {
    name: "Go (Golang)",
    category: "Primary Backend",
    badge: "Primary",
    icon: ({ className }) => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
      >
        <path d="M1.811 11.045c-.053-.418-.08-.844-.08-1.275 0-4.636 3.766-8.402 8.402-8.402 3.013 0 5.66 1.589 7.151 3.967l-2.613 1.509c-.989-1.574-2.738-2.626-4.538-2.626-3.061 0-5.552 2.491-5.552 5.552 0 .425.048.84.14 1.238l-2.91 1.037zm18.378 1.91c.053.418.08.844.08 1.275 0 4.636-3.766 8.402-8.402 8.402-3.013 0-5.66-1.589-7.151-3.967l2.613-1.509c.989 1.574 2.738 2.626 4.538 2.626 3.061 0 5.552-2.491 5.552-5.552 0-.425-.048-.84-.14-1.238l2.91-1.037z" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    category: "Relational DB",
    icon: ({ className }) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
        <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
      </svg>
    ),
  },
  {
    name: "Docker",
    category: "Containers",
    icon: ({ className }) => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
      >
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.186.186 0 00-.185.185v1.888c0 .102.083.185.185.185zm-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.186.186 0 00-.185.185v1.888c0 .102.082.186.185.186zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.186.186 0 00-.185.185v1.888c0 .102.082.186.185.186zm-2.953 0h2.118a.186.186 0 00.186-.186V6.29a.186.186 0 00-.186-.185H8.076a.186.186 0 00-.185.185v1.888c0 .102.082.186.185.186zm0 2.714h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H8.076a.186.186 0 00-.185.185v1.888c0 .102.082.185.185.185zm-2.954 0h2.119a.186.186 0 00.185-.185V9.006a.186.186 0 00-.185-.186H5.122a.186.186 0 00-.185.185v1.888c0 .102.083.185.185.185zm-2.953 0h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H2.169a.186.186 0 00-.186.185v1.888c0 .102.083.185.186.185zm8.861 0h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.186.186 0 00-.185.185v1.888c0 .102.083.185.185.185zm12.809 2.06c-.461-.345-1.464-.523-2.316-.279-.168-.78-.66-1.47-1.378-1.939l-.382-.25-.327.319c-.838.818-1.921 1.267-3.064 1.267H1.144a.972.972 0 00-.97.971c0 3.904 2.113 7.07 5.767 7.973 1.83.453 3.864.444 5.922.025 3.32-.676 5.861-2.93 6.945-6.196.862-.053 1.815-.224 2.502-.821.365-.316.598-.737.598-1.18 0-.317-.118-.621-.301-.89z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    category: "Languages",
    icon: ({ className }) => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
      >
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm11.21 15.269c.145.112.304.22.477.324 1.349.816 2.72.84 3.767.288.666-.352 1.05-.989 1.05-1.79 0-1.104-.694-1.688-2.28-2.36-2.028-.857-3.328-1.74-3.328-3.743 0-1.968 1.488-3.488 3.84-3.488 1.5 0 2.651.444 3.527 1.056l-1.079 2.052c-.66-.468-1.464-.816-2.4-.816-1.044 0-1.62.516-1.62 1.308 0 .84.588 1.308 2.064 1.932 2.292.984 3.552 1.872 3.552 4.128 0 2.256-1.704 3.732-4.344 3.732-1.764 0-3.216-.54-4.224-1.32l1.045-1.947zm-5.016-7.857h-3.36v-2.04h9.12v2.04H9.719v11.16H7.319V7.412z" />
      </svg>
    ),
  },
  {
    name: "React",
    category: "Frontend UI",
    icon: ({ className }) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        className={className}
        aria-hidden="true"
      >
        <ellipse cx="12" cy="12" rx="10" ry="4.5" />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.5"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.5"
          transform="rotate(120 12 12)"
        />
        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    category: "Runtime / API",
    icon: ({ className }) => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
      >
        <path d="M12 2.25L2.25 7.875v11.25L12 24.75l9.75-5.625V7.875L12 2.25zm0 2.308l7.75 4.475v8.934L12 22.442l-7.75-4.475V9.033L12 4.558zm-1.077 5.795c-.887 0-1.61.277-2.169.831-.56.554-.84 1.277-.84 2.169 0 .893.28 1.615.84 2.169.56.554 1.282.831 2.169.831.886 0 1.61-.277 2.169-.831.56-.554.839-1.276.839-2.169 0-.892-.28-1.615-.84-2.169-.558-.554-1.282-.831-2.168-.831z" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    category: "NoSQL DB",
    icon: ({ className }) => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
      >
        <path d="M12.22 0C12.06 0 11.9.06 11.78.18 10.02 1.94 4.5 7.84 4.5 13.58c0 4.14 3.36 7.5 7.5 7.5s7.5-3.36 7.5-7.5c0-5.74-5.52-11.64-7.28-13.4a.31.31 0 00-.22-.18h-.28zm-.22 2.14c1.24 1.48 5.5 6.7 5.5 11.44 0 3.03-2.47 5.5-5.5 5.5s-5.5-2.47-5.5-5.5c0-4.74 4.26-9.96 5.5-11.44zM12 7v10.5c.03 0 .07 0 .1 0 1.94-.09 3.5-1.68 3.5-3.64 0-1.92-1.42-3.8-3.6-6.86z" />
      </svg>
    ),
  },
];

export default function TechStackStrip() {
  return (
    <div className="w-full mt-12 pt-8 border-t border-[#252A32]/70">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#B6F36B]/60" />
          <p className="text-xs font-mono uppercase tracking-widest text-[#9299A5]">
            Core Engineering Stack & Tooling
          </p>
        </div>
        <p className="text-xs text-[#9299A5]/80 font-mono hidden sm:block">
          Backend Architecture • Cloud Native • Distributed Data
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2.5">
        {technologies.map((tech, index) => {
          const Icon = tech.icon;
          const isPrimary = tech.badge === "Primary";
          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * 0.04, duration: 0.4 }}
              whileHover={{ y: -2 }}
              className={`group relative p-3 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                isPrimary
                  ? "bg-[#12151A] border-[#B6F36B]/40 hover:border-[#B6F36B] shadow-[0_0_15px_rgba(182,243,107,0.06)]"
                  : "bg-[#12151A]/70 border-[#252A32] hover:border-[#373E4A] hover:bg-[#151921]"
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-2">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                    isPrimary
                      ? "text-[#B6F36B] bg-[#B6F36B]/10"
                      : "text-[#9299A5] group-hover:text-[#F5F5F5] bg-[#0B0D10]/60"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                {isPrimary ? (
                  <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-[#B6F36B]/15 text-[#B6F36B] border border-[#B6F36B]/30">
                    Go Core
                  </span>
                ) : (
                  <span className="text-[10px] font-mono text-[#9299A5]/60 group-hover:text-[#9299A5] transition-colors">
                    0{index + 1}
                  </span>
                )}
              </div>

              <div>
                <p className="text-xs font-semibold text-[#F5F5F5] group-hover:text-white transition-colors truncate">
                  {tech.name}
                </p>
                <p className="text-[11px] text-[#9299A5] font-mono truncate">
                  {tech.category}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
