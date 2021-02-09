import React from 'react'
import Link from 'next/link'
import { BlogTitle } from './BlogTitle'
import { BlogDate } from './BlogDate'
import { BlogPreview } from './BlogPreview'

export const BlogPost = React.memo(({
  titleText, date, path, previewText,
}) => (
  <div>
    <BlogTitle titleText={titleText} />
    <BlogDate date={date} />
    <BlogPreview previewText={previewText} />
    <Link href={path}>
      <a style={{ fontWeight: 700 }}>
        Read More →
      </a>
    </Link>
  </div>
))
