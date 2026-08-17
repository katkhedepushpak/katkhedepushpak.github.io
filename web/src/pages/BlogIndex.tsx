import { Link } from 'react-router-dom'
import { ArrowUpRight, FileCode2 } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import { getAllPosts } from '../lib/posts'

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <section className="px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="BLOG"
          title="blog"
          subtitle="Notes on AI engineering, backend systems, and things I'm learning along the way."
        />

        {posts.length === 0 ? (
          <p className="text-slate-400">No posts yet — check back soon.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="card-cut glass-panel group flex flex-col p-5 text-left transition-all hover:-translate-y-1 hover:border-accent-cyan/50"
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
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
