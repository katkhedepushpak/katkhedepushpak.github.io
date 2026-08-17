import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Giscus from '@giscus/react'
import { ArrowLeft } from 'lucide-react'
import { getPostBySlug } from '../lib/posts'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : undefined

  if (!post) {
    return (
      <section className="px-4 py-28 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label mb-3">404</p>
          <h1 className="text-2xl font-bold text-white">Post not found</h1>
          <Link
            to="/blog"
            className="mt-6 inline-flex items-center gap-1.5 font-mono text-sm text-accent-cyan hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> back to blog
          </Link>
        </div>
      </section>
    )
  }

  return (
    <article className="px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/blog"
          className="mb-8 inline-flex items-center gap-1.5 font-mono text-xs text-slate-400 transition-colors hover:text-accent-cyan"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> back to blog
        </Link>

        <p className="section-label mb-3">{post.date}</p>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">{post.title}</h1>

        {post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>
        )}

        {post.cover && (
          <img
            src={post.cover}
            alt={post.title}
            className="card-cut glass-panel mt-8 w-full object-cover"
          />
        )}

        <div className="prose prose-invert mt-10 max-w-none prose-headings:font-mono prose-a:text-accent-cyan prose-code:text-accent-amber">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
        </div>

        <div className="mt-16 border-t border-ink-600/70 pt-10">
          <GiscusComments />
        </div>
      </div>
    </article>
  )
}

function GiscusComments() {
  const repo = import.meta.env.VITE_GISCUS_REPO
  const repoId = import.meta.env.VITE_GISCUS_REPO_ID
  const category = import.meta.env.VITE_GISCUS_CATEGORY
  const categoryId = import.meta.env.VITE_GISCUS_CATEGORY_ID

  if (!repo || !repoId || !categoryId) {
    return (
      <p className="font-mono text-xs text-slate-500">
        Comments aren't configured yet — generate the config at giscus.app (after
        enabling Discussions on the repo) and set the VITE_GISCUS_* env vars.
      </p>
    )
  }

  return (
    <Giscus
      repo={repo as `${string}/${string}`}
      repoId={repoId}
      category={category}
      categoryId={categoryId}
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="dark_dimmed"
      lang="en"
    />
  )
}
