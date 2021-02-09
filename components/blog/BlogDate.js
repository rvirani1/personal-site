import styles from './BlogDate.module.scss'

export function BlogDate({ date }) {
  return (
    <div className={styles.date}>
      {date}
    </div>
  )
}
