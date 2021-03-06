import { FunctionComponent } from 'react'

export const BlockQuote: FunctionComponent = ({ children }) => (
  <blockquote cite="http://www.worldwildlife.org/who/index.html">
    <p>
      {children}
    </p>
  </blockquote>
)
