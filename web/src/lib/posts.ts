import fm from 'front-matter'

export type BlogPost = {
  slug: string
  title: string
  date: string
  tags: string[]
  excerpt: string
  cover?: string
  featured: boolean
  body: string
}

type Frontmatter = {
  title?: string
  slug?: string
  date?: string
  tags?: string[]
  excerpt?: string
  cover?: string
  featured?: boolean
}

const rawPosts = import.meta.glob('/src/content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const posts: BlogPost[] = Object.entries(rawPosts)
  .filter(([path]) => !path.split('/').pop()!.startsWith('_'))
  .map(([path, raw]) => {
    const { attributes, body } = fm<Frontmatter>(raw)
    const fallbackSlug = path.split('/').pop()!.replace(/\.md$/, '')
    return {
      slug: attributes.slug ?? fallbackSlug,
      title: attributes.title ?? fallbackSlug,
      date: attributes.date ?? '',
      tags: attributes.tags ?? [],
      excerpt: attributes.excerpt ?? '',
      cover: attributes.cover,
      featured: Boolean(attributes.featured),
      body: body.trim(),
    }
  })
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))

export function getAllPosts(): BlogPost[] {
  return posts
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug)
}

export function getFeaturedPosts(limit = 3): BlogPost[] {
  const featured = posts.filter((post) => post.featured)
  const rest = posts.filter((post) => !post.featured)
  return [...featured, ...rest].slice(0, limit)
}
