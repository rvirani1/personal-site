export function BlockQuote({ children }) {
  return (
    <blockquote cite="http://www.worldwildlife.org/who/index.html">
      <p>
        {children}
      </p>
    </blockquote>
  )
}
