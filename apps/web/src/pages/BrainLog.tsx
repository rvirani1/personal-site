import { brainLog } from 'virtual:content'
import { formatDate, formatShort, groupBy, year } from '../lib/format'

type Entry = (typeof brainLog)[number]

export function BrainLogIndex() {
  return (
    <article className="page">
      <header className="page-head">
        <h1>Brain log</h1>
        <p className="lede">
          Not quite a blog. A running log of what I’m thinking, written fast and unpolished, so I can come back to it
          and so my personal AI has something real to work with.
        </p>
      </header>
      {brainLog.length === 0 && <p className="muted">The first entry is on its way.</p>}
      {groupBy(brainLog, (e) => year(e.date)).map(([y, entries]) => (
        <section key={y} className="year-group">
          <h2 className="year">{y}</h2>
          <ul className="entries">
            {entries.map((e) => (
              <li key={e.slug}>
                <a href={`/brain-log/${e.slug}`} className="entry">
                  <span className="entry-title">{e.title}</span>
                  <time className="entry-date" dateTime={e.date}>{formatShort(e.date)}</time>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
      <p className="muted small">
        Subscribe with <a href="/feed.xml">RSS</a>.
      </p>
    </article>
  )
}

export function BrainLogEntry({ entry, doc }: { entry: Entry; doc: { meta: Record<string, any>; html: string } }) {
  const ai = doc.meta.ai as { summary?: string; threads?: string[] } | undefined
  return (
    <article className="page">
      <header className="page-head">
        <p className="crumb"><a href="/brain-log">← Brain log</a></p>
        <h1>{entry.title}</h1>
        <p className="muted">
          <time dateTime={entry.date}>{formatDate(entry.date)}</time> · {entry.minutes} min read
          {entry.archive && ' · from the archive'}
        </p>
        {entry.tags.length > 0 && (
          <ul className="tags">
            {entry.tags.map((t) => <li key={t}>{t}</li>)}
          </ul>
        )}
      </header>
      {ai && (
        <aside className="ai-note" aria-label="AI reflection">
          <p className="eyebrow">My AI’s take</p>
          {ai.summary && <p>{ai.summary}</p>}
          {ai.threads && ai.threads.length > 0 && (
            <ul>
              {ai.threads.map((t) => <li key={t}>{t}</li>)}
            </ul>
          )}
        </aside>
      )}
      <div className="prose" dangerouslySetInnerHTML={{ __html: doc.html }} />
    </article>
  )
}
