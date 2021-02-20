import React from 'react'

export const ExternalLink = React.memo(({ href, text }) => (
  <a target="_blank" rel="noreferrer noopener" className="sharedLink" href={href}>
    {text}
  </a>
))
