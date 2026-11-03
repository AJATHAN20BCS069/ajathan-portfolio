"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown, ArrowUpRight } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B0D10]/85 backdrop-blur-md border-b border-[#252A32] shadow-[0_4px_24px_rgba(0,0,0,0.6)] py-3.5"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#home");
            }}
            className="group flex items-center gap-2 text-base sm:text-lg font-bold tracking-tight text-[#F5F5F5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6F36B] rounded-sm py-1"
          >
            <span className="font-mono text-[#B6F36B] font-semibold text-lg">&gt;</span>
            <span className="tracking-wider">AJATHAN</span>
            <span className="text-[#B6F36B] font-mono">.DEV</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2"
          >
            <ul className="flex items-center gap-1 bg-[#12151A]/60 border border-[#252A32] rounded-full px-2 py-1 backdrop-blur-sm">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(item.href);
                      }}
                      className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium transition-colors rounded-full inline-block ${
                        isActive
                          ? "text-[#F5F5F5]"
                          : "text-[#9299A5] hover:text-[#F5F5F5]"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="activeNavIndicator"
                          className="absolute inset-0 bg-[#252A32] rounded-full -z-10 border border-[#38404D]/60"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span>{item.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Resume Button */}
            <div className="ml-3">
              <a
                href="/resume.pdf"
                download="Ajathan_R_Resume.pdf"
                className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs lg:text-sm font-medium rounded-full text-[#F5F5F5] bg-[#12151A] border border-[#252A32] hover:border-[#B6F36B]/60 hover:text-[#B6F36B] hover:shadow-[0_0_15px_rgba(182,243,107,0.15)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6F36B]"
              >
                <FileDown className="w-4 h-4 text-[#B6F36B] transition-transform group-hover:-translate-y-0.5" />
                <span>Resume</span>
              </a>
            </div>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="/resume.pdf"
              download="Ajathan_R_Resume.pdf"
              className="inline-flex items-center justify-center p-2 rounded-lg text-[#B6F36B] bg-[#12151A] border border-[#252A32] text-xs font-medium"
              aria-label="Download Resume"
            >
              <FileDown className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-[#9299A5] hover:text-[#F5F5F5] hover:bg-[#12151A] border border-[#252A32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6F36B] transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-[#F5F5F5]" />
              ) : (
                <Menu className="w-5 h-5 text-[#F5F5F5]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-b border-[#252A32] bg-[#0B0D10]/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              <div className="text-[11px] font-mono text-[#9299A5] tracking-wider uppercase px-3 py-1">
                Navigation
              </div>
              <ul className="space-y-1">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(item.href);
                        }}
                        className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-[#12151A] text-[#B6F36B] border border-[#252A32]"
                            : "text-[#9299A5] hover:text-[#F5F5F5] hover:bg-[#12151A]/60"
                        }`}
                      >
                        <span>{item.name}</span>
                        {isActive ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B6F36B]" />
                        ) : (
                          <ArrowUpRight className="w-4 h-4 opacity-40" />
                        )}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="pt-3 border-t border-[#252A32] mt-3">
                <a
                  href="/resume.pdf"
                  download="Ajathan_R_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-[#0B0D10] bg-[#B6F36B] hover:bg-[#A3E454] transition-colors shadow-[0_0_20px_rgba(182,243,107,0.25)]"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Resume PDF</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
