import { useState } from 'react'

type Book = { title: string; author: string; url?: string; slug?: string; note?: string }
type Shelf = { genre: string; tier: string; emoji: string; books: Book[] }
type Doc = { meta: Record<string, any>; html: string }

export function Books({ data }: { data: { shelves: Shelf[] } }) {
  const [genre, setGenre] = useState<'All' | string>('All')
  const [notesOnly, setNotesOnly] = useState(false)
  const genres = ['All', ...new Set(data.shelves.map((s) => s.genre))]
  const total = data.shelves.reduce((n, s) => n + s.books.length, 0)
  const withNotes = data.shelves.reduce((n, s) => n + s.books.filter((b) => b.slug).length, 0)

  const shelves = data.shelves
    .filter((s) => genre === 'All' || s.genre === genre)
    .map((s) => ({ ...s, books: s.books.filter((b) => !notesOnly || b.slug) }))
    .filter((s) => s.books.length > 0)

  return (
    <article className="page">
      <header className="page-head">
        <h1>Things I’ve read</h1>
        <p className="lede">
          {total} books, sorted by how much they moved me. For every non-fiction book a handful of ideas stick. The{' '}
          {withNotes} with notes hold those takeaways and the quotes worth keeping.
        </p>
      </header>

      <div className="filters" role="group" aria-label="Filter books">
        {genres.map((g) => (
          <button key={g} type="button" className="chip" aria-pressed={genre === g} onClick={() => setGenre(g)}>
            {g}
          </button>
        ))}
        <button type="button" className="chip" aria-pressed={notesOnly} onClick={() => setNotesOnly((v) => !v)}>
          With notes
        </button>
      </div>

      {shelves.map((s) => (
        <section key={s.genre + s.tier} className="shelf">
          <h2 className="shelf-title">
            <span aria-hidden="true">{s.emoji}</span> {s.tier}
            <span className="shelf-genre">{s.genre}</span>
          </h2>
          <ul className="book-list">
            {s.books.map((b) => (
              <li key={b.title + b.author}>
                {b.slug ? (
                  <a href={`/books/${b.slug}`} className="book has-notes">
                    <span className="book-title">{b.title}</span>
                    <span className="book-author">{b.author}</span>
                    <span className="badge">Notes</span>
                  </a>
                ) : (
                  <a href={b.url} className="book" target="_blank" rel="noopener noreferrer">
                    <span className="book-title">{b.title}</span>
                    <span className="book-author">
                      {b.author}
                      {b.note && <> · {b.note}</>}
                    </span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </article>
  )
}

export function BookNote({ doc }: { doc: Doc }) {
  const m = doc.meta
  return (
    <article className="page">
      <p className="crumb"><a href="/books">← Books</a></p>
      <header className="page-head book-head">
        {m.cover && <img className="cover" src={m.cover} alt="" width="120" height="180" />}
        <div>
          <h1>{m.title}</h1>
          <p className="muted">
            {m.author}
            {m.tier && <> · {m.tier}</>}
          </p>
          {m.url && (
            <p className="small">
              <a href={m.url} target="_blank" rel="noopener noreferrer">Get the book →</a>
            </p>
          )}
        </div>
      </header>
      <div className="prose book-notes" dangerouslySetInnerHTML={{ __html: doc.html }} />
    </article>
  )
}
