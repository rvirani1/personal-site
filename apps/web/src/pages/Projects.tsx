type Project = { name: string; url?: string; status: string; description: string; tags?: string[] }

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <article className="page">
      <header className="page-head">
        <h1>Things I’m building</h1>
        <p className="lede">Projects, experiments, and half-finished ideas. This is where I try things.</p>
      </header>
      <ul className="cards">
        {projects.map((p) => (
          <li key={p.name} className="card">
            <p className="eyebrow">{p.status}</p>
            <h2>{p.url ? <a href={p.url} target={p.url.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{p.name}</a> : p.name}</h2>
            <p>{p.description}</p>
            {p.tags && (
              <ul className="tags">
                {p.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </article>
  )
}
