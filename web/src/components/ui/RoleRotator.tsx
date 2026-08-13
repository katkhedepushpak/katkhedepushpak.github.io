import { useEffect, useState } from 'react'

type Props = {
  roles: string[]
  className?: string
}

const TYPE_SPEED = 55
const DELETE_SPEED = 30
const HOLD_MS = 1400

export default function RoleRotator({ roles, className = '' }: Props) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState<'typing' | 'holding' | 'deleting'>('typing')

  useEffect(() => {
    const current = roles[index % roles.length]
    let timeout: ReturnType<typeof setTimeout>

    if (phase === 'typing') {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), TYPE_SPEED)
      } else {
        timeout = setTimeout(() => setPhase('holding'), HOLD_MS)
      }
    } else if (phase === 'holding') {
      timeout = setTimeout(() => setPhase('deleting'), HOLD_MS)
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), DELETE_SPEED)
      } else {
        setIndex((i) => (i + 1) % roles.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timeout)
  }, [text, phase, index, roles])

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[0.5ch] animate-blink text-accent-cyan">▌</span>
    </span>
  )
}
