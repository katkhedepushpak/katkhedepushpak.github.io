---
title: "Your Post Title"
slug: "your-post-slug"
date: "2026-01-01"
tags: ["tag-one", "tag-two"]
excerpt: "One or two sentences that show up on the blog index and the homepage preview card."
cover: "/images/blog/your-post-slug/cover.jpg"
featured: false
---

Write your post in regular markdown here.

## Headings, lists, code, links — all supported

- Standard markdown lists work
- So do **bold**, _italic_, and `inline code`

```
fenced code blocks work too
```

To embed an image, drop the file in `web/public/images/blog/your-post-slug/` and
reference it with a root-relative path:

![Description of the image](/images/blog/your-post-slug/diagram.png)

---

### How to publish a new post

1. Copy this file to `web/src/content/blog/YYYY-MM-DD-your-post-slug.md`
   (the leading underscore on this template's filename keeps it out of the
   published post list — don't remove the underscore from `_TEMPLATE.md` itself).
2. Fill in the frontmatter above: `title`, `slug` (must be unique — this becomes
   the post's URL at `/blog/<slug>`), `date` (`YYYY-MM-DD`), `tags`, `excerpt`,
   and optionally `cover` and `featured: true`.
3. Add any images to `web/public/images/blog/<slug>/`.
4. Delete this "how to publish" section and write your post above it.
5. Commit and push to `main` — GitHub Actions builds and deploys automatically.
