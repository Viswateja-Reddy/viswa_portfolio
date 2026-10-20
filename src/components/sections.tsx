import { useState, type ReactNode } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  X,
  Award,
  Trophy,
  Sparkles,
} from "lucide-react";
import {
  profile,
  experience,
  skillGroups,
  projects,
  dsaTopics,
  certifications,
  achievements,
  education,
  type Project,
} from "@/lib/portfolio-data";
import { HeroCanvas } from "./HeroCanvas";

const rise = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
};

function SectionHeading({ index, title, kicker }: { index: string; title: string; kicker?: string }) {
  return (
    <motion.div {...rise} className="mb-12 flex flex-col gap-3">
      <span className="mono-label">
        {index} {kicker ? `— ${kicker}` : ""}
      </span>
      <h2 className="display text-4xl font-bold sm:text-5xl lg:text-6xl">{title}</h2>
    </motion.div>
  );
}

function Shell({ id, children, className = "" }: { id: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 lg:py-32 ${className}`}>
      {children}
    </section>
  );
}

/* ---------------- HERO ---------------- */

export function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.18], [0, -90]);
  const opacity = useTransform(scrollYProgress, [0, 0.16], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.18], [1, 0.94]);

  const lines = [profile.first, profile.middle, profile.last];

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div aria-hidden className="grid-lines absolute inset-0 opacity-70" />
      <div className="absolute inset-0"><HeroCanvas /></div>
      <motion.div
        style={{ y, opacity, scale }}
        className="relative mx-auto w-full max-w-6xl px-5 pt-28 sm:px-8"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mono-label"
        >
          {profile.role} · {profile.location}
        </motion.span>

        <h1 className="mt-6">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className={`display block text-[15vw] font-bold leading-[0.88] sm:text-[11vw] lg:text-[8.5rem] ${
                  i === 1 ? "text-primary" : ""
                }`}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mt-8 max-w-xl text-base text-muted-foreground sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.68 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            data-cursor="VIEW"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            View Projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
          >
            Contact Me
          </a>
          <a
            href={`mailto:${profile.email}?subject=Resume%20request`}
            data-cursor="OPEN"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Resume <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */

const aboutKeywords = [
  "Full Stack Development",
  "Java",
  "React",
  "ServiceNow",
  "SQL",
  "DSA",
  "AI & emerging tech",
];

export function About() {
  return (
    <Shell id="about">
      <SectionHeading index="01" kicker="About" title="Focused on building meaningful digital experiences." />
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.p {...rise} className="text-xl leading-relaxed text-muted-foreground sm:text-2xl">
          I&apos;m an Information Technology undergraduate and software developer from Hyderabad. I work across the
          stack — building React interfaces, Node and Express services, and relational and document data layers —
          with a steady discipline in data structures and algorithms behind it.
        </motion.p>
        <div className="flex flex-wrap content-start gap-2.5">
          {aboutKeywords.map((k, i) => (
            <motion.span
              key={k}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="rounded-full border border-hairline bg-surface px-4 py-2 text-sm"
            >
              {k}
            </motion.span>
          ))}
        </div>
      </div>
    </Shell>
  );
}

/* ---------------- EXPERIENCE ---------------- */

export function Experience() {
  return (
    <Shell id="experience">
      <SectionHeading index="02" kicker="Experience" title="Where I've worked." />
      <div className="relative border-l border-hairline pl-6 sm:pl-10">
        {experience.map((job) => (
          <motion.article {...rise} key={job.company} className="relative">
            <span className="absolute -left-[31px] top-2 size-3 rounded-full bg-primary sm:-left-[47px]" />
            <span className="mono-label">{job.period}</span>
            <h3 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
              {job.role} · <span className="text-primary">{job.company}</span>
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{job.location}</p>

            <div className="mt-6 flex flex-wrap gap-4">
              {job.metrics.map((m) => (
                <div key={m.label} className="panel px-5 py-4">
                  <div className="display text-3xl font-bold text-primary">{m.value}</div>
                  <div className="mono-label mt-1">{m.label}</div>
                </div>
              ))}
            </div>

            <ul className="mt-6 space-y-2.5">
              {job.points.map((p) => (
                <li key={p} className="flex gap-3 text-muted-foreground">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Shell>
  );
}

/* ---------------- SKILLS ---------------- */

export function Skills() {
  const [selected, setSelected] = useState(skillGroups[0]!.items[0]!);

  return (
    <Shell id="skills">
      <SectionHeading index="03" kicker="Technology Arsenal" title="The tools I build with." />
      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="space-y-8">
          {skillGroups.map((group) => (
            <motion.div {...rise} key={group.category}>
              <span className="mono-label">{group.category}</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const isActive = selected.name === item.name;
                  return (
                    <button
                      key={item.name}
                      onClick={() => setSelected(item)}
                      className={`rounded-lg border px-3.5 py-2 text-sm transition-all ${
                        isActive
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-hairline bg-surface hover:-translate-y-0.5 hover:border-primary/50"
                      }`}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="lg:sticky lg:top-28 lg:h-fit">
          <div className="panel p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <span className="mono-label">Selected</span>
                <h3 className="mt-2 font-display text-2xl font-semibold">{selected.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{selected.note}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Shell>
  );
}

/* ---------------- PROJECTS ---------------- */

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <Shell id="projects">
      <SectionHeading index="04" kicker="Selected Work" title="Projects built end to end." />
      <div className="space-y-6">
        {projects.map((p) => (
          <motion.button
            {...rise}
            key={p.index}
            onClick={() => setOpen(p)}
            data-cursor="VIEW"
            className="group block w-full overflow-hidden rounded-3xl border border-hairline bg-surface p-7 text-left transition-colors hover:border-primary/50 sm:p-10"
          >
            <div className="grid gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-center">
              <span className="display text-5xl font-bold text-hairline transition-colors group-hover:text-primary/40">
                {p.index}
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-2xl font-semibold sm:text-3xl">{p.title}</h3>
                <p className="mt-2 max-w-2xl text-muted-foreground">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="mono-label rounded-md bg-secondary px-2.5 py-1 text-foreground/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span className="grid size-12 shrink-0 place-items-center rounded-full border border-hairline transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] overflow-y-auto bg-background/92 p-4 backdrop-blur-xl sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={open.title}
          >
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-4xl rounded-3xl border border-hairline bg-card p-6 sm:p-10"
            >
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                <div className="min-w-0">
                  <span className="mono-label">Case study {open.index}</span>
                  <h3 className="mt-2 font-display text-3xl font-bold sm:text-4xl">{open.title}</h3>
                </div>
                <button
                  onClick={() => setOpen(null)}
                  aria-label="Close project"
                  className="grid size-10 shrink-0 place-items-center rounded-full border border-hairline hover:bg-secondary"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                {open.metrics.map((m) => (
                  <div key={m.label} className="rounded-2xl border border-hairline px-5 py-3">
                    <div className="display text-2xl font-bold text-primary">{m.value}</div>
                    <div className="mono-label mt-1">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-7 sm:grid-cols-2">
                {[
                  ["Problem", open.problem],
                  ["Solution", open.solution],
                  ["Architecture", open.architecture],
                ].map(([label, text]) => (
                  <div key={label}>
                    <span className="mono-label">{label}</span>
                    <p className="mt-2 text-muted-foreground">{text}</p>
                  </div>
                ))}
                <div>
                  <span className="mono-label">Key features</span>
                  <ul className="mt-2 space-y-1.5">
                    {open.features.map((f) => (
                      <li key={f} className="flex gap-2.5 text-muted-foreground">
                        <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-hairline pt-6">
                {open.tech.map((t) => (
                  <span key={t} className="mono-label rounded-md bg-secondary px-2.5 py-1 text-foreground/70">
                    {t}
                  </span>
                ))}
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="OPEN"
                  className="ml-auto inline-flex items-center gap-2 rounded-full border border-hairline px-4 py-2 text-sm hover:bg-secondary"
                >
                  <Github size={15} /> GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Shell>
  );
}

/* ---------------- DSA ---------------- */

export function ProblemSolving() {
  return (
    <Shell id="dsa">
      <SectionHeading index="05" kicker="Problem Solving" title="Consistent algorithmic practice." />
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <motion.div {...rise}>
          <div className="display text-7xl font-bold text-primary sm:text-8xl">250+</div>
          <p className="mono-label mt-3">Problems solved</p>
          <p className="mt-4 text-muted-foreground">Across LeetCode, GeeksforGeeks and CodeChef.</p>
          <div className="panel mt-6 p-5">
            <span className="mono-label">NPTEL Elite</span>
            <p className="mt-2 font-display text-lg font-semibold">
              Data Structures & Algorithms using Java
            </p>
            <p className="text-sm text-muted-foreground">Score 71/100</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {dsaTopics.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              className="rounded-2xl border border-hairline bg-surface p-5"
            >
              <span className="mono-label">Topic</span>
              <p className="mt-1.5 font-display text-lg font-semibold">{t}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Shell>
  );
}

/* ---------------- CERTIFICATIONS + ACHIEVEMENTS ---------------- */

export function Certifications() {
  return (
    <Shell id="certifications">
      <SectionHeading index="06" kicker="Credentials" title="Certifications & achievements." />
      <div className="grid gap-5 md:grid-cols-3">
        {certifications.map((c) => (
          <motion.div
            {...rise}
            key={c.short}
            whileHover={{ y: -6, rotateX: 3, rotateY: -3 }}
            className="panel flex flex-col gap-3 p-6"
          >
            <div className="flex items-center gap-2 text-primary">
              <Award size={18} />
              <span className="mono-label text-primary">{c.short}</span>
            </div>
            <h3 className="font-display text-lg font-semibold leading-snug">{c.title}</h3>
            <p className="text-sm text-muted-foreground">{c.detail}</p>
            <span className="mono-label mt-auto pt-3">{c.issuer}</span>
          </motion.div>
        ))}
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {achievements.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={`rounded-3xl border p-7 ${
              i === 2
                ? "border-primary/60 bg-primary/10"
                : "border-hairline bg-surface"
            }`}
          >
            <div className="flex items-center gap-2 text-primary">
              {i === 2 ? <Trophy size={18} /> : <Sparkles size={18} />}
            </div>
            <div className="display mt-4 text-4xl font-bold">{a.value}</div>
            <p className="mt-2 font-medium">{a.label}</p>
            <p className="mono-label mt-1">{a.note}</p>
          </motion.div>
        ))}
      </div>
    </Shell>
  );
}

/* ---------------- EDUCATION ---------------- */

export function Education() {
  return (
    <Shell id="education">
      <SectionHeading index="07" kicker="Education" title="Academic background." />
      <div className="space-y-4">
        {education.map((e) => (
          <motion.div
            {...rise}
            key={e.school}
            className="grid gap-3 border-t border-hairline pt-6 sm:grid-cols-[auto_1fr_auto] sm:items-baseline sm:gap-8"
          >
            <span className="mono-label">{e.period}</span>
            <div className="min-w-0">
              <h3 className="font-display text-xl font-semibold sm:text-2xl">{e.school}</h3>
              <p className="mt-1 text-muted-foreground">{e.degree}</p>
            </div>
            <span className="font-mono text-sm text-primary">{e.score}</span>
          </motion.div>
        ))}
      </div>
    </Shell>
  );
}

/* ---------------- CONTACT ---------------- */

export function Contact() {
  const [status, setStatus] = useState<null | "error" | "sent">(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const valid =
      form.name.trim().length > 1 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
      form.message.trim().length > 5;
    if (!valid) {
      setStatus("error");
      return;
    }
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      `Portfolio enquiry from ${form.name}`,
    )}&body=${body}`;
    setStatus("sent");
  };

  const field =
    "w-full rounded-xl border border-hairline bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-primary";

  return (
    <Shell id="contact">
      <SectionHeading index="08" kicker="Contact" title="Let's build something meaningful." />
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        <motion.div {...rise} className="space-y-6">
          <p className="text-lg text-muted-foreground">
            Open to software development roles, internships and collaborations.
          </p>
          <div className="space-y-3">
            <a
              href={`mailto:${profile.email}`}
              data-cursor="OPEN"
              className="flex items-center gap-3 text-foreground hover:text-primary"
            >
              <Mail size={18} /> {profile.email}
            </a>
            <p className="flex items-center gap-3 text-muted-foreground">
              <MapPin size={18} /> {profile.location}
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              data-cursor="OPEN"
              className="grid size-11 place-items-center rounded-full border border-hairline hover:bg-secondary"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              data-cursor="OPEN"
              className="grid size-11 place-items-center rounded-full border border-hairline hover:bg-secondary"
            >
              <Linkedin size={18} />
            </a>
          </div>
          <p className="mono-label">
            LeetCode · GeeksforGeeks · CodeChef profiles coming soon
          </p>
        </motion.div>

        <motion.form {...rise} onSubmit={submit} className="panel space-y-4 p-6 sm:p-8" noValidate>
          <div>
            <label htmlFor="name" className="mono-label">Name</label>
            <input
              id="name"
              className={`${field} mt-2`}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="mono-label">Email</label>
            <input
              id="email"
              type="email"
              className={`${field} mt-2`}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="mono-label">Message</label>
            <textarea
              id="message"
              rows={5}
              className={`${field} mt-2 resize-none`}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
          </div>
          <button
            type="submit"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.01]"
          >
            Send message
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
          {status === "error" && (
            <p role="alert" className="text-sm text-destructive">
              Please add your name, a valid email and a short message.
            </p>
          )}
          {status === "sent" && (
            <p role="status" className="text-sm text-accent">
              Your email app should now be open with the message ready to send.
            </p>
          )}
        </motion.form>
      </div>
    </Shell>
  );
}

