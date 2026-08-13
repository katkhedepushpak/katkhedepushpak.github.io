import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-ink-600/70 px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 font-mono text-xs text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="flex items-center gap-1.5">
          <span className="text-accent-green">build:</span> passing
          <span className="mx-2 text-ink-600">|</span>
          made with React + TypeScript + Tailwind
        </p>
      </div>
    </footer>
  )
}
