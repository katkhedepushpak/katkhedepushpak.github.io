export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-900">
      <div className="absolute inset-0 bg-dot-grid bg-dot-grid opacity-40" />

      <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-accent-green/10 blur-[120px]" />
      <div className="absolute top-1/3 -right-32 h-[32rem] w-[32rem] rounded-full bg-accent-cyan/10 blur-[130px]" />
      <div className="absolute bottom-0 left-1/4 h-[24rem] w-[24rem] rounded-full bg-accent-violet/10 blur-[120px]" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950/80" />
    </div>
  )
}
