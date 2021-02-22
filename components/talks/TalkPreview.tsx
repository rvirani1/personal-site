import React from 'react'
import styles from './TalkPreview.module.css'

type Props = {
  previewText: string
}

export const TalkPreview = React.memo(({ previewText }: Props) => (
  <p className={styles.blogParagraph}>{previewText}</p>
))
