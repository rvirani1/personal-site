import site from '../../../../content/site.json'
import { formatDate } from '../lib/format'

export function Now() {
  return (
    <article className="page">
      <header className="page-head">
        <h1>Now</h1>
        <p className="muted">Updated {formatDate(site.now.updated)} · from {site.location}</p>
      </header>
      <p className="lede">{site.now.headline}</p>
      <ul className="now-list">
        {site.now.items.map((i) => (
          <li key={i.label}>
            <h2>{i.label}</h2>
            <p>
              {i.text}
              {i.url && (
                <>
                  {' '}
                  <a href={i.url} target={i.url.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{i.linkText ?? 'Link'} →</a>
                </>
              )}
            </p>
          </li>
        ))}
      </ul>
      <p className="muted small">
        This is a <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer">now page</a>.
      </p>
    </article>
  )
}
