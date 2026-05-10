import { motion } from 'framer-motion'
import {
  SiHtml5, SiCss, SiJavascript, SiBootstrap, SiReact, SiNextdotjs,
  SiTailwindcss, SiRedux, SiNodedotjs, SiExpress, SiSocketdotio,
  SiMysql, SiMongodb, SiGit, SiGithub,
} from 'react-icons/si'
import { TbBoxMargin, TbApi } from 'react-icons/tb'

const skills = [
  { name: 'HTML', icon: SiHtml5, color: 'from-orange-500/25 to-orange-300/10', iconColor: 'text-orange-300' },
  { name: 'CSS', icon: SiCss, color: 'from-blue-500/25 to-blue-300/10', iconColor: 'text-blue-300' },
  { name: 'JavaScript', icon: SiJavascript, color: 'from-yellow-500/25 to-yellow-300/10', iconColor: 'text-yellow-300' },
  { name: 'Bootstrap', icon: SiBootstrap, color: 'from-purple-500/25 to-violet-300/10', iconColor: 'text-purple-300' },
  { name: 'React', icon: SiReact, color: 'from-cyan-500/25 to-cyan-300/10', iconColor: 'text-cyan-300' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'from-zinc-500/25 to-zinc-300/10', iconColor: 'text-zinc-200' },
  { name: 'Shadcn UI', icon: TbBoxMargin, color: 'from-slate-500/25 to-slate-300/10', iconColor: 'text-slate-200' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: 'from-sky-500/25 to-cyan-300/10', iconColor: 'text-cyan-300' },
  { name: 'RTK Query', icon: SiRedux, color: 'from-violet-500/25 to-purple-300/10', iconColor: 'text-violet-300' },
  { name: 'Context API', icon: TbApi, color: 'from-teal-500/25 to-cyan-200/10', iconColor: 'text-teal-200' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'from-green-500/25 to-green-300/10', iconColor: 'text-green-300' },
  { name: 'Express', icon: SiExpress, color: 'from-zinc-500/25 to-zinc-300/10', iconColor: 'text-zinc-200' },
  { name: 'Socket.io', icon: SiSocketdotio, color: 'from-slate-500/25 to-zinc-300/10', iconColor: 'text-zinc-200' },
  { name: 'MySQL', icon: SiMysql, color: 'from-blue-500/25 to-sky-300/10', iconColor: 'text-blue-300' },
  { name: 'MongoDB', icon: SiMongodb, color: 'from-emerald-500/25 to-green-300/10', iconColor: 'text-emerald-300' },
  { name: 'Git', icon: SiGit, color: 'from-orange-500/25 to-amber-300/10', iconColor: 'text-orange-300' },
  { name: 'GitHub', icon: SiGithub, color: 'from-slate-600/25 to-slate-300/10', iconColor: 'text-slate-200' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 280, damping: 20 } },
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-24">
      <div className="mb-12 text-center md:mb-16">
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">{'{ Tech Stack }'}</p>
        <h2 className="text-3xl font-black text-white md:text-5xl">Developer Arsenal</h2>
      </div>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-6"
        >
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ y: -6, rotateX: -8, rotateY: 6, transition: { duration: 0.2 } }}
                className={`section-ring relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${skill.color} p-5 text-center [transform-style:preserve-3d]`}
              >
                <div className="absolute inset-0 bg-slate-900/55" />
                <div className="relative" style={{ transform: 'translateZ(28px)' }}>
                  <Icon className={`mx-auto mb-3 text-4xl ${skill.iconColor}`} />
                  <span className="text-sm font-semibold text-zinc-100">{skill.name}</span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
