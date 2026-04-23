// import { motion } from "framer-motion";
// import { Award, Trophy, Star, Code2 } from "lucide-react";
// import { SectionHeader } from "./SectionHeader";

// const items = [
//   {
//     icon: Award,
//     title: "Java Full Stack Certification",
//     org: "Online Learning Platform",
//     color: "from-neon-blue to-neon-purple",
//   },
//   {
//     icon: Code2,
//     title: "Spring Boot Microservices",
//     org: "Certified Course",
//     color: "from-neon-purple to-neon-pink",
//   },
//   {
//     icon: Trophy,
//     title: "Hackathon Finalist",
//     org: "College Tech Fest",
//     color: "from-neon-cyan to-neon-blue",
//   },
//   {
//     icon: Star,
//     title: "500+ DSA Problems Solved",
//     org: "LeetCode / GFG",
//     color: "from-neon-pink to-neon-purple",
//   },
// ];

// export function Achievements() {
//   return (
//     <section id="achievements" className="relative px-4 py-24">
//       <div className="mx-auto max-w-6xl">
//         <SectionHeader
//           eyebrow="Awards"
//           title="Achievements & certifications"
//           desc="Milestones from learning and competing."
//         />

//         <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//           {items.map((it, i) => (
//             <motion.div
//               key={it.title}
//               initial={{ opacity: 0, y: 30, scale: 0.95 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ duration: 0.5, delay: i * 0.08 }}
//               className="glass group relative overflow-hidden rounded-2xl p-6 text-center transition-all hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(180,140,255,0.3)]"
//             >
//               <div
//                 className={`absolute inset-0 bg-gradient-to-br ${it.color} opacity-0 transition-opacity group-hover:opacity-10`}
//               />
//               <div
//                 className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${it.color} shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-6`}
//               >
//                 <it.icon className="h-7 w-7 text-primary-foreground" />
//               </div>
//               <h3 className="mt-4 font-display text-base font-semibold">{it.title}</h3>
//               <p className="mt-1 text-xs text-muted-foreground">{it.org}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
