import React from 'react'
import Link from 'next/link'

export const LinkToSearch = React.memo(({ href }) => (
  <div style={{ marginTop: '2rem', fontWeight: 400 }}>
    <Link href={href}>
      <a>
        ⏎ All Articles
      </a>
    </Link>
  </div>
))

LinkToSearch.defaultProps = {
  href: '/blog-search/one',
}
