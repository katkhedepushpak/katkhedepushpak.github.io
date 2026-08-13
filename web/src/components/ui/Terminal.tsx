import type { ReactNode } from 'react'

type Props = {
  title?: string
  children: ReactNode
  className?: string
}

export default function Terminal({ title = 'zsh', children, className = '' }: Props) {
  return (
    <div
      className={`glass-panel card-cut rounded-xl shadow-2xl shadow-black/40 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-ink-600/80 bg-ink-800/80 px-4 py-2.5">
        <span className="terminal-dot bg-[#ff5f56]" />
        <span className="terminal-dot bg-[#ffbd2e]" />
        <span className="terminal-dot bg-[#27c93f]" />
        <span className="ml-3 font-mono text-xs text-slate-400">{title}</span>
      </div>
      <div className="p-5 font-mono text-sm leading-relaxed sm:p-6">{children}</div>
    </div>
  )
}
