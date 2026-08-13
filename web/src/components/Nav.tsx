import { useState } from 'react'
import { Menu, X, TerminalSquare } from 'lucide-react'
import { useActiveSection } from '../hooks/useActiveSection'

const TABS = [
  { id: 'home', label: 'hero.tsx' },
  { id: 'skills', label: 'skills.tsx' },
  { id: 'projects', label: 'projects.tsx' },
  { id: 'experience', label: 'experience.log' },
  { id: 'resume', label: 'resume.pdf' },
  { id: 'contact', label: 'contact.sh' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(TABS.map((t) => t.id))

  const go = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-600/70 bg-ink-900/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <button
          onClick={() => go('home')}
          className="flex items-center gap-2 font-mono text-sm font-semibold text-white"
        >
          <TerminalSquare className="h-5 w-5 text-accent-green" />
          <span>
            <span className="text-accent-green">&lt;</span>
            PK
            <span className="text-accent-green"> /&gt;</span>
          </span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {TABS.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => go(tab.id)}
                className={`group relative flex items-center gap-2 rounded-t-md px-3 py-2 font-mono text-xs transition-colors ${
                  active === tab.id ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    active === tab.id ? 'bg-accent-green' : 'bg-ink-600 group-hover:bg-slate-500'
                  }`}
                />
                {tab.label}
                {active === tab.id && (
                  <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-accent-green shadow-[0_0_8px_theme(colors.accent.green)]" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <a
          href="/resume/pushpak_katkhede_resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-md border border-accent-green/50 px-3 py-1.5 font-mono text-xs font-medium text-accent-green transition-colors hover:bg-accent-green/10 md:inline-block"
        >
          ./resume --download
        </a>

        <button
          className="text-slate-300 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-600/70 bg-ink-900/95 px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {TABS.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => go(tab.id)}
                  className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-left font-mono text-sm ${
                    active === tab.id ? 'bg-ink-800 text-accent-green' : 'text-slate-300'
                  }`}
                >
                  <span className="text-accent-green">$</span>
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
