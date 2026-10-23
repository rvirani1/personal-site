export function Prose({ title, doc, children }: { title: string; doc: { html: string }; children?: React.ReactNode }) {
  return (
    <article className="page">
      <header className="page-head">
        <h1>{title}</h1>
        {children}
      </header>
      <div className="prose" dangerouslySetInnerHTML={{ __html: doc.html }} />
    </article>
  )
}
