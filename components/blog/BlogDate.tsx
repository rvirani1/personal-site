import styles from './BlogDate.module.scss'

type Props = {
  date: string
}

export function BlogDate({ date }: Props) {
  return (
    <div className={styles.date}>
      {date}
    </div>
  )
}
