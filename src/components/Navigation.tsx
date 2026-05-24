import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const navItems = [
  { name: "Work", href: "#work" },
  { name: "System", href: "#system" },
  { name: "Skills", href: "#skills" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 sm:px-12 bg-primary border-b border-stroke",
        scrolled ? "h-16" : "h-20"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-xs font-mono tracking-[0.3em] uppercase" data-cursor-hover="true">
          Mayank Yadav <span className="text-accent opacity-60">—</span> Creative Dev
        </a>

        {/* Nav Links & Action */}
        <div className="flex gap-10 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hidden md:block text-[11px] uppercase tracking-widest text-muted hover:text-soft transition-colors"
                data-cursor-hover="true"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-5 py-2 border border-stroke rounded-full text-[11px] uppercase tracking-widest hover:border-accent hover:text-accent cursor-pointer transition-colors"
              data-cursor-hover="true"
            >
              Contact
            </a>
        </div>
      </div>
    </motion.header>
  );
}
