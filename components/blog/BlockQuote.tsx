import { FunctionComponent } from 'react'

interface BlockQuoteProps {
  children: React.ReactNode
}

export const BlockQuote: FunctionComponent<BlockQuoteProps> = ({ children }) => (
  <blockquote cite="http://www.worldwildlife.org/who/index.html">
    <p>
      {children}
    </p>
  </blockquote>
)
