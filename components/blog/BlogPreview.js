import React from 'react'
import styles from './BlogPreview.module.css'

export const BlogPreview = React.memo(({ previewText }) => (
  <p className={styles.blogParagraph}>{previewText}</p>
))
