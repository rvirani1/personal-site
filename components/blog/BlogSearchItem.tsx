import React from 'react'
import Link from 'next/link'
import { BlogTitle } from './BlogTitle'
import { BlogDate } from './BlogDate'
import { BlogPreview } from './BlogPreview'

type Props = {
  titleText: string,
  date: string,
  path: string,
  previewText: string
}

export const BlogSearchItem = React.memo(({
  titleText, date, path, previewText,
}: Props) => (
  <div style={{ marginTop: 50, marginBottom: 50 }}>
    <Link href={path}>
      <a>
        <BlogTitle titleText={titleText} />
        <BlogDate date={date} />
        <BlogPreview previewText={previewText} />
        <div style={{ fontWeight: 700 }}>
          Read More →
        </div>
      </a>
    </Link>
  </div>
))
