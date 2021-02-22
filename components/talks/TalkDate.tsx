import styles from './TalkDate.module.scss'

type Props = {
  date: string
}

export function TalkDate({ date }: Props) {
  return (
    <div className={styles.date}>
      {date}
    </div>
  )
}
