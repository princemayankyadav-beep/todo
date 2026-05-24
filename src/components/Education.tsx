import { motion } from "motion/react";

export function Education() {
  return (
    <section className="w-full border-t border-stroke">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-1 border-r border-stroke hidden lg:block"></div>
        <div className="col-span-10 border-r-0 lg:border-r border-stroke">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between p-12 bg-surface relative overflow-hidden group"
          >
            {/* Subtle background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/[0.02] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="relative z-10 flex flex-col gap-2 mb-8 md:mb-0">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent mb-2">
                Education
              </span>
              <h2 className="text-2xl md:text-3xl font-medium text-soft tracking-tight">
                B.Sc. (Hons) Computer Science
              </h2>
              <p className="font-light text-muted">
                Aryabhatta College, University of Delhi
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-start md:items-end gap-1">
              <span className="font-serif text-[60px] md:text-[80px] text-white/5 font-medium leading-[0.8] tracking-tight">
                2026
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent font-semibold mt-2">
                Est. 2022
              </span>
            </div>
          </motion.div>
        </div>
        <div className="col-span-1 hidden lg:block"></div>
      </div>
    </section>
  );
}
