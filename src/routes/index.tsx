import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ThemeProvider } from "@/components/theme";
import { Nav } from "@/components/Nav";
import { Cursor } from "@/components/Cursor";
import {
  Hero,
  About,
  Experience,
  Skills,
  Projects,
  ProblemSolving,
  Certifications,
  Education,
  Contact,
  FinalCta,
  Footer,
} from "@/components/sections";

const title = "Beeram Viswateja Reddy | Software Developer";
const description =
  "Portfolio of Beeram Viswateja Reddy — software developer in Hyderabad building full-stack web applications with React, Node.js, Express and SQL, with 250+ DSA problems solved.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Loader({ onDone }: { onDone: () => void }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const steps = [25, 50, 75, 100];
    const timers = steps.map((s, i) => window.setTimeout(() => setValue(s), 180 * (i + 1)));
    const end = window.setTimeout(onDone, 1000);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(end);
    };
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-background"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
    >
      <p className="display text-4xl font-bold sm:text-6xl">
        VR <span className="text-primary">/</span> VISWATEJA
      </p>
      <div className="mt-8 h-px w-56 overflow-hidden bg-hairline sm:w-72">
        <motion.div className="h-full bg-primary" animate={{ width: `${value}%` }} transition={{ duration: 0.3 }} />
      </div>
      <span className="mono-label mt-4">{value}%</span>
    </motion.div>
  );
}

function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let lenis: { destroy: () => void } | null = null;
    let raf = 0;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cancelled = false;

    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      const instance = new Lenis({ duration: 1.1, smoothWheel: true });
      lenis = instance;
      const loop = (time: number) => {
        instance.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence>{loading && <Loader onDone={() => setLoading(false)} />}</AnimatePresence>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <ProblemSolving />
        <Certifications />
        <Education />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
