import React from 'react'

type Props = {
  href: string,
  text: string
}

export const ExternalLink = React.memo(({ href, text }: Props) => (
  <a target="_blank" rel="noreferrer noopener" className="sharedLink" href={href}>
    {text}
  </a>
))
