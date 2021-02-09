import styles from './BlogSearchLayout.module.css'

export function BlogSearchLayout({ children }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className={styles.blogInner}>
        {children}
      </div>
    </div>
  )
}
