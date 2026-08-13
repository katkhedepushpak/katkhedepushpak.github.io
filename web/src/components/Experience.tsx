import { motion } from 'framer-motion'
import { GitCommitHorizontal, GitBranch, MapPin } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { experience, education } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03 / EXPERIENCE"
          title="git log --graph"
          subtitle="Professional experience, rendered as commits."
        />

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-green/60 via-ink-600 to-transparent sm:left-[11px]" />

          {experience.map((commit, i) => (
            <motion.div
              key={commit.hash}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-8 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent-green bg-ink-900 sm:-left-10">
                <GitCommitHorizontal className="h-3 w-3 text-accent-green" />
              </span>

              <div className="card-cut glass-panel p-5">
                <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-slate-500">
                  <span className="text-accent-amber">commit {commit.hash}</span>
                  {commit.branch && (
                    <span className="flex items-center gap-1 text-accent-violet">
                      <GitBranch className="h-3 w-3" />
                      {commit.branch}
                    </span>
                  )}
                  <span>{commit.date}</span>
                </div>

                <h3 className="text-lg font-semibold text-white">{commit.role}</h3>
                <p className="mb-3 flex items-center gap-1.5 text-sm text-accent-cyan">
                  {commit.org}
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <MapPin className="h-3 w-3" />
                    {commit.location}
                  </span>
                </p>

                <ul className="space-y-1.5">
                  {commit.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-slate-400">
                      <span className="font-mono text-accent-green">+</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <p className="section-label mb-5">education.json</p>
          <div className="grid gap-5 sm:grid-cols-2">
            {education.map((ed) => (
              <div key={ed.degree} className="card-cut glass-panel p-5">
                <p className="font-semibold text-white">{ed.degree}</p>
                <p className="mt-1 text-sm text-accent-cyan">{ed.school}</p>
                <p className="mt-2 font-mono text-xs text-slate-500">
                  {ed.date} · {ed.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
