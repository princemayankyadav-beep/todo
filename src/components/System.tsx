import { motion } from "motion/react";
import { Waves, MousePointer2, MoveDown, Gauge } from "lucide-react";

export function System() {

  const principles = [
    {
      title: "Liquid Depth",
      text: "Glass-like layers, blur, and transparency create dimension without clutter. Ensuring visual hierarchy remains intuitive and calm.",
      icon: Waves,
    },
    {
      title: "Reactive Motion",
      text: "Micro-interactions respond softly, making every state feel intentional. Interfaces that feel alive and responsive to human touch.",
      icon: MousePointer2,
    },
    {
      title: "Scroll Flow",
      text: "Sections transition as a continuous journey, with careful depth and timing. Removing friction from information discovery.",
      icon: MoveDown,
    },
    {
      title: "Fast Surfaces",
      text: "Animations stay lightweight, GPU-friendly, and built for smooth rendering. Premium feel without the performance cost.",
      icon: Gauge,
    }
  ];

  return (
    <section id="system" className="w-full py-32 border-t border-stroke relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 mb-16 flex flex-col justify-start">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-[11px] text-accent tracking-[0.2em] uppercase mb-4 block">Design System</span>
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-soft leading-snug">
            Reduce friction.<br/> Increase feel.
          </h2>
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="rounded-[2rem] border border-stroke bg-[#121212]/80 backdrop-blur-sm p-8 transition-colors hover:bg-white/[0.04] flex flex-col h-full min-h-[280px]"
            >
              <div className="mb-8 inline-flex">
                <div className="w-12 h-12 border border-white/10 bg-white/5 rounded-2xl flex items-center justify-center text-accent shadow-inner">
                  <item.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
              </div>
              <div className="mt-auto">
                <h3 className="text-xl font-medium text-soft mb-3">{item.title}</h3>
                <p className="font-light text-muted text-sm leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
