import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun, Menu, X, FileText } from "lucide-react";
import { navItems, profile } from "@/lib/portfolio-data";
import { useTheme } from "./theme";

export function Nav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.6] },
    );
    navItems.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4"
        animate={{ paddingTop: scrolled ? 12 : 22 }}
        transition={{ duration: 0.4 }}
      >
        <motion.nav
          className="grid w-full max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-full px-4 py-2.5 lg:flex lg:justify-between"
          animate={{
            backgroundColor: scrolled
              ? "color-mix(in oklab, var(--card) 78%, transparent)"
              : "color-mix(in oklab, var(--card) 0%, transparent)",
            borderColor: scrolled ? "var(--hairline)" : "transparent",
            boxShadow: scrolled ? "0 16px 40px -28px oklch(0 0 0 / 0.6)" : "none",
          }}
          style={{ borderWidth: 1, backdropFilter: "blur(14px)" }}
          transition={{ duration: 0.4 }}
        >
          <a
            href="#home"
            className="min-w-0 truncate font-display text-sm font-bold tracking-tight"
            data-cursor="TOP"
          >
            BVR<span className="text-primary">.</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className="relative block rounded-full px-3 py-1.5 text-[0.8rem] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {active === n.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-secondary"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span
                    className={`relative ${active === n.id ? "text-foreground" : ""}`}
                  >
                    {n.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle colour theme"
              className="grid size-9 place-items-center rounded-full border border-hairline bg-surface text-foreground transition-colors hover:bg-secondary"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.25 }}
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                </motion.span>
              </AnimatePresence>
            </button>
            <a
              href={`mailto:${profile.email}?subject=Resume%20request`}
              data-cursor="OPEN"
              className="hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-[0.8rem] font-medium text-primary-foreground transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              <FileText size={14} /> Resume
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid size-9 place-items-center rounded-full border border-hairline bg-surface lg:hidden"
            >
              <Menu size={16} />
            </button>
          </div>
        </motion.nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-end p-6">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid size-10 place-items-center rounded-full border border-hairline"
              >
                <X size={18} />
              </button>
            </div>
            <ul className="flex flex-col gap-1 px-8 pt-4">
              {navItems.map((n, i) => (
                <motion.li
                  key={n.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <a
                    href={`#${n.id}`}
                    onClick={() => setOpen(false)}
                    className="block border-b border-hairline py-4 font-display text-3xl font-semibold"
                  >
                    {n.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
