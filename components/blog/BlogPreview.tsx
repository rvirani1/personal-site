import React from 'react'
import styles from './BlogPreview.module.css'

type Props = {
  previewText: string
}

export const BlogPreview = React.memo(({ previewText }: Props) => (
  <p className={styles.blogParagraph}>{previewText}</p>
))
