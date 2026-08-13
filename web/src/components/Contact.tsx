import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import Terminal from './ui/Terminal'
import SectionHeading from './ui/SectionHeading'
import { profile } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <SectionHeading index="05 / CONTACT" title="contact.sh" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Terminal title="contact.sh">
            <p className="text-slate-300">
              <span className="text-accent-green">$</span> ./hire-me --roles "AI Engineer,Applied ML Engineer,Backend/DevOps,Developer"
            </p>
            <p className="mt-2 text-slate-400">
              Actively looking for full-time opportunities. Based in {profile.location} —
              open to remote or relocation anywhere in the US.
            </p>
            <p className="mt-4 text-slate-300">
              <span className="text-accent-green">$</span> cat contact.json
            </p>
            <pre className="mt-2 whitespace-pre-wrap text-slate-400">{`{
  "email": "${profile.email}",
  "github": "${profile.github.replace('https://', '')}",
  "linkedin": "${profile.linkedin.replace('https://www.', '')}"
}`}</pre>
          </Terminal>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="card-cut-sm inline-flex items-center gap-2 bg-accent-green px-5 py-2.5 font-mono text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              Say hello
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ink-600 p-2.5 text-slate-300 transition-colors hover:border-accent-cyan hover:text-accent-cyan"
              aria-label="GitHub"
            >
              <FaGithub className="h-4 w-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ink-600 p-2.5 text-slate-300 transition-colors hover:border-accent-cyan hover:text-accent-cyan"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
            <a
              href={profile.facebook}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ink-600 p-2.5 text-slate-300 transition-colors hover:border-accent-cyan hover:text-accent-cyan"
              aria-label="Facebook"
            >
              <FaFacebook className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
