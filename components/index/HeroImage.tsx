import Image from 'next/image'
import styles from './HeroImage.module.scss'

export function HeroImage() {
  return (
    <div className={styles.heroWrapper}>
      <Image
        alt="Big Home image"
        layout="fixed"
        src="/homepage.png"
        width={250}
        height={342}
        className={styles.heroImage}
      />
    </div>
  )
}
