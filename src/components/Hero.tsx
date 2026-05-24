import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-20"
    >
      <motion.div 
        className="mx-auto w-full max-w-7xl px-6 sm:px-12 grid grid-cols-12 h-full"
        style={{ y: y1, opacity }}
      >
        {/* Side Rail */}
        <div className="hidden lg:flex col-span-1 border-r border-stroke flex-col justify-end items-center py-12 gap-8 h-full min-h-[calc(100vh-80px)]">
          <div className="rotate-180 [writing-mode:vertical-rl] text-[10px] tracking-[0.4em] uppercase text-muted whitespace-nowrap">
            ESTABLISHED 2024 / PORTFOLIO
          </div>
          <div className="w-[1px] h-24 bg-gradient-to-t from-accent/40 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="col-span-12 lg:col-span-11 flex flex-col justify-center h-full min-h-[calc(100vh-80px)] p-0 lg:pl-12 py-12 relative border-b border-stroke lg:border-b-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <span className="text-accent font-mono text-[11px] tracking-[0.2em] uppercase mb-4 block">
              Integrated UI/UX & Motion Engineering
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="text-[52px] sm:text-[68px] lg:text-[84px] leading-[0.9] sm:leading-[0.85] font-semibold tracking-[-0.03em] mb-8"
          >
            CRAFTING DIGITAL <br/>
            <span className="italic font-light opacity-90 text-white">Elegance</span> THROUGH <br/>
            PRECISION.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="text-muted text-sm sm:text-base leading-relaxed max-w-md mb-12"
          >
            Bridging the gap between high-fidelity design and high-performance frontend architecture. Creating cinematic web experiences for premium brands.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex items-center gap-8 pt-8"
          >
            <div className="flex flex-col gap-1">
              <span className="text-2xl sm:text-3xl font-light">2+</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Live Projects</span>
            </div>
            <div className="w-[1px] h-8 bg-stroke"></div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl sm:text-3xl font-light">4</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Design Principles</span>
            </div>
            <div className="w-[1px] h-8 bg-stroke"></div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl sm:text-3xl font-light">∞</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Motion Ideas</span>
            </div>
          </motion.div>

          {/* Abstract Shape Background Decor */}
          <motion.div 
            className="absolute top-1/2 right-0 lg:right-20 transform -translate-y-1/2 w-48 h-48 sm:w-72 sm:h-72 border border-stroke rounded-full flex items-center justify-center opacity-40 -z-10"
            style={{ y: y2 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          >
            <div className="w-32 h-32 sm:w-48 sm:h-48 border border-accent/20 rounded-full animate-pulse"></div>
            <div className="absolute w-[1px] h-full bg-white/5 rotate-45"></div>
            <div className="absolute w-[1px] h-full bg-white/5 -rotate-45"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
