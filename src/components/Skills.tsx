import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Code, Layout, Server, Database, Wrench } from "lucide-react";

const categories = [
  {
    icon: Code,
    title: "Languages",
    color: "from-neon-blue to-neon-cyan",
    skills: [
      { name: "Java", level: 92 },
      { name: "JavaScript", level: 85 },
    ],
  },
  {
    icon: Layout,
    title: "Frontend",
    color: "from-neon-purple to-neon-pink",
    skills: [
      { name: "React", level: 88 },
      { name: "HTML / CSS", level: 90 },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    color: "from-neon-cyan to-neon-blue",
    skills: [
      { name: "Spring Boot", level: 90 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    icon: Database,
    title: "Database",
    color: "from-neon-pink to-neon-purple",
    skills: [{ name: "MySQL", level: 85 },
             {name: "postgreSQL", level: 80},
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    color: "from-neon-blue to-neon-purple",
    skills: [
      { name: "Git", level: 88 },
      { name: "Postman", level: 85 },
      { name: "AWS S3", level: 75 },
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
              <div
                className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${cat.color} opacity-20 blur-2xl transition-opacity group-hover:opacity-40`}
              />
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${cat.color} shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-6`}
              >
                <cat.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{cat.title}</h3>
              <div className="mt-5 space-y-4">
                {cat.skills.map((s) => (
                  <div key={s.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="text-foreground/85">{s.name}</span>
                      <span className="text-xs text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                        className={`h-full rounded-full bg-gradient-to-r ${cat.color} shadow-[0_0_10px_currentColor]`}
                      />
                    </div>
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
