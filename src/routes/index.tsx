import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
// import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { ParticlesBg } from "@/components/ParticlesBg";
import { BackToTop } from "@/components/BackToTop";
import { Loader } from "@/components/Loader";
import { Certifications } from "@/components/Certifications";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yellakanti Harika — Full Stack Java Developer" },
      {
        name: "description",
        content:
          "Portfolio of Yellakanti Harika — Full Stack Java Developer building scalable, modern web apps with Spring Boot and React.",
      },
      { property: "og:title", content: "Yellakanti Harika — Full Stack Java Developer" },
      {
        property: "og:description",
        content: "Futuristic portfolio showcasing projects, skills, and experience.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <Loader />
      <ParticlesBg />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <footer className="border-t border-white/5 py-8 text-center text-xs text-muted-foreground">
        <p>
          Yellakanti Harika © {new Date().getFullYear()} 
          {/* <span className="text-neon-cyan">React</span> &{" "}
          <span className="text-neon-purple">passion</span> */}
        </p>
      </footer>
      <BackToTop />
    </div>
  );
}
