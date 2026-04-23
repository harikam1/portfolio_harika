import { motion } from "framer-motion";
import { Code2, Server, Cloud, Lightbulb, Layers, GitBranch } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const strengths = [
  { icon: Server, title: "Java & Spring Boot", desc: "Robust backend services and microservices" },
  { icon: Code2, title: "React Frontend", desc: "Modern, responsive UIs with hooks & state" },
  { icon: Layers, title: "REST APIs", desc: "Designing clean, well-documented endpoints" },
  { icon: Cloud, title: "Cloud Basics", desc: "AWS S3, deployment & basic DevOps" },
  { icon: Lightbulb, title: "Problem Solving", desc: "Algorithms, DSA & clean architecture" },
  { icon: GitBranch, title: "Clean Code", desc: "Readable, testable, maintainable code" },
];

export function About() {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="About" title="A developer who loves to build" />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="glass neon-border relative aspect-[4/5] overflow-hidden rounded-3xl p-2">
              <div className="grid-bg relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-cyan/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-neon-blue via-neon-purple to-neon-cyan p-1 shadow-[0_0_60px_rgba(180,140,255,0.5)]">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
                        <span className="font-display text-6xl font-bold text-gradient">YH</span>
                      </div>
                    </div>
                    <p className="mt-6 font-display text-xl font-semibold">Yellakanti Harika</p>
                    <p className="text-sm text-muted-foreground">Full Stack Java Developer</p>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-neon-purple/30 blur-3xl" />
                <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-neon-cyan/30 blur-3xl" />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl bg-gradient-to-br from-neon-blue via-neon-purple to-neon-cyan opacity-30 blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-relaxed text-foreground/80">
              I'm a passionate full stack developer specializing in{" "}
              <span className="text-neon-cyan">backend systems</span> and modern web applications.
              I enjoy turning complex problems into elegant, scalable solutions — from{" "}
              <span className="text-neon-purple">Spring Boot APIs</span> to polished React
              interfaces.
            </p>
            <p className="mt-4 text-foreground/70">
              I care deeply about clean code, performance, and developer experience. Always
              learning, always shipping.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {strengths.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="glass group rounded-xl p-4 transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(180,140,255,0.25)]"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-neon-blue/30 to-neon-purple/30 transition-transform group-hover:scale-110">
                    <s.icon className="h-4.5 w-4.5 text-neon-cyan" />
                  </div>
                  <p className="mt-3 font-medium">{s.title}</p>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
