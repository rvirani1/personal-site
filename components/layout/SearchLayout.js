import styles from './SearchLayout.module.css'

export function SearchLayout({ children }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className={styles.blogInner}>
        {children}
      </div>
    </div>
  )
}
