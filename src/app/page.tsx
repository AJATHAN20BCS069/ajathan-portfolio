import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0D10] text-[#F5F5F5]">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Home Page Hero Content */}
      <main className="flex-1">
        <Hero />

        {/* Lightweight Section Anchors for Navigation & CTAs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
          {/* Projects Anchor */}
          <section
            id="projects"
            className="pt-16 pb-8 border-t border-[#252A32]/60 scroll-mt-24"
          >
            <div className="p-6 rounded-2xl bg-[#12151A]/40 border border-[#252A32] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#B6F36B] tracking-wider uppercase">
                  Upcoming Module
                </span>
                <h2 className="text-xl font-bold text-[#F5F5F5] mt-1">
                  Projects & Backend Architecture
                </h2>
                <p className="text-sm text-[#9299A5] mt-1">
                  Deep-dives into scalable Golang backend microservices, high-throughput APIs, and distributed systems.
                </p>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-mono text-[#9299A5] bg-[#0B0D10] border border-[#252A32]">
                In Progress
              </span>
            </div>
          </section>

          {/* About Anchor */}
          <section
            id="about"
            className="pt-8 scroll-mt-24"
          >
            <div className="p-6 rounded-2xl bg-[#12151A]/20 border border-[#252A32]/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#9299A5] tracking-wider uppercase">
                  Anchor Reference
                </span>
                <h2 className="text-lg font-semibold text-[#F5F5F5] mt-1">
                  About Ajathan R
                </h2>
                <p className="text-sm text-[#9299A5] mt-1">
                  2+ years engineering backend infrastructure, Go microservices, and database optimizations.
                </p>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-mono text-[#9299A5] bg-[#0B0D10] border border-[#252A32]">
                Scheduled
              </span>
            </div>
          </section>

          {/* Experience Anchor */}
          <section
            id="experience"
            className="pt-8 scroll-mt-24"
          >
            <div className="p-6 rounded-2xl bg-[#12151A]/20 border border-[#252A32]/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#9299A5] tracking-wider uppercase">
                  Anchor Reference
                </span>
                <h2 className="text-lg font-semibold text-[#F5F5F5] mt-1">
                  Experience & Roles
                </h2>
                <p className="text-sm text-[#9299A5] mt-1">
                  Professional development timeline and production engineering track record.
                </p>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-mono text-[#9299A5] bg-[#0B0D10] border border-[#252A32]">
                Scheduled
              </span>
            </div>
          </section>

          {/* Contact Anchor */}
          <section
            id="contact"
            className="pt-8 pb-12 scroll-mt-24"
          >
            <div className="p-6 rounded-2xl bg-[#12151A]/20 border border-[#252A32]/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#B6F36B] tracking-wider uppercase">
                  Get In Touch
                </span>
                <h2 className="text-lg font-semibold text-[#F5F5F5] mt-1">
                  Direct Inquiries
                </h2>
                <p className="text-sm text-[#9299A5] mt-1">
                  Open for backend engineering roles, technical collaboration, and distributed systems discussions.
                </p>
              </div>
              <a
                href="mailto:contact@ajathan.dev"
                className="inline-flex items-center px-4 py-2 rounded-lg text-xs font-mono font-medium text-[#0B0D10] bg-[#B6F36B] hover:bg-[#A3E454] transition-colors"
              >
                contact@ajathan.dev
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
