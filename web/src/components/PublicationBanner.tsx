import { motion } from 'framer-motion'
import { GraduationCap, ArrowUpRight } from 'lucide-react'
import { publication } from '../data/content'

export default function PublicationBanner() {
  return (
    <section className="px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.a
          href={publication.href}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-cut group flex flex-wrap items-center gap-4 border border-accent-green/30 bg-gradient-to-r from-accent-green/10 via-ink-850 to-accent-cyan/10 px-6 py-5 transition-colors hover:border-accent-green/60"
        >
          <span className="flex items-center gap-2 rounded-md bg-ink-950/60 px-3 py-1.5 font-mono text-xs font-semibold text-accent-green">
            <GraduationCap className="h-4 w-4" />
            {publication.badge}
          </span>
          <div className="flex-1 min-w-[220px]">
            <p className="font-semibold text-white">{publication.title}</p>
            <p className="mt-0.5 text-xs text-slate-400">{publication.venue}</p>
          </div>
          <span className="flex items-center gap-1 font-mono text-xs text-accent-cyan">
            Read Paper
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </motion.a>
      </div>
    </section>
  )
}
