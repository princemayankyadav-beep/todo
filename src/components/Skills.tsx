import { motion } from "motion/react";

export function Skills() {

  const items = [
    {
      category: "Foundation",
      title: "Core Languages",
      desc: "Proficient in C++ and Python for systems thinking, algorithmic logic, and robust file handling.",
      icon: "⟨/⟩"
    },
    {
      category: "Frontend",
      title: "Web Architecture",
      desc: "HTML, CSS, JS with a focus on Object-Oriented Programming and modern React ecosystems.",
      icon: "◈"
    },
    {
      category: "Workflow",
      title: "Modern Tooling",
      desc: "Git, GitHub, Canvas API, and clean component thinking strictly adhered to in VS Code.",
      icon: "∿"
    },
    {
      category: "Academics",
      title: "University Coursework",
      desc: "Deep knowledge in Operating Systems, Database Management Systems, Cloud Computing, and AI Applications.",
      icon: "◇"
    },
    {
      category: "C++ Project",
      title: "Student Management System",
      desc: "Console-based C++ application with CRUD operations, modular structure, and file-backed records.",
      icon: "01"
    },
    {
      category: "Python Script",
      title: "File Organizer",
      desc: "Python automation script that sorts files into extension-based folders and reduces manual management.",
      icon: "02"
    }
  ];

  return (
    <section id="skills" className="w-full py-32 border-t border-stroke overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 mb-16 flex flex-col justify-start">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-[11px] text-accent tracking-[0.2em] uppercase mb-4 block">
            Technical Foundation
          </span>
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-soft leading-snug">
            Design taste backed by <br className="hidden sm:block"/> computer science fundamentals.
          </h2>
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="rounded-[2rem] border border-stroke bg-[#121212]/80 backdrop-blur-sm p-8 transition-colors hover:bg-white/[0.04] flex flex-col h-full min-h-[260px] justify-between relative"
            >
              <div className="relative z-10 flex flex-col h-full">
                <span className="font-mono text-[10px] text-accent tracking-[0.2em] uppercase mb-6 block">
                  {item.category} // 0{idx + 1}
                </span>
                <h3 className="text-xl font-medium text-soft mb-3">{item.title}</h3>
                <p className="font-light leading-relaxed text-muted text-sm pb-8">
                  {item.desc}
                </p>
              </div>
              <div className="absolute right-8 bottom-6 font-mono text-5xl text-white/[0.04] select-none text-right font-bold tracking-tighter">
                {item.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
