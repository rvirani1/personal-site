import { HeartIcon } from '../icons/HeartIcon'
import styles from './HeroCopy.module.scss'

export function HeroCopy() {
  return (
    <div className={styles.wrapper}>
      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        <strong className={`${styles.firstWord} subtleShadow`}>Hi</strong>
        <span style={{ fontSize: '2rem', fontWeight: 700 }}>&nbsp;I&lsquo;m Riaz</span>
      </div>
      <div>
        <strong className={styles.andWord}>and</strong>
        <span className={styles.heroText}>
          &nbsp;I really like to&nbsp;
          <strong className={styles.keyword}>code</strong>
        </span>
      </div>
      <div>
        <strong className={styles.andWord}>and</strong>
        <span className={styles.heroText}>
          &nbsp;I live in&nbsp;
          <strong className={styles.keyword}>Toronto</strong>
        </span>
      </div>
      <div>
        <strong className={styles.andWord}>and</strong>
        <span className={styles.heroText}>
          &nbsp;I have a sleepy 16lbs&nbsp;
          <strong className={styles.keyword}>Dachsund</strong>
          &nbsp;named Chuck
        </span>

      </div>
      <div>
        <strong className={styles.andWord}>and</strong>
        <span className={styles.heroText}>
          &nbsp;I am&nbsp;
          <strong className={styles.keyword}>married</strong>
          &nbsp;to an amazingly talented web designer and developer, a.k.a my wife.
          <HeartIcon />
          &nbsp;Ya Honey
        </span>
      </div>
    </div>
  )
}
