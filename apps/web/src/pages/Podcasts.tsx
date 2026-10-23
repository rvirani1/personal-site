type Podcast = { name: string; url: string; blurb: string }

export function Podcasts({ podcasts }: { podcasts: Podcast[] }) {
  return (
    <article className="page">
      <header className="page-head">
        <h1>Podcasts I recommend</h1>
        <p className="lede">Long-form shows that actually do the homework.</p>
      </header>
      <ul className="cards">
        {podcasts.map((p) => (
          <li key={p.name} className="card">
            <h2><a href={p.url} target="_blank" rel="noopener noreferrer">{p.name}</a></h2>
            <p>{p.blurb}</p>
          </li>
        ))}
      </ul>
    </article>
  )
}
