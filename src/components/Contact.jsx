import { motion } from 'framer-motion'
import { LiaLinkedin } from 'react-icons/lia'
import { SiGithub } from 'react-icons/si'
import { TbMail, TbSend } from 'react-icons/tb'

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="mb-12 text-center md:mb-16">
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">{'/* Contact */'}</p>
        <h2 className="text-3xl font-black text-white md:text-5xl">Let&apos;s Build Something Great</h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="section-ring glass-panel rounded-2xl p-7"
        >
          <h3 className="text-2xl font-bold text-white">Open to collaboration</h3>
          <p className="mt-4 text-zinc-300">
            Need a frontend-heavy experience, full-stack build, or API integration? Let&apos;s discuss your product goals and timeline.
          </p>

          <div className="mt-7 space-y-3 text-sm">
            <a href="mailto:hello@devportfolio.com" className="flex items-center gap-3 rounded-xl border border-cyan-300/20 bg-cyan-400/10 px-4 py-3 text-cyan-100 hover:bg-cyan-400/20 transition-colors">
              <TbMail className="text-lg" /> hello@devportfolio.com
            </a>
            <a href="#" className="flex items-center gap-3 rounded-xl border border-slate-300/20 bg-slate-700/20 px-4 py-3 text-slate-100 hover:bg-slate-700/40 transition-colors">
              <SiGithub className="text-lg" /> github.com/your-profile
            </a>
            <a href="#" className="flex items-center gap-3 rounded-xl border border-blue-300/20 bg-blue-500/15 px-4 py-3 text-blue-100 hover:bg-blue-500/25 transition-colors">
              <LiaLinkedin className="text-lg" /> linkedin.com/in/your-profile
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="section-ring glass-panel rounded-2xl p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block font-mono text-xs font-semibold uppercase tracking-[0.12em] text-zinc-300">{'// Name'}</span>
              <input type="text" className="w-full rounded-xl border border-white/15 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/60" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="mb-2 block font-mono text-xs font-semibold uppercase tracking-[0.12em] text-zinc-300">{'// Email'}</span>
              <input type="email" className="w-full rounded-xl border border-white/15 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/60" placeholder="you@example.com" />
            </label>
          </div>

          <label className="mt-4 block">
            <span className="mb-2 block font-mono text-xs font-semibold uppercase tracking-[0.12em] text-zinc-300">{'// Project Type'}</span>
            <input type="text" className="w-full rounded-xl border border-white/15 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/60" placeholder="Web app, dashboard, API integration..." />
          </label>

          <label className="mt-4 block">
            <span className="mb-2 block font-mono text-xs font-semibold uppercase tracking-[0.12em] text-zinc-300">{'// Message'}</span>
            <textarea rows="5" className="w-full rounded-xl border border-white/15 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/60" placeholder="Tell me about your idea..." />
          </label>

          <button type="button" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-400 to-amber-400 px-5 py-3 text-sm font-bold text-slate-950 hover:brightness-110 transition">
            <TbSend className="text-base" /> Send Message
          </button>
        </motion.form>
      </div>
    </section>
  )
}
