export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="h-20 sm:h-16 border-t border-stroke px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 text-[10px] tracking-[0.2em] uppercase text-white/40 w-full overflow-hidden shrink-0">
      <div className="flex items-center gap-4 whitespace-nowrap">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></div>
        <span>Available for Selective Collaboration</span>
      </div>
      <div 
        onClick={scrollToTop}
        className="hidden md:flex gap-8 items-center cursor-pointer hover:text-white transition-colors"
        aria-label="Scroll to top"
      >
        <span>Scroll To Top</span>
        <span className="text-accent">↑</span>
      </div>
      <div className="whitespace-nowrap">© 2026 Mayank Yadav</div>
    </footer>
  );
}
