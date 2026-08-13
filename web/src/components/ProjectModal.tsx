import { AnimatePresence, motion } from 'framer-motion'
import { X, ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/content'

type Props = {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/80 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-panel card-cut relative max-h-[85vh] w-full max-w-xl overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b border-ink-600/80 bg-ink-800/80 px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="terminal-dot bg-[#ff5f56]" />
                <span className="terminal-dot bg-[#ffbd2e]" />
                <span className="terminal-dot bg-[#27c93f]" />
                <span className="ml-3 font-mono text-xs text-slate-400">
                  {project.key}.md
                </span>
              </div>
              <button onClick={onClose} className="text-slate-400 hover:text-white" aria-label="Close">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-6">
              <p className="section-label mb-1">{project.tagline}</p>
              <h3 className="mb-4 text-2xl font-bold text-white">{project.name}</h3>
              <p className="mb-5 text-sm leading-relaxed text-slate-300">{project.description}</p>

              <div className="mb-5 flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <span key={s} className="tag-pill">
                    {s}
                  </span>
                ))}
              </div>

              {project.status && (
                <p className="mb-5 font-mono text-xs text-accent-amber">status: "{project.status}"</p>
              )}

              {project.links.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="card-cut-sm inline-flex items-center gap-1.5 border border-accent-green/50 px-4 py-2 font-mono text-xs text-accent-green transition-colors hover:bg-accent-green/10"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
