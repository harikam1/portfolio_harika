import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Folder } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

interface Project {
  title: string;
  desc: string;
  long: string;
  tech: string[];
  github: string;
  demo: string;
  gradient: string;
}

const projects: Project[] = [
  {
  title: "Apartment Management System",
  desc: "Full-stack platform to manage tenants, payments, and announcements.",
  long: "Built a full-stack web application to manage apartment operations. Implemented JWT-based authentication with role-based access control (admin and tenant). Developed REST APIs using Node.js and MongoDB, and created a clean, responsive React frontend for managing tenants, tracking payments, and posting announcements.",
  tech: ["React", "Node.js", "MongoDB", "JWT", "REST APIs"],
  github: "",
  demo: "",
  gradient: "from-neon-purple to-neon-cyan",
},
  {
    title: "AI Chatbot using Rasa",
    desc: "Contextual AI assistant using Rasa NLU and Core.",
    long: "Developed an intelligent chatbot using Rasa framework. Implemented intent classification and entity extraction using Rasa NLU, and managed conversations with Rasa Core using stories and rules.",
    tech: ["Python", "Rasa", "NLP", "Machine Learning"],
    github: "",
    demo: "",
    gradient: "from-neon-cyan to-neon-blue",
  },
  {
    title: "Ride Booking Backend System",
    desc: "High-performance ride booking system with Redis-based driver matching.",
    long: "Built a scalable backend for bike/auto ride booking using Spring Boot. Optimized performance by storing active driver locations in Redis cache for fast nearest-driver matching instead of querying the database. Implemented a wallet system to track platform commission for cash and UPI payments, including recharge logic and ride-blocking. Gained strong understanding of real-time system design, layered architecture, and business logic.",
    tech: ["Java", "Spring Boot", "MySQL"],
    github: "",
    demo: "",
    gradient: "from-neon-blue to-neon-purple",
  },
  {
    title: "PursuitPro Resume Builder",
    desc: "Backend-driven resume builder with AWS S3 storage.",
    long: "Built backend services for a resume builder platform. Integrated AWS S3 for storing user images and assets. Optimized payload handling using JSON stringify techniques.",
    tech: ["Java", "Spring Boot", "AWS S3", "REST APIs"],
    github: "",
    demo: "",
    gradient: "from-neon-pink to-neon-purple",
  },
  {
    title: "Therapist Platform UI",
    desc: "Frontend platform with modern UI and messaging features.",
    long: "Developed a static frontend platform for therapists with smooth scrolling UI, card-based layouts, and messaging interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "",
    demo: "",
    gradient: "from-neon-blue to-neon-cyan",
  },
];

const filters = ["All", "Java", "Spring Boot", "React", "MySQL", "AWS S3"];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<Project | null>(null);

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.tech.includes(filter));

  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work & experiments"
          desc="A few things I've designed, built, and shipped."
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                filter === f
                  ? "bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan text-primary-foreground shadow-[0_0_20px_rgba(180,140,255,0.4)]"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.article
                layout
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="glass group relative flex flex-col overflow-hidden rounded-2xl p-6 transition-shadow hover:shadow-[0_20px_60px_rgba(180,140,255,0.3)]"
              >
                <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${p.gradient} opacity-20 blur-3xl`} />
                
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${p.gradient}`}>
                  <Folder className="h-6 w-6 text-primary-foreground" />
                </div>

                <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs bg-white/5 border border-white/10 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 border-t border-white/5 pt-4">
                  <button
                    onClick={() => setOpen(p)}
                    className="text-xs text-neon-cyan hover:text-foreground"
                  >
                    View Details →
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md"
            onClick={() => setOpen(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="glass-strong rounded-2xl p-8 max-w-lg"
            >
              <button onClick={() => setOpen(null)} className="absolute top-4 right-4">
                <X />
              </button>

              <h3 className="text-2xl font-bold">{open.title}</h3>
              <p className="mt-4 text-sm">{open.long}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}