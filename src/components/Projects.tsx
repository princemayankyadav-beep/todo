import { motion } from "motion/react";

export function Projects() {
  const projects = [
    {
      title: "Portex",
      kicker: "Creative Portfolio Interface",
      link: "https://princemayankyadav-beep.github.io/Portex_ui/#home",
      image: "assets/portex.png"
    },
    {
      title: "Aurelion Estates",
      kicker: "Premium Real Estate Web Experience",
      link: "https://princemayankyadav-beep.github.io/new_estate/",
      image: "assets/aurelion.png"
    },
    {
      title: "Zyntrix AI",
      kicker: "Futuristic AI Platform UI",
      link: "https://princemayankyadav-beep.github.io/ZynTrixAI/",
      image: "assets/zyntrix.png"
    },
    {
      title: "Axiom EV",
      kicker: "Automotive Motion Design Concept",
      link: "https://princemayankyadav-beep.github.io/Axiom_EV/",
      image: "assets/axiom.png"
    }
  ];

  return (
    <section id="work" className="w-full pt-40 pb-20 border-t border-stroke">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-start"
        >
          <span className="font-mono text-[11px] text-accent tracking-[0.2em] uppercase mb-4 block">
            Selected Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-soft leading-snug">
            Curated interactive experiences.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-stroke bg-[#121212] h-[320px] shadow-2xl transition-all hover:border-white/20"
            >
              {/* Website Photo Background */}
              <div className="absolute inset-0 bg-black/60 z-10 transition-opacity duration-500 group-hover:bg-black/40" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover object-top opacity-50 transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxMTEiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48L3N2Zz4=';
                }}
              />

              {/* Decorative inner glow */}
              <div className="absolute inset-0 z-10 rounded-[2rem] shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] pointer-events-none" />

              <div className="relative z-20 p-8 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-medium text-white mb-2 tracking-tight">{project.title}</h3>
                  <p className="font-mono text-[10px] text-accent tracking-[0.15em] uppercase">{project.kicker}</p>
                </div>
                
                <div className="flex justify-start mt-auto">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors flex items-center gap-2"
                  >
                    View Live <span className="text-sm leading-none">↗</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
