import type { ReactElement } from 'react'
import { brainLog, bookNotes } from 'virtual:content'
import site from '../../../content/site.json'
import { Home } from './pages/Home'
import { Now } from './pages/Now'
import { BrainLogIndex, BrainLogEntry } from './pages/BrainLog'
import { Books, BookNote } from './pages/Books'
import { Talks } from './pages/Talks'
import { Podcasts } from './pages/Podcasts'
import { Projects } from './pages/Projects'
import { Prose } from './pages/Prose'
import { Search } from './pages/Search'
import { NotFound } from './pages/NotFound'

export type Resolved = { title: string; description: string; element: ReactElement; status?: number }

type Md = { default: { meta: Record<string, any>; html: string } }

// Each markdown file is its own chunk, fetched only when its page is opened.
const brainLogFiles = import.meta.glob<Md>('../../../content/brain-log/*.md')
const bookFiles = import.meta.glob<Md>('../../../content/books/*.md')
const pageFiles = import.meta.glob<Md>('../../../content/*.md')

const fileFor = (files: Record<string, () => Promise<Md>>, slug: string) =>
  Object.entries(files).find(([p]) => p.replace(/^.*\//, '').replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '') === slug)?.[1]

const titled = (t: string) => `${t} · ${site.name}`

async function load(path: string): Promise<Resolved> {
  const parts = path.replace(/\/+$/, '').split('/').filter(Boolean)
  const [section, slug] = parts

  if (parts.length === 0) return { title: `${site.name} · ${site.tagline}`, description: site.description, element: <Home /> }

  if (parts.length === 1) {
    switch (section) {
      case 'now':
        return { title: titled('Now'), description: 'What I’m up to these days.', element: <Now /> }
      case 'brain-log':
        return { title: titled('Brain log'), description: 'Freeform thinking, written out loud.', element: <BrainLogIndex /> }
      case 'books': {
        const books = (await import('../../../content/books.json')).default
        return { title: titled('Books'), description: 'Every book I’ve read, and notes on the ones that stuck.', element: <Books data={books} /> }
      }
      case 'talks': {
        const talks = (await import('../../../content/talks.json')).default
        return { title: titled('Talks'), description: 'Talks, podcasts, and things I’ve said out loud.', element: <Talks talks={talks} /> }
      }
      case 'podcasts': {
        const podcasts = (await import('../../../content/podcasts.json')).default
        return { title: titled('Podcasts'), description: 'Podcasts I recommend.', element: <Podcasts podcasts={podcasts} /> }
      }
      case 'projects': {
        const projects = (await import('../../../content/projects.json')).default
        return { title: titled('Projects'), description: 'Things I’m building and trying.', element: <Projects projects={projects} /> }
      }
      case 'search':
        return { title: titled('Search'), description: 'Search everything on this site.', element: <Search /> }
      case 'beliefs': {
        const doc = (await pageFiles['../../../content/beliefs.md']()).default
        return { title: titled('Things I believe'), description: 'The Riaz-isms.', element: <Prose title="Things I believe" doc={doc} /> }
      }
    }
  }

  if (parts.length === 2 && section === 'brain-log') {
    const entry = brainLog.find((e) => e.slug === slug)
    const file = fileFor(brainLogFiles, slug)
    if (entry && file) {
      const doc = (await file()).default
      return { title: titled(entry.title), description: entry.summary, element: <BrainLogEntry entry={entry} doc={doc} /> }
    }
  }

  if (parts.length === 2 && section === 'books' && bookNotes.includes(slug)) {
    const doc = (await fileFor(bookFiles, slug)!()).default
    return {
      title: titled(`${doc.meta.title} by ${doc.meta.author}`),
      description: `My notes on ${doc.meta.title} by ${doc.meta.author}.`,
      element: <BookNote doc={doc} />,
    }
  }

  return { title: titled('Not found'), description: 'Nothing here.', element: <NotFound />, status: 404 }
}

const cache = new Map<string, Promise<Resolved>>()

export function resolve(path: string): Promise<Resolved> {
  const key = path.replace(/\/+$/, '') || '/'
  if (!cache.has(key)) cache.set(key, load(key))
  return cache.get(key)!
}

// Every URL the prerenderer writes to disk.
export function allPaths(): string[] {
  return [
    '/', '/now', '/brain-log', '/books', '/talks', '/podcasts', '/projects', '/search', '/beliefs',
    ...brainLog.map((e) => `/brain-log/${e.slug}`),
    ...bookNotes.map((s) => `/books/${s}`),
  ]
}
