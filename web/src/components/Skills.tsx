import { motion } from 'framer-motion'
import {
  Code2,
  Sparkles,
  Bot,
  BrainCircuit,
  Server,
  Database,
  Cloud,
  GitBranch,
  type LucideIcon,
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { skillGroups } from '../data/content'

const ICONS: Record<string, LucideIcon> = {
  Code2,
  Sparkles,
  Bot,
  BrainCircuit,
  Server,
  Database,
  Cloud,
  GitBranch,
}

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 px-4 py-24 sm:px-6 lg:scroll-mt-0">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01 / SKILLS"
          title="tech_stack"
          subtitle="The languages, frameworks, and platforms I reach for across AI/ML, backend, and infrastructure work."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => {
            const Icon = ICONS[group.icon] ?? Code2
            return (
              <motion.div
                key={group.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
                className="card-cut glass-panel group flex flex-col p-5 transition-colors hover:border-accent-green/50"
              >
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent-green/10 text-accent-green">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <h3 className="font-mono text-sm font-semibold text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="tag-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
