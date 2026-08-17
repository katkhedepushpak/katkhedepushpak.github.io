import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, FileCode2 } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { getFeaturedPosts } from '../lib/posts'

export default function BlogPreview() {
  const posts = getFeaturedPosts(3)

  if (posts.length === 0) return null

  return (
    <section id="blog" className="scroll-mt-16 px-4 py-24 sm:px-6 lg:scroll-mt-0">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03 / BLOG"
          title="blog"
          subtitle="Notes on AI engineering, backend systems, and things I'm learning along the way."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="card-cut glass-panel group flex h-full flex-col p-5 text-left transition-all hover:-translate-y-1 hover:border-accent-cyan/50"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 font-mono text-[11px] text-slate-500">
                    <FileCode2 className="h-3.5 w-3.5 text-accent-cyan" />
                    {post.date}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-slate-600 transition-colors group-hover:text-accent-cyan" />
                </div>

                <h3 className="text-lg font-semibold text-white">{post.title}</h3>
                <p className="mb-4 mt-2 line-clamp-3 text-sm text-slate-400">{post.excerpt}</p>

                <div className="mt-auto flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 font-mono text-sm text-accent-cyan hover:underline"
          >
            View all posts
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
