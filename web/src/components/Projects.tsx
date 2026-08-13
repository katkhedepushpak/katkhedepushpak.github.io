import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, FileCode2 } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import ProjectModal from './ProjectModal'
import { projects, type Project } from '../data/content'

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="projects" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02 / PROJECTS"
          title="projects"
          subtitle="A mix of production systems, research, and personal builds — spanning agentic AI, ML, and full-stack engineering."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.button
              key={project.key}
              onClick={() => setActive(project)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="card-cut glass-panel group flex flex-col p-5 text-left transition-all hover:-translate-y-1 hover:border-accent-cyan/50"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-mono text-[11px] text-slate-500">
                  <FileCode2 className="h-3.5 w-3.5 text-accent-cyan" />
                  {project.key}.tsx
                </span>
                <ArrowUpRight className="h-4 w-4 text-slate-600 transition-colors group-hover:text-accent-cyan" />
              </div>

              <h3 className="text-lg font-semibold text-white">{project.name}</h3>
              <p className="mb-3 font-mono text-xs text-accent-cyan">{project.tagline}</p>
              <p className="mb-4 line-clamp-3 text-sm text-slate-400">{project.description}</p>

              <div className="mt-auto flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
