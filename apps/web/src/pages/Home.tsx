import { brainLog } from 'virtual:content'
import site from '../../../../content/site.json'
import { formatDate } from '../lib/format'

const SECOND_BRAIN = [
  { href: '/brain-log', label: 'Brain log', note: 'Freeform thinking, out loud' },
  { href: '/books', label: 'Things I’ve read', note: 'Every book, with notes' },
  { href: '/talks', label: 'Things I’ve said', note: 'Talks and podcasts' },
  { href: '/beliefs', label: 'Things I believe', note: 'Ten Riaz-isms' },
  { href: '/podcasts', label: 'Podcasts I recommend', note: 'What’s in my ears' },
  { href: '/projects', label: 'Things I’m building', note: 'Projects and experiments' },
]

// Facts may link out; the JSON doesn't always include a url, so widen the type.
const facts: { emoji: string; text: string; url?: string }[] = site.facts

export function Home() {
  const recent = brainLog.filter((e) => !e.archive).slice(0, 3)
  const latest = recent.length ? recent : brainLog.slice(0, 3)
  return (
    <>
      <section className="hero">
        <img className="avatar" src="/riaz.webp" alt="Riaz Virani" width="112" height="112" fetchPriority="high" />
        <div>
          <h1>Hi, I’m Riaz.</h1>
          <p className="lede">{site.intro}</p>
          <ul className="facts">
            {facts.map((f) => (
              <li key={f.text}>
                <span aria-hidden="true">{f.emoji}</span>{' '}
                {f.url ? <a href={f.url} target="_blank" rel="noopener noreferrer">{f.text}</a> : f.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2 className="eyebrow">Now</h2>
          <a href="/now" className="more">More →</a>
        </div>
        <p className="now-line">{site.now.headline}</p>
      </section>

      <section className="section">
        <h2 className="eyebrow">My second brain</h2>
        <ul className="tiles">
          {SECOND_BRAIN.map((t) => (
            <li key={t.href}>
              <a href={t.href} className="tile">
                <span className="tile-label">{t.label}</span>
                <span className="tile-note">{t.note}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {latest.length > 0 && (
        <section className="section">
          <div className="section-head">
            <h2 className="eyebrow">Latest from the brain log</h2>
            <a href="/brain-log" className="more">All entries →</a>
          </div>
          <ul className="entries">
            {latest.map((e) => (
              <li key={e.slug}>
                <a href={`/brain-log/${e.slug}`} className="entry">
                  <span className="entry-title">{e.title}</span>
                  <time className="entry-date">{formatDate(e.date)}</time>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="section">
        <h2 className="eyebrow">Let’s connect</h2>
        <ul className="links">
          {site.links.map((l) => (
            <li key={l.label}>
              <a href={l.url} target={l.url.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{l.label}</a>
              <span className="muted"> {l.handle}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
