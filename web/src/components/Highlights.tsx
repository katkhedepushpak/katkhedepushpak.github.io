import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { highlights } from '../data/content'

export default function Highlights() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="card-cut glass-panel px-6 py-8 sm:px-10 sm:py-10">
          <p className="mb-6 font-mono text-xs text-slate-500">
            <span className="text-accent-green">//</span> why work with me
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <motion.div
                key={h}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-green" />
                <p className="text-sm text-slate-300 sm:text-base">{h}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
