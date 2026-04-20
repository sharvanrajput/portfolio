import { motion } from 'framer-motion'
import { TbBriefcase } from 'react-icons/tb'

const experiences = [
  {
    id: 1,
    role: 'Senior Full Stack Developer',
    company: 'TechNova Solutions',
    period: '2021 - Present',
    description: 'Architected and built scalable microservices using Node.js and React. Reduced API response time by 40% through Redis caching and database indexing optimizations.',
    tech: ['React', 'Node.js', 'Redis', 'AWS'],
  },
  {
    id: 2,
    role: 'Frontend Engineer',
    company: 'Creative Web Agency',
    period: '2019 - 2021',
    description: 'Led the frontend development of multiple high-traffic e-commerce platforms. Implemented pixel-perfect UI designs and integrated complex third-party payment gateways.',
    tech: ['Vue.js', 'Tailwind CSS', 'GraphQL', 'Stripe'],
  },
  {
    id: 3,
    role: 'Junior Web Developer',
    company: 'Startup Hub',
    period: '2018 - 2019',
    description: 'Developed responsive landing pages and internal dashboard tools. Collaborated with designers to translate Figma mockups into interactive web components.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-24">
      <div className="mb-12 text-center md:mb-16">
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
          {'< Work History />'}
        </p>
        <h2 className="text-3xl font-black text-white md:text-5xl">Professional Journey</h2>
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Central Vertical Line */}
        <div className="absolute left-6 top-0 h-full w-px bg-cyan-400/20 md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              className={`relative flex flex-col items-start md:flex-row md:items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Icon */}
              <div className="absolute left-6 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)] md:left-1/2">
                <TbBriefcase className="text-lg" />
              </div>

              {/* Experience Card */}
              <div className={`w-full pl-16 md:w-1/2 md:pl-0 ${index % 2 === 0 ? 'md:pl-12 lg:pl-16' : 'md:pr-12 lg:pr-16'}`}>
                <div className="section-ring glass-panel rounded-2xl p-6 transition-colors hover:border-cyan-400/30">
                  <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <span className="mt-2 w-fit rounded-md bg-cyan-400/10 px-2 py-1 font-mono text-xs text-cyan-300 sm:mt-0">{exp.period}</span>
                  </div>
                  <div className="mb-4 text-sm font-medium text-orange-200">{exp.company}</div>
                  <p className="mb-4 text-sm leading-relaxed text-zinc-300">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="rounded border border-white/5 bg-slate-900 px-2 py-1 font-mono text-xs text-zinc-400">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}