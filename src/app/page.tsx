import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0D10] text-[#F5F5F5]">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Home Page Content */}
      <main className="flex-1">
        {/* Section 01: Hero */}
        <Hero />

        {/* Section: About (Anchor Reference) */}
        <section
          id="about"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6 scroll-mt-24"
        >
          <div className="p-6 rounded-2xl bg-[#12151A]/30 border border-[#252A32]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-[#B6F36B] tracking-wider uppercase">
                01 / ABOUT
              </span>
              <h2 className="text-lg font-semibold text-[#F5F5F5] mt-1">
                About Ajathan R
              </h2>
              <p className="text-sm text-[#9299A5] mt-1">
                Software Engineer specializing in Golang backend development, high-reliability API design, and distributed systems.
              </p>
            </div>
            <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-mono text-[#9299A5] bg-[#0B0D10] border border-[#252A32]">
              Overview Active
            </span>
          </div>
        </section>

        {/* Section 02: Professional Experience */}
        <Experience />

        {/* Section 03 & 04 Anchor Placeholders */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
          {/* Projects Anchor */}
          <section
            id="projects"
            className="pt-10 scroll-mt-24"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-[#12151A]/40 border border-[#252A32] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#B6F36B] tracking-wider uppercase">
                  03 / PROJECTS
                </span>
                <h2 className="text-xl font-bold text-[#F5F5F5] mt-1">
                  Projects & Backend Architecture
                </h2>
                <p className="text-sm text-[#9299A5] mt-1">
                  Deep-dives into scalable Golang backend microservices, high-throughput APIs, and distributed systems.
                </p>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-mono text-[#9299A5] bg-[#0B0D10] border border-[#252A32]">
                Upcoming Next
              </span>
            </div>
          </section>

          {/* Contact Anchor */}
          <section
            id="contact"
            className="pt-6 pb-12 scroll-mt-24"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-[#12151A]/40 border border-[#252A32] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#B6F36B] tracking-wider uppercase">
                  04 / CONTACT
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
                className="inline-flex items-center px-4 py-2 rounded-lg text-xs font-mono font-medium text-[#0B0D10] bg-[#B6F36B] hover:bg-[#A3E454] transition-colors shadow-sm"
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
