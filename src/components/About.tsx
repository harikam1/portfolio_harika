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

        {/* FULL WIDTH CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-14"
        >
          {/* TEXT */}
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

          {/* STRENGTHS GRID */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
    </section>
  );
}