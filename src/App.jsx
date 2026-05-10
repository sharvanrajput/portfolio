import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { motion, AnimatePresence } from "framer-motion";
import { TbMenu2, TbX } from "react-icons/tb";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Projects", href: "#projects", num: "01", color: "text-cyan-300" },
    { name: "Skills", href: "#skills", num: "02", color: "text-blue-300" },
    {
      name: "Experience",
      href: "#experience",
      num: "03",
      color: "text-emerald-300",
    },
    { name: "Contact", href: "#contact", num: "04", color: "text-orange-300" },
  ];

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background selection:bg-cyan-400/30">
      {/* Techy grid background and noise overlay */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] noise-overlay opacity-50" />
      <div className="pointer-events-none fixed -top-28 left-[8%] h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl animate-drift -z-10" />
      <div className="pointer-events-none fixed top-1/3 -right-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl animate-drift -z-10 [animation-delay:1.8s]" />
      <div className="pointer-events-none fixed bottom-8 left-1/3 h-56 w-56 rounded-full bg-orange-500/20 blur-3xl animate-drift -z-10 [animation-delay:2.8s]" />

      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-5 backdrop-blur-md bg-background/45 border-b border-cyan-400/10">
        <a
          href="#home"
          className="text-xl font-black tracking-tight text-white"
        >
          <span className="text-cyan-300">{"<"}</span>Dev.Sharvan
          <span className="text-orange-300"> /</span>
          <span className="text-cyan-300">{">"}</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-7 text-sm font-semibold text-zinc-300">
          <a href="#projects" className="hover:text-cyan-300 transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-blue-300 transition-colors">
            Skills
          </a>
          <a
            href="#experience"
            className="hover:text-emerald-300 transition-colors"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="hover:text-orange-300 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden text-2xl text-zinc-300 hover:text-cyan-300 transition-colors"
        >
          {isMenuOpen ? <TbX /> : <TbMenu2 />}
        </button>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-4 right-4 top-20 flex flex-col overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-950/95 p-5 shadow-[0_0_30px_rgba(34,211,238,0.15)] backdrop-blur-xl md:hidden"
            >
              <div className="mb-4 border-b border-white/10 pb-4 text-xs font-mono text-zinc-500">
                {"// Navigation_Menu"}
              </div>
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group relative flex items-center justify-between rounded-xl px-4 py-3 font-mono text-sm text-zinc-300 transition-all hover:bg-white/5 hover:text-white"
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`${link.color} text-xs opacity-70 group-hover:opacity-100 transition-opacity`}
                      >
                        {link.num}.
                      </span>
                      <span>{link.name}</span>
                    </span>
                    <span
                      className={`text-xs opacity-0 transition-opacity group-hover:opacity-100 ${link.color}`}
                    >
                      {"<~"}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <footer className="py-8 text-center text-zinc-400 text-sm border-t border-cyan-400/10 mt-16">
        (c) {new Date().getFullYear()} Built with React, Tailwind, Framer Motion
        and Lenis.
      </footer>
    </div>
  );
}

export default App;
