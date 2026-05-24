import { motion } from "motion/react";

export function IntroStrip() {
  return (
    <section className="w-full border-t border-stroke">
      <div className="mx-auto max-w-7xl px-12 py-24 flex items-center justify-center text-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl font-serif text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-muted italic"
        >
          "Computer Science student at Aryabhatta College, University of Delhi — building efficient software foundations while shaping refined web interfaces inspired by modern design approach, high-performance dashboards, and cinematic UI systems."
        </motion.p>
      </div>
    </section>
  );
}
