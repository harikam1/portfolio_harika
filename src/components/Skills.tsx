import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Code, Layout, Server, Database, Wrench } from "lucide-react";

const categories = [
  {
    icon: Code,
    title: "Languages",
    color: "from-neon-blue to-neon-cyan",
    skills: [
      { name: "Java" },
      { name: "JavaScript" },
    ],
  },
  {
    icon: Layout,
    title: "Frontend",
    color: "from-neon-purple to-neon-pink",
    skills: [
      { name: "React" },
      { name: "HTML / CSS" },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    color: "from-neon-cyan to-neon-blue",
    skills: [
      { name: "Spring Boot" },
      { name: "REST APIs" },
    ],
  },
  {
    icon: Database,
    title: "Database",
    color: "from-neon-pink to-neon-purple",
    skills: [
      { name: "MySQL" },
      { name: "PostgreSQL" },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    color: "from-neon-blue to-neon-purple",
    skills: [
      { name: "Git" },
      { name: "Postman" },
      { name: "AWS S3" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24">
      <div className="grid-bg absolute inset-0 -z-10 opacity-30" />

      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Skills"
          title="My technical toolkit"
          desc="A blend of backend strength and modern frontend craft."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(180,140,255,0.25)]"
            >
              {/* Glow effect */}
              <div
                className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${cat.color} opacity-20 blur-2xl transition-opacity group-hover:opacity-40`}
              />

              {/* Icon */}
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${cat.color} shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-6`}
              >
                <cat.icon className="h-6 w-6 text-primary-foreground" />
              </div>

              {/* Title */}
              <h3 className="mt-4 font-display text-lg font-semibold">
                {cat.title}
              </h3>

              {/* Skills list */}
              <div className="mt-5 space-y-3">
                {cat.skills.map((s) => (
                  <div
                    key={s.name}
                    className="text-sm text-foreground/85 flex items-center gap-2"
                  >
                    <span className="text-neon-blue">•</span>
                    {s.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}