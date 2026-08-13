import { useState } from 'react'
import {
  Menu,
  X,
  TerminalSquare,
  Home,
  Boxes,
  FileCode2,
  GitBranch,
  FileText,
  Mail,
  Download,
} from 'lucide-react'
import { useActiveSection } from '../hooks/useActiveSection'

const TABS = [
  { id: 'home', label: 'hero.tsx', icon: Home },
  { id: 'skills', label: 'skills.tsx', icon: Boxes },
  { id: 'projects', label: 'projects.tsx', icon: FileCode2 },
  { id: 'experience', label: 'experience.log', icon: GitBranch },
  { id: 'resume', label: 'resume.pdf', icon: FileText },
  { id: 'contact', label: 'contact.sh', icon: Mail },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(TABS.map((t) => t.id))

  const go = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Desktop: floating vertical rail */}
      <nav className="fixed left-5 top-1/2 z-50 hidden -translate-y-1/2 lg:block">
        <div className="glass-panel card-cut flex w-52 flex-col gap-1 rounded-2xl px-3 py-4 shadow-xl shadow-black/30">
          <button
            onClick={() => go('home')}
            className="mb-3 flex items-center gap-2 px-1 font-mono text-sm font-semibold text-white"
          >
            <TerminalSquare className="h-5 w-5 shrink-0 text-accent-green" />
            <span>
              <span className="text-accent-green">&lt;</span>
              PK
              <span className="text-accent-green"> /&gt;</span>
            </span>
          </button>

          <div className="mb-2 h-px w-full bg-ink-600" />

          {TABS.map((tab) => {
            const Icon = tab.icon
            const isActive = active === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => go(tab.id)}
                className={`relative flex items-center gap-2.5 rounded-lg px-2.5 py-2 font-mono text-xs transition-colors ${
                  isActive
                    ? 'bg-accent-green/10 text-accent-green'
                    : 'text-slate-400 hover:bg-ink-800/60 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <span className="absolute -left-3 h-5 w-1 rounded-full bg-accent-green shadow-[0_0_8px_theme(colors.accent.green)]" />
                )}
                <Icon className="h-4 w-4 shrink-0" />
                <span className="truncate">{tab.label}</span>
              </button>
            )
          })}

          <div className="my-2 h-px w-full bg-ink-600" />

          <a
            href="/resume/pushpak_katkhede_resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 font-mono text-xs text-accent-green transition-colors hover:bg-accent-green/10"
          >
            <Download className="h-4 w-4 shrink-0" />
            <span className="truncate">./resume --dl</span>
          </a>
        </div>
      </nav>

      {/* Mobile: compact top bar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-600/70 bg-ink-900/85 backdrop-blur-md lg:hidden">
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
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

          <button
            className="text-slate-300"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-ink-600/70 bg-ink-900/95 px-4 pb-4">
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
    </>
  )
}
