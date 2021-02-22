import React from 'react'
import styles from './TalkPreview.module.css'

export const TalkPreview = React.memo(({ previewText }) => (
  <p className={styles.blogParagraph}>{previewText}</p>
))
