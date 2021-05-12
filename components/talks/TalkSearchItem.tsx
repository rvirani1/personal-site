import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './TalkSearchItem.module.scss'
import { TalkTitle } from './TalkTitle'
import { TalkDate } from './TalkDate'
import { TalkPreview } from './TalkPreview'

type Props = {
  titleText: string,
  date: string,
  externalUrl: string,
  previewText: string,
  thumbnailImg: string
}

export const TalkSearchItem = React.memo(({
  titleText, date, externalUrl, previewText, thumbnailImg,
}: Props) => (
  <div style={{ marginTop: 50, marginBottom: 50 }}>
    <Link href={externalUrl}>
      <a target="_blank" rel="noreferrer noopener" style={{ display: 'flex' }} className={styles.linkInner}>
        <div className={styles.imageOuter}>
          <Image
            alt="Screenshot from video presentation"
            layout="fixed"
            src={thumbnailImg}
            width={300}
            height={200}
            className={styles.image}
          />
        </div>
        <div style={{ marginLeft: '1rem' }}>
          <TalkTitle titleText={titleText} />
          <TalkDate date={date} />
          <TalkPreview previewText={previewText} />
        </div>
      </a>
    </Link>
  </div>
))
