export default function Footer() {
  return (
    <footer className="border-t border-[#252A32] bg-[#0B0D10] py-8 text-xs font-mono text-[#9299A5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-[#B6F36B] font-bold">&gt;</span>
          <span className="text-[#F5F5F5] font-semibold tracking-wide">
            AJATHAN.DEV
          </span>
          <span className="text-[#252A32]">/</span>
          <span>Software Engineer (Golang)</span>
        </div>

        <div className="flex items-center gap-6">
          <span>&copy; 2026 Ajathan R. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
