import styles from './TalkDate.module.scss'

export function TalkDate({ date }) {
  return (
    <div className={styles.date}>
      {date}
    </div>
  )
}
