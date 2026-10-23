import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from '../router'
import { search, tokenize, type SearchDoc } from '../lib/search'

let indexPromise: Promise<SearchDoc[]> | undefined
const loadIndex = () => (indexPromise ??= fetch('/search-index.json').then((r) => r.json()))

function Highlight({ text, tokens }: { text: string; tokens: string[] }) {
  if (!tokens.length) return <>{text}</>
  const re = new RegExp(`(${tokens.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi')
  return <>{text.split(re).map((part, i) => (i % 2 ? <mark key={i}>{part}</mark> : part))}</>
}

export function Search() {
  const { search: qs, navigate } = useRouter()
  const [query, setQuery] = useState(() => new URLSearchParams(qs).get('q') ?? '')
  const [docs, setDocs] = useState<SearchDoc[] | null>(null)
  const input = useRef<HTMLInputElement>(null)

  useEffect(() => {
    input.current?.focus()
    loadIndex().then(setDocs)
    // Prerendered HTML has no query; pick it up from the real URL after hydration.
    const q = new URLSearchParams(location.search).get('q')
    if (q) setQuery(q)
  }, [])

  const hits = useMemo(() => (docs ? search(docs, query) : []), [docs, query])
  const tokens = tokenize(query)

  const onChange = (q: string) => {
    setQuery(q)
    navigate(q ? `/search?q=${encodeURIComponent(q)}` : '/search', { replace: true })
  }

  return (
    <article className="page">
      <header className="page-head">
        <h1>Search</h1>
      </header>
      <form role="search" onSubmit={(e) => e.preventDefault()} className="search-form">
        <label htmlFor="search-input" className="sr-only">Search the site</label>
        <input
          id="search-input"
          ref={input}
          type="search"
          value={query}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Books, ideas, talks…"
          autoComplete="off"
          enterKeyHint="search"
        />
      </form>
      {query && docs && (
        <p className="muted small" aria-live="polite">
          {hits.length === 0 ? 'Nothing found. Try fewer words.' : `${hits.length}${hits.length === 30 ? '+' : ''} results`}
        </p>
      )}
      <ul className="results">
        {hits.map((h) => (
          <li key={h.url + h.title}>
            <a href={h.url} className="result">
              <span className="result-type">{h.type}</span>
              <span className="result-title"><Highlight text={h.title} tokens={tokens} /></span>
              {h.subtitle && <span className="result-sub">{h.subtitle}</span>}
              {h.snippet && <span className="result-snippet"><Highlight text={h.snippet} tokens={tokens} /></span>}
            </a>
          </li>
        ))}
      </ul>
      {!query && (
        <p className="muted">
          Try <button type="button" className="link" onClick={() => onChange('death')}>death</button>,{' '}
          <button type="button" className="link" onClick={() => onChange('habits')}>habits</button>, or{' '}
          <button type="button" className="link" onClick={() => onChange('react')}>react</button>.
        </p>
      )}
    </article>
  )
}
