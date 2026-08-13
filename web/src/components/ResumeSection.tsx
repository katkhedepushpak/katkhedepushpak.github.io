import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { profile } from '../data/content'

export default function ResumeSection() {
  return (
    <section id="resume" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04 / RESUME"
          title="resume.pdf"
          subtitle="Prefer paper? Grab the PDF, or scroll through it right here."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-cut glass-panel overflow-hidden"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-600/80 bg-ink-800/80 px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="terminal-dot bg-[#ff5f56]" />
              <span className="terminal-dot bg-[#ffbd2e]" />
              <span className="terminal-dot bg-[#27c93f]" />
              <span className="ml-3 font-mono text-xs text-slate-400">pushpak_katkhede_resume.pdf</span>
            </div>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-md border border-accent-green/50 px-3 py-1.5 font-mono text-xs text-accent-green transition-colors hover:bg-accent-green/10"
            >
              <Download className="h-3.5 w-3.5" />
              Download
            </a>
          </div>
          <iframe
            src={profile.resumeUrl}
            title="Pushpak Katkhede Resume"
            className="h-[680px] w-full bg-white"
          />
        </motion.div>
      </div>
    </section>
  )
}
