import { motion } from 'framer-motion'

type Props = {
  index: string
  title: string
  subtitle?: string
}

export default function SectionHeading({ index, title, subtitle }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <p className="section-label mb-3">{index}</p>
      <h2 className="flex flex-wrap items-baseline gap-3 text-3xl font-bold text-white sm:text-4xl">
        <span className="text-accent-green">#</span>
        {title}
      </h2>
      {subtitle && <p className="mt-3 max-w-2xl text-slate-400">{subtitle}</p>}
    </motion.div>
  )
}
