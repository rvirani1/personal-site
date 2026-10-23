import { groupBy, year, formatShort } from '../lib/format'

type Talk = { title: string; venue: string; date: string; url?: string; kind: string }

export function Talks({ talks }: { talks: Talk[] }) {
  return (
    <article className="page">
      <header className="page-head">
        <h1>Things I’ve said</h1>
        <p className="lede">Conference talks, meetups, and podcast appearances, going back to 2015.</p>
      </header>
      {groupBy(talks, (t) => year(t.date)).map(([y, items]) => (
        <section key={y} className="year-group">
          <h2 className="year">{y}</h2>
          <ul className="talks">
            {items.map((t) => (
              <li key={t.title + t.date}>
                <div className="talk-main">
                  {t.url ? (
                    <a href={t.url} target="_blank" rel="noopener noreferrer" className="talk-title">{t.title}</a>
                  ) : (
                    <span className="talk-title">{t.title}</span>
                  )}
                  <span className="talk-venue">
                    {t.kind === 'podcast' ? '🎙 ' : ''}
                    {t.venue}
                  </span>
                </div>
                <time className="entry-date" dateTime={t.date}>{formatShort(t.date)}</time>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </article>
  )
}
