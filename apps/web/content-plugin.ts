// Build-time content pipeline. Markdown and JSON in /content become plain
// data modules, so no markdown parser ever ships to the browser.
import fs from 'node:fs'
import path from 'node:path'
import { Marked } from 'marked'
import YAML from 'yaml'
import type { Plugin } from 'vite'

export const CONTENT_DIR = path.resolve(import.meta.dirname, '../../content')
export const SITE_URL = 'https://dreamsn.codes'

const marked = new Marked({ gfm: true })

// External links open in a new tab; everything else stays in the SPA.
marked.use({
  renderer: {
    link({ href, title, tokens }) {
      const text = this.parser.parseInline(tokens)
      const external = /^https?:\/\//.test(href)
      const t = title ? ` title="${title}"` : ''
      return external
        ? `<a href="${href}"${t} target="_blank" rel="noopener noreferrer">${text}</a>`
        : `<a href="${href}"${t}>${text}</a>`
    },
  },
})

export type Doc = {
  slug: string
  meta: Record<string, any>
  body: string
}

export function parseMarkdown(source: string): { meta: Record<string, any>; body: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(source)
  if (!match) return { meta: {}, body: source }
  return { meta: YAML.parse(match[1]) ?? {}, body: source.slice(match[0].length) }
}

export function renderMarkdown(body: string): string {
  return marked.parse(body, { async: false }) as string
}

export function toPlainText(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_`~|-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function readDir(dir: string): Doc[] {
  const full = path.join(CONTENT_DIR, dir)
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith('.md') && !f.startsWith('_') && f !== 'README.md')
    .map((file) => {
      const { meta, body } = parseMarkdown(fs.readFileSync(path.join(full, file), 'utf8'))
      // Brain log files are named YYYY-MM-DD-slug.md; the date prefix is not part of the URL.
      const slug = file.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '')
      return { slug, meta, body }
    })
}

function readJson<T>(file: string): T {
  return JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8'))
}

export function loadBrainLog() {
  return readDir('brain-log')
    .filter((d) => !d.meta.draft)
    .map((d) => {
      const text = toPlainText(d.body)
      return {
        slug: d.slug,
        title: String(d.meta.title ?? d.slug),
        date: String(d.meta.date),
        tags: (d.meta.tags ?? []) as string[],
        summary: (d.meta.summary as string | undefined) ?? text.slice(0, 180),
        minutes: Math.max(1, Math.round(text.split(' ').length / 230)),
        archive: Boolean(d.meta.archive),
        body: d.body,
      }
    })
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function loadBookNotes() {
  return readDir('books').map((d) => ({ slug: d.slug, body: d.body, meta: d.meta }))
}

type Book = { title: string; author: string; slug?: string }
type Shelf = { genre: string; tier: string; books: Book[] }

// Everything search can find. Kept small: title, a short subtitle, and body text.
export function buildSearchIndex() {
  const docs: { url: string; type: string; title: string; subtitle: string; text: string }[] = []
  for (const e of loadBrainLog()) {
    docs.push({
      url: `/brain-log/${e.slug}`,
      type: 'Brain log',
      title: e.title,
      subtitle: e.date,
      text: toPlainText(e.body),
    })
  }
  const notes = new Map(loadBookNotes().map((n) => [n.slug, n]))
  for (const shelf of readJson<{ shelves: Shelf[] }>('books.json').shelves) {
    for (const b of shelf.books) {
      const note = b.slug ? notes.get(b.slug) : undefined
      docs.push({
        url: note ? `/books/${b.slug}` : '/books',
        type: note ? 'Book notes' : 'Book',
        title: b.title,
        subtitle: `${b.author} · ${shelf.tier}`,
        text: note ? toPlainText(note.body) : '',
      })
    }
  }
  for (const t of readJson<{ title: string; venue: string; date: string; url?: string }[]>('talks.json')) {
    docs.push({ url: '/talks', type: 'Talk', title: t.title, subtitle: `${t.venue} · ${t.date}`, text: '' })
  }
  for (const p of readJson<{ name: string; blurb: string }[]>('podcasts.json')) {
    docs.push({ url: '/podcasts', type: 'Podcast', title: p.name, subtitle: '', text: p.blurb })
  }
  for (const p of readJson<{ name: string; description: string; url?: string }[]>('projects.json')) {
    docs.push({ url: '/projects', type: 'Project', title: p.name, subtitle: '', text: p.description })
  }
  const beliefs = parseMarkdown(fs.readFileSync(path.join(CONTENT_DIR, 'beliefs.md'), 'utf8'))
  docs.push({ url: '/beliefs', type: 'Page', title: 'Things I believe', subtitle: '', text: toPlainText(beliefs.body) })
  return docs
}

function escapeXml(s: string) {
  return s.replace(/[<>&'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[c]!)
}

export function buildFeed() {
  const items = loadBrainLog()
    .slice(0, 30)
    .map(
      (e) => `<item><title>${escapeXml(e.title)}</title><link>${SITE_URL}/brain-log/${e.slug}</link>` +
        `<guid>${SITE_URL}/brain-log/${e.slug}</guid><pubDate>${new Date(e.date).toUTCString()}</pubDate>` +
        `<description>${escapeXml(e.summary)}</description></item>`,
    )
    .join('')
  return `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Riaz's brain log</title>` +
    `<link>${SITE_URL}/brain-log</link><description>Freeform thinking, out loud.</description>${items}</channel></rss>`
}

const VIRTUAL = 'virtual:content'
const RESOLVED = '\0' + VIRTUAL

export function contentPlugin(): Plugin {
  return {
    name: 'site-content',
    resolveId(id) {
      if (id === VIRTUAL) return RESOLVED
    },
    load(id) {
      // Lightweight metadata for list pages. Bodies are loaded per page.
      if (id === RESOLVED) {
        const brainLog = loadBrainLog().map(({ body: _body, ...rest }) => rest)
        const bookNotes = loadBookNotes().map((n) => n.slug)
        return `export const brainLog = ${JSON.stringify(brainLog)}\nexport const bookNotes = ${JSON.stringify(bookNotes)}`
      }
      // Any markdown file becomes { meta, html }.
      if (id.endsWith('.md')) {
        const { meta, body } = parseMarkdown(fs.readFileSync(id, 'utf8'))
        return `export default ${JSON.stringify({ meta, html: renderMarkdown(body) })}`
      }
    },
    configureServer(server) {
      server.watcher.add(CONTENT_DIR)
      server.middlewares.use((req, res, next) => {
        if (req.url === '/search-index.json') {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(buildSearchIndex()))
        } else if (req.url === '/feed.xml') {
          res.setHeader('Content-Type', 'application/rss+xml')
          res.end(buildFeed())
        } else next()
      })
    },
    // Editing content in dev: rebuild the metadata module and reload the page.
    handleHotUpdate({ file, server }) {
      if (!file.startsWith(CONTENT_DIR)) return
      const mod = server.moduleGraph.getModuleById(RESOLVED)
      if (mod) server.moduleGraph.invalidateModule(mod)
      server.ws.send({ type: 'full-reload' })
      return []
    },
    generateBundle() {
      if (this.environment?.config.build.ssr) return
      this.emitFile({ type: 'asset', fileName: 'search-index.json', source: JSON.stringify(buildSearchIndex()) })
      this.emitFile({ type: 'asset', fileName: 'feed.xml', source: buildFeed() })
    },
  }
}
