import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const y = window.scrollY + 120;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(s.id);
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={`glass-strong flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled ? "shadow-[0_10px_40px_rgba(0,0,0,0.4)]" : ""
          }`}
        >
          <button
            onClick={() => go("home")}
            className="font-display text-lg font-bold tracking-tight"
          >
            <span className="text-gradient">YH</span>
            <span className="ml-1 text-foreground/70">Yellakanti Harika</span>
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => go(s.id)}
                  className={`relative rounded-lg px-3 py-1.5 text-sm transition-colors ${
                    active === s.id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s.label}
                  {active === s.id && (
                    <span className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => go("contact")}
            className="hidden rounded-xl bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan px-4 py-2 text-sm font-medium text-primary-foreground shadow-[0_0_20px_rgba(122,162,255,0.4)] transition-transform hover:scale-105 md:inline-block"
          >
            Hire Me
          </button>

          <button
            className="rounded-lg p-2 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="menu"
          >
            <div className="flex h-5 w-6 flex-col justify-between">
              <span className={`h-0.5 w-full bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-full bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </nav>

        {open && (
          <div className="glass-strong mt-2 rounded-2xl p-3 md:hidden">
            <ul className="flex flex-col gap-1">
              {sections.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => go(s.id)}
                    className={`w-full rounded-lg px-3 py-2 text-left text-sm ${
                      active === s.id ? "bg-white/5 text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}