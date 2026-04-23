import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const taglines = [
  "Building scalable, modern, and intelligent web applications",
  "Crafting clean APIs with Java & Spring Boot",
  "Designing fast, accessible React experiences",
];

export function Hero() {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = taglines[idx];
    const speed = del ? 30 : 55;

    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1800);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next.length === 0) {
          setDel(false);
          setIdx((i) => (i + 1) % taglines.length);
        }
      }
    }, speed);

    return () => clearTimeout(t);
  }, [text, del, idx]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24"
    >
      <div className="grid-bg-animated absolute inset-0 -z-10 opacity-40" />
      <div className="absolute left-1/2 top-1/3 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-neon-purple/30 blur-[120px]" />
      <div className="absolute right-10 top-40 -z-10 h-72 w-72 rounded-full bg-neon-blue/20 blur-[100px]" />
      <div className="absolute bottom-10 left-10 -z-10 h-72 w-72 rounded-full bg-neon-cyan/20 blur-[100px]" />

      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs"
        >
          <Sparkles className="h-3.5 w-3.5 text-neon-cyan" />
          <span className="text-muted-foreground">Available for opportunities</span>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-cyan opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-cyan" />
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl"
        >
          Hi, I'm <span className="text-gradient">Yellakanti Harika</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-5 text-xl text-foreground/80 sm:text-2xl"
        >
          Full Stack <span className="text-neon-cyan">Java</span> Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mx-auto mt-6 h-7 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          <span>{text}</span>
          <span className="ml-0.5 inline-block h-5 w-0.5 translate-y-1 animate-blink bg-neon-purple" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan px-6 py-3 font-medium text-primary-foreground shadow-[0_0_30px_rgba(180,140,255,0.5)] transition-transform hover:scale-105"
          >
            <span className="relative z-10 inline-flex items-center gap-2">
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="glass rounded-xl px-6 py-3 font-medium text-foreground transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(122,162,255,0.3)]"
          >
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
}