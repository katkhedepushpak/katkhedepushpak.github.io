import { useEffect, useState } from 'react'

type Props = {
  text: string
  speed?: number
  startDelay?: number
  onDone?: () => void
  className?: string
  cursor?: boolean
}

export default function TypedText({
  text,
  speed = 32,
  startDelay = 0,
  onDone,
  className,
  cursor = true,
}: Props) {
  const [shown, setShown] = useState('')

  useEffect(() => {
    let i = 0
    let interval: ReturnType<typeof setInterval>
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1
        setShown(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          onDone?.()
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  return (
    <span className={className}>
      {shown}
      {cursor && <span className="inline-block w-[0.55ch] animate-blink text-accent-green">▌</span>}
    </span>
  )
}
