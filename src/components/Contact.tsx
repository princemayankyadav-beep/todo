import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function Contact() {
  const links = [
    { name: "Email", val: "princemayankyadav@gmail.com", href: "mailto:princemayankyadav@gmail.com" },
    { name: "Phone", val: "+91 8607034849", href: "tel:+918607034849" },
    { name: "LinkedIn", val: "Mayank Yadav", href: "https://www.linkedin.com/in/mayank-yadav-44750012a/" },
    { name: "Location", val: "Gurugram, India", href: null },
  ];

  return (
    <section id="contact" className="w-full py-40 border-t border-stroke relative">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-[11px] text-accent tracking-[0.2em] uppercase mb-6 block">
              Contact
            </span>
            <h2 className="text-5xl sm:text-7xl font-medium tracking-tight text-soft leading-[1.05]">
              Let's create <br/> something <span className="italic text-white font-light">extraordinary.</span>
            </h2>
          </motion.div>
        </div>
        
        <div className="flex flex-col w-full">
          {links.map((link, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border-t border-stroke border-b-0 last:border-b py-8 sm:py-12"
            >
              {link.href ? (
                <a href={link.href} target="_blank" rel="noreferrer" className="flex flex-col sm:flex-row sm:items-center justify-between group gap-4">
                  <span className="text-2xl sm:text-4xl text-muted group-hover:text-soft transition-colors tracking-tight font-light">{link.name}</span>
                  <span className="text-lg sm:text-2xl text-soft group-hover:text-accent transition-colors flex items-center gap-4 sm:text-right font-medium">
                    {link.val} 
                    <ArrowUpRight className="opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 w-6 h-6" />
                  </span>
                </a>
              ) : (
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-2xl sm:text-4xl text-muted tracking-tight font-light">{link.name}</span>
                  <span className="text-lg sm:text-2xl text-soft font-medium">{link.val}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