/* ---------------- CTA + FOOTER ---------------- */

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-hairline py-28">
      <div aria-hidden className="grid-lines absolute inset-0 opacity-60" />
      <motion.div {...rise} className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="display text-[13vw] font-bold leading-[0.9] sm:text-[8vw]">
          THE NEXT PROJECT
          <br />
          <span className="text-primary">STARTS HERE.</span>
        </h2>
        <a
          href="#contact"
          data-cursor="OPEN"
          className="group mt-10 inline-flex items-center gap-4 text-lg font-medium"
        >
          Let&apos;s connect
          <motion.span
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="grid size-14 place-items-center rounded-full bg-primary text-primary-foreground"
          >
            <ArrowRight size={22} />
          </motion.span>
        </a>
      </motion.div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-12 sm:px-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="font-display text-xl font-semibold">{profile.name}</p>
          <p className="text-sm text-muted-foreground">{profile.role} · Hyderabad, Telangana</p>
          <a href={`mailto:${profile.email}`} className="mt-2 inline-block text-sm hover:text-primary">
            {profile.email}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid size-10 place-items-center rounded-full border border-hairline hover:bg-secondary">
            <Github size={16} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid size-10 place-items-center rounded-full border border-hairline hover:bg-secondary">
            <Linkedin size={16} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="grid size-10 place-items-center rounded-full border border-hairline hover:bg-secondary">
            <Mail size={16} />
          </a>
        </div>
      </div>
      <div className="border-t border-hairline px-5 py-5 text-center sm:px-8">
        <p className="mono-label">© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  );
}
