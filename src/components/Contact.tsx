import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, Phone } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [sending, setSending] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setSending(true);
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);

    setStatus("success");
    setForm({ name: "", email: "", message: "" });

    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something together"
          desc="Open to internships, full-time roles, and collaborations."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {[
              {
                icon: Mail,
                label: "Email",
                value: "harikayellakanti82@gmail.com",
                href: "mailto:harikayellakanti82@gmail.com",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "http://linkedin.com/in/harikayellakanti",
                href: "http://linkedin.com/in/harikayellakanti",
              },
              {
                icon: Github,
                label: "GitHub",
                value: "https://github.com/harikam1",
                href: "https://github.com/harikam1",
              },
               {
    icon: Phone,
    label: "Phone",
    value: "+91 6302685657",
    href: "tel:+916302685657",
  },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(180,140,255,0.25)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple shadow-lg transition-transform group-hover:scale-110">
                  <c.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {c.label}
                  </p>
                  <p className="text-sm font-medium text-foreground">{c.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form Section */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={submit}
            className="glass-strong rounded-2xl p-6 sm:p-8"
          >
            <div className="grid gap-4">

              {/* Name */}
              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                  Name
                </label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={100}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-neon-purple/60 focus:shadow-[0_0_20px_rgba(180,140,255,0.25)]"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={255}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-neon-purple/60 focus:shadow-[0_0_20px_rgba(180,140,255,0.25)]"
                  placeholder="you@example.com"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={1000}
                  rows={5}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-neon-purple/60 focus:shadow-[0_0_20px_rgba(180,140,255,0.25)]"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan px-6 py-3 font-medium text-primary-foreground shadow-[0_0_30px_rgba(180,140,255,0.4)] transition-transform hover:scale-[1.02] disabled:opacity-60"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  {sending ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
              </button>

              {/* Status Messages */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 rounded-lg bg-neon-cyan/10 px-3 py-2 text-sm text-neon-cyan"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    Message sent! I'll get back to you soon.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive"
                  >
                    <AlertCircle className="h-4 w-4" />
                    Please fill all fields with valid info.
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}