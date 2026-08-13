import { motion } from 'framer-motion'
import { Download, Mail, MapPin } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Terminal from './ui/Terminal'
import RoleRotator from './ui/RoleRotator'
import { profile, stats } from '../data/content'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pt-32 pb-20 sm:px-6 lg:pt-40">
      {/* decorative parallelogram accents */}
      <div className="parallelogram pointer-events-none absolute -top-10 right-[-6rem] hidden h-72 w-72 rounded-3xl border border-accent-green/10 bg-accent-green/5 lg:block" />
      <div className="parallelogram pointer-events-none absolute bottom-10 left-[-8rem] hidden h-64 w-64 rounded-3xl border border-accent-cyan/10 bg-accent-cyan/5 lg:block" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent-green/40 bg-accent-green/10 px-3 py-1 font-mono text-xs text-accent-green">
            <span className="h-2 w-2 animate-glowPulse rounded-full bg-accent-green" />
            {profile.status}
          </span>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <div className="mt-4 h-9 font-mono text-lg text-accent-cyan sm:text-xl">
            <RoleRotator roles={profile.roles} />
          </div>

          <p className="mt-6 max-w-xl text-slate-400">{profile.tagline}</p>

          <p className="mt-3 flex items-center gap-1.5 text-sm text-slate-500">
            <MapPin className="h-4 w-4 text-accent-green" />
            {profile.location}
            <span className="mx-2 text-ink-600">•</span>
            {profile.authorization}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="card-cut-sm inline-flex items-center gap-2 bg-accent-green px-5 py-2.5 font-mono text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="card-cut-sm inline-flex items-center gap-2 border border-ink-600 px-5 py-2.5 font-mono text-sm text-slate-200 transition-colors hover:border-accent-cyan hover:text-accent-cyan"
            >
              <Mail className="h-4 w-4" />
              Contact Me
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
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                className="card-cut-sm glass-panel px-4 py-3"
              >
                <div className="font-mono text-2xl font-bold text-accent-green">{s.value}</div>
                <div className="mt-1 text-xs text-slate-400">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <Terminal title="whoami.sh">
            <p>
              <span className="text-accent-green">pushpak@sunnyvale</span>
              <span className="text-slate-500">:</span>
              <span className="text-accent-cyan">~</span>
              <span className="text-slate-500">$ </span>
              whoami --verbose
            </p>
            <div className="mt-3 space-y-1.5 text-slate-300">
              <p>
                <span className="text-accent-amber">name</span>: {profile.name}
              </p>
              <p>
                <span className="text-accent-amber">location</span>: {profile.location}
              </p>
              <p>
                <span className="text-accent-amber">roles</span>: [
                {profile.roles.map((r, i) => (
                  <span key={r}>
                    <span className="text-accent-pink">"{r}"</span>
                    {i < profile.roles.length - 1 ? ', ' : ''}
                  </span>
                ))}
                ]
              </p>
              <p>
                <span className="text-accent-amber">publications</span>: [
                <span className="text-accent-pink">"ICSE 2026 (ACM/IEEE)"</span>]
              </p>
              <p>
                <span className="text-accent-amber">status</span>:{' '}
                <span className="text-accent-green">"{profile.status}"</span>
              </p>
            </div>
            <p className="mt-4">
              <span className="text-accent-green">pushpak@sunnyvale</span>
              <span className="text-slate-500">:</span>
              <span className="text-accent-cyan">~</span>
              <span className="text-slate-500">$ </span>
              <span className="animate-blink text-slate-400">▌</span>
            </p>
          </Terminal>

          <img
            src="/profile-img.jpg"
            alt="Pushpak Vijay Katkhede"
            className="card-cut absolute -bottom-10 -right-6 h-28 w-28 border-4 border-ink-900 object-cover shadow-2xl sm:h-32 sm:w-32"
          />
        </motion.div>
      </div>
    </section>
  )
}
